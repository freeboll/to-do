// добавление таски в список + чекбокс
function addTask(){
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
   if(taskText === ''){
    alert('Please enter a task');
    return;
   }
   const taskList = document.getElementById('task-list');
   const li = document.createElement('li');


   const  checkBox= createCheckBox();
   li.appendChild(checkBox);


   const span = document.createElement('span')
   span.textContent = taskText;
   li.appendChild(span)


   const deleteBtn = createDeleteButton();
   li.appendChild(deleteBtn);


 
   taskList.prepend(li);
   taskInput.value = '';

}



// чекбокс
function createCheckBox(){
    const checkBox = document.createElement('input')
   checkBox.type = 'checkbox'
   checkBox.className = 'complete-checkbox'
   return checkBox;

}


//Кнопка удаления таска
function createDeleteButton() {
    const deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', function() {
        
        // Здесь код для удаления задачи
    });
    deleteBtn.textContent = 'delete task';
    deleteBtn.className = 'delete-task';
    return deleteBtn;
}





document.getElementById('add-task-button').onclick = addTask;
document.getElementById('task-input').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});