import { toDoArray, projectNameArray } from "./todoProject";

// FIRST Shows the default project
// SECOND And the other projects (one function about FIRST another about SECOND)
/*  If project == no todos then only show title of project and add some space (padding)
    for future todos
*/
// When creating new todo, append it to their head project
/* When creating new project, append them to the bottom (appends to a 
future new "main container")
*/

/*
    For each todos view only title and duedate
    Make a little button / click the todo
    that opens (dialog like in form) the entire todo with an close button
    Put near the little view button a delete button and a edit details button
    
    For the edit details button just make it similar to the toDo creating function
    but only make available changing title, description, notes, priority and duedate
    not the project where the todo is (for now)
*/
let mainContainer = document.querySelector(".main-container");

function checkPriority(newToDoContainer, array) {
    if ( toDoArray[array][4] == 1 ) {
        newToDoContainer.style.cssText = "background-color: #3366FF; color: white;";
    }
    else if ( toDoArray[array][4] == 2 ) {
        newToDoContainer.style.cssText = "background-color: #B1CAF6; color: black;";
    }
    else if ( toDoArray[array][4] == 3 ) {
        newToDoContainer.style.cssText = "background-color: #FF6666; color: white;";
    }
    else if ( toDoArray[array][4] == 4 ) {
        newToDoContainer.style.cssText = "background-color: #D7A6A7; color: black;";
    }
    else if ( toDoArray[array][4] == 5 ) {
        newToDoContainer.style.cssText = "background-color: #FFF9C6; color: blue;";
    }
}

function showDefaultProject() {
    let arrayNumber = 0;

    let newProjectContainer = document.createElement("div");
    newProjectContainer.setAttribute("class", "projectContainer"); 
    mainContainer.appendChild(newProjectContainer);

    let newProject = document.createElement("h2");
    newProject.textContent = projectNameArray[0];
    newProject.setAttribute("class", "projectTitle");
    newProjectContainer.appendChild(newProject);

    let newToDoContainer = document.createElement("div");
    newToDoContainer.setAttribute("class", "toDoContainer");
    checkPriority(newToDoContainer, 0);
    newProjectContainer.appendChild(newToDoContainer);

    let titleDueDateContainer = document.createElement("div");
    titleDueDateContainer.setAttribute("class", "titleDueDateContainer");
    newToDoContainer.appendChild(titleDueDateContainer);

    let newToDoTitle = document.createElement("h5");
    newToDoTitle.textContent = toDoArray[0][0];
    newToDoTitle.setAttribute("class", "toDoTitle");
    titleDueDateContainer.appendChild(newToDoTitle);

    let newToDoDueDate = document.createElement("p");
    newToDoDueDate.textContent = toDoArray[0][3];
    newToDoDueDate.setAttribute("class", "toDoDueDate");
    titleDueDateContainer.appendChild(newToDoDueDate);

    allButtons(newToDoContainer);
}

function allButtons(newToDoContainer) {
    let viewButton = document.createElement("button");
    viewButton.textContent = "View";
    viewButton.setAttribute("class", "littleButtons");

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "littleButtons");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("class", "littleButtons");

    newToDoContainer.appendChild(viewButton);
    newToDoContainer.appendChild(editButton);
    newToDoContainer.appendChild(deleteButton);

    viewButton.addEventListener("click", () => {
        fullViewToDo(0);
    });

    editButton.addEventListener("click", () => {

    });

    deleteButton.addEventListener("click", () => {
        newToDoContainer.remove();
    });
}

showDefaultProject();

function fullViewToDo(array) {
    let formToDoContainer = document.querySelector("#form-container");

    let dialogToDoContainer = document.createElement("dialog");
    dialogToDoContainer.setAttribute("id", "dialog-form-project");
    let formToDoStesso = document.createElement("form");
    formToDoStesso.setAttribute("method", "dialog");
    formToDoStesso.setAttribute("action", "#");
    formToDoStesso.setAttribute("class", "toDoFullView");
    formToDoContainer.appendChild(dialogToDoContainer);
    dialogToDoContainer.appendChild(formToDoStesso);

    checkPriority(formToDoStesso, array)

    let titolo = document.createElement("div");
    titolo.textContent = "Titolo: ";
    titolo.setAttribute("class", "toDoSpecificatore");
    formToDoStesso.appendChild(titolo);

    let newToDoTitle = document.createElement("h5");
    newToDoTitle.textContent = toDoArray[array][0];
    newToDoTitle.setAttribute("class", "toDoTitle");
    newToDoTitle.style.cssText = "font-size: calc(1rem + 3px);"
    formToDoStesso.appendChild(newToDoTitle);


    let descrizione = document.createElement("div");
    descrizione.textContent = "Descrizione: ";
    descrizione.setAttribute("class", "toDoSpecificatore");
    formToDoStesso.appendChild(descrizione);
    

    let newToDoDescription = document.createElement("p");
    newToDoDescription.textContent = toDoArray[array][1];
    newToDoTitle.setAttribute("class", "toDoDescription");
    formToDoStesso.appendChild(newToDoDescription);


    let note = document.createElement("div");
    note.textContent = "Notes: ";
    note.setAttribute("class", "toDoSpecificatore");
    formToDoStesso.appendChild(note);

    let newToDoNotes = document.createElement("p");
    newToDoNotes.textContent = toDoArray[array][2];
    newToDoNotes.setAttribute("class", "toDoNotes");
    formToDoStesso.appendChild(newToDoNotes);


    let scadenza = document.createElement("div");
    scadenza.textContent = "DueDate: ";
    scadenza.setAttribute("class", "toDoSpecificatore");
    formToDoStesso.appendChild(scadenza);

    let newToDoDueDate = document.createElement("p");
    newToDoDueDate.textContent = toDoArray[array][3];
    newToDoDueDate.setAttribute("class", "toDoDueDate");
    newToDoDueDate.style.cssText = "font-size: calc(1rem + 1px);"
    formToDoStesso.appendChild(newToDoDueDate);


    let priorità = document.createElement("div");
    priorità.textContent = "Priorità (1 più, 5 meno): ";
    priorità.setAttribute("class", "toDoSpecificatore");
    formToDoStesso.appendChild(priorità);

    let newToDoPriority = document.createElement("input");
    newToDoPriority.setAttribute("type", "range");
    newToDoPriority.setAttribute("min", "1");
    newToDoPriority.setAttribute("max", "5");
    newToDoPriority.setAttribute("id", "newpriority");
    newToDoPriority.setAttribute("name", "newpriority");
    newToDoPriority.setAttribute("placeholder", "1/2/3/4/5");
    newToDoPriority.setAttribute("value", toDoArray[array][4]);
    formToDoStesso.appendChild(newToDoPriority); 
    document.getElementById("newpriority").disabled = true;


    let progettoNome = document.createElement("div");
    progettoNome.textContent = "Project Name: ";
    progettoNome.setAttribute("class", "toDoSpecificatore");
    formToDoStesso.appendChild(progettoNome);

    let newToDoProjectName = document.createElement("h5");
    newToDoProjectName.textContent = toDoArray[array][5];
    newToDoProjectName.setAttribute("class", "toDoProjectName");
    formToDoStesso.appendChild(newToDoProjectName);

    function submitButtonForm() {
        let submitButton = document.createElement("button");
        submitButton.setAttribute("id", "submitButton");
        submitButton.setAttribute("type", "submit");
        submitButton.textContent = "Indietro";
        submitButton.style.margin = "45px 0 -10px 0";

        formToDoStesso.appendChild(submitButton);
    }

    submitButtonForm();
    dialogToDoContainer.showModal();
}

function showAllProjects() {

}

showAllProjects();

export { showDefaultProject, showAllProjects };