import { useState } from "react";
function AddTask({
  onAddTaskSubmit,
}: {
  onAddTaskSubmit: (text: string, description: string) => void;
}) {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite o título da tarefa"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!text.trim() || !description.trim())
            return alert("Preencha todos os campos");
          onAddTaskSubmit(text, description);
          setText("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 font-medium rounded-md "
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
