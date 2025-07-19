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


   const  checkBox= createCheckBox(li);
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
function createCheckBox(li){
    const checkBox = document.createElement('input')
    checkBox.addEventListener('click',function(){
        if (this.checked === true ){
        li.style.backgroundColor = "lightgreen"
        }else {
            li.style.backgroundColor = ""

        }
    })
   checkBox.type = 'checkbox'
   checkBox.className = 'complete-checkbox'
   return checkBox;

}


//Кнопка удаления таска
function createDeleteButton() {
    const deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', function() {
        this.parentNode.remove();
        
        

        // Здесь код для удаления задачи
    });
    deleteBtn.textContent = 'delete task';
    deleteBtn.className = 'delete-task';
    return deleteBtn;
}

// Сохраняет все задачи в LocalStorage
function saveTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
        const text = li.querySelector('span').textContent;
        const done = li.querySelector('input[type="checkbox"]').checked;
        tasks.push({ text, done });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Загружает задачи из LocalStorage и отображает их
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        const checkBox = createCheckBox(li);
        checkBox.checked = task.done;
        if (task.done) li.style.backgroundColor = "lightgreen";
        li.appendChild(checkBox);
        const span = document.createElement('span');
        span.textContent = task.text;
        li.appendChild(span);
        const deleteBtn = createDeleteButton();
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}


document.getElementById('add-task-button').onclick = addTask;
document.getElementById('task-input').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});