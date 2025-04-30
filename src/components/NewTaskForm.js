import React, { useState } from "react";

function NewTaskForm({categories,onTaskSubmit}) {
  const[text,setText]=useState('')
  const[category,setCategory]=useState(categories.length > 1 ? categories[1] : 'All')
  function handleSubmit(e){
    e.preventDefault()
    const newTask={text,category}
  onTaskSubmit(newTask)
  setText('')
  setCategory(categories.length > 1 ? categories[1] : 'All')
  }
  
  
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e)=>setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
          {categories.filter((category)=>category!=='All').map((category)=>(
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
