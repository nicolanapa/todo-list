import { populateProject, populateToDo, setProjectArray, setToDoArray } from "./localStorage";

let toDoArray = []; //Contenere tutti i ToDo
let projectNameArray = []; // Contiene tutti i nomi dei progetti
if (localStorage.getItem("toDo")) {
    setToDoArray();
}
if (localStorage.getItem("project")) {
    setProjectArray();
}
//console.log("Length of projectNameArray is " + projectNameArray.length);
let contatoreLunghezzaToDo = -1;
class ToDo { //CREA IL TODO E BASTA
    constructor(title, description, notes, /*checklist,*/ dueDate, priority, projectName) {
        this.title = title;
        this.description = description;
        this.notes = notes;
        //this.checklist = checklist;
        this.dueDate = dueDate;
        this.priority = priority; // 1 a 5 - blu, azzurro, rosso, rosso chiaro, giallo chiaro
                                  // 1 più priorità, 5 meno
        this.projectName = projectName;

        contatoreLunghezzaToDo = contatoreLunghezzaToDo + 1;
        toDoArray[contatoreLunghezzaToDo] = [title, description, notes, dueDate, priority, projectName];
        console.log(toDoArray);
        console.table(toDoArray);
        
        populateToDo();
    }
}

let contatoreLunghezzaProject = -1;

class Project { //CREA IL PROGETTO E MANDA IL NOME NELL'ARRAY
    constructor(projectName) {
        this.projectName = projectName;

        contatoreLunghezzaProject = contatoreLunghezzaProject + 1;
        projectNameArray[contatoreLunghezzaProject] = projectName;

        populateProject();
    }
}

function defultProject() { //Progetto e ToDo di defualt
    let projectDefault = new Project("default");
    let ToDoDefault = new ToDo("Comprare un materasso", "Andare a comprare il prima possibile un nuovo materasso", 
    "Bianco se si riesce", "2024-01-17", "1", "default");
    //console.log(ToDoDefault);
    //console.log(toDoArray[0][1]);
    ToDoDefault = new ToDo("Andare a fare la spesa", "Comprare cibario", 
    "Latte", "2024-02-10", "2", "default");
    ToDoDefault = new ToDo("Andare a fare la spesa", "Comprare cibario", 
    "Latte", "2024-02-10", "3", "default");
    ToDoDefault = new ToDo("Andare a fare la spesa", "Comprare cibario", 
    "Latte", "2024-02-10", "4", "default");
    ToDoDefault = new ToDo("Andare a fare la spesa", "Comprare cibario", 
    "Latte", "2024-02-10", "5", "default");
    //console.log(projectDefault);
    //console.log(ToDoDefault);
}
function testProject1() { //Progetto e ToDo di defualt
    let projectTest1 = new Project("test1");
    let ToDoTest1 = new ToDo("Prendersi un albero", "Regalo di natale per se stessi", 
    "Albero normale se si riesce", "2024-12-25", "4", "test1");
    ToDoTest1 = new ToDo("Prendersi un albero", "Regalo di natale per se stessi", 
    "Albero normale se si riesce", "2024-12-25", "1", "test1");
    //console.log(projectDefault);
    //console.log(ToDoTest1);
}

defultProject();
testProject1();

let projectTest2 = new Project("test2");

function testProject3() { //Progetto e ToDo di defualt
    let projectTest3 = new Project("test3");
    let ToDoTest3 = new ToDo("Prendersi un albero", "Regalo di natale per se stessi", 
    "Albero normale se si riesce", "2025-05-15", "4", "test3");
    ToDoTest3 = new ToDo("Prendersi un albero", "Regalo di natale per se stessi", 
    "Albero normale se si riesce", "2024-06-20", "1", "test3");
    ToDoTest3 = new ToDo("Prendersi un albero", "Regalo di natale per se stessi", 
    "Albero normale se si riesce", "2024-12-17", "3", "test3");
    ToDoTest3 = new ToDo("Prendersi un albero", "Regalo di natale per se stessi", 
    "Albero normale se si riesce", "2024-05-30", "5", "test3");
    ToDoTest3 = new ToDo("Prendersi un albero", "Regalo di natale per se stessi", 
    "Albero normale se si riesce", "2024-06-02", "2", "test3");
    ToDoTest3 = new ToDo("Prendersi un albero", "Regalo di natale per se stessi", 
    "Albero normale se si riesce", "2025-01-08", "2", "test3");
}

testProject3();

//console.log("Length of projectNameArray is " + projectNameArray.length);

// Function that checks ToDo and ProjectName arrays and outputs every value
function checkDebug_ToDo_ProjectName_ARRAY() {
    for ( let i = 0; i < projectNameArray.length; i++ ) {
        console.log(projectNameArray[i]);
    }
    for ( let i = 0; i < toDoArray.length; i++ ) {
        console.log(toDoArray[i]);
    }
}

//console.log("projectNameArray ARRAY " + projectNameArray);
//console.log(projectNameArray);

export { toDoArray, ToDo, Project, projectNameArray };