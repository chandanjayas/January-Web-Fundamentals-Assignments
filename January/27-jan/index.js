var a=prompt("Enter a  sizeof number");

var arr=[];

var i=0;


for(i=0; i<a; i++){
    arr[i]=prompt("Enter a value of array");
}
console.log(arr);

var max=arr[0];
var i=0;
for(i=0; i<a; i++){
     if(arr[i]>max){
          max=arr[i];
     }
}
alert(max +" is maximum number");
console.log(max);







