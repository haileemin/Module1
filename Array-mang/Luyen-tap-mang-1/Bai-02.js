// Bài 2- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau. Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.

let arr = [13,25,2,6,24,3,1,4,10,9];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
    max = arr[i];
    }
} console.log(max);