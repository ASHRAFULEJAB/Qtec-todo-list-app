import { FunctionComponent } from "react";
import { TaskListProps } from "../types/task.type";
import Task from "./Task";

const TaskList: FunctionComponent<TaskListProps> = ({
  tasks,
  onDelete,
  onToggle,
  onEdit,
}) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <div className="task-total">Total Tasks: {totalTasks}</div>
      <div className="task-total">Completed Tasks: {completedTasks}</div>
      <div className="task-container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
