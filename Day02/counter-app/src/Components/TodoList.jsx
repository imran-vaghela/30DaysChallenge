import { useState } from "react";
import "../App.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Todolist = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const submit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;
    setData([...data, task]);
    setTask("");
    console.log(task);
  };
  const deleteTask=(index)=>{
    const updateData=data.filter((item,i)=>i!==index)
    setData(updateData)

  }
  return (
    <>
      <div className="todo-container">
        <h1>Todo App</h1>

        <form action="" method="post" onSubmit={submit}>
          <input
            type="text"
            name="name"
            id="name"
            value={task}
            placeholder="Enter your Task"
            onChange={(e) => setTask(e.target.value)}
          />
          <input type="submit" value="Add" />
        </form>
        <div className="todo-list">
          {data.length === 0 ? (
            <p className="empty">No Task Added</p>
          ) : (
            data.map((i, index) => (
              <div className="todo-item" key={index + 1}>
                <span>{i}</span>
                <div className="icons">
                  <FaEdit className="edit-icon" />
                  <FaTrash className="delete-icon"
                  onClick={()=>deleteTask(index)}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default Todolist;
