import React from "react";

interface TaskProps {
  task: {
    id: number;
    name: string;
    priority: string;
    completed: boolean;
  };
  onDelete: (taskId: number) => void;
  onToggle: (taskId: number) => void;
  onEdit: (taskId: number, newName: string, newPriority: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete, onToggle, onEdit }) => {
  const handleEdit = () => {
    const newName = prompt("Enter new task name:", task.name);
    const newPriority = prompt("Enter new task priority:", task.priority);
    if (newName && newPriority) {
      onEdit(task.id, newName, newPriority);
    }
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <h3>{task.name}</h3>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.completed ? "Completed" : "Not Completed"}</p>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;
