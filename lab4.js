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


// Bài 1: Viết lại callback hell thành async/await


// Viết lại hàm này sử dụng async/await
function processOrder(orderId, callback) {
  getOrder(orderId, (order) => {
    getUser(order.userId, (user) => {
      getProducts(order.productIds, (products) => {
        callback({ order, user, products });
      });
    });
  });
}
// Giải pháp sử dụng async/await
async function processOrderAsync(orderId) {
    const order = await getOrder(orderId);
    const user = await getUser(order.userId);
    const products = await getProducts(order.productIds);
    return { order, user, products };
}
console.log(processOrderAsync(123).then((data) => console.log(data)));



// Bài 2: Xử lý lỗi với async/await
async function safeApiCall(apiFunction, ...args) {
  // Your code here
    try {
        const result = await apiFunction(...args);
        return result;
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
}
safeApiCall(fetch, "/api/data")
  .then((response) => console.log("Data fetched:", response))
  .catch((error) => console.log("Error occurred:", error));