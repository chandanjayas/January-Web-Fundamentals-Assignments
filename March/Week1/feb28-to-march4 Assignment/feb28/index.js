function find_fizzbuzz(num){
    var num=parseInt(prompt("Please enter a numeber "));
    for(var i=1; i<=num; i++){
        if(i%3==0 && i%5==0){
            document.write("FizzBuzz","<br>");
        } else if(i%3==0){
            document.write("Fizz" ,"<br>")
        } else if(i%5==0){
            document.write("Buzz" ,"<br>")
        }else{
            document.write(i,"<br>")
        }
    }
}