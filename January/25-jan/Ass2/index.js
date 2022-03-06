var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));
var c=parseInt(prompt("Enter third number"));
if(a>b &&a>c){
    document.write("a is greatest number");
} else if(b>a && b>c){
    document.write("b is greatest number");
}else{
    document.write("c is greatest number");
}