// Bài tập 7

/**
 * Giải thích code
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Tạo một mảng chứa các số được được khách hàng nhập vào (numArray7)
 * B3 Tạo một function add các số vào 
 * B4 Tạo một function sắp xếp các số lớn dần
 **** Tạo vòng lặp nhỏ đưa giá trị lớn nhất của mảng về cuối mảng
 **** Tạo vòng lặp lớn để thực hiện vòng lặp nhỏ nhiều lần cho đến khi vòng lặp lớn
 * B5 Hiển thị UI kết quả  bằng event click button
 */

// Tạo function add number
var numArray7 = [];
function addNumber7(){
    var num = Number(document.getElementById('inputNum7').value);
    numArray7.push(num);
    // console.log(numArray7)
}

// Tạo một function sắp xếp mảng

function sapXep(){
    // Vòng lặp lớn
    for(var i = 0; i < numArray7.length; i++){
        // Vòng lặp nhỏ
        for (var j = 0; j < numArray7.length - 1; j++ ){
            if(numArray7[j] > numArray7[j+1]){
                // Tạo biến tạm = giá trị trước ( giá trị trước ban đầu)
                var temp = numArray7[j];
                // Khi giá trị trước lớn hơn giá trị sau ta gắn giá trị trước bằng giá trị sau
                numArray7[j] = numArray7[j+1];
                // Giá trị sau sẽ được gắn bằng temp (chính bằng giá trị ban đầu trước)
                numArray7[j+1] = temp;
                // Kết quả ta được hai giá trị trước và sau đổi cho nhau
            }
        }   
        
    }
    document.getElementById('txtResult_Bt7').innerHTML = "Mảng sau khi sắp xếp: " + numArray7;
}