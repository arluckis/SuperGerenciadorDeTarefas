import { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  function onTaskRemove(TaskId) {
    const NewTasks = tasks.filter((task) => task.id != TaskId);
    setTask(NewTasks);
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <ul className="w-96 absolute left-1/2 -translate-x-1/2 ">
      {tasks.map((task) => (
        <li key={tasks.id}>
          <button className=" bg-yellow-400 p-2 text-left w-full mt-2 rounded-md ">
            {task.taskText}
          </button>
          <button className="text-white" onClick={() => onTaskRemove(task.id)}>
            remover tarefa
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
