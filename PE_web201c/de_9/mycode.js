

function submit() {
    var name = document.getElementsByTagName('input')[0].value;
    var email = document.getElementsByTagName('input')[1].value;
    var year = document.getElementsByTagName('select')[0].value;
    var math = document.getElementsByTagName('select')[1].value;
    var ly = document.getElementsByTagName('select')[2].value;
    var english = document.getElementsByTagName('select')[3].value;
    var input1 = document.getElementsByTagName('input')[2];
    var input2 = document.getElementsByTagName('input')[3];
    var input3 = document.getElementsByTagName('input')[4];
    if(name == "" || email == ""){
        alert('Dung de trong email hoac name.')
    }




    var show = "Xem lại thông tin của bạn";
    show += "\nTen: " + name;
    show += "\nEmail: " + email;
    show += "\nYear: " + year;
    show += "\nDiem Toan: " + math;
    show += "\nDiem ly: " + ly;
    show += "\nDiem ngoai ngu: " + english;
    show +="\nKy nang: ";
    if(input1.checked){
        show += " Tu duy logic tot,";
    }
    if(input2.checked){
        show +=" Co khieu tham my,"
    }
    if(input3.checked){
        show += " Nhay ben, nam bat tot co hoi.";
    }
    

    document.getElementById('show').style.display = "block";
    document.getElementById('show').value = show;



}

// function submit(){
//     var name = document.getElementsByTagName('input')[0].value;
//     var email = document.getElementsByTagName('input')[1].value;
//     var year = document.getElementsByTagName('select')[0].value;
//     var toan = document.getElementsByTagName('select')[1].value;
//     var ly = document.getElementsByTagName('select')[2].value;
//     var nn = document.getElementsByTagName('select')[3].value;
//     var check1 = document.getElementsByTagName('input')[2];
//     var check2 = document.getElementsByTagName('input')[3];
//     var check3 = document.getElementsByTagName('input')[4];
//     if (name == "" || email == "") {
//         alert("Đừng để trống tên và email của bạn");
//         return;
//     }
//     var show = "Xem lại thông tin của bạn";
//     show += "\nTên: " + name;
//     show += "\nEmail: " + email;
//     show += "\nĐiểm toán: " + toan;
//     show += "\nĐiểm lý: " + ly;
//     show += "\nĐiểm ngoại ngữ: " + nn;
//     show += "\nKỹ năng:";
//     if (check1.checked) {
//         show += "\nTư duy logic tốt";
//     }
//     if (check2.checked) {
//         show += "\nCó khiếu thẩm mỹ";
//     }
//     if (check3.checked) {
//         show += "\nNhạy bén, nắm bắt tốt với các cơ hội";
//     }
//     document.getElementById('show').value = show;
//     document.getElementById('show').style.display = "block";

// }