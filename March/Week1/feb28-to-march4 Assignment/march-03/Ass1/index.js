function alert_fun(){
    var disp=document.getElementById("container");
    if(disp.classList.contains("container")){
        disp.classList.replace("container","alert");
    } else{
        disp.classList.replace("alert","container");
    }
}