function checkinput(){
    var input = document.getElementsByTagName('input')[0].value;
    var input1 = document.getElementsByTagName('input')[1].value;
    var text = document.getElementsByTagName('textarea')[0].value;
    var uni = document.getElementById('uni').value;
    if(input == "" ){
        alert("Pls fill name.");
    }else{
        if(input1 == ""){
            alert("pls fill email.")
        }else{
            if(text == ""){
                alert("Pls fill the \'noi dung.\'");
            }
        }
    }

    var myWindown = window.open("", "", "width= 300px","heigh=300px");
    myWindown.document.write("<h1>Vui Long Xem Lai </h1>");
    myWindown.document.write("Ten cua ban: " + input +"<br>");
    myWindown.document.write("Ten cua ban: " + input1 +"<br>");
    myWindown.document.write("Ten cua ban: " + text+"<br>");
    myWindown.document.write("Uni is: " + uni +"<br>");

}