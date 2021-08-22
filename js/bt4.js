// Bài tập 4
/**
 * Giải thích code
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Tạo một mảng chứa các số dương được được khách hàng nhập vào (numArray4)
 * B3 Tạo một function add các số dương vào ( điều kiện num > 0)
 * B4 Xét điều kiện mảng
 * 
 * **TH:Mảng có phần tử thì thì thực hiện một function tìm số dương nhỏ nhất.
 * Dùng vòng lặp để tìm ra giá trị nhỏ nhất trong dãy số dương
 * Trong vòng lặp xét điều kiện số nhỏ nhất ( ta mang các giá trị trong mảng đi so sánh với min nếu giá trị nào nhỏ hơn min ta gắn min bằng giá trị đó)
 * Nếu min ( numArrayPlus[i] < min) thì min = numArrayPlus[i]
 * Thực hiện hết xong vòng lặp 
 * B6 Hiển thị Ui kết quả của sum bằng event click button
 * 
 * **Th Ngược lại không có phần tử nào thì in ra không có số dương
 */

// Tạo function add number
var numArrayPlus = [];
function addNumber4(){
    var num = Number(document.getElementById('inputNum4').value);
    if( num > 0){
        numArrayPlus.push(num);
    }
    // console.log(numArrayPlus)
}

// Tạo function tìm số dương nhỏ nhất trong dãy
function minPlus() {
    if (numArrayPlus.length > 0){
            var min = numArrayPlus[0]
            for(var i = 1; i < numArrayPlus.length; i++){
                if(numArrayPlus[i] < min){
                    min = numArrayPlus[i];
                }
            }
            document.getElementById('txtResult_Bt4').innerHTML = 'Số dương nhỏ nhât: ' + min;      
        
    }else{
        document.getElementById('txtResult_Bt4').innerHTML = "Không có số dương"
    }
    
}

