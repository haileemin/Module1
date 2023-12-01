// Bài 5- Viết chương trình đếm số nguyên âm trong một chuỗi

let arr = [13,-25,2,-6,24,-3,1,-4,10,9];
let n = 0;
for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] < 0) {
        n += 1;
    }
}
console.log("Số phần tử âm trong mảng là: " + n);
