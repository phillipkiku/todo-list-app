// Get all the elements we need
let input = document.querySelector('input') 
let button = document.querySelector('button')
let tasksContainer = document.querySelector('ul')


// get tasks from local storage and add them to the taskscontainer
let tasks = JSON.parse(localStorage.getItem('tasks'))

let taskElements = tasks.map(function(element){
    let task = JSON.parse(element)
    return createTaskElement(task.name)
})

tasksContainer.append(...taskElements)


function createTaskElement(inputValue){
    let newListItem = document.createElement('li')

    // add span for task element
    let taskSpan = document.createElement('span')
    taskSpan.innerText = inputValue;

    // create the span element
    let spanElement = document.createElement('span')

    // create icons
    let completeIcon = document.createElement('input');
    completeIcon.setAttribute('type', 'checkbox')

    let editIcon = document.createElement('i');
    editIcon.classList.add('bx', 'bx-edit-alt'); 

    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add('bx', 'bx-trash')

    let doneIcon = document.createElement('i');
    doneIcon.classList.add('bx', 'bx-check-circle')
    doneIcon.style.display = "none"

    // add event listeners to the icons
    deleteIcon.addEventListener('click', function(){
        newListItem.remove()
    })

    completeIcon.addEventListener('click',function(event){
        if(event.target.checked === true){
            newListItem.style.textDecoration = "line-through"
        }else{
            newListItem.style.textDecoration = "none"
        }
    })
    
    editIcon.addEventListener('click', function(){
        console.dir(taskSpan)
        doneIcon.style.display = "inline"
        taskSpan.contentEditable = true
        taskSpan.style.padding = "5px 10px"
        editIcon.style.display = "none"
        taskSpan.focus()
    })

    doneIcon.addEventListener('click',function(){
        taskSpan.contentEditable = false
        doneIcon.style.display = "none"
        editIcon.style.display = "inline"
    })

    // add the icons to the span
    spanElement.append(completeIcon, editIcon,doneIcon, deleteIcon)

    // add span to the new list item
    newListItem.append(taskSpan, spanElement)

    return newListItem;
}



function addTask(){
    // get input value
    let task = input.value

    // add task to local storage
    addTaskToLocalStorage(task)

    // create list element with input value
    let newListItem = createTaskElement(task)

    // add element to the tasks container
    tasksContainer.appendChild(newListItem)
}



function addTaskToLocalStorage(task){
    // save task to Local storage
    let taskObject = {
        name: task,
        isComplete: false
    }
    let stringifiedObject = JSON.stringify(taskObject);


    let savedTasks = localStorage.getItem('tasks')

    if(savedTasks === null){
        let tasks = []
        tasks.push(stringifiedObject)

        let stringifiedTasks = JSON.stringify(tasks)

        localStorage.setItem('tasks', stringifiedTasks)

    }else{
        let oldTasks = JSON.parse(savedTasks)

        oldTasks.push(stringifiedObject)

        let newTasks = JSON.stringify(oldTasks)

        localStorage.setItem('tasks', newTasks)
    }   
}
