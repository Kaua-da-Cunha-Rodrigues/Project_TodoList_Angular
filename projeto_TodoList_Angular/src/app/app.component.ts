import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto_TodoList_Angular';
  
  ngOnInit() {
    const taskTitleInput = document.getElementById("task-title") as HTMLInputElement;
    const taskDetailsInput = document.getElementById("task-details") as HTMLInputElement;
    const addTaskBtn = document.getElementById("btn-store") as HTMLButtonElement;
    const taskList = document.getElementById("task-list-group");
       
    
    addTaskBtn.addEventListener("click", (event) => {
      event.preventDefault();

      const taskTitle = taskTitleInput.value.trim();
      const taskDetails = taskDetailsInput.value.trim();

      if (taskTitle !== "" && taskDetails !== "") {
        const listItem = document.createElement("div");
        listItem.className = "list-group-item mb-2 flex-column align-items-center bg-dark text-white border-info-subtle form-check form-switch";

        const titleElement = document.createElement("h5");
        titleElement.className = "mb-1";
        titleElement.textContent = taskTitle;

        const detailsElement = document.createElement("p");
        detailsElement.className = "mb-1 py-4";
        detailsElement.textContent = taskDetails;

        const editBtn = document.createElement("button");
        editBtn.className = "btn btn-secondary";
        editBtn.textContent = "Editar";
        editBtn.addEventListener("click", () => {
          const newTaskTitle = prompt("Editar título:", taskTitle);
          const newTaskDetails = prompt("Editar detalhes:", taskDetails);
          if (newTaskTitle !== null && newTaskDetails !== null) {
            titleElement.textContent = newTaskTitle;
            detailsElement.textContent = newTaskDetails;
          }
        });

        const removeBtn = document.createElement("button");
        removeBtn.className = "btn btn-secondary m-2";
        removeBtn.textContent = "Remover";
        removeBtn.addEventListener("click", () => {
          listItem.classList.add("animate__animated", "animate__backOutDown");
          setTimeout(() => {
            listItem.remove();
          }, 1000);
        });

        const switchContainer = document.createElement("section");
        switchContainer.className = "px-5 mb-3 mt-2 float--right";

        const switchLabel = document.createElement("label");
        switchLabel.className = "form-check-label";
        switchLabel.textContent = "Feito";

        const switchBtn = document.createElement("input");
        switchBtn.className = "px-3 form-check-input form-switch";
        switchBtn.setAttribute("type", "checkbox");
        switchBtn.setAttribute("role", "switch");
        switchBtn.setAttribute("id", "flexSwitchCheckDefault");

        switchBtn.addEventListener("change", () => {
          if (switchBtn.checked) {
            titleElement.classList.add("text-success");
            detailsElement.classList.add("text-success");
            editBtn.style.display = "none";
            switchBtn.classList.add("bg-success");

            taskList?.appendChild(listItem);

          } else {
            taskList?.insertBefore(listItem, taskList.firstChild);
            titleElement.classList.remove("text-success");
            detailsElement.classList.remove("text-success");
            editBtn.style.display = "inline-block";
            removeBtn.style.display = "inline-block";
            switchBtn.classList.remove("bg-success");
          }
        });

        switchContainer.appendChild(switchLabel);
        switchContainer.appendChild(switchBtn);

        listItem.appendChild(titleElement);
        listItem.appendChild(detailsElement);
        listItem.appendChild(editBtn);
        listItem.appendChild(removeBtn);
        listItem.appendChild(switchContainer);

        taskList?.insertBefore(listItem, taskList.lastChild);

        taskTitleInput.value = "";
        taskDetailsInput.value = "";
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  }
}
