// Bài tập 8

/**
 * Giải thích code
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Tạo một mảng chứa các số được được khách hàng nhập vào (numArray8)
 * B3 Tạo một function add các số vào 
 * B4 Tạo một function để tìm số nguyên tố đầu tiền cho mảng
 * Trong function:
 * ** Tạo một vòng lặp chạy các giá trị từ đầu mảng đến cuối mảng
 * ** Xét điều kiện các giá trị trong mảng phải > 1 mới được thực hiện các bước tiếp theo
 * ** Xét điều kiện số nguyên cho từng giá trị của mảng 
 * B5 Hiển thị UI kết quả  bằng event click button
 */



// Tạo function add number
var numArray8 = [];
function addNumber8(){
    var num = Number(document.getElementById('inputNum8').value);
    numArray8.push(num);
    
}

// Tạo function tìm số nguyên tố đầu tiên
function soNguyenToDauTien() {
    var check = 0
    var num = -1;
    // Vòng lặp kiểm tra số nguyên tố
    for (var i = 0; i < numArray8.length; i++) {
        if (numArray8[i] > 1) {
            for (var j =2; j <= numArray8[i]/2; j++ ) {
                if (numArray8[i] % j === 0) {
                    check = 1
                    break;
                    // Lệnh break ở đây để dừng kiểm tra khi đã có biết số đó không phải số nguyên tố không cần kiểm tra thêm. Check lúc này bằng 1. Out vòng lặp để kiểm tra so sánh check với 0. Dĩ nhiên lúc này sẽ không thõa mãn điều kiện tiếp tục kiểm tra
                }
                else{
                    // Trường hợp này số kiểm tra có kết quả cuối cùng thõa mãn điều kiện là số nguyên không có chia hết số nào trong vòng lặp thì ta gắn check = 0
                    check = 0
                }
            }
            
            if (check === 0) {
                break;
                // Trường hợp check = 0 thì gắn num = giá trị hiện tại được kiểm tra đồng thời dừng vòng lặp
            }
        }
    }
    document.getElementById("txtResult_Bt8").innerHTML = 'Số nguyên tố đầu tiên của dãy: ' + num
}