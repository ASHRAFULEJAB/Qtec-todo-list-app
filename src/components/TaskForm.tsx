import React, { useState, ChangeEvent, FormEvent } from "react";

interface TaskFormProps {
  onAdd: (task: { name: string; priority: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [name, setName] = useState<string>("");
  const [priority, setPriority] = useState<string>("low");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name, priority });
    setName("");
    setPriority("low");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={name}
        onChange={handleNameChange}
      />
      <select value={priority} onChange={handlePriorityChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
