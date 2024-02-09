export type Task = {
  id: number;
  name: string;
  priority: string;
  completed: boolean;
};

export type TaskProps = {
  task: {
    id: number;
    name: string;
    priority: string;
    completed: boolean;
  };
  onDelete: (taskId: number) => void;
  onToggle: (taskId: number) => void;
  onEdit: (taskId: number, newName: string, newPriority: string) => void;
};

export interface TaskFormProps {
  onAdd: (task: { name: string; priority: string }) => void;
}

export type TaskListProps = {
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
  ) => void | undefined;
};

export type addTask = { name: string; priority: string };
