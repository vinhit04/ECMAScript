// Bài tập 1: Chuyển đổi hàm: Chuyển các hàm sau thành arrow functions:
// Function 1
function multiply(a, b) {
  return a * b;
}
// Arrow function version
const multiply = (a, b) => a * b;
// Function 2
function isPositive(number) {
  return number >= 0;
}
// Arrow function version
const isPositive = (number) => number >= 0;
// Function 3
function getRandomNumber() {
  return Math.random();
}
// Arrow function version
const getRandomNumber = () => Math.random();
// Function 4
document.addEventListener("click", function () {
  console.log("Clicked!");
});
// Arrow function version
document.addEventListener("click", () => {
  console.log("Clicked!");
});



// Bài tập 2: Sử dụng Default Parameters
function createUser(name, age, isAdmin) {
  if (name === undefined) name = "Anonymous";
  if (age === undefined) age = 18;
  if (isAdmin === undefined) isAdmin = false;

  return {
    name: name,
    age: age,
    isAdmin: isAdmin,
  };
}
// sử dụng Default Parameters
function createUser(name = "Anonymous", age = 18, isAdmin = false) {
  return {
    name: name,
    age: age,
    isAdmin: isAdmin,
  };
}


// Bài tập 3: Rest và Spread
// Viết các hàm sau:
// Hàm mergeArrays nhận nhiều mảng và trả về mảng hợp nhất
function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
// Hàm sumAll tính tổng tất cả tham số truyền vào
function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
// Hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định
function createProduct(name = "Unnamed", price = 0, category = "General") {
  return {
    name: name,
    price: price,
    category: category,
  };
}



// Bài tập 4: Ứng dụng thực tế
// Tạo hàm shoppingCart với:
// Tham số đầu tiên là tên khách hàng
// Các tham số tiếp theo là các sản phẩm
// Sử dụng rest parameters để thu thập sản phẩm
// Trả về object chứa thông tin đơn hàng
function shoppingCart(customerName, ...products) {
  const totalAmount = products.reduce((total, product) => total + product.price, 0);
  return {
    customerName: customerName,
    products: products,
    totalAmount: totalAmount,
  };
}
