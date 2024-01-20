let ToDoArray = []; //Contenere tutti i ToDo
let projectNameArray = []; // Contiene tutti i nomi dei progetti
//console.log("Length of projectNameArray is " + projectNameArray.length);
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
let contatoreLunghezza = -1;
class Project { //CREA IL PROGETTO E MANDA IL NOME NELL'ARRAY
    constructor(projectName) {
        this.projectName = projectName;
        contatoreLunghezza = contatoreLunghezza + 1;
        return projectNameArray[contatoreLunghezza] = this.projectName;
        //projectNameArray.length = projectNameArray.length + 1;
        //console.log("Length of projectNameArray is " + projectNameArray.length);
        //console.log("projectNameArray ARRAY " + projectNameArray);
        /*if ( projectNameArray.length == 0 || projectNameArray.length == 1 ) {
            projectNameArray[length] = this.projectName;
            
        }
        else {
            projectNameArray[length - 1] = this.projectName;
        }*/
        
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
function defultProject1() { //Progetto e ToDo di defualt
    let projectDefault1 = new Project("default1");
    let ToDoDefault1 = new ToDo("Prendersi un albero", "Regalo di natale per se stessi", 
    "Albero normale se si riesce", "2024-12-25", "4", "default1");
    //console.log(projectDefault);
    console.log(ToDoDefault1);
}

defultProject();
defultProject1();

let projectTest1 = new Project("test1");
let projectTest2 = new Project("test2");
let projectTest3 = new Project("test3");
let projectTest4 = new Project("test4");
/*console.log(projectTest1);
console.log(projectTest2);
console.log(projectTest3);
console.log("Length of projectNameArray is " + projectNameArray.length);*/



//checkDebug_ToDo_ProjectName_ARRAY();

function checkDebug_ToDo_ProjectName_ARRAY() {
    for ( let i = 0; i < projectNameArray.length; i++ ) {
        console.log(projectNameArray[i]);
    }
    for ( let i = 0; i < ToDoArray.length; i++ ) {
        console.log(ToDoArray[i]);
    }
}

//console.log("projectNameArray ARRAY " + projectNameArray);
//console.log(projectNameArray);

//ToDo e progetto di default
export { ToDoArray, ToDo, Project, projectNameArray };