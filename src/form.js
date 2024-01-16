function dateChecker() {
    let todayDate = new Date();
    if ( todayDate.getMonth <= 9 ) {

    }
    todayDate = todayDate.getFullYear() + "-" +  (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
    console.log(todayDate);
    }

dateChecker();

function addFormDOM() {
    let formContainer = document.querySelector("#form-container");
    /*
    //this.checklist = checklist;
    this.dueDate = dueDate;
    this.priority = priority; // 1 a 5 - blu, rosso, verde, giallo, azzurro 
    this.projectName = projectName;
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
    //DUEDATE | date
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
    //
}

export { addFormDOM };