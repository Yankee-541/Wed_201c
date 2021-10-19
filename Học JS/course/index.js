//html tạo khung cho giao diện được đẹp hơn còn JS sinh ra để tạo hiệu ứng
// tương tác cho người dùng


//for
//DOM
//event

//câu lệnh để in clg
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for(var i = 0; i < 5; i++ ){
//     console.log(i);
// }

//viết sự kiện giống nhau, viết tách ra những function để tái
// sử dụng function đấy, để kp viết lại nữa
// có 2 kiểu:
// 1:function có tên, gọi đâu cx được
// demo(1,2)
//2:function k có tên, 2 loại đều có nhiệm vụ giống nhau 

// console.log(demo(1,3), "hehe");

// var test = function(){
//     return 10;
// }

// function demo(number1, number2){
//     // console.log(number1, number2);

//     // k có () thì chỉ là gọi funcion, nhma để gọi và thực hiện
//     //  funcion thì thêm ()
//     var number =  test();

//     return number1 + number;
//     //gán giá trị vào 1 function, dừng function demo
// }
// console.log(demo(6));


// var test = function(){
// }
//test là biến nên loại 2 sẽ mang tính chất của một biến, là phải
//khai báo trước rồi mới dùng được
//loại thứ 2 phải dùng bên dưới

//DOM //tương tác với các thẻ html
//============== cach 1
// console.log(document.getElementById("text"));



//thay the thẻ text trong html

// var p = document.getElementById("text");
// p.innerHTML= "text thay doi noi dung bang js";
// "" k cho xuống dòng còn `` cho xuống dòng
// =============cach 2
// var div = document.getElementsByTagName("div");
// console.log(div); // se k in ra cai gi vì thẻ TagName trong html có rất nhiều thẻ div giống nhau và n sẽ trả về arr

// console.log(div[0]); //truy vấn đến div đầu tiên 
// console.log(div[1]); //truy vấn đến div thứ 2


// var content = document.getElementsByClassName("content");
// console.log(content[0]);

// var conten = document.getElementsByClassName("cha");
// console.log(content[1]);

//thay đổi hiểu ứng tương tác người dùng
// content[0].style.color = "red";
// content[0].style.fontSize = "50px";

// console.log(content[0].getAttribute("data-id"));

//remove thằng class content đầu tiên
// content[0].remove();

//sử dụng event
//cách 1: sử dụng trực tiếp event trong html bằng event onclick
//định nghĩa 1 function trùng vs tên định nghĩa trong html
// function myClick(){
//     alert("Ban dang o trong myclick"); // là 1 hàm thông báo của JS
// }


// Ví dụ thay đổi màu của tk content 1 bằng sự kiện onclick
// function myClick(){
//     var content = document.getElementsByClassName("content");
//     content[0].style.color = "red";
// }


//thay đổi cả đoạn text content 1 và màu
    var content = document.getElementsByClassName("content");   

// var p = document.getElementById("text");
// function myClick(){
//     content[0].style.color = "red";
//     p.innerHTML= " <span>text thay doi noi dung bang js </span>";
// }

//cách 2: thông qua DOM gọi qua tk var content đã khai báo ở trên
// function myClick() {
//     content[0].style.color = "red";
//     p.innerHTML = " <span>text thay doi noi dung bang js </span>";
// }

//------cách 1 
//thêm sự kiện mà k thông qua html , function lúc này sẽ là function k tên, được gọi là call back
content[0].addEventListener("click", function(){
    content[0].style.color = "red";
    p.innerHTML = " <span>text thay doi noi dung bang js </span>";
})

//-------cách 2 gọi luôn tên myclick vào, thêm dấu () sẽ chạy luôn 
// content[0].addEventListener("click",myClick)

// var input = document.getElementsByTagName("input");
// input[0].addEventListener("change",function(){
//     var value = this.value;
//     p.innerHTML = " " + value;

//     console.log("a");   //gia tri ô input
// })

// input[0].addEventListener("keydown",function(){ //có 3 loại key : up, press, down
//     var value = this.value;
//     p.innerHTML = " " + value;
//     console.log("a");
// })


var content = document.getElementsByClassName("content");
content.style.textTransform = "capitalize";
var text1 = document.getElementById("content1");  //lấy thuộc tính giá trị
var data = text1.getAttribute("data-id");
console.log(data);
text1.setAttribute("token", "Hehe");  //thêm mới thuộc tính
text1.style.color = "green"; // thay đổi thuộc tính css - tương tự với các size à font
text1.addEventListener("click", function () {
    console.log("kakaka");
    // content[0].remove();
})

var username = document.getElementById("username");
username.addEventListener("keyup", function(){
    console.log(this.value);

})

