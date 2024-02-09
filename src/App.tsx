import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { Task, addTask } from "./types/task.type";

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [priorityFilter, setPriorityFilter] = useState<string>("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    filterTasksByPriority(priorityFilter);
  }, [tasks, priorityFilter]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
    setFilteredTasks(storedTasks);
  }, []);
  // add task functionality here
  const addTask = (task: addTask): void => {
    const newTask: Task = { id: Date.now(), ...task, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  // delete functionality here
  const deleteTask = (id: number): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  // toggle task functionality here
  const toggleTask = (id: number): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // Edit task functionality here
  const editTask = (id: number, newName: string, newPriority: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, name: newName, priority: newPriority }
          : task
      )
    );
  };
  // filtering functionality here

  const filterTasksByPriority = (priority: string): void => {
    if (priority === "all") {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => task.priority === priority);
      setFilteredTasks(filtered);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <div className="task-form">
          <TaskForm onAdd={addTask} />
        </div>
        <div>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="all">All Priorities</option>
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <div className="task-list"></div>
          <TaskList
            tasks={filteredTasks}
            onDelete={deleteTask}
            onToggle={toggleTask}
            onEdit={editTask}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
