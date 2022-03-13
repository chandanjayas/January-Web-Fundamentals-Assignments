let min=0;
let second=0;
let timer=false;
const star=function(){
    timer=true;
    stopwatch();
}
const rset=function(){
    timer=false;
    min=0;
    sec=0;
    document.getElementById("min").innerHTML="0"+ min;
    document.getElementById("second").innerHTML="0" +sec;
}
const stop=function(){
    timer=false;
}
function stopwatch(){
    if(timer==true){
        second +=1
        if(second==60){
            min +=1;
            second=0;
        }
        if(min==5){
            min=0;
            second=0;
            timer=false;
        }
        const minuts=document.getElementById("min");
        minuts.innerText="0" +  min;
        const Sec=document.getElementById("second");
        Sec.innerText=second;
        setTimeout('stopwatch()',1000)
    }
}
const btn=document.getElementById("start");
btn.addEventListener('click',star);
const stopbtn=document.getElementById("stop");
stopbtn.addEventListener('click',stop);
const resetbtn=document.getElementById("rsetbtn");
resetbtn.addEventListener('click',rset);
