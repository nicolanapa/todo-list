import { projectNameArray, toDoArray } from "./todoProject";

if (!localStorage.getItem("toDo")) {
    populateToDo();
}

if (!localStorage.getItem("project")) {
    populateProject();
}

function populateToDo() {
    localStorage.setItem("toDo", JSON.stringify(toDoArray));
}

function populateProject() {
    localStorage.setItem("project", JSON.stringify(projectNameArray));
}

function setToDoArray() {
    toDoArray = JSON.parse(localStorage.getItem("toDo"));
}

function setProjectArray() {
    projectNameArray = JSON.parse(localStorage.getItem("project"));
}

//  JSON.parse(localStorage.getItem("toDo")))[0][1];
/*
    Con JSON.stringify() e setItem aggiornare il toDo e project alla creazione/edit di un toDo / project
    mettendolo nelle funzioni di get"X"Value
    cambiare le funzioni di display iniziali (showProjectToDo), dai array stessi al JSON.parse(localStorage.getItem("toDo")))[array][1];
    e sovrascrivere toDo e project alla creazione di nuove cose (formToDo, formProject)
    o
    aggiornare toDoArray e projectNameArray con i valori JSON.parse all'avvio e continuare il solito aggiornando anche questi item
*/

export { populateToDo, populateProject, setToDoArray, setProjectArray };