// Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng
function getFirstLast(array) {
    if (array.length === 0) return [];
    return [array[0], array[array.length - 1]];
    // Your code here
}
console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]




// Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng
function swapElements(arr) {
    if (arr.length < 4) return arr;
    const temp = arr[1];
    arr[1] = arr[3];
    arr[3] = temp;
    return arr;
}
console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]




// Bài 1: Viết hàm delay trả về Promise
function delay(ms) {
  // Your code here
    return new Promise((resolve) => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("2 seconds passed"));



// Bài 2: Viết hàm fetchMultipleData
function fetchMultipleData(urls) {
  // Your code here
    const fetchPromises = urls.map((url) => fetch(url).then((response) => response.json()));
    return Promise.all(fetchPromises);
}
fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
  console.log(users)
);
