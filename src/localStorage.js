import { projectNameArray, toDoArray } from "./todoProject";

if (!localStorage.getItem("title") && !localStorage.getItem("description")
 && !localStorage.getItem("notes") && !localStorage.getItem("dueDate")
 && !localStorage.getItem("priority") && !localStorage.getItem("projectName")) {
    populateToDo();
}

if (!localStorage.getItem("project")) {
    populateProject();
}

function populateToDo() {
    for ( let i = 0; i < toDoArray.length; i++ ) {
        let arrayIndex = toDoArray[i];
        console.log(arrayIndex);
        localStorage.setItem("title", JSON.stringify(toDoArray));
        localStorage.setItem("description", JSON.stringify(arrayIndex[1]));
        localStorage.setItem("notes", JSON.stringify(arrayIndex[2]));
        localStorage.setItem("dueDate", JSON.stringify(arrayIndex[3]));
        localStorage.setItem("priority", JSON.stringify(arrayIndex[4]));
        localStorage.setItem("projectName", JSON.stringify(arrayIndex[5]));
    }
}

function populateProject() {
    localStorage.setItem("project", JSON.stringify(projectNameArray));
}