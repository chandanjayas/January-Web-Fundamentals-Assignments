var counter1=0;
function like1(){
    counter1 +=1;
    displya_count1();
}
function dislike1(){
    counter1 -=1;
    displya_count1();
}
function displya_count1(){
    var count=document.getElementById("count");
    count.innerText=counter1;
}
var counter2=0;
function like2(){
    counter2 +=1;
    displya_count2()
}
function dislike2(){
    counter2 -=1;
    displya_count2()
}
function displya_count2(){
    var disp2=document.getElementById("count2");
    disp2.innerText=counter2;
}
var counter3=0;
function like3(){
    counter3 +=1;
    displya_count3();
}
function dislike3(){
    counter3 -=1
    displya_count3();
}
function displya_count3(){
    var disp3=document.getElementById("count3");
    disp3.innerText=counter3;
}
var counter4=0;
function like4(){
    counter4 +=1;
    displya_count4();
}
function dislike4(){
    counter4 -=1;
    displya_count4();
}
function displya_count4(){
    var disp4=document.getElementById("count4");
    disp4.innerText=counter4;
}