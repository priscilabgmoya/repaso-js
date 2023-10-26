import {generarID} from '../helpers/help.js'; 
let listTasks = JSON.parse(localStorage.getItem("list-task")) || []; 
function Main(main) {
    const div = document.createElement("div"); 
    div.classList = "container";
    const row = document.createElement("div"); 
    row.classList = "row"; 
    addTasks(row);
    listTask(row); 
    div.appendChild(row);
    main.appendChild(div); 
}
function addTasks(container){
    const col = document.createElement("div"); 
    col.classList = "col col-lg-6 col-xl-6 col-sm-6 col-md-6 formTask"; 
    const form = document.createElement("form"); 

    const input = document.createElement("input");
    input.classList = "form-control me-2";
    input.placeholder = "PUT YOUR TASK";
    form.appendChild(input);
    form.addEventListener("keydown", (event)=>add(event)); 
    col.appendChild(form);
    container.appendChild(col);
}
function listTask(container){
    const col = document.createElement("div"); 
    col.classList = "col col-lg-6 col-xl-6 col-sm-6 col-md-6"; 
    col.id = "col-list-task"; 
    col.innerText ="LIST TASK";
    LoadTask(col); 
    container.appendChild(col);
}
function add(e){
    if(e.keyCode === 13){
        e.preventDefault();
        if(e.target.value == '') return alert("write a valid task!"); 
        const newTask ={
            id: generarID(), 
            text: e.target.value
        }
        listTasks.push(newTask); 
        localStorage.setItem("list-task", JSON.stringify(listTasks)); 
        e.target.value = "";
        alert("Saved Task!");
        reloadTask(); 
    }
}
function LoadTask(col){
    removeChildrens(col, "list-task");
    const tasks = JSON.parse(localStorage.getItem("list-task")); 
    const ul = genericListTask(tasks); 
    col.appendChild(ul);
}
function deleteTask(id){
    if(confirm("Do you want to delete the selected task?")){
        let updateTask =  JSON.parse(localStorage.getItem("list-task")); 
        let update = updateTask.filter(task => task.id !== id); 
        localStorage.setItem("list-task", JSON.stringify(update)); 
        reloadTask();
    }
}
function searchTask(term){
    let col_list_task = document.querySelector("#col-list-task");
    removeChildrens(col_list_task, "list-task");
    let updateTask =  JSON.parse(localStorage.getItem("list-task")); 
    let task = updateTask.filter(task => {
        task.text.includes(term) }); 
    if(term == '' || task.length == 0) {
        const ul = genericListTask(updateTask); 
      return  col_list_task.appendChild(ul);    
    }else{
        const ul = genericListTask(task); 
       return col_list_task.appendChild(ul);   
    }
}
function removeChildrens(parents, id_children){
    let children = document.querySelector(`#${id_children}`);
    if(children){
        parents.removeChild(children); 
    }
}
function genericListTask(list){
    const ul = document.createElement("ul"); 
    ul.id = "list-task";
    list?.forEach(task => {
        const li = document.createElement("li");
        li.classList = "itemTask" 
        const button = document.createElement("button"); 
        const p = document.createElement("p"); 
        p.innerText = `${task.text}`; 
        p.classList= "textTask"
        li.appendChild(p); 
        button.classList = "btn btn-danger";
        button.innerText = "Eliminar"
        button.addEventListener("click" , () => deleteTask(task.id));
        li.appendChild(button);
        ul.appendChild(li); 
    });
    return ul; 
}
function reloadTask(){
    let col_list_task = document.querySelector("#col-list-task");
    LoadTask(col_list_task); 
}
export {
    Main,
    searchTask
}