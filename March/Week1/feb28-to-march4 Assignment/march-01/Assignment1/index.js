function loadpage(){
    var psw1=document.getElementById("pass1").value;
    var psw2=document.getElementById("pass2").value;
    if(psw1===psw2){
        document.write("Hi welcome to page !")
    }else{
        var error=document.getElementById("show_error");
        error.innerText="password doesn't match !"
    }

}