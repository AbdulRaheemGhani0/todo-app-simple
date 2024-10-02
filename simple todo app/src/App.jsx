import "./App.css";
import { useState } from "react";
function App() {
  let [input, setInput] = useState("");
  let [array, setArray] = useState([]);

  const addTodo = () => {
    let newArray = [...array];
    newArray.push(input);
    setArray(newArray);
    setInput("");
  };

  const deleteTodo = (index) => {
    let newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };
  const editTodo = (index) => {
    let newArray = [...array];
    setInput(newArray[index])
      setArray(newArray); 
  };
  const updateTodo =(index,input) => {
    console.log("update value prsessed")
    let promptValue = input;
    let newArray = [...array];
    newArray[index] = promptValue;
    setArray(newArray);
console.log("update value finnished")
  }


  return (
    <>
      <input
        type="text"
        placeholder="enter your task"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <button onClick={addTodo}>add task</button>
      <button onClick={updateTodo}>update task</button>

      
      <ul>
        {array.map((value, index) => {
          return (
            <>
              <li>
                {value}

                <button onClick={() => deleteTodo(index)}>Delete</button>
                <button onClick={() => editTodo(index)}>Edit</button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
export default App;
