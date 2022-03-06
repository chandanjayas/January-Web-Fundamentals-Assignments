function add_num(){
    var first_input=document.getElementById("num1");
    var second_input=document.getElementById("num2");
    var first_input_number=parseInt(first_input.value);
    var second_input_number=parseInt(second_input.value);
    var sum=first_input_number + second_input_number;
    document.getElementById("output").value=sum;
}