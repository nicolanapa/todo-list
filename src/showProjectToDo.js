import { toDoArray, projectNameArray, populateToDo } from "./todoProject";
import { priorityChecker } from "./formToDo";

let mainContainer = document.querySelector(".main-container");

function checkPriority(newToDoContainer, array) {
	if (toDoArray[array][4] == 1) {
		newToDoContainer.style.cssText = "background-color: #3366FF; color: white;";
	} else if (toDoArray[array][4] == 2) {
		newToDoContainer.style.cssText = "background-color: #B1CAF6; color: black;";
	} else if (toDoArray[array][4] == 3) {
		newToDoContainer.style.cssText = "background-color: #FF6666; color: white;";
	} else if (toDoArray[array][4] == 4) {
		newToDoContainer.style.cssText = "background-color: #D7A6A7; color: black;";
	} else if (toDoArray[array][4] == 5) {
		newToDoContainer.style.cssText = "background-color: #FFF9C6; color: blue;";
	}
}

function showProject(arrayProject) {
	let newProjectContainer = document.createElement("div");
	newProjectContainer.setAttribute("class", "projectContainer");
	mainContainer.appendChild(newProjectContainer);

	let newProject = document.createElement("h2");
	newProject.textContent = projectNameArray[arrayProject];
	newProject.setAttribute("class", "projectTitle");
	newProjectContainer.appendChild(newProject);

	function showToDo(array) {
		let newToDoContainer = document.createElement("div");
		newToDoContainer.setAttribute("class", "toDoContainer");
		checkPriority(newToDoContainer, array);
		newProjectContainer.appendChild(newToDoContainer);

		let titleDueDateContainer = document.createElement("div");
		titleDueDateContainer.setAttribute("class", "titleDueDateContainer");
		newToDoContainer.appendChild(titleDueDateContainer);

		let newToDoTitle = document.createElement("h5");
		newToDoTitle.textContent = toDoArray[array][0];
		newToDoTitle.setAttribute("class", "toDoTitle");
		titleDueDateContainer.appendChild(newToDoTitle);

		let newToDoDueDate = document.createElement("p");
		newToDoDueDate.textContent = toDoArray[array][3];
		newToDoDueDate.setAttribute("class", "toDoDueDate");
		titleDueDateContainer.appendChild(newToDoDueDate);
		allButtons(newToDoTitle, newToDoDueDate, newToDoContainer, array);
	}

	for (let i2 = 0; i2 < toDoArray.length; i2++) {
		//APPENDS ALL TODOS OF THE SAME PROJECT
		if (projectNameArray[arrayProject] == toDoArray[i2][5]) {
			showToDo(i2);
		}
	}
}

function allButtons(newToDoTitle, newToDoDueDate, newToDoContainer, array) {
	let viewButton = document.createElement("button");
	viewButton.textContent = "View";
	viewButton.setAttribute("class", "littleButtons");

	let editButton = document.createElement("button");
	editButton.textContent = "Edit";
	editButton.setAttribute("class", "littleButtons");

	let deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.setAttribute("class", "littleButtons");

	newToDoContainer.appendChild(viewButton);
	newToDoContainer.appendChild(editButton);
	newToDoContainer.appendChild(deleteButton);

	viewButton.addEventListener("click", () => {
		fullViewToDo(array);
	});

	editButton.addEventListener("click", () => {
		editToDo(newToDoTitle, newToDoDueDate, newToDoContainer, array);
	});

	deleteButton.addEventListener("click", () => {
		newToDoContainer.remove(); // DELETE BUTTON
		toDoArray[array] = 0; //FARE FUNZIONE CHE RIAGGIORNA L'ARRAY IN FUTURO
		//console.log(toDoArray[array]);
		populateToDo();
		console.table(toDoArray);
	});
}

function fullViewToDo(array) {
	// VIEW BUTTON
	let formToDoContainer = document.querySelector("#form-container");

	let dialogToDoContainer = document.createElement("dialog");
	dialogToDoContainer.setAttribute("id", "dialog-form-project");
	let formToDoStesso = document.createElement("form");
	formToDoStesso.setAttribute("method", "dialog");
	formToDoStesso.setAttribute("action", "#");
	formToDoStesso.setAttribute("class", "toDoFullView");
	formToDoContainer.appendChild(dialogToDoContainer);
	dialogToDoContainer.appendChild(formToDoStesso);

	checkPriority(formToDoStesso, array);

	let titolo = document.createElement("div");
	titolo.textContent = "Titolo: ";
	titolo.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(titolo);

	let newToDoTitle = document.createElement("h5");
	newToDoTitle.textContent = toDoArray[array][0];
	newToDoTitle.setAttribute("class", "toDoTitle");
	newToDoTitle.style.cssText = "font-size: calc(1rem + 3px);";
	formToDoStesso.appendChild(newToDoTitle);

	let descrizione = document.createElement("div");
	descrizione.textContent = "Descrizione: ";
	descrizione.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(descrizione);

	let newToDoDescription = document.createElement("p");
	newToDoDescription.textContent = toDoArray[array][1];
	newToDoTitle.setAttribute("class", "toDoDescription");
	formToDoStesso.appendChild(newToDoDescription);

	let note = document.createElement("div");
	note.textContent = "Notes: ";
	note.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(note);

	let newToDoNotes = document.createElement("p");
	newToDoNotes.textContent = toDoArray[array][2];
	newToDoNotes.setAttribute("class", "toDoNotes");
	formToDoStesso.appendChild(newToDoNotes);

	let scadenza = document.createElement("div");
	scadenza.textContent = "DueDate: ";
	scadenza.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(scadenza);

	let newToDoDueDate = document.createElement("p");
	newToDoDueDate.textContent = toDoArray[array][3];
	newToDoDueDate.setAttribute("class", "toDoDueDate");
	newToDoDueDate.style.cssText = "font-size: calc(1rem + 1px);";
	formToDoStesso.appendChild(newToDoDueDate);

	let priorità = document.createElement("div");
	priorità.textContent = "Priorità (1 più, 5 meno): ";
	priorità.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(priorità);

	let newToDoPriority = document.createElement("input");
	newToDoPriority.setAttribute("type", "range");
	newToDoPriority.setAttribute("min", "1");
	newToDoPriority.setAttribute("max", "5");
	newToDoPriority.setAttribute("id", "newpriority");
	newToDoPriority.setAttribute("name", "newpriority");
	newToDoPriority.setAttribute("placeholder", "1/2/3/4/5");
	newToDoPriority.setAttribute("value", toDoArray[array][4]);
	formToDoStesso.appendChild(newToDoPriority);
	newToDoPriority.disabled = true;

	let progettoNome = document.createElement("div");
	progettoNome.textContent = "Project Name: ";
	progettoNome.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(progettoNome);

	let newToDoProjectName = document.createElement("h5");
	newToDoProjectName.textContent = toDoArray[array][5];
	newToDoProjectName.setAttribute("class", "toDoProjectName");
	formToDoStesso.appendChild(newToDoProjectName);

	function submitButtonForm() {
		let submitButton = document.createElement("button");
		submitButton.setAttribute("id", "submitButton");
		submitButton.setAttribute("type", "submit");
		submitButton.textContent = "Indietro";
		submitButton.style.margin = "25px 0 -10px 0";

		formToDoStesso.appendChild(submitButton);
	}

	submitButtonForm();
	dialogToDoContainer.showModal();
}

function editToDo(newToDoTitle, newToDoDueDate, newToDoContainer, array) {
	// EDIT BUTTON
	let formToDoContainer = document.querySelector("#form-container");

	let dialogToDoContainer = document.createElement("dialog");
	dialogToDoContainer.setAttribute("id", "dialog-form-project");
	let formToDoStesso = document.createElement("form");
	formToDoStesso.setAttribute("method", "dialog");
	formToDoStesso.setAttribute("action", "#");
	formToDoStesso.setAttribute("class", "toDoFullView");
	formToDoContainer.appendChild(dialogToDoContainer);
	dialogToDoContainer.appendChild(formToDoStesso);

	checkPriority(formToDoStesso, array);

	let titolo = document.createElement("div");
	titolo.textContent = "Titolo: ";
	titolo.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(titolo);

	let newToDoTitleInput = document.createElement("input");
	newToDoTitleInput.setAttribute("value", toDoArray[array][0]);
	newToDoTitleInput.setAttribute("id", "toDoTitle");
	newToDoTitleInput.setAttribute("name", "toDoTitle");
	newToDoTitleInput.style.cssText = "font-size: calc(1rem + 3px);";
	formToDoStesso.appendChild(newToDoTitleInput);

	let descrizione = document.createElement("div");
	descrizione.textContent = "Descrizione: ";
	descrizione.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(descrizione);

	let newToDoDescriptionInput = document.createElement("textarea");
	newToDoDescriptionInput.textContent = toDoArray[array][1];
	newToDoDescriptionInput.setAttribute("cols", 40);
	newToDoDescriptionInput.setAttribute("rows", 5);
	newToDoDescriptionInput.setAttribute("id", "toDoDescription");
	newToDoDescriptionInput.setAttribute("name", "toDoDescription");
	formToDoStesso.appendChild(newToDoDescriptionInput);

	let note = document.createElement("div");
	note.textContent = "Notes: ";
	note.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(note);

	let newToDoNotesInput = document.createElement("textarea");
	newToDoNotesInput.textContent = toDoArray[array][2];
	newToDoNotesInput.setAttribute("cols", 40);
	newToDoNotesInput.setAttribute("rows", 3);
	newToDoNotesInput.setAttribute("id", "toDoNotes");
	newToDoNotesInput.setAttribute("name", "toDoNotes");
	formToDoStesso.appendChild(newToDoNotesInput);

	let scadenza = document.createElement("div");
	scadenza.textContent = "DueDate: ";
	scadenza.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(scadenza);

	let newToDoDueDateInput = document.createElement("input");
	newToDoDueDateInput.setAttribute("type", "date");
	newToDoDueDateInput.setAttribute("min", "2000-01-01");
	newToDoDueDateInput.setAttribute("max", "2099-12-31");
	newToDoDueDateInput.setAttribute("value", toDoArray[array][3]);
	newToDoDueDateInput.setAttribute("id", "toDoDueDate");
	newToDoDueDateInput.setAttribute("name", "toDoDueDate");
	newToDoDueDateInput.style.cssText = "font-size: calc(1rem + 1px);";
	formToDoStesso.appendChild(newToDoDueDateInput);

	let priorità = document.createElement("div");
	priorità.textContent = "Priorità (1 più, 5 meno): ";
	priorità.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(priorità);

	let newToDoPriorityInput = document.createElement("input");
	newToDoPriorityInput.setAttribute("type", "range");
	newToDoPriorityInput.setAttribute("min", "1");
	newToDoPriorityInput.setAttribute("max", "5");
	newToDoPriorityInput.setAttribute("id", "newpriority");
	newToDoPriorityInput.setAttribute("name", "newpriority");
	newToDoPriorityInput.setAttribute("placeholder", "1/2/3/4/5");
	newToDoPriorityInput.setAttribute("value", toDoArray[array][4]);
	formToDoStesso.appendChild(newToDoPriorityInput);
	priorityChecker(newToDoPriorityInput);

	let progettoNome = document.createElement("div");
	progettoNome.textContent = "Project Name (can't change it): ";
	progettoNome.setAttribute("class", "toDoSpecificatore");
	formToDoStesso.appendChild(progettoNome);

	// PROJECTNAME Select creation
	function projectNameSelectForm() {
		let newToDoProjectName = document.createElement("select");
		newToDoProjectName.setAttribute("id", "toDoProjectName");
		newToDoProjectName.setAttribute("name", "toDoProjectName");
		newToDoProjectName.setAttribute("disabled", "disabled"); //remove when trying to make it work
		formToDoStesso.appendChild(newToDoProjectName);

		function projectNameArrayOption() {
			// CHANGING PROJECT NOT WORKING AS FOR NOW
			for (let i = 0; i < projectNameArray.length; i++) {
				let projectNameOption = document.createElement("option");
				projectNameOption.setAttribute("value", projectNameArray[i]);
				if (projectNameArray[i] == toDoArray[array][5]) {
					projectNameOption.setAttribute("selected", "selected");
					//projectNameOption.setAttribute("disabled", "disabled");
				}
				projectNameOption.textContent = projectNameArray[i];
				newToDoProjectName.appendChild(projectNameOption);
			}
		}
		projectNameArrayOption();
	}

	projectNameSelectForm();

	function submitButtonForm() {
		let submitButton = document.createElement("button");
		submitButton.setAttribute("id", "submitButton");
		submitButton.setAttribute("aria-label", "close");
		submitButton.textContent = "Salva";
		submitButton.style.margin = "25px 0 -10px 0";

		formToDoStesso.appendChild(submitButton);

		function editedToDoChanger(newToDoTitle, newToDoDueDate, newToDoContainer, array) {
			newToDoTitle.textContent = toDoArray[array][0];
			newToDoDueDate.textContent = toDoArray[array][3];
			checkPriority(newToDoContainer, array);
		}

		submitButton.addEventListener("click", (e) => {
			e.preventDefault();
			console.log("submit button clicked");
			getEditValue(array);
			editedToDoChanger(newToDoTitle, newToDoDueDate, newToDoContainer, array);
			dialogToDoContainer.remove();
		});
	}
	submitButtonForm();
	dialogToDoContainer.showModal();
}

function getEditValue(array) {
	// GET EDIT VALUE
	toDoArray[array][0] = String(document.getElementById("toDoTitle").value);
	toDoArray[array][1] = String(document.getElementById("toDoDescription").value);
	toDoArray[array][2] = String(document.getElementById("toDoNotes").value);
	toDoArray[array][3] = String(document.getElementById("toDoDueDate").value);
	toDoArray[array][4] = String(document.getElementById("newpriority").value);
	toDoArray[array][5] = String(document.getElementById("toDoProjectName").value); //SE IN FUTURO PUOI CAMBIARE PROGETTO

	console.log(document.getElementById("newpriority").value);
	console.log(array);
	console.log(toDoArray[array]);
	console.table(toDoArray);

	populateToDo();
}

function showAllProjects() {
	// Shows all the projects at startup, not at new todos/projects
	for (let i = 0; i < projectNameArray.length; i++) {
		showProject(i);
	}
}

showAllProjects();

export { showProject, showAllProjects, checkPriority, allButtons };
