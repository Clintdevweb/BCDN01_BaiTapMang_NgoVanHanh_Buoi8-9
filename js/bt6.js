// Bài tập 6

/**
 * Giải thích code
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Tạo một mảng chứa các số được được khách hàng nhập vào (numArray6)
 * B3 Tạo một function add các số vào 
 * B4 Tạo biến viTri1, viTri2
 * B5 Tạo một biến tạm (temp) có giá trị -- var temp = numArray[viTri1]--giá trị ban đầu
 * Khi đổi vị trí cho nhau thì hiểu chính là đổi giá trị numArray[viTri1] với numArray[viTri2]. Lúc này numArray[viTri1] = numArray[viTri2].
 * numArray[viTri2] = temp (giá trị ban đầu của numArray[viTri1] )
 * 
 * B6 Hiển thị UI kết quả của numArray6 bằng event click button
 */

// Tạo function add number
var numArray6 = [];
function addNumber6(){
    var num = Number(document.getElementById('inputNum6').value);
    numArray6.push(num);
    // console.log(numArray6)
}

function doiCho() {
    var viTri1 = Number(document.getElementById('inputViTri1').value)
    var viTri2 = Number(document.getElementById('inputViTri2').value)

    // tạo biến tạm
    var temp = numArray6[viTri1];

    numArray6[viTri1] = numArray6[viTri2]

    numArray6[viTri2] = temp;

    document.getElementById('txtResult_Bt6').innerHTML = "Mảng đã được đổi chỗ: " + numArray6;

}