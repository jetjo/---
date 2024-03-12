import { useReducer } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

function taskReducer(state, action) {
  const type = action.type
  switch (type) {
    case 'add':
      return [...state, action.task]
    case 'change':
      // const index = state.findIndex(task => task.id === action.id)
      // if (index > -1) {
      //   const old = state[index]
      //   const newTask = { ...old, text: action.text }
      //   return [...state.slice(0, index), newTask, ...state.slice(index + 1)]
      // }
      // return state
      return state.map(task => {
        if (task.id === action.task.id) return action.task
        return task
      })
    case 'delete':
      // const idx = state.findIndex(task => task.id === action.id)
      // if (idx > -1) {
      //   return [...state.slice(0, idx), ...state.slice(idx + 1)]
      // }
      // return state
      return state.filter(task => task.id !== action.id)
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
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

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
