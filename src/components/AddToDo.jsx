import React, { useState } from 'react'

const AddToDo = ({onNewItems}) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value)
  }

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value)
  }

  const handleNewItems = () => {
    onNewItems(taskName, dueDate)
    setTaskName("")
    setDueDate("")
  }

  return (
    <div className='flex gap-10 items-center'>
        <input value={taskName} onChange={handleTaskNameChange} className='py-3 px-6 border-1 placeholder:text-black  border-black rounded' type="text" placeholder='Enter task' name="" id="" />
        <input value={dueDate} onChange={handleDueDateChange} className='py-3 px-6 border-1 border-black rounded' type="date" placeholder='' />
        <button onClick={handleNewItems} className='bg-green-500 py-3 px-6 rounded text-white font-semibold'>Add</button>
    </div>
  )
}

export default AddToDo