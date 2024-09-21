import { useState } from "react";
import "./App.css";

function App() {

  let [input_value, setinputvalue] = useState("");  // Input text field value
  let [tasks, setTasks] = useState([]); 

  // Function to add a new task to the tasks array
  function takevalue() {
    setTasks([...tasks, input_value]);  // Add the current input value to the tasks array
    setinputvalue("");  // Clear the input field after adding the task
  }

  // Function to delete all tasks (optional)
  function deletevalue() {
    setTasks([]);  // Clear the tasks array
  }

  // Function to capture the input field value
  function data(event) {
    setinputvalue(event.target.value);  // Update the input_value with the current input
  }

  return (
    <div>
      <h1>To do app</h1>
      <label>Add text</label><br />
      <input 
        type="text" 
        value={input_value}  // Controlled input field tied to input_value
        onChange={data} 
        className="bg-black text-white" 
      />
      <button onClick={takevalue}>Add Task</button>

      <h2>Display Tasks :</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>  // Display each task as a list item
        ))}
      </ul>

      <button onClick={deletevalue}>Delete All Tasks</button>
    </div>
  );
}

export default App;
