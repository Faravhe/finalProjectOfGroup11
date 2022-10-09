//please review
function createTaskHTML (task, description,assignedTo, dueDate, status){
const html = 
<li class="list-group-item">
<div class="d-flex w-100 mt-2 justify-content-between align-items-center">
    <h5>${task}</h5>
    <span class="badge badge-danger">${statusOfTheProject}</span>
</div>
<div class="d-flex w-100 mb-3 justify-content-between">
    <small>Assigned To: ${assignedTo}</small>
    <small>dueDate: ${21/11/2022}</small>
</div>
<p>${description}</p>
</li>

}
//done by nataly start of task 6
//Nataly/banchi/etiopiawork
class TaskManager {
    constructor (tasks){
      this.task = "tasks";
      const trash = {
      id: trash,
      name: 'Take out the trash',
      description: 'Take out the trash to the rental home',
      assignedTo: 'Ethiopia',
      status: 'On progress'  
}; 
    const cook = {
      id: cook,
      name: 'Cook Dinner',
      description: 'Prepare a healthy serving of salads for the family tonight',
      assignedTo: '',
      status: 'Completed'
  }
    const laundary = {
      id: laundary, 
      name: 'laundary',
      description: 'do launday on saturday',
      assignTo: 'Banchi',
      status: 'on Progress',
  }
      
    }
  };
  class TaskManager {
      constructor(currentId = 0) {
        this.currentId = currentId;
        this.tasks = [];    }
    
      addTask(task, description, assignedTo, dueDate, status) {
        this.tasks.push({
          Id: this.currentId++,
          tasks: task,
          description: description,
          assignedTo: assignedTo,
          dueDate: dueDate,
          status: 'on Progress',
        });
      
      }
  }