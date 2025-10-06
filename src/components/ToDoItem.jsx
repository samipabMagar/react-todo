import React from 'react'

const ToDoItem = ({item, onHandleTaskRemove}) => {

  const handleTaskRemove = () => {
    onHandleTaskRemove(item.taskName)
  }

  return (
    <div className='flex justify-between mb-10 gap-12 items-center '>
      <h4 className='w-50 h-10 bg-zinc-300 border-1 border-black py-2 px-4 rounded  '>{item.taskName}</h4>
      <h4 className='w-50 h-10 bg-zinc-300 border-1 border-black py-2 px-4 rounded '>{item.taskDueDate}</h4>
      <button onClick={handleTaskRemove} className='py-2 px-4 bg-red-500 rounded text-white font-semibold'>Delete</button>
    </div>
  )
}

export default ToDoItem