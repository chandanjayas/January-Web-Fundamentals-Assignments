var num=prompt("Enter a number");
num=parseInt(num);
a=0;
b=1;
c=a+b;
console.log(a);
console.log(b);
console.log(c);
for(var i=0; i<num; i++){

   a=b;
   b=c;
   c=a+b;
   console.log(c);
}
