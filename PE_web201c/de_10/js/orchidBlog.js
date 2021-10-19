function zoomout(pic){
    var src = pic.getAttribute("src");
    var frame = document.getElementById('frame');
    frame.style.backgroundImage = "url('" + src + "')";
    frame.style.width = "30%";
    frame.style.heigh = "80px";
}

// function zoomout(pic){
//     var src = pic.src;
//     document.getElementById('frame').style.backgroundImage = "url('" + src + "')";
// }
function warning(){
    var name = document.getElementById('yourname').value;
    var email = document.getElementById('email').value;
    var content = document.getElementById('content').value;
    // var reset = document.getElementsByName('td')[6];
    if(name == "" || email == "" || content == ""){
        alert('please fill all field');
    }else{
       var check = confirm("mess sent");
        if(check == 1){
          location.reload();
          return;
        }
    }

    
}
// alertify.confirm("This is a confirm dialog.",
//   function(){
//     alertify.success('Ok');
//   },
//   function(){
//     alertify.error('Cancel');
//   });