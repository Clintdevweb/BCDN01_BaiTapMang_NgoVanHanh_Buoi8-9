// Bài tập 9

/**
 * Giải thích code
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Tạo một mảng chứa các số được được khách hàng nhập vào (numArray9)
 * B3 Tạo một function add các số vào 
 * B4 Tạo một function để đếm số nguyên cho mảng
 * Trong function:
 * Tạo biến count để đếm số nguyên cho mảng
 * ** Tạo một vòng lặp chạy các giá trị từ đầu mảng đến cuối mảng
 * ** Xét điều kiện các giá trị trong mảng phải là số nguyên Number.isInteger(numArray[i])
 * **  Number.isInteger(numArray[i]) === true => count +=1;
 * 
 * B5 Hiển thị UI kết quả  bằng event click button
 */



// Tạo function add number
var numArray9 = [];
function addNumber9(){
    var num = Number(document.getElementById('inputNum9').value);
    numArray9.push(num);
    // console.log(numArray9)
}

// Tạo function đếm số nguyên cho mảng
function demSoNguyen() {
    var count = 0;
    // Vòng lặp mảng để xét giá trị của mảng
    for (var i = 0; i < numArray9.length; i++) {
        if (Number.isInteger(numArray9[i])) {
            count +=1
        }
    }
    document.getElementById('txtResult_Bt9').innerHTML = 'Số nguyên: ' + count;
}