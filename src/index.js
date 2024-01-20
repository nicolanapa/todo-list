import "./style.css";
import { myToDo, ToDo, Project, projectNameArray } from "./todoProject";
import { addFormDOM } from "./form";

function getFormValue() {
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

//
//Testare sempre robe con console.log
//