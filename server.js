const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8090;

// Store tasks in memory (temporary storage)
let tasks = [];

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  task.id = Date.now(); // Unique ID for each task
  tasks.push(task);
  res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].text = req.body.text;
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).send("Task not found");
  }
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
