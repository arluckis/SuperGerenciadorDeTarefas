import BasicLogo from "../components/BasicLogo";
import MenuTop from "../components/MenuTop";
import TaskList from "../components/TaskList";

function TasksPage() {
  return (
    <div className="w-screen h-screen bg-neutral-900 font-light">
      <div className="w-screen h-1/2 relative flex lg:h-20">
        <MenuTop />
        <BasicLogo />
      </div>
      <div className=" bottom-0 relative"></div>
      <TaskList />
    </div>
  );
}

export default TasksPage;
