function home(){
    var disp=document.getElementById("home_img")
    if(disp.classList.contains("home_img")){
        disp.classList.replace("home_img","home")
        // disp.classList.remove("home");
    } else{
        disp.classList.replace("home","home_img")
    }
}
function image(){
    var disp3=document.getElementById("sec_imgage");
    if(disp3.classList.contains("sec_imgage")){
        disp3.classList.replace("sec_imgage","sec_img");
    }else{
        disp3.classList.replace("sec_img","sec_imgage");
    }
}
function search(){
    var disp4=document.getElementById("any_search");
    if(disp4.classList.contains("any_search")){
        disp4.classList.replace("any_search","search");
    } else{
        disp4.classList.replace("search","any_search");
    }
}
function person(){
    var disp5=document.getElementById("add_person");
    if(disp5.classList.contains("add_person")){
        disp5.classList.replace("add_person","person");
    }else{
        disp5.classList.replace("person","add_person");
    }
}