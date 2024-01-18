let ToDoArray = []; //Contenere tutti i ToDo
let projectNameArray = []; // Contiene tutti i nomi dei progetti

class ToDo { //CREA IL TODO E BASTA
    constructor(title, description, notes, /*checklist,*/ dueDate, priority, projectName) {
        this.title = title;
        this.description = description;
        this.notes = notes;
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
        projectNameArray.length = projectName.length + 1;
        projectNameArray[length] = this.projectName;
        //this.addProjectNameArray();
        
    }

    //addProjectNameArray() {
        
    //}
}

function defultProject() { //Progetto e ToDo di defualt
    let projectDefault = new Project("default");
    let ToDoDefault = new ToDo("Comprare un materasso", "Andare a comprare il prima possibile un nuovo materasso", 
    "Bianco se si riesce", "2024-01-17", "1", "default");
    //console.log(projectDefault);
    console.log(ToDoDefault);
}

defultProject();

let projectTest1 = new Project("test1");
let projectTest2 = new Project("test2");
let projectTest3 = new Project("test3");

console.log(projectTest1);
console.log(projectTest2);
console.log(projectTest3);
console.log(projectNameArray.length);



checkDebugToDoProjectNameARRAY();

function checkDebugToDoProjectNameARRAY() {
    for ( let i = 0; i < projectNameArray.length; i++ ) {
        console.log(projectNameArray[i]);
    }
    for ( let i = 0; i < ToDoArray.length; i++ ) {
        console.log(ToDoArray[i]);
    }
}

//ToDo e progetto di default
export { ToDoArray, ToDo, Project, projectNameArray };