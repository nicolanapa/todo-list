import { ToDo, Project, projectNameArray } from "./todoProject";
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
    let tempProjectNameArray = [];
    for ( let i = 0; i < projectNameArray.length; i++ ) {
        tempProjectNameArray[i] = projectNameArray[i];
    }
    console.log(tempProjectNameArray);

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

    // PRIORITY Input color
    priorityInput.addEventListener("input", () => { 
    if ( priorityInput.value == 1 ) {
        priorityInput.style.accentColor = "blue";
    }
    else if ( priorityInput.value == 2 ) {
        priorityInput.style.accentColor = "#6495ed";

    }    
    else if ( priorityInput.value == 3 ) {
        priorityInput.style.accentColor = "red";

    }
    else if ( priorityInput.value == 4 ) {
        priorityInput.style.accentColor = "#D7A6A7";
    }
    else if ( priorityInput.value == 5 ) {
        priorityInput.style.accentColor = "#FFF9C6";
    }
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
    let projectNameOption = [];
    let contatoreLunghezzaOption = -1;
    // PROJECTNAME Option loop
    //console.log("Length of projectNameArray is " + projectNameArray.length);
    let contatoreLunghezzaOption1 = -1;
    function projectNameArrayOption(deleting) {
        contatoreLunghezzaOption1 = -1;
        for ( let i = 0; i < projectNameArray.length; i++ ) {
            contatoreLunghezzaOption = contatoreLunghezzaOption + 1;
            contatoreLunghezzaOption1 = contatoreLunghezzaOption1 + 1;
            projectNameOption[contatoreLunghezzaOption] = document.createElement("option");
            projectNameOption[contatoreLunghezzaOption].setAttribute("value", projectNameArray[i]);
            projectNameOption[contatoreLunghezzaOption].textContent = projectNameArray[i];
            projectNameSelect.appendChild(projectNameOption[contatoreLunghezzaOption]);
            //console.log(projectNameOption[contatoreLunghezzaOption]);
        }
        contatoreLunghezzaOption = -1;
        if ( deleting == "delete" ) {
            for ( let i = 0; i < contatoreLunghezzaOption1; i++ ) {
                projectNameSelect.removeChild(projectNameOption[i]);
            }
            contatoreLunghezzaOption1 = -1;
        }
        console.log(projectNameOption);
    } //another function that instead delete all those options

    function projectNameArrayOptionDeleter(projectNameOption) {
            for ( let i = 0; i < contatoreLunghezzaOption1; i++ ) {
                projectNameSelect.removeChild(projectNameOption[i]);
            }
            contatoreLunghezzaOption1 = -1;
    }
    projectNameArrayOption("no");
    function equalityChecker() {
        for ( let i = 0; i < projectNameArray.length; i++) {
            if ( tempProjectNameArray[i] == projectNameArray[i] ) {
                if ( i < projectNameArray.length ) {
                    i = projectNameArray.length - 1;
                    return true;
                }
            }
            else {
                i = projectNameArray.length;
                return false;
            }
        }
        
    }
    addShowFormButton().addEventListener("click", () => {
        //projectNameArrayOptionDeleter();
        console.log(tempProjectNameArray);
        console.log( equalityChecker() );
        //console.log( tempProjectNameArray == projectNameArray );
        if ( equalityChecker() == true ) {
            dialogFormContainer.showModal();
        }
        else if ( equalityChecker() == false ) {
            projectNameArrayOption("delete");
            dialogFormContainer.showModal();
            for ( let i = 0; i < projectNameArray.length; i++ ) {
                tempProjectNameArray[i] = projectNameArray[i];
            }
        }
    });

    
    // Submit Button
    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Salva";

    formStesso.appendChild(submitButton);

    function addShowFormButton() {
        let formContainer = document.querySelector("#form-container");
        let formShowToDoButton = document.createElement("button");
        formShowToDoButton.textContent = "Crea un nuovo ToDo";
        formShowToDoButton.setAttribute("id", "formShowButton");
        formContainer.appendChild(formShowToDoButton);
        return formShowToDoButton;
    }
    // Shows the form after clicking the form button
    // addShowFormButton().addEventListener("click", () => {
    //     dialogFormContainer.showModal();
    //     projectNameArrayOptionDeleter();
    //     projectNameArrayOption();
    // });
    
    // Get all form values by calling getFormValue()
    submitButton.addEventListener("click", () => {
        getFormValue(ToDo);
        //projectNameArrayLength();
    });

}

function getFormValue(ToDo) {
    let ToDoTitle = document.getElementById("title").value;
    let ToDoDescription = document.getElementById("description").value;
    let ToDoNotes = document.getElementById("notes").value;
    let ToDoDueDate = document.getElementById("dueDate").value;
    let ToDoPriority = document.getElementById("priority").value;
    let ToDoProjectName = document.getElementById("projectName").value;

    let newToDo = new ToDo(ToDoTitle, ToDoDescription, ToDoNotes, ToDoDueDate, ToDoPriority, ToDoProjectName);
    console.log(newToDo);
    return newToDo;
}

addFormDOM(projectNameArray);

export { addFormDOM, getFormValue };