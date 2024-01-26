let toDoArray = []; //Contenere tutti i ToDo
let projectNameArray = []; // Contiene tutti i nomi dei progetti
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
        toDoArray[contatoreLunghezzaToDo] = [[title], [description], [notes], [dueDate], [priority], [projectName]];
        console.log(toDoArray);
        console.table(toDoArray);
    }
}

// REWORK OF classe ToDo
/*
Usando toDoArray[] come con projectNameArray[];
toDoArray[[[], []]]
[[ToDO1], [ToDo2], ...]
[[(ToDO1)[title 0], [description 1], [notes 2], [dueDate 3], [priority 4], [projectName]]]
toDoArray = [ [toDo[0], [1], [2], [3], [4], [5]], [...]];
Complesso all'inizio ma dovrebbe essere più semplice lavorare con questi dati
Lo tengo dato che è utile per visualizzare l'array toDoArray*/

let contatoreLunghezzaProject = -1;

class Project { //CREA IL PROGETTO E MANDA IL NOME NELL'ARRAY
    constructor(projectName) {
        this.projectName = projectName;

        contatoreLunghezzaProject = contatoreLunghezzaProject + 1;
        return projectNameArray[contatoreLunghezzaProject] = projectName;
    }
}

function defultProject() { //Progetto e ToDo di defualt
    let projectDefault = new Project("default");
    let ToDoDefault = new ToDo("Comprare un materasso", "Andare a comprare il prima possibile un nuovo materasso", 
    "Bianco se si riesce", "2024-01-17", "1", "default");
    //console.log(projectDefault);
    console.log(ToDoDefault);
}
function testProject1() { //Progetto e ToDo di defualt
    let projectTest1 = new Project("test1");
    let ToDoTest1 = new ToDo("Prendersi un albero", "Regalo di natale per se stessi", 
    "Albero normale se si riesce", "2024-12-25", "4", "default1");
    //console.log(projectDefault);
    console.log(ToDoTest1);
}

defultProject();
testProject1();

let projectTest2 = new Project("test2");

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