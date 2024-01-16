let myToDo = [];
let project

class ToDo {
    constructor(title, description, /*notes, checklist,*/ dueDate, priority, projectName) {
        this.title = title;
        this.description = description;
        //this.notes = notes;
        //this.checklist = checklist;
        this.dueDate = dueDate;
        this.priority = priority; // 1 a 5 - blu, rosso, verde, giallo, azzurro 
        this.projectName = projectName;
    }
}

class Project {
    constructor(projectName) {
        this.projectName = projectName;
    }
}

function defultProject() {
    let projectDefault = new Project("default");
    let ToDoDefault = new ToDo("Comprare un materasso", "Andare a comprare il prima possibile un nuovo materasso", 
    "17/01/2024", "1", "default");
    console.log(projectDefault);
    console.log(ToDoDefault);
}

defultProject();

//ToDo e progetto di default
export { myToDo, ToDo };