// Bài tập 10

/**
 * Giải thích code
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Tạo một mảng chứa các số được được khách hàng nhập vào (numArray10)
 * B3 Tạo một function add các số vào 
 * B4 Tạo một function để đếm số nguyên cho mảng
 * Trong function:
 * Tạo biến countAm để đếm số âm cho mảng
 * Tạo biến countDuong để đếm số dương cho mảng
 * ** Tạo một vòng lặp chạy các giá trị từ đầu mảng đến cuối mảng
 * ** Xét điều kiện các giá trị trong mảng:
 * Th1: numArray10[i] < 0 => countAm +=1 
 * Th2: numArray10[i] > 0 => countDuong +=1
 * 
 * B5 So sánh countAm và countDuong
 * Th1: countAm > countDuong => Số âm > Số dương
 * Th2: countAm < countDuong => Số âm < Số dương
 * Th3: countAm = countDuong => Số âm = Số dương
 * B6 Hiển thị UI kết quả so sánh bằng event click button
 */



// Tạo function add number
var numArray10 = [];
function addNumber10(){
    var num = Number(document.getElementById('inputNum10').value);
    numArray10.push(num);
    // console.log(numArray10)
}
// Tạo function so sánh

function soSanhAmDuong() {
    var countAm = 0;
    var countDuong = 0;
    // Vòng lặp cho mảng để xét các trường hợp :
    for (var i = 0; i < numArray10.length; i++) {
        if (numArray10[i] < 0) {
            countAm +=1
        }else if (numArray10[i] > 0) {
            countDuong +=1
        }
    }
    // Xét các trường hợp của countAm và countDuong
    if(countAm > countDuong){
        document.getElementById('txtResult_Bt10').innerHTML = "Số âm > Số dương"
    }else if(countAm < countDuong){
        document.getElementById('txtResult_Bt10').innerHTML = "Số âm < Số dương"
    }else{
        document.getElementById('txtResult_Bt10').innerHTML = "Số âm = Số dương"
    }
}