function changeImg(pic) {
    var src = pic.getAttribute("src");
    var img = document.getElementById('bigImg');
    img.style.backgroundImage = "url('" + src + "')";
    img.style.width = "80%";
    img.style.heigh = "80px";
}

function check() {
    var email = document.getElementById('email');
    // muốn email background có màu thì bỏ .value còn muốn hiện alert thì thêm .value 
    var content = document.getElementById('content').value;
    var google = document.getElementById('google');
    var friend = document.getElementById('friend');
    var blogpost = document.getElementById('blogpost');
    if (email.value  == "" ) {
        email.style.backgroundColor = 'RED';
        // alert("pls fill email !!!");
    } else {
        if(content == ""){
            alert('pls fill');
        }else{
            if (google.checked || friend.checked || blogpost.checked) {
            
                alert('Thanks very much');
                location.reload();
            } else {
                alert('Pls choose');
            }
        }

    }


}