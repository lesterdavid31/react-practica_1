import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-600 text-white">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-md">{task.description}</p>
      <button className="bg-red-400 px-2 py-1 my-2 rounded-md mt-5 hover:bg-red-300" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}
