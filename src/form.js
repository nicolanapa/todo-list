import { projectNameArray } from "./todoProject";

function dateChecker() { // Creates an variable with today's date
    let todayDate = new Date();
    if ( todayDate.getMonth() <= 9 ) {
        todayDate = todayDate.getFullYear() + "-0" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    }
    else if ( todayDate.getDate() <= 9 ) {
        todayDate = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-0" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    }
    else if ( todayDate.getMonth() <= 9 && todayDate.getDate() <= 9 ) {
        todayDate = todayDate.getFullYear() + "-0" + (todayDate.getMonth() + 1) + "-0" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    }
    else {
        todayDate = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    }
    todayDate = todayDate.toString();
    return todayDate;
}

function addFormDOM(projectNameArray) {
    let formContainer = document.querySelector("#form-container");

    /* cose che mancano
    //this.checklist = checklist;
    */

    let dialogFormContainer = document.createElement("dialog");
    dialogFormContainer.setAttribute("id", "dialog-form");
    let formStesso = document.createElement("form");
    formStesso.setAttribute("method", "dialog");
    formStesso.setAttribute("action", "#");
    formContainer.appendChild(dialogFormContainer);
    dialogFormContainer.appendChild(formStesso);

    // TITOLO
    let titleLabel = document.createElement("label");
    titleLabel.textContent = "Titolo ToDo:"
    let titleInput = document.createElement("input");
    titleLabel.setAttribute("for", "title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Working");
    titleInput.setAttribute("value", "Working");//DA CANCELLARE

    formStesso.appendChild(titleLabel);
    formStesso.appendChild(titleInput);

    // DESCRIZIONE
    let descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Descrizione generale del ToDo:"
    let descriptionInput = document.createElement("input");
    descriptionLabel.setAttribute("for", "description");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "description");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("placeholder", "Go to work on x and y");
    descriptionInput.setAttribute("value", "Go to work on x and y");//DA CANCELLARE

    formStesso.appendChild(descriptionLabel);
    formStesso.appendChild(descriptionInput);

    // NOTE
    let notesLabel = document.createElement("label");
    notesLabel.textContent = "Note aggiuntive del ToDo:"
    let notesInput = document.createElement("input");
    notesLabel.setAttribute("for", "notes");
    notesInput.setAttribute("type", "text");
    notesInput.setAttribute("id", "notes");
    notesInput.setAttribute("name", "notes");
    notesInput.setAttribute("placeholder", "Don't forget z");
    notesInput.setAttribute("value", "Don't forget z");//DA CANCELLARE

    formStesso.appendChild(notesLabel);
    formStesso.appendChild(notesInput);

    // CHECKLIST | checkbox
    /*let checkListLabel = document.createElement("label");
    checkListLabel.textContent = "Note aggiuntive del ToDo:"
    let checkListInput = document.createElement("input");
    checkListLabel.setAttribute("for", "notes");
    checkListInput.setAttribute("type", "text");
    checkListInput.setAttribute("id", "notes");
    checkListInput.setAttribute("name", "notes");
    checkListInput.setAttribute("placeholder", "Don't forget z");
    
    formStesso.appendChild(checkListLabel);
    formStesso.appendChild(checkListInput);*/
    // eventListener for creating new "cheklists"

    // DUEDATE | date
    let dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "ToDo da completare entro:"
    let dueDateInput = document.createElement("input");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("min", "2000-01-01")
    dueDateInput.setAttribute("max", "2099-12-31");
    dueDateInput.setAttribute("id", "dueDate");
    dueDateInput.setAttribute("name", "dueDate");
    dueDateInput.setAttribute("value", dateChecker());//DEFAULT: TODAY

    formStesso.appendChild(dueDateLabel);
    formStesso.appendChild(dueDateInput);

    // PRIORITY
    let priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priorità ToDo (1 a 5) (1 = più priorità, 5 = meno priorità):"
    let priorityInput = document.createElement("input");
    priorityLabel.setAttribute("for", "priority");
    priorityInput.setAttribute("type", "range");
    priorityInput.setAttribute("min", "1");
    priorityInput.setAttribute("max", "5");
    priorityInput.setAttribute("id", "priority");
    priorityInput.setAttribute("name", "priority");
    priorityInput.setAttribute("placeholder", "1/2/3/4/5");
    priorityInput.setAttribute("value", "1");//DA CANCELLARE, forse

    formStesso.appendChild(priorityLabel);
    formStesso.appendChild(priorityInput);

    priorityInput.addEventListener("input", () => {
    //if ( priorityInput.value == 1 ) {
        //document.getElementById(priority).style.accentColor = "blue";
        console.log(priorityInput.value);
    //}
    //else if ( priorityInput.value == 2 ) {
        //document.getElementById(priority).style.accentColor = "#6495ed";

    //}    
    //else {
        //document.getElementById(priority).style.accentColor = "red";

    //}
    });

    // PROJECTNAME Select creation
    let projectNameLabel = document.createElement("label");
    projectNameLabel.textContent = "Scegli il progetto del ToDo:"
    let projectNameSelect = document.createElement("select");
    projectNameLabel.setAttribute("for", "projectName");
    projectNameSelect.setAttribute("id", "projectName");
    projectNameSelect.setAttribute("name", "projectName");

    formStesso.appendChild(projectNameLabel);
    formStesso.appendChild(projectNameSelect);

    // PROJECTNAME Option loop
    console.log("Length of projectNameArray is " + projectNameArray.length);
    for ( let i = 0; i < projectNameArray.length; i++  ) {
        let projectNameOption = document.createElement("option");
        projectNameOption.setAttribute("value", projectNameArray[i]);
        projectNameOption.textContent = projectNameArray[i];
        projectNameSelect.appendChild(projectNameOption);
        console.log(projectNameOption);
    }

    // Submit Button
    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Salva";

    formStesso.appendChild(submitButton);

    // Shows the form after clicking the form button
    formShowButton.addEventListener("click", () => {
        dialogFormContainer.showModal();
    });
    
    // Get all form values by calling getFormValue()
    submitButton.addEventListener("click", () => {
        getFormValue();
    });
}

function addShowFormButton() {
    let formContainer = document.querySelector("#form-container");
    let formShowButton = document.createElement("button");
    formShowButton.textContent = "Crea un nuovo ToDo";
    formShowButton.setAttribute("id", "formShowButton");
    formContainer.appendChild(formShowButton); 
}

function getFormValue() {
    let ToDoTitle = document.getElementById("title").value;
    let ToDoDescription = document.getElementById("description").value;
    let ToDoNotes = document.getElementById("notes").value;
    let ToDoDueDate = document.getElementById("dueDate").value;
    let ToDoPriority = document.getElementById("priority").value;
    let ToDoProjectName = document.getElementById("projectName").value;

    let newToDo = new ToDo()
}

addShowFormButton();
addFormDOM(projectNameArray);

export { addFormDOM };