// var a=parseInt(prompt("Please Enter first Number"));
// var b=parseInt(prompt("Please Enter second number"));

function swap_fun(){
    var num1=document.getElementById("first_number");
    var num2=document.getElementById("second_number");
    var a=parseInt(num1.value);
    var b=parseInt(num2.value);
    a=a+b;       // value of is increse of a
    b=a-b;        // In increse value subtract original value b then found tha value of b
    a=a-b ;       //updated value b subtract increasing value of a
    // document.write("swaping value a=" + a,"<br>");
    // document.write("swaping value b=" + b ,"<br>");
    var output=document.getElementById("op_text");
    output.innerText= "swaping value a=" + a,"<br>" ;
    output2=document.getElementById("op_text2");
    output2.innerText="swaping value b=" + b ,"<br>";
}
