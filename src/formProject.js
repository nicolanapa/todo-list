import { appendProject } from "./showNewProjectToDo";
import { Project, toDoArray, projectNameArray } from "./todoProject";

function addFormProjectDOM() {
    // POPUP
    let formContainer = document.querySelector("#form-container");

    let dialogFormProjectContainer = document.createElement("dialog");
    dialogFormProjectContainer.setAttribute("id", "dialog-form-project");
    let formProjectStesso = document.createElement("form");
    formProjectStesso.setAttribute("method", "dialog");
    formProjectStesso.setAttribute("action", "#");
    formContainer.appendChild(dialogFormProjectContainer);
    dialogFormProjectContainer.appendChild(formProjectStesso);

    // PROJECTNAME Creation
    function projectNameForm() {
        let projectNameLabel = document.createElement("label");
        projectNameLabel.textContent = "Crea il tuo nuovo progetto: ";
        let projectNameSelect = document.createElement("input");
        projectNameLabel.setAttribute("for", "projectNameProject");
        projectNameSelect.setAttribute("id", "projectNameProject");
        projectNameSelect.setAttribute("name", "projectNameProject");

        formProjectStesso.appendChild(projectNameLabel);
        formProjectStesso.appendChild(projectNameSelect);
    }
    
    projectNameForm();

    // Submit Button
    function submitButtonForm() {
        let submitButton = document.createElement("button");
        submitButton.setAttribute("id", "submitButton");
        submitButton.setAttribute("type", "submit");
        submitButton.textContent = "Salva";

        formProjectStesso.appendChild(submitButton);

        // Get all form values by calling getFormValue()
        submitButton.addEventListener("click", () => {
            getFormProjectValue(Project);
        });
    }
    
    submitButtonForm();

    function addShowFormProjectButton() {
        let formContainer = document.querySelector("#form-container");
        let formShowProjectButton = document.createElement("button");
        formShowProjectButton.textContent = "Crea un nuovo Progetto";
        formShowProjectButton.setAttribute("id", "formShowButton");
        formContainer.appendChild(formShowProjectButton);
        return formShowProjectButton;
    }

    // Shows the form after clicking the form button
    addShowFormProjectButton().addEventListener("click", () => {
        dialogFormProjectContainer.showModal();
    });
}

function getFormProjectValue(Project) {
    let projectName = document.getElementById("projectNameProject").value;
    let newProject = new Project(projectName);

    addProjectOptionFromProject();
    
    console.log(newProject);
    console.log(projectNameArray);
    console.log(toDoArray);
    
    appendProject();
}

function addProjectOptionFromProject() { // Simile a projectNameArrayOption() ma solo aggiunge un progetto
    let projectNameSelect2 = document.querySelector("#projectName");
    let projectNameOption2 = document.createElement("option");
    projectNameOption2.setAttribute("value", projectNameArray[projectNameArray.length - 1]);
    projectNameOption2.textContent = projectNameArray[projectNameArray.length - 1];
    projectNameSelect2.appendChild(projectNameOption2);
}

addFormProjectDOM();

export { addFormProjectDOM, getFormProjectValue };