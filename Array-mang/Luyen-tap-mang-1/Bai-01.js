// Bài 1- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

let arr = [13,25,2,6,24,3,1,4,10,9];
for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 10)
    console.log("các số lớn hơn hoặc bằng 10 là: " + arr[i])
}
