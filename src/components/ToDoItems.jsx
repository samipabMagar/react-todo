import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoItems = ({todoItems, handleTaskRemove}) => {
  return (
    <div>
      {
        todoItems.map((item, idx) =>
          <ToDoItem key={idx} onHandleTaskRemove={handleTaskRemove} item = {item} />
        
        )
      }
    </div>
  )
}

export default ToDoItems