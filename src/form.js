//function dateChecker() {
    let todayDate = new Date();
    if ( todayDate.getMonth() <= 9 ) {
        todayDate = todayDate.getFullYear() + "-0" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
        console.log(todayDate);
    }
    else if ( todayDate.getDate() <= 9 ) {
        todayDate = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-0" + todayDate.getDate();
        console.log(todayDate);
    }
    else if ( todayDate.getMonth() <= 9 && todayDate.getDate() <= 9 ) {
        todayDate = todayDate.getFullYear() + "-0" + (todayDate.getMonth() + 1) + "-0" + todayDate.getDate();
        console.log(todayDate);
    }
    else {
        todayDate = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
        console.log(todayDate);
    }
    todayDate = todayDate.toString();
    //return todayDate;
//}
//dateChecker();

function addFormButton() {
    let formContainer = document.querySelector("#form-container");
    let formShowButton = document.createElement("button");
    formShowButton.textContent = "Crea un nuovo ToDo";
    formShowButton.setAttribute("id", "formShowButton");
    formContainer.appendChild(formShowButton);
}

addFormButton();

function addFormDOM(projectNameArray) {
    let formContainer = document.querySelector("#form-container");
    /*
    //this.checklist = checklist;
    */
    let formStesso = document.createElement("form");
    formStesso.setAttribute("method", "post");
    formStesso.setAttribute("action", "#");
    formContainer.appendChild(formStesso);

    // TITOLO
    let titleLabel = document.createElement("label");
    titleLabel.textContent = "Titolo ToDo:"
    let titleInput = document.createElement("input");
    titleLabel.setAttribute("for", "title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Working");

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
    dueDateLabel.setAttribute("for", "notes");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("min", "2000-01-01")
    dueDateInput.setAttribute("max", "2099-12-31");
    dueDateInput.setAttribute("id", "notes");
    dueDateInput.setAttribute("name", "notes");
    dueDateInput.setAttribute("value", todayDate);

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

    formStesso.appendChild(priorityLabel);
    formStesso.appendChild(priorityInput);

    // PROJECTNAME
    //menù a tendina che mostra con un for each tutti i progetti esistenti;
    let projectNameLabel = document.createElement("label");
    projectNameLabel.textContent = "Scegli il progetto del ToDo:"
    let projectNameSelect = document.createElement("select");
    projectNameLabel.setAttribute("for", "notes");//
    projectNameSelect.setAttribute("id", "projectName");
    projectNameSelect.setAttribute("name", "projectName");

    formStesso.appendChild(projectNameLabel);
    formStesso.appendChild(projectNameSelect);

    // PROJECTNAME Option loop
    console.log(projectNameArray.length);
    for ( let i = 0; i < projectNameArray.length; i++  ) {
        let projectNameOption = document.createElement("option");
        projectNameOption.setAttribute("value", projectNameArray[i]);
        projectNameOption.textContent = projectNameArray[i];
        projectNameSelect.appendChild(projectNameOption);
        console.log(projectNameOption);
    }

    //
}

export { addFormDOM };