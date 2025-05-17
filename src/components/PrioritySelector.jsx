function PrioritySelector() {
  return (
    <div>
      <h1 className="text-white text-center mb-8 font-medium">
        Defina a prioridade de sua tarefa
      </h1>
      <ul className="flex space-x-4 text-white text-sm text-center justify-center items-center  absolute left-1/2 -translate-x-1/2  w-[300px] md:w-[450px] lg:w-[600px] md:text-base">
        <li>
          <button
            className="border-yellow-500 border-solid border  rounded-3xl p-2 shadow-md "
            id="1"
          >
            ⚡ Urgente
          </button>
        </li>
        <li>
          <button className="p-2" id="2">
            🔴 Alta{" "}
          </button>
        </li>
        <li>
          <button className="p-2" id="3">
            🟡 Média{" "}
          </button>
        </li>
        <li>
          <button className="p-2" id="3">
            🟢 Baixa{" "}
          </button>
        </li>
      </ul>
    </div>
  );
}
export default PrioritySelector;
