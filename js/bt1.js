/**
 * Giải thích code
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Tạo một mảng chứa các số được được khách hàng nhập vào (numArray1)
 * B3 Tạo một function add các số vào 
 * B3 Tạo một function tinh tổng
 * B4 Tạo một biến sum = 0
 * B5 Tạo vòng lặp trong function
 * Trong vòng lặp xét điều kiện số chắn
 * Nếu numArray1[i] (numArray1[i] > 0) là số dương thì sum += numArray1[i]
 * Thực hiện hết xong vòng lặp 
 * B6 Hiển thị UI kết quả của sum bằng event click button
 */
// Tạo function add number
var numArray1 = [];
function addNumber1(){
    var num = Number(document.getElementById('inputNum1').value);
    numArray1.push(num);
    
}

// Tạo function tính tổng cho mảng sau khi nhận được các số được nhập từ khách hàng

function calSum(){
    var sum = 0;
    for (var i = 0; i < numArray1.length; i++ ){
        if(numArray1[i] > 0){
            sum += numArray1[i];
        }   
    }
    document.getElementById('txtResult1').innerHTML = "Tổng số dương: " + sum;
}