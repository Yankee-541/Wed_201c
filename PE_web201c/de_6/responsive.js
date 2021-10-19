function show(){
    var para2 = document.getElementById('para2');
    var para3 = document.getElementById('para3');
    if(para2.style.display == "block"){
        para2.style.display = "none";
    }else{
        para2.style.display = "block";
        para3.innerHTML = "SHOW LESS";
    }


}
function Enroll(){
    var t1 = document.getElementById('t1').value;
    var t2 = document.getElementById('t2').value;
    var t3 = document.getElementById('t3').value;
    var t4 = document.getElementById('t4').value;
    var t5 = document.getElementById('t5');
    var t6 = document.getElementById('t6');
    var t7 = document.getElementById('t7');
    if(t1 == "" || t2 =="" || t3 == "" || t4==""){
        alert('pls fill all');
    }else{
        if(t3 == t4){
            if(t5.checked || t6.checked || t7.checked){
                alert('Start learning WED201C.');
            }else{
                alert('choose one option.');
            }
        }else{
            alert("pass is not equals.");
        }
    }





}