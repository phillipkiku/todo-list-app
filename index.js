// Get all the elements we need
let input = document.querySelector('input') 
let button = document.querySelector('button')
let tasksContainer = document.querySelector('ul')

function createTask(){
    // get input value
    let task = input.value
    // create list element with input value
    let newListItem = document.createElement('li')

    // add span for task element
    let taskSpan = document.createElement('span')
    taskSpan.innerText = task;

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

    // editIcon.addEventListener('click', function(){
    //     let currentTask = newListItem.childNodes[0].data
    //     console.dir(newListItem)
    //     let editedTask = prompt("Edit Task", currentTask)
    //     newListItem.childNodes[0].data = editedTask
    // })

    // add the icons to the span
    spanElement.append(completeIcon, editIcon,doneIcon, deleteIcon)

    // add span to the new list item
    newListItem.append(taskSpan, spanElement)

    // add element to the tasks container
    tasksContainer.appendChild(newListItem)
}