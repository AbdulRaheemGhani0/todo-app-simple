import "./App.css";
import { useState } from "react";
function App() {
  let [input, setInput] = useState("");
  let [array, setArray] = useState([]);
  let [isEditing, setisEditing ] = useState(false);
  let [editIndex, seteditIndex ] = useState();



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
  let newArray = [...array]
setInput(newArray[index])
setArray(newArray)
seteditIndex(index)
setisEditing(true)
 } 
  
  const updateTodo =() => {
    let cloneArray = [...array];
    cloneArray[editIndex] = input;
    setArray(cloneArray);
    setisEditing(false)
    setInput('')
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
{ isEditing ? (<button onClick={updateTodo}>update task</button>
      )
      :(<button onClick={addTodo}>add task</button>)
      }
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
