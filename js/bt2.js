// Bài tập 2
/**
 * Giải thích code
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Tạo một mảng chứa các số được được khách hàng nhập vào (numArray2)
 * B3 Tạo một function add các số vào 
 * B3 Tạo một function đếm số dương
 * B4 Tạo một biến cal = 0
 * B5 Tạo vòng lặp trong function
 * Trong vòng lặp xét điều kiện số chắn
 * Nếu numArray2[i] (numArray2[i] > 0) là số dương thì count +=1 / count++
 * Thực hiện hết xong vòng lặp 
 * B6 Hiển thị UI kết quả của sum bằng event click button
 */

// Tạo function add number
var numArray2 = [];
function addNumber2(){
    var num = Number(document.getElementById('inputNum2').value);
    numArray2.push(num);
    
}

// Tạo function đếm số dương cho mảng sau khi nhận được các số được nhập từ khách hàng

function count2(){
    var count = 0;
    for (var i = 0; i < numArray2.length; i++ ){
        if(numArray2[i] > 0){
            count++
        }   
    }
    // console.log(count)
    document.getElementById('txtResulBt2').innerHTML = 'Số dương: ' + count
}