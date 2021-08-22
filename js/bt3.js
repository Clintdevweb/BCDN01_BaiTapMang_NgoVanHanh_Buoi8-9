// Bài tập 3
/**
 * Giải thích code
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Tạo một mảng chứa các số được được khách hàng nhập vào (numArray3)
 * B3 Tạo một function add các số vào 
 * B3 Tạo một function xét giá trị nhỏ nhất của dãy
 * B4 Tạo một biến  min có giá trị là giá trị đầu tiền trong dãy (ta hiểu đây tạm thời là giá trị nhỏ nhất min =  numArray[0])
 * B5 Tạo vòng lặp trong function
 * Trong vòng lặp xét điều kiện số nhỏ nhất ( ta mang các giá trị trong mảng đi so sánh với min nếu giá trị nào nhỏ hơn min ta gắn min bằng giá trị đó)
 * Nếu min (numArray[i] < min) thì min = numArray[i]
 * Thực hiện hết xong vòng lặp 
 * B6 Hiển thị UI kết quả của sum bằng event click button
 */

// Tạo function add number
var numArray3 = [];
function addNumber3(){
    var num = Number(document.getElementById('inputNum3').value);
    numArray3.push(num);
    
}

// Tạo function đếm số dương cho mảng sau khi nhận được các số được nhập từ khách hàng

function min3(){
    var min = numArray3[0];
    for (var i = 1; i < numArray3.length; i++ ){
        if(numArray3[i] < min){
            min = numArray3[i]
        }   
    }
    
    document.getElementById('txtResult_Bt3').innerHTML = 'Số nhỏ nhất là: ' + min;
}