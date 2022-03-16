


var obj={ 
      first_name:"chandan",
      last_name:"jayas",
      age:24,
      email:"ck12334@gmail.com",
      student:[
             {
               name:"Suraj",
               mark:19,
             },
             {
               name:"Amarnath",
               mark:35,
             },
             {
               name:"Umesh",
               mark:39,
             },
             {
               name:"Aditya",
               mark:36,
             },
             {
               name:"Anurag",
               mark:15,
             },
             {
               name:"Shiv",
               mark:10,
             },
             { 
               name:"Siddharth",
               mark:0, 
             },

]
};
var num=parseInt(prompt("Please enter a number"));
if(isNaN(num)){
    alert("Please enter a valid mumber");
} else{ 
     count=0;
     var studentlength=obj.student.length;   //total length of object
     var num1=obj.student   // total number of student in object
     for(var i=0; i<studentlength; i++){ 
          var score=(num1[i].mark);
          if(score>=num){ 
                console.log(obj.student[i].name);
                console.log(obj.student[i].mark);
                count++;
          }
     }
}
console.log(count+" student have scored equal to or more then those mark");
