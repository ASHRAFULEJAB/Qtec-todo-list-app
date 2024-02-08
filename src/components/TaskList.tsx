import React from "react";
import Task from "./Task";

interface TaskListProps {
  tasks: {
    id: number;
    name: string;
    priority: string;
    completed: boolean;
  }[];
  onDelete: (taskId: number) => void;
  onToggle: (taskId: number) => void;
  onEdit?: (
    taskId: number,
    newName: string,
    newPriority: string
  ) => void | undefined; // Make onEdit prop optional
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDelete,
  onToggle,
  onEdit,
}) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <div>Total Tasks: {totalTasks}</div>
      <div>Completed Tasks: {completedTasks}</div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit} // Pass onEdit function to Task component
        />
      ))}
    </div>
  );
};

export default TaskList;
