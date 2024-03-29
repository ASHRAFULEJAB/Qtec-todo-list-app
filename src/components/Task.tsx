import { FunctionComponent } from "react";
import { TaskProps } from "../types/task.type";

const Task: FunctionComponent<TaskProps> = ({
  task,
  onDelete,
  onToggle,
  onEdit,
}) => {
  let priorityClass = "";
  switch (task.priority.toLowerCase()) {
    case "low":
      priorityClass = "low-priority";
      break;
    case "medium":
      priorityClass = "medium-priority";
      break;
    case "high":
      priorityClass = "high-priority";
      break;
    default:
      priorityClass = "";
  }
  const handleEdit = () => {
    const newName = prompt("Enter new task name:", task.name);
    const newPriority = prompt("Enter new task priority:", task.priority);
    if (newName !== null && newPriority !== null && onEdit) {
      onEdit(task.id, newName, newPriority);
    }
  };

  return (
    <div className={`task-list ${task.completed ? "completed" : ""} `}>
      <div className="task">
        <h3>{task.name}</h3>
        <p>
          Priority: <span className={`${priorityClass}`}>{task.priority}</span>{" "}
        </p>
        <p>Status: {task.completed ? "Completed" : "Not Completed"}</p>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default Task;
