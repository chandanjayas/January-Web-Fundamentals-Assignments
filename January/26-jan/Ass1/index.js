var a=prompt("Enter  a first number");
var b=prompt("Enter a second number");
var c=prompt("Enter a third number");
var num1=parseInt(a);
var num2=parseInt(b);
var num3=parseInt(c);
if((num1<num2) && (num1<num3)){
alert(num1 +" is a minimum number");
}
else if((num2<num1) && (num2<num3)){
alert(num2 +" is a minimum number");
}
else{
alert(num3 +" is a also minimum number");
}
