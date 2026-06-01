import { useState, useEffect } from "react";
import { v4 } from "uuid";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]"),
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Se quiser testar com as tarefas da API, basta descomentar a linha abaixo e comentar a linha do useState
  //  useEffect(() => {
  //    async function fetchTasks() {
  //      const response = await fetch(
  //        "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //        { method: "GET" },
  //      );
  //      const data = await response.json();
  //      setTasks(data);
  //    }
  //    fetchTasks();
  //  }, []);

  function onTaskClick(taskId: number) {
    const newTasks = tasks.map((task: { id: number; isCompleted: any }) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }
  function onDeleteTaskClick(taskId: number) {
    const newTasks = tasks.filter((task: { id: number }) => task.id !== taskId);
    setTasks(newTasks);
  }
  function onAddTaskSubmit(text: string, description: string) {
    const newTask = {
      id: v4(),
      text: text,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
