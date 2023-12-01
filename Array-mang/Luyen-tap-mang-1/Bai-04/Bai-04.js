// Bài 4- Viết chương trình khởi tạo/nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.

let arr = [3, 5, 7, 11, 9, 35, 88]

// console.log(arr.reverse());

// viết lại hàm bằng code
let temp;
for(i = 0, j = arr.length - 1; i < j; i++, j--) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
} console.log(arr);

// duyệt ngược
 let num = [];
 for(let i = arr.length - 1; i >= 0; i--) {
    num.push(arr[i]);
 }