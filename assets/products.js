// Điền link HTTPS đến từng sản phẩm trên Shopee hoặc TikTok Shop vào purchaseUrl.
const PRODUCTS = [
  {
    code: "A01",
    category: "ao",
    name: "Áo thun dáng rộng",
    purchaseUrl: "",
    price: 249000,
    color: "Trắng ngà",
    material: "Cotton",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/a01.webp",
    description: "Áo thun cổ tròn, vai rủ và thân rộng. Màu trắng ngà dễ phối với quần jeans hoặc quần ống rộng."
  },
  {
    code: "Q01",
    category: "quan",
    name: "Quần âu ống rộng",
    purchaseUrl: "",
    price: 429000,
    color: "Đen",
    material: "Vải tuytsi",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/q01.webp",
    description: "Quần âu cạp cao, ống rộng và có ly trước. Phù hợp để phối với áo thun sơ vin hoặc sơ mi."
  },
  {
    code: "A02",
    category: "ao",
    name: "Sơ mi dáng rộng",
    purchaseUrl: "",
    price: 349000,
    color: "Xanh rêu",
    material: "Cotton pha linen",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/a02.webp",
    description: "Sơ mi tay dài với dáng suông và cổ bẻ. Có thể mặc riêng hoặc khoác ngoài áo thun."
  },
  {
    code: "Q02",
    category: "quan",
    name: "Quần jeans ống đứng",
    purchaseUrl: "",
    price: 449000,
    color: "Xanh nhạt",
    material: "Denim cotton",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/q02.webp",
    description: "Quần denim xanh nhạt, ống đứng từ đùi đến gấu. Dễ phối với áo thun trơn và giày vải."
  },
  {
    code: "A03",
    category: "ao",
    name: "Áo khoác hoodie khóa kéo",
    purchaseUrl: "",
    price: 399000,
    color: "Xám than",
    material: "Nỉ cotton pha",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/a03.webp",
    description: "Áo khoác nỉ có mũ, khóa kéo trước và hai túi. Dáng rộng để mặc thêm một lớp áo bên trong."
  },
  {
    code: "Q03",
    category: "quan",
    name: "Quần short dáng suông",
    purchaseUrl: "",
    price: 289000,
    color: "Be",
    material: "Cotton twill",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/q03.webp",
    description: "Quần short dáng suông ngang gối. Gam be trung tính dễ phối với sơ mi hoặc áo thun."
  }
];
