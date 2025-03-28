import TaskCard from "./TaskCard";
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskList() {
  
  const {tasks}=useContext(TaskContext)

  if (tasks.length === 0){
    return <h1 className="text-4xl font-bold text-white text-center">No hay tareas aun </h1>
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-5 rounded-md">
      {tasks.map((task) => (
        <TaskCard key={task.id} task ={task}/>
      ))}
    </div>
  );
}

export default TaskList;
