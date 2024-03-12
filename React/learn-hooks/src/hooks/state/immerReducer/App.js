import { useImmerReducer } from 'use-immer'
import AddTask from '../reducer/AddTask'
import TaskList from '../reducer/TaskList'

function taskReducer(draft, action) {
  const type = action.type
  switch (type) {
    case 'add':
      draft.push(action.task)
      break
    case 'change':
      const index = draft.findIndex(task => task.id === action.task.id)
      if (index > -1) {
        draft[index] = action.task
      }
      break
    case 'delete':
      return draft.filter(task => task.id !== action.id)
    default:
      throw new Error(`Unsupported action type: ${type}`)
  }
}

let nextId = 3
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
]

export default function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks)

  const handleAddTask = text => {
    dispatch({ type: 'add', task: { id: nextId++, text, done: false } })
  }

  const handleChangeTask = task => {
    dispatch({ type: 'change', task })
  }

  const handleDeleteTask = id => {
    dispatch({ type: 'delete', id })
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  )
}
