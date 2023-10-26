function removeChildrens(parents, id_children){
    let children = document.querySelector(`#${id_children}`);
    if(children){
        parents.removeChild(children); 
    }
}
function genericListTask(list, functions){
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
        button.addEventListener("click" , () => functions(task.id));
        li.appendChild(button);
        ul.appendChild(li); 
    });
    return ul; 
}
export {
    removeChildrens,
    genericListTask
}