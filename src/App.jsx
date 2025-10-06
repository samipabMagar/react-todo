import React, { useState } from 'react'
import AppToDoName from './components/AppToDoName'
import AddToDo from './components/AddToDo'
import ToDoItems from './components/ToDoItems'

const App = () => {
  const [todoItems, setTodoItems] = useState([])

  const onNewItems = (taskName, taskDueDate) => {
      // let newItems = [...todoItems, {taskName, taskDueDate}]
      setTodoItems((currValue)=>
      [
        ...currValue, {taskName,taskDueDate}
      ]
      )
      // console.log(`${taskName} ${taskDueDate}`)
      // console.log(todoItems)
  }

  const handleTaskRemove = (taskName) => {
      let updatedItems = todoItems.filter((item) => {
        return item.taskName !== taskName
      })
      setTodoItems(updatedItems)
  }

  return (
    <div className='flex items-center flex-col justify-center m-10 gap-5'>
      <AppToDoName/>
      <AddToDo onNewItems = {onNewItems}/>
      <ToDoItems handleTaskRemove={handleTaskRemove} todoItems = {todoItems}/>
    </div>
  )
}

export default App