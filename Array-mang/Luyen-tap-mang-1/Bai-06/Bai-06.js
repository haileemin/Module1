// Bài 6- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V. Chương trình tìm xem V có nằm trong mảng số nguyên không? Nếu V thuộc mảng số nguyên thì in ra "V is in the array" còn lại in ra "V is not in the array".


let arr = [1, 3, 5, 69, 96, 15, 47, 35, 61, 20];
let n = parseInt(prompt("Nhập vào một số nguyên bất kì: "));
// // let index = arr.indexOf(n);
// if(index != -1) {
//     console.log("Số bạn vừa nhập có trong mảng");
// } else {
//     console.log("Số bạn nhập không có trong mảng");
// }
let p = false; 
for (i = 0; i <= arr.length -1; i++) {
    if(arr[i] === n){
        p = true
    }
}
if(p) {
    console.log("Số bạn vừa nhập có trong mảng");

} else{
    console.log("Số bạn nhập không có trong mảng");
}
    