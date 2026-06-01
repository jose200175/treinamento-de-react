import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Task = {
  id: number;
  text: string;
  description: string;
  isCompleted: boolean;
};

type TasksProps = {
  tasks: Task[];
  onTaskClick: (taskId: number) => void;
  onDeleteTaskClick: (taskId: number) => void;
};

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }: TasksProps) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task: Task) {
    const query = new URLSearchParams();
    query.set("text", task.text);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li className="flex gap-2" key={task.id}>
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${task.isCompleted && "line-through"}`}
          >
            {task.text}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 text-white rounded-md p-2"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 text-white rounded-md p-2"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
