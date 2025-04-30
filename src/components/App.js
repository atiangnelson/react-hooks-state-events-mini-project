import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const[tasks,setTask]=useState(TASKS)
  const[selectedCategory,setSelectedCategory]=useState("All")
  function handleDelete(taskText){
    setTask(tasks.filter(task=>task.text!==taskText))
  }
  function handleCategoryClick(category){
    setSelectedCategory(category)

  }
  function handleAddTask(newTask){
    setTask([...tasks,newTask])
  }
  const filteredTasks=selectedCategory=='All'? tasks : tasks.filter(task=>task.category===selectedCategory)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskSubmit={handleAddTask}/>
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
