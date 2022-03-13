const todo=[];
const render=function(){
    const  parent_container=document.getElementById("list_container");
    parent_container.innerHTML="";
    for(let i=0; i<todo.length; i++){
        const single_todo_list=todo[i];
        const new_li=document.createElement("li");
        new_li.innerText=single_todo_list;
        parent_container.appendChild(new_li);
    }
}
const add_item=function(){
    const ip=document.getElementById("todo_list");
    const new_todo=ip.value;
    todo.push(new_todo);
    ip.value="";
    render();
}
const btn=document.getElementById("click_btn");
btn.addEventListener('click',add_item);