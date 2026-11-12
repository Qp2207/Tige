# Nếp Studio

Website mẫu bán quần áo bằng HTML, CSS và JavaScript. Khách có thể xem danh mục **Quần** hoặc **Áo**, tìm theo mã như `A01` hay `Q01`, bấm vào sản phẩm để mở nơi bán trên Shopee hoặc TikTok Shop. Website không yêu cầu tài khoản.

## Chạy trên máy

Mở thư mục chứa `index.html` trong VS Code và dùng Live Server, hoặc chạy lệnh sau trong thư mục đó nếu đã có Python:

```bash
python -m http.server 8000
```

Mở [http://localhost:8000](http://localhost:8000).

## Đưa lên GitHub Pages

1. Tạo một repository mới trên GitHub. Với GitHub Free, chọn **Public** để dùng Pages.
2. Giải nén và đưa **nội dung** của thư mục dự án lên repository. Đặt `index.html`, `san-pham.html` và thư mục `assets/` ở gốc repository.
3. Vào **Settings → Pages**. Trong **Build and deployment**, chọn **Deploy from a branch**, nhánh **main**, thư mục **/(root)**, rồi bấm **Save**.
4. Khi GitHub hoàn tất triển khai, lấy đường dẫn hiển thị trong **Settings → Pages**.

Nếu dùng Git từ dòng lệnh, mở terminal trong thư mục đã giải nén và thay `TEN_USER/TEN_REPO` bằng tên thật của tài khoản và repository trống:

```bash
git init
git add .
git commit -m "Tao website Nep Studio"
git branch -M main
git remote add origin https://github.com/TEN_USER/TEN_REPO.git
git push -u origin main
```

[Hướng dẫn cấu hình GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Thay dữ liệu mẫu

- Chỉnh tên, giá bằng VND, mô tả, màu, chất liệu và cỡ trong `assets/products.js`. Dùng mã riêng cho từng mẫu và đặt `category` là `ao` hoặc `quan`. Giữ mã cũ nếu đã gửi liên kết sản phẩm cho khách.
- Đặt ảnh thật vào `assets/` rồi chỉnh trường `image` cho từng sản phẩm. Ảnh banner mẫu là `assets/hero.webp`.
- Dán link chia sẻ đầy đủ, bắt đầu bằng `https://`, của đúng sản phẩm trên Shopee hoặc TikTok Shop vào trường `purchaseUrl` trong `assets/products.js`. Ví dụ, điền link áo A01 vào trường `purchaseUrl` của mục có `code: "A01"`. Khách bấm vào ảnh hoặc tên sẽ mở thẳng nơi bán. Nếu trường này để trống, khách sẽ thấy trang chi tiết mẫu. Đặt hàng và thanh toán diễn ra trên sàn.
- Có thể đổi tên và thông tin thương hiệu ở các trang HTML và phần đầu/chân trang trong `assets/store.js`.
