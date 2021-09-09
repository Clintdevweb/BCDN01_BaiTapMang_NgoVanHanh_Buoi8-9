// Bài tập 5
/**
 * Giải thích code
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Tạo một mảng chứa các số được được khách hàng nhập vào (numArray5)
 * B3 Tạo một function add các số vào 
 * B4 Tạo một function tìm số chẵn cuối cùng
 * B5 Tạo một biến chanCuoi (var chanCuoi = 0)
 * B6 Tạo vòng lặp trong function
 * Trong vòng lặp xét điều kiện sồ chẵn (numArray[i]%2 === 0) => chanCuoi = numArray[i]
 * Vì vòng lặp chạy từ (i=0) tịnh tiến (i++) đến hết mảng nên số chẵn cuối cùng của mảng chính là giá trị cuối cùng của vòng lặp thỏa mản điều kiện là số chẵn (numArray[i]%2 === 0)
 * B7 Hiển thị UI kết quả của sum bằng event click button
 */

// Tạo function add number
var numArray5 = [];
function addNumber5(){
    var num = Number(document.getElementById('inputNum5').value);
    numArray5.push(num);
    
}
// Function tìm chẵn cuối
function timChanCuoi(){
    var chanCuoi = 0;
    for (var i = 0; i < numArray5.length; i++){
        if(numArray5[i] % 2===0){
            chanCuoi= numArray5[i]
        }
    }
    document.getElementById('txtResult_Bt5').innerHTML = "Số chẵn cuối cùng là: " + chanCuoi;
}
