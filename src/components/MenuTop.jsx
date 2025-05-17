import { useNavigate } from "react-router-dom";

function MenuTop() {
  const navigate = useNavigate();

  function TasksPage() {
    navigate(`/task`);
  }

  function addTasksPage() {
    navigate(`/`);
  }
  return (
    <div className=" text-white ">
      <ul className="flex space-x-4 text-xs mt-7 absolute left-1/2 -translate-x-1/2 lg:left-3/4 md:text-base ">
        <li className="hover:text-yellow-500 shrink-0">
          <button onClick={() => addTasksPage()}>Adicionar Tarefas</button>
        </li>
        <li className="hover:text-yellow-500 shrink-0 ">
          <button onClick={() => TasksPage()}>Suas Tarefas</button>
        </li>
      </ul>
    </div>
  );
}

export default MenuTop;
