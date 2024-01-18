let ToDoArray = []; //Contenere tutti i ToDo
let projectNameArray = []; // Contiene tutti i progetti

class ToDo { //CREA IL TODO E BASTA
    constructor(title, description, /*notes, checklist,*/ dueDate, priority, projectName) {
        this.title = title;
        this.description = description;
        //this.notes = notes;
        //this.checklist = checklist;
        this.dueDate = dueDate;
        this.priority = priority; // 1 a 5 - blu, rosso, verde, giallo, azzurro 
                                  // 1 più priorità, 5 meno
        this.projectName = projectName;
    }
}

class Project { //CREA IL PROGETTO E MANDA IL NOME NELL'ARRAY
    constructor(projectName) {
        this.projectName = projectName;
        //this.addProjectNameArray();
        projectNameArray[length] = this.projectName;
    }

    //addProjectNameArray() {
        
    //}
}

function defultProject() { //Progetto e ToDo di defualt
    let projectDefault = new Project("default");
    let ToDoDefault = new ToDo("Comprare un materasso", "Andare a comprare il prima possibile un nuovo materasso", 
    "2024-01-17", "1", "default");
    console.log(projectDefault);
    console.log(ToDoDefault);
    
}

defultProject();

console.log(ToDoArray);
console.log(projectNameArray[0]);
console.log(projectNameArray[1]);
//ToDo e progetto di default
export { ToDoArray, ToDo, Project, projectNameArray };