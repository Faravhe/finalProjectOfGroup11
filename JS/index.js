const tasks = []
   tasks.push({name: "task1", description: "", priority: "low", expiration: ""})
   tasks.push({name: "task2", description: "", priority: "medium", expiration: ""})
   tasks.push({name: "task3", description: "", priority: "high", expiration: ""})
   tasks.push({name: "task4", description: "", priority: "low", expiration: ""})
   tasks.push({name: "task5", description: "", priority: "medium", expiration: ""})
   renderTasks();
   function myFunction(e) {
     e.preventDefault();
     let taskId = document.getElementById("task-id").value
     let newTask = {
       name: document.getElementById("task-name").value,
       description: document.getElementById("task-description").value,
       priority: document.getElementById("task-priority").value,
       expiration: document.getElementById("task-expiration").value,
     }
     if(taskId != 'new') {
       tasks[taskId] = newTask;
     } else {
       tasks.push(newTask);
     }
     closeModal();
     renderTasks();
  }

  function submittedForm() {
    alert("The form was submitted");
  };

  function clearForm() {
    document.getElementById("task-name").value = "";
    document.getElementById("task-description").value = "";
    document.getElementById("task-priority").value = "";
    document.getElementById("task-expiration").value = "";
    document.getElementById("task-id").value = "new";
  }

  function openModal(title) {
    let modalTitle = document.getElementById("modal_card_title");
    modalTitle.innerHTML = title;
    let modal = document.getElementById("modal");
    modal.classList.add("show-modal");
  }

  function closeModal(title) {
    clearForm();
    let element = document.getElementById("modal");
    element.classList.remove("show-modal");
  }

  function editTask(e) {
    let taskId = e.target.getAttribute("task-id");
    document.getElementById("task-name").value = tasks[taskId].name;
    document.getElementById("task-description").value = tasks[taskId].description;
    document.getElementById("task-priority").value = tasks[taskId].priority;
    document.getElementById("task-expiration").value = tasks[taskId].expiration;
    document.getElementById("task-id").value = taskId;
    openModal("Edit " + tasks[taskId].name);
  }

  function removeTask(e) {
    let taskId = e.target.getAttribute("task-id");
    tasks.splice(taskId, 1);
    renderTasks();
  }

  function getCard(index) {
    let card = document.createElement("div");
    card.classList.add('card');

    let cardText = getCardText(index);
    let cardPriority = getCardPriority(index);
    let cardActions = getCardActions(index);

    card.appendChild(cardText);
    card.appendChild(cardPriority);
    card.appendChild(cardActions);
    return card;
  }

  function getCardText(index) {
    let cardText = document.createElement("div");
    cardText.classList.add('card_text');
    let textnode = document.createTextNode(tasks[index].name);
    cardText.appendChild(textnode);
    return cardText;
  }

  function getCardPriority(index) {
    let cardPriority = document.createElement("div");
    cardPriority.classList.add('card_priority');
    let priority = document.createElement("div");
    priority.classList.add('priority');
    priority.classList.add(tasks[index].priority);
    let priorityText = document.createTextNode(tasks[index].priority);
    priority.appendChild(priorityText);
    cardPriority.appendChild(priority);
    return cardPriority;
  }

  function getCardActions(index) {
    let cardActions = document.createElement("div");
    cardActions.classList.add('card_actions');
    let editButton = document.createElement("button");
    editButton.onclick = editTask
    editButton.setAttribute("task-id", index);
    editButton.classList.add('button');
    editButton.classList.add('default');
    editButton.classList.add('edit');
    let editButtonText = document.createTextNode('Edit');
    editButton.appendChild(editButtonText);
    let deleteButton = document.createElement("button");
    deleteButton.onclick = removeTask
    deleteButton.setAttribute("task-id", index);
    deleteButton.classList.add('button');
    deleteButton.classList.add('danger');
    let deleteButtonText = document.createTextNode('Delete');
    deleteButton.appendChild(deleteButtonText);
    cardActions.appendChild(editButton);
    cardActions.appendChild(deleteButton);
    return cardActions;
  }

  function renderTasks() {
    const listBody = document.getElementById('list-body');
    listBody.innerHTML = '';
    for (const index in tasks) {
      let card = getCard(index);
      listBody.appendChild(card);
    }
  }