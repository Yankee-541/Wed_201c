/*Name this external file gallery.js*/

// var div = document.getElementsByTagName("div");
// var pre = document.getElementsByClassName("preview");

// function upDate(previewPic) {

//       previewPic.style.height = "15%";
//       previewPic.style.width = "15%";
//       document.getElementById('image').innerHTML = previewPic.alt;

// }

// function unDo(x) {
//     var X = document.getElementById('image');
//     x.style.height = "10%";
//     x.style.width = "10%"
//     X.style.backgroundImage="url('')";
//     X.innerHTML = "Hover over an image below to display here.";
// }

function upDate(previewPic){
    var src = previewPic.getAttribute( "src" );
    var alt = previewPic.getAttribute( "alt" );
    document.getElementById('image').style.backgroundImage = "url('" + src + "')";
    document.getElementById('image').innerHTML = alt;
 }
 
   function unDo(X){
    X = document.getElementById('image');
    X.style.backgroundImage = "url('')";
     document.getElementById('image').innerHTML = "Hover over an image below to display here";
   
 }