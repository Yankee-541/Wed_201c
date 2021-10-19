function checkForm(){
    var name = document.getElementsByTagName('input')[0].value;
    var phone = document.getElementsByTagName('input')[1].value;
    var email = document.getElementsByTagName('input')[2].value;
    if (name == "") {
        alert("Username is invalid");
    }else if(phone == ""){
        alert("fill phone");
    }else if(email == ""){
        alert("Email is invalid");
    }else{
        alert('Welcome ' + name +',\n' + 'We will ...');
    }


}