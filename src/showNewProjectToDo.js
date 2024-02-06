//NEW FILE SEQUEL/CONNECTED TO showProjectToDo.js
/*  Has the job of appening new created todos and projects
    instead of displaying them once at startup
*/
// NOW HAVE TO APPEND NEW TODOS / PROJECTS
import { projectNameArray, toDoArray } from "./todoProject";
import { checkPriority, allButtons } from "./showProjectToDo";

function appendToDo(newToDo, ToDoProjectName) {
    function showToDo(newProjectContainer, array) {
        let newToDoContainer = document.createElement("div");
        newToDoContainer.setAttribute("class", "toDoContainer");
        checkPriority(newToDoContainer, array);
        newProjectContainer.appendChild(newToDoContainer);

        let titleDueDateContainer = document.createElement("div");
        titleDueDateContainer.setAttribute("class", "titleDueDateContainer");
        newToDoContainer.appendChild(titleDueDateContainer);

        let newToDoTitle = document.createElement("h5");
        newToDoTitle.textContent = toDoArray[array][0];
        newToDoTitle.setAttribute("class", "toDoTitle");
        titleDueDateContainer.appendChild(newToDoTitle);

        let newToDoDueDate = document.createElement("p");
        newToDoDueDate.textContent = toDoArray[array][3];
        newToDoDueDate.setAttribute("class", "toDoDueDate");
        titleDueDateContainer.appendChild(newToDoDueDate);
        allButtons(newToDoContainer, array);
    }
    for ( let i = 0; i < projectNameArray.length; i++ ) {
        if ( projectNameArray[i] == ToDoProjectName ) {
            let projectContainer = document.querySelectorAll(".projectContainer");
            console.log(projectContainer)
            let newProjectContainer = projectContainer[i];
            showToDo(newProjectContainer, toDoArray.length - 1);
            i = projectNameArray.length - 1;
        }
    }
    
}

function appendProject(newProject) {

}

export { appendToDo, appendProject };