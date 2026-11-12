"use strict";

const CATEGORIES = { all: "Tất cả", quan: "Quần", ao: "Áo" };
const productsByCode = new Map(PRODUCTS.map(product => [product.code, product]));
const currency = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0
});

function normalizeCode(code) {
  return (code || "").trim().toUpperCase().replace(/[\s-]/g, "");
}

function productUrl(code) {
  return "san-pham.html?ma=" + encodeURIComponent(code);
}

function categoryUrl(category) {
  return category === "all" ? "index.html#danh-muc" : "index.html?loai=" + category + "#danh-muc";
}

function purchaseUrl(product) {
  if (!product.purchaseUrl) return null;

  try {
    const url = new URL(product.purchaseUrl);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

function renderChrome() {
  document.querySelector("#site-header").innerHTML = `
    <div class="shell header-inner">
      <a class="wordmark" href="index.html" aria-label="Nếp Studio, trang chủ">nếp<span>.</span></a>
      <nav class="main-nav" aria-label="Danh mục chính">
        <a href="index.html?loai=quan#danh-muc">Quần</a>
        <a href="index.html?loai=ao#danh-muc">Áo</a>
      </nav>
    </div>`;

  document.querySelector("#site-footer").innerHTML = `
    <div class="shell footer-inner">
      <a class="wordmark" href="index.html" aria-label="Nếp Studio, trang chủ">nếp<span>.</span></a>
      <p>Nếp Studio</p>
      <a class="footer-link" href="index.html#danh-muc">Xem sản phẩm <span class="arrow-up" aria-hidden="true"></span></a>
    </div>`;
}

function initCatalog(params) {
  const requested = params.get("loai");
  const category = Object.hasOwn(CATEGORIES, requested) ? requested : "all";
  const input = document.querySelector("#search");
  const list = document.querySelector("#products");
  const template = document.querySelector("#product-card");
  input.value = (params.get("ma") || "").slice(0, input.maxLength);
  document.querySelector('[data-filter="' + category + '"]').setAttribute("aria-current", "true");

  function renderProducts() {
    const code = normalizeCode(input.value);
    const visible = PRODUCTS.filter(product =>
      (category === "all" || product.category === category) &&
      normalizeCode(product.code).includes(code)
    );

    list.replaceChildren(...visible.map((product, index) => {
      const card = template.content.cloneNode(true);
      card.querySelector("a").href = purchaseUrl(product) || productUrl(product.code);
      card.querySelector("h3").textContent = product.name;
      card.querySelector(".product-code").textContent = product.code;
      card.querySelector(".product-price").textContent = currency.format(product.price);
      const photo = card.querySelector("img");
      photo.src = product.image;
      if (index >= 4) photo.loading = "lazy";
      return card;
    }));

    document.querySelector("#result-count").textContent = visible.length + " sản phẩm";
    document.querySelector("#no-results").hidden = visible.length !== 0;
  }

  function updateSearch() {
    const url = new URL(location.href);
    const code = input.value.trim();
    if (code) url.searchParams.set("ma", code);
    else url.searchParams.delete("ma");
    history.replaceState(null, "", url);
    renderProducts();
  }

  input.addEventListener("input", updateSearch);
  input.form.addEventListener("submit", event => {
    event.preventDefault();
    updateSearch();
  });
  renderProducts();
}

function initProduct(params) {
  const product = productsByCode.get(normalizeCode(params.get("ma")));
  if (!product) {
    document.querySelector("#product-missing").hidden = false;
    return;
  }

  document.title = product.name + " | Nếp Studio";
  const category = document.querySelector("#breadcrumb-category");
  const categoryLink = category.querySelector("a");
  categoryLink.href = categoryUrl(product.category);
  categoryLink.textContent = CATEGORIES[product.category];
  category.hidden = false;

  const breadcrumbCode = document.querySelector("#breadcrumb-code");
  breadcrumbCode.querySelector("[aria-current]").textContent = product.code;
  breadcrumbCode.hidden = false;

  const photo = document.querySelector(".detail-photo img");
  photo.src = product.image;
  photo.alt = product.name + " màu " + product.color.toLowerCase();
  document.querySelector("#product-name").textContent = product.name;
  document.querySelector("#product-code").textContent = product.code;
  document.querySelector("#product-price").textContent = currency.format(product.price);
  document.querySelector("#product-description").textContent = product.description;
  document.querySelector("#product-color").textContent = product.color;
  document.querySelector("#product-material").textContent = product.material;

  document.querySelector("#product-sizes").textContent = product.sizes.join(", ");

  const storeUrl = purchaseUrl(product);
  if (storeUrl) {
    const storeLink = document.querySelector("#store-link");
    storeLink.href = storeUrl;
    storeLink.hidden = false;
  }

  document.querySelector("#product-detail").hidden = false;
}

const pages = { catalog: initCatalog, product: initProduct };
renderChrome();
pages[document.body.dataset.page](new URLSearchParams(location.search));
