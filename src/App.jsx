import TaskLIst from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'

function App() {
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
      <TaskForm/>
      <TaskLIst/>
      </div>
    </main>
  )
}

export default App
