var num=prompt("Enter a number");
num=parseInt(num);
if(isNaN(num)){
    alert("Please enter a valid number");
} 
     if(num==1){
     console.log(num + " is neither prime  nor composition number");
    }
    else if(num<1){ 
         console.log(num + " is not a prime number");
    }else{
         
         for(var i=2; i<num; i++){ 
              if(num%i==0){ 
                  console.log(num + " is not prime number");
                  break;
              }else{
                  console.log(num+ " is a prime number");
                  
              }
        
          }
  }

