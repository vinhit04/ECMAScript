// Bài 1 : sửa scope
// Sửa đoạn code sau để hoạt động đúng
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2

// sửa đúng lại đoạn code như sau:
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Sẽ in ra 0,1,2
  }, 100);
}

// Bài 2 : Sử dụng Const đúng cách 
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

// Viết code ở đây:
student.grade = "A";
student.age = 21;
console.log(student);
