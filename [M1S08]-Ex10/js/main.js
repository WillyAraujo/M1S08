function addTask() {
  newTask = document.querySelector("#taskInput");
  let task = newTask.value.trim();

  if (!task) {
    alert("Digite uma tarefa.");
    return;
  }

  newTask.value = ""; //Limpa o input

  //Criar um novo item (li)
  let newItem = document.createElement("li");
  newItem.classList = "task-item";

  //Criar um span para conter o texto da tarefa
  let taskText = document.createElement("span");
  taskText.textContent = task;
  newItem.appendChild(taskText);

  // Adicionar o novo item à lista de tarefas
  document.getElementById("taskList").appendChild(newItem);

  // Criar novo botão "Concluir"
  let completeButton = document.createElement("button");
  completeButton.classList = "complete-btn";
  completeButton.textContent = "Concluir";
  newItem.appendChild(completeButton); // Faz o botão aparecer na tela

  completeButton.onclick = function () {
    toggleTaskComplete(newItem);
    completeButton.disabled = true;
    completeButton.classList.add("disabled");
  };

  // Criar botão "Excluir"
  let deleteButton = document.createElement("button");
  deleteButton.classList = "del-btn";
  deleteButton.textContent = "Excluir";
  newItem.appendChild(deleteButton);
  deleteButton.onclick = function () {
    deleteTask(newItem);
  };
}

//Ação do botão "Concluir"
function toggleTaskComplete(completed) {
  completed.classList.toggle("completed");
}

//Ação do botão "Excluir"
function deleteTask(newItem) {
    newItem.remove()
}