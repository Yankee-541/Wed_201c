function fun(){
    var list = document.getElementsByClassName('list-group')[0];
    if(list.style.display == "block"){
        list.style.display = "none";
    }else{
        list.style.display = "block";
    }
}
