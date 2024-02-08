import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

interface Task {
  id: number;
  name: string;
  priority: string;
  completed: boolean;
}

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: { name: string; priority: string }): void => {
    setTasks([...tasks, { id: Date.now(), ...task, completed: false }]);
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (
    id: number,
    newName: string,
    newPriority: string
  ): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, name: newName, priority: newPriority }
          : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;
