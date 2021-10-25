const field = document.querySelector('.field');
const addButton = document.querySelector('.add');
const list = document.querySelector('.list');

function createTask(value) {     
    const task = document.createElement('div');  
    task.classList.add('taskBox');
    const text = document.createElement('p');
    task.append(text);
    text.classList.add('text');
    text.textContent = value;
    text.contentEditable = true;      
    const checkBox = document.createElement('img');     
    checkBox.setAttribute("src","img/checkbox.svg.");
    checkBox.classList.add('checkBox');
    task.prepend(checkBox);
    checkBox.addEventListener("click", completeTask);
    const deleteBtn = document.createElement('img');
    deleteBtn.setAttribute("src","img/trash.svg");
    deleteBtn.classList.add('deleteButton');  
    task.prepend(deleteBtn);
    deleteBtn.addEventListener('click', deleteTask);       
    return task;
}

function pressEnter(event) {
    if (event.keyCode === 13) {
        addTask();
    }
}

function addTask() { 
    if (field.value) { 
        const newTask = createTask(field.value);
        list.append(newTask);
        field.value = '';
    }
}

function deleteTask(event) {  
    const target = event.target;
    const targetBox = target.parentElement;
    targetBox.remove();   
}

addButton.addEventListener('click', addTask);
field.addEventListener("keydown", pressEnter);

function completeTask(event) {    
    const target = event.target;
    const targetBox = target.parentElement;
    console.log(targetBox.getAttribute('class'));
    targetBox.classList.toggle("success");
}