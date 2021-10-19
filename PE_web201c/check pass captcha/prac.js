function check(){
    var email = document.getElementById('email').value;
    var input = document.getElementsByTagName('input');
    var USA = document.getElementById('USA');
    var UK = document.getElementById('UK');

    if(email == ""){
        alert("please fill your email");
    }else{
        if(USA.checked || UK.checked){  
            var captcha = input[3].value;
            if(captcha == "cVr12TY"){
                alert("Thank you very much!");
                location.reload();
            }else{
                alert("please check your captcha");
            }
        }else{
            alert("please check your option");
        }
    }
    document.getElementById('myform').reset();
}

// function fun(){
//     document.getElementById("myformm").reset();
// }