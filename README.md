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

## Thư mục assets

| Nội dung | Vị trí |
| --- | --- |
| Ảnh áo | `assets/anhao/` |
| Ảnh quần | `assets/anhquan/` |
| Tên, giá, mã, ảnh và link mua áo | `assets/san-pham/ao.js` |
| Tên, giá, mã, ảnh và link mua quần | `assets/san-pham/quan.js` |
| Bố cục, màu sắc, phông chữ, ảnh bìa và mã giao diện | `assets/giao-dien/` |

## Thêm một sản phẩm

1. Chép ảnh vào `assets/anhao/` nếu là áo, hoặc `assets/anhquan/` nếu là quần.
2. Mở `ao.js` hoặc `quan.js` trong `assets/san-pham/`. Sao chép một mục từ dấu `{` đến dấu `}` và thêm vào danh sách trước dòng `];`. Ngăn cách các mục bằng dấu phẩy.
3. Sửa `code` thành mã mới, ví dụ `A04` hoặc `Q04`. Dùng mã riêng cho từng sản phẩm. Điền giá bằng số, ví dụ `259000` cho 259.000 đ.
4. Trong `image`, điền tên ảnh kèm đuôi, ví dụ `"a04.jpg"`. Viết đúng cả chữ hoa, chữ thường theo tên tệp. Website tự lấy ảnh từ thư mục tương ứng với danh mục.
5. Trong `purchaseUrl`, dán link chia sẻ đầy đủ của đúng sản phẩm trên Shopee hoặc TikTok Shop. Khi trường này để trống, khách sẽ thấy trang chi tiết sản phẩm.

Ví dụ thêm một áo vào `ao.js` sau khi chép ảnh `a04.jpg` vào `assets/anhao/`:

```js
{
  code: "A04",
  name: "Áo thun đen",
  purchaseUrl: "",
  price: 259000,
  color: "Đen",
  material: "Cotton",
  sizes: ["S", "M", "L"],
  image: "a04.jpg",
  description: "Áo thun cổ tròn, dáng suông."
}
```

Để sửa link của sản phẩm đã có, tìm `code` trong file của đúng danh mục rồi sửa `purchaseUrl`. Mỗi sản phẩm dùng một link mua.

## Chỉnh giao diện

- Sửa màu sắc và bố cục trong `assets/giao-dien/styles.css`.
- Đổi ảnh bìa bằng cách thay `assets/giao-dien/hero.webp` hoặc sửa đường dẫn ảnh trong `index.html`.
- Đổi tên hiển thị của shop trong các trang HTML và phần đầu, chân trang trong `assets/giao-dien/store.js`.
