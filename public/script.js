async function fetchTasks() {
    const res = await fetch('/tasks');
    const tasks = await res.json();
    renderTasks(tasks);
  }
  
  async function addTask() {
    const input = document.getElementById('task-input');
    const taskText = input.value;
    if (taskText) {
      const res = await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: taskText }),
      });
      const newTask = await res.json();
      renderTask(newTask);
      input.value = '';
    }
  }
  
  function renderTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(renderTask);
  }
  
  function renderTask(task) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="edit" onclick="editTask(${task.id})">Edit</button>
        <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  }
  
  async function deleteTask(id) {
    await fetch(`/tasks/${id}`, { method: 'DELETE' });
    fetchTasks();
  }
  
  async function editTask(id) {
    const newText = prompt("Edit task:");
    if (newText) {
      await fetch(`/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newText }),
      });
      fetchTasks();
    }
  }
  
  // Fetch tasks on load
  fetchTasks();
  