function Showtable(){
    var table = document.getElementsByClassName('hide-table')[0];
    if(table.style.display == 'block'){
        table.style.display = 'none';
    }else{
        table.style.display = 'block';
    }
}