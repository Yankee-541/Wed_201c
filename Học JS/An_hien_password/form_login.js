var x = true;
function myfun() {
    if (x) {
        document.getElementById('pass').type = "text";
        x = false;
    } else {
        document.getElementById('pass').type = "password";
        x = true;

    }
}
function inputValidate() {
    var formEmail = /^[A-za-z1-9][\w$.]+@[\w]+\.\w+$/;
    var email = document.getElementById('accout').value;
    if (email == "") {
        alert('Pls fill all');
    } else {
        if (formEmail.test(email)) {
        } else {
            alert('Email is invalid. Email valid: a-z1-9@a-z.a-z');
        }
    }
}
function validatePassword() {
    var FormPass1 = /^[A-Z][A-Za-z1-9][\w$.]+/;
    var FormPass2 = /^[0-9A-Za-z]*[0-9]+[0-9A-Za-z]*/;
    var FormPass3 = /^[0-9A-Za-z]*[a-zA-z]+[0-9A-Za-z]*/;
    var pass = document.getElementById('pass').value;
    if (pass == "") {
        alert('Pls fill all');
    } else {
        if (FormPass1.test(pass) && FormPass2.test(pass) && FormPass3.test(pass)) {
            if (pass.length >= 6) {
            } else {
                alert('pass >= 6 character');
            }
        } else {
            alert('Password must have 1 character (A-Z), 1 character (a-z), 1 character (0-9) and >= 6 characters');
        }
    }
}
function check() {
    var login = document.getElementById('loin');
    alert('login success');
    location.reload();

}



