import { useEffect, useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import { v4 } from "uuid";

function TaskInput() {
  const frasesPlaceholder = [
    "Precisa lembrar mais tarde de algo?",
    "Anote sua próxima tarefa!",
    "Digite algo importante... ",
    "Qual seu próximo compromisso?",
    "O que você não pode esquecer?",
    "Registre aqui sua ideia! ",
    "Tem algo para lembrar?",
  ];

  const sortearIndice = () => {
    return Math.floor(Math.random() * frasesPlaceholder.length);
  };

  const [frase, setFrase] = useState("");

  useEffect(() => {
    const indiceAleatorio = sortearIndice();
    setFrase(frasesPlaceholder[indiceAleatorio]);
  }, []);

  const [taskText, setTaskText] = useState("");
  //const [taskPriority, setTaskPriority] = useState("");
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function onAddTask(taskText) {
    const NewTask = {
      id: v4(),
      taskText,
      taskPriority: 1,
    };
    setTask([...tasks, NewTask]);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      console.log("Enter pressionado!");
      // Coloque aqui a função que deseja executar
    }
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="flex justify-center items-center relative top-0 mt-28  ">
      <div className="group">
        <div
          className="animate-pulse  transition-opacity ease-in-out   opacity-0
        group-focus-within:bg-[#ffc800] rounded-lg blur-md h-10"
        ></div>
        <div className="relative -top-[2.5rem] p-[1px] bg-[#ffc800]  rounded-lg">
          <input
            type="text"
            value={taskText}
            className="bg-neutral-800 px-4 outline-none text-sm text-white rounded-lg appearance-none h-10 w-[300px] shadow-md placeholder:italic md:w-[450px] lg:w-[600px] md:text-base"
            placeholder={frase}
            onChange={(event) => {
              setTaskText(event.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button
            className="h-10 w-10 p-2  bg-yellow-500 rounded-lg ml-2 absolute shadow-md max-[414px]:hidden hover:bg-yel"
            onClick={() => {
              onAddTask(taskText);
              setTaskText("");
            }}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TaskInput;
