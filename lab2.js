// var function scoped
// function varExample() {
//   if (true) {
//     const x = 10;
//   }
//   console.log(x);
// }
// varExample();


// Bai 1 : sua loi scoped
// Sửa đoạn code sau để hoạt động đúng
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    // console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2
// sua lai nhu sau :
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    // console.log(i);
  }, 100);
}


// Bai 2 : su dung const dung cach 
// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
const student = {
  name: "ThuyTien",
  age: 20,
};

// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student

// sua lai nhu sau : 
student.grade = "A";
student.age = 21;
// console.log(student);


// Bai 1 : tao email bang template
// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};
// Tạo template string cho email
const emailTemplate = `
  <div>
    <h1>Xin chào ${user.firstName} ${user.lastName},</h1>
    <p>Cảm ơn bạn đã đặt hàng sản phẩm ${user.product}.</p>
    <p>Thông tin đơn hàng:</p>
    <ul>
      <li>Giá: ${user.price} VND</li>
      <li>Ngày đặt hàng: ${user.orderDate}</li>
    </ul>
  </div>
`; // viet template o day
console.log(emailTemplate);


// Bai 2 : Tao HTML template
// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};
// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);
// Tạo template HTML
const productCard = `
  <div class="product-card">
    <h2>${product.name}</h2>
    <p>Price: ${finalPrice} VND</p>
    <p>In Stock: ${product.inStock ? "Yes" : "No"}</p>
  </div>
`; // viet template o day
console.log(productCard);
