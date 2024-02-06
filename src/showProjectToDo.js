import { toDoArray, projectNameArray } from "./todoProject";
import { priorityChecker } from "./formToDo";

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

function showProject(arrayProject) { // NOW AUTOMATED CODE (only once though)
    let newProjectContainer = document.createElement("div");
    newProjectContainer.setAttribute("class", "projectContainer"); 
    mainContainer.appendChild(newProjectContainer);

    let newProject = document.createElement("h2");
    newProject.textContent = projectNameArray[arrayProject];
    newProject.setAttribute("class", "projectTitle");
    newProjectContainer.appendChild(newProject);

    function showToDo(array) {
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

    for ( let i2 = 0; i2 < toDoArray.length; i2++ ) { //APPENDS ALL TODOS OF THE SAME PROJECT
        if ( projectNameArray[arrayProject] == toDoArray[i2][5] ) {
            showToDo(i2);
        }
    }
    
}

function allButtons(newToDoContainer, array) {
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
        fullViewToDo(array);
    });

    editButton.addEventListener("click", () => {
        editToDo(array);
    });

    deleteButton.addEventListener("click", () => {
        newToDoContainer.remove(); // DELETE BUTTON
        toDoArray[array] = 0 //FARE FUNZIONE CHE RIAGGIORNA L'ARRAY IN FUTURO
        //console.log(toDoArray[array]);
        console.table(toDoArray);
    });
}

function fullViewToDo(array) { // VIEW BUTTON
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
    newToDoPriority.disabled = true;


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
        submitButton.style.margin = "25px 0 -10px 0";

        formToDoStesso.appendChild(submitButton);
    }

    submitButtonForm();
    dialogToDoContainer.showModal();
}

function editToDo(array) { // EDIT BUTTON
    let formToDoContainer = document.querySelector("#form-container");

    let dialogToDoContainer = document.createElement("dialog");
    dialogToDoContainer.setAttribute("id", "dialog-form-project");
    let formToDoStesso = document.createElement("form");
    formToDoStesso.setAttribute("method", "dialog");
    formToDoStesso.setAttribute("action", "#");
    formToDoStesso.setAttribute("class", "toDoFullView");
    formToDoContainer.appendChild(dialogToDoContainer);
    dialogToDoContainer.appendChild(formToDoStesso);

    checkPriority(formToDoStesso, array);

    let titolo = document.createElement("div");
    titolo.textContent = "Titolo: ";
    titolo.setAttribute("class", "toDoSpecificatore");
    formToDoStesso.appendChild(titolo);

    let newToDoTitle = document.createElement("input");
    newToDoTitle.setAttribute("value", toDoArray[array][0]);
    newToDoTitle.setAttribute("id", "toDoTitle");
    newToDoTitle.setAttribute("name", "toDoTitle");
    newToDoTitle.style.cssText = "font-size: calc(1rem + 3px);"
    formToDoStesso.appendChild(newToDoTitle);


    let descrizione = document.createElement("div");
    descrizione.textContent = "Descrizione: ";
    descrizione.setAttribute("class", "toDoSpecificatore");
    formToDoStesso.appendChild(descrizione);
    

    let newToDoDescription = document.createElement("textarea");
    newToDoDescription.textContent = toDoArray[array][1];
    newToDoDescription.setAttribute("cols", 40);
    newToDoDescription.setAttribute("rows", 5);
    newToDoDescription.setAttribute("id", "toDoDescription");
    newToDoDescription.setAttribute("name", "toDoDescription");
    formToDoStesso.appendChild(newToDoDescription);


    let note = document.createElement("div");
    note.textContent = "Notes: ";
    note.setAttribute("class", "toDoSpecificatore");
    formToDoStesso.appendChild(note);

    let newToDoNotes = document.createElement("textarea");
    newToDoNotes.textContent = toDoArray[array][2];
    newToDoNotes.setAttribute("cols", 40);
    newToDoNotes.setAttribute("rows", 3);
    newToDoNotes.setAttribute("id", "toDoNotes");
    newToDoNotes.setAttribute("name", "toDoNotes");
    formToDoStesso.appendChild(newToDoNotes);


    let scadenza = document.createElement("div");
    scadenza.textContent = "DueDate: ";
    scadenza.setAttribute("class", "toDoSpecificatore");
    formToDoStesso.appendChild(scadenza);

    let newToDoDueDate = document.createElement("input");
    newToDoDueDate.setAttribute("type", "date");
    newToDoDueDate.setAttribute("min", "2000-01-01")
    newToDoDueDate.setAttribute("max", "2099-12-31");
    newToDoDueDate.setAttribute("value", toDoArray[array][3]);
    newToDoDueDate.setAttribute("id", "toDoDueDate");
    newToDoDueDate.setAttribute("name", "toDoDueDate");
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
    priorityChecker(newToDoPriority);

    let progettoNome = document.createElement("div");
    progettoNome.textContent = "Project Name (can't change it): ";
    progettoNome.setAttribute("class", "toDoSpecificatore");
    formToDoStesso.appendChild(progettoNome);

    // PROJECTNAME Select creation
    function projectNameSelectForm() {
        let newToDoProjectName = document.createElement("select");
        newToDoProjectName.setAttribute("id", "toDoProjectName");
        newToDoProjectName.setAttribute("name", "toDoProjectName");
        newToDoProjectName.setAttribute("disabled", "disabled");//remove when trying to make it work
        formToDoStesso.appendChild(newToDoProjectName);

        function projectNameArrayOption() { // CHANGING PROJECT NOT WORKING AS FOR NOW
            for ( let i = 0; i < projectNameArray.length; i++ ) {
                let projectNameOption = document.createElement("option");
                projectNameOption.setAttribute("value", projectNameArray[i]);
                if ( projectNameArray[i] == toDoArray[array][5] ) {
                    projectNameOption.setAttribute("selected", "selected");
                    //projectNameOption.setAttribute("disabled", "disabled");
                } 
                projectNameOption.textContent = projectNameArray[i];
                newToDoProjectName.appendChild(projectNameOption);
            }
        }
        projectNameArrayOption();
    }
    
    projectNameSelectForm();


    function submitButtonForm() {
        let submitButton = document.createElement("button");
        submitButton.setAttribute("id", "submitButton");
        submitButton.setAttribute("type", "submit");
        submitButton.textContent = "Salva";
        submitButton.style.margin = "25px 0 -10px 0";

        formToDoStesso.appendChild(submitButton);

        /*function editedToDoChanger2(array) {
            newToDoTitle.setAttribute("value", toDoArray[array][0]);
            newToDoDescription.textContent = toDoArray[array][1];
            newToDoNotes.textContent = toDoArray[array][2];
            newToDoDueDate.setAttribute("value", toDoArray[array][3]);
            newToDoPriority.setAttribute("value", toDoArray[array][4]);
            priorityChecker(newToDoPriority);
        }*/

        submitButton.addEventListener("click", () => {
            getEditValue(array);
            //editedToDoChanger1(newToDoTitle, newToDoDueDate, array);
            //editedToDoChanger2(array);
            //projectNameArrayLength();
        });
    }
    submitButtonForm();
    dialogToDoContainer.showModal();
}

function getEditValue(array) { // GET EDIT VALUE
    toDoArray[array][0] = String(document.getElementById("toDoTitle").value);
    toDoArray[array][1] = String(document.getElementById("toDoDescription").value);
    toDoArray[array][2] = String(document.getElementById("toDoNotes").value);
    toDoArray[array][3] = String(document.getElementById("toDoDueDate").value);
    toDoArray[array][4] = String(document.getElementById("newpriority").value);
    toDoArray[array][5] = String(document.getElementById("toDoProjectName").value); //SE IN FUTURO PUOI CAMBIARE PROGETTO

    console.log(document.getElementById("toDoTitle").value);
    console.log(array);
    console.log(toDoArray[array]);
    console.table(toDoArray);
}

function editedToDoChanger1(newToDoTitle, newToDoDueDate, array) {
    newToDoTitle.textContent = toDoArray[array][0];
    newToDoDueDate.textContent = toDoArray[array][3];
    checkPriority(newToDoContainer, array);
}

function showAllProjects() { // Shows all the projects at startup, not at new todos/projects
    for ( let i = 0; i < projectNameArray.length; i++ ) {
        showProject(i);
    }
}

showAllProjects();

export { showProject, showAllProjects, checkPriority, allButtons };