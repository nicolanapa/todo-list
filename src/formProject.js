import { Project } from "./todoProject";

function addFormProjectDOM() {
    let formContainer = document.querySelector("#form-container");

    let dialogFormProjectContainer = document.createElement("dialog");
    dialogFormProjectContainer.setAttribute("id", "dialog-form-project");
    let formProjectStesso = document.createElement("form");
    formProjectStesso.setAttribute("method", "dialog");
    formProjectStesso.setAttribute("action", "#");
    formContainer.appendChild(dialogFormProjectContainer);
    dialogFormProjectContainer.appendChild(formProjectStesso);

    // PROJECTNAME Creation
    let projectNameLabel = document.createElement("label");
    projectNameLabel.textContent = "Crea il tuo nuovo progetto: ";
    let projectNameSelect = document.createElement("input");
    projectNameLabel.setAttribute("for", "projectNameProject");
    projectNameSelect.setAttribute("id", "projectNameProject");
    projectNameSelect.setAttribute("name", "projectNameProject");

    formProjectStesso.appendChild(projectNameLabel);
    formProjectStesso.appendChild(projectNameSelect);

    // Submit Button
    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Salva";

    formProjectStesso.appendChild(submitButton);

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

    // Get all form values by calling getFormValue()
    submitButton.addEventListener("click", () => {
        getFormProjectValue(Project);
    });
}

function getFormProjectValue(Project) {
    let projectName = document.getElementById("projectNameProject").value;
    let newProject = new Project(projectName);
    console.log(newProject);
    return newProject;
}

addFormProjectDOM();

export { addFormProjectDOM, getFormProjectValue };