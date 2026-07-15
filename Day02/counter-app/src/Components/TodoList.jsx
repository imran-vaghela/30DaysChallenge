import { useState } from "react";
import "../App.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Todolist = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [isedit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;
    if (isedit) {
     const updateData = [...data];
      updateData[editIndex] = task;
      setData(updateData);
      setIsEdit(false);
      setEditIndex(null);
            setTask("");

    } else {
      setData([...data, task]);
      setTask("");
      console.log(task);
    }
  };
  const deleteTask = (index) => {
    const updateData = data.filter((item, i) => i !== index);
    setData(updateData);
  };
  const editTask = (index) => {
    setTask(data[index]);
    setEditIndex(index);
    setIsEdit(true);
  };
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
          <input type="submit" value={isedit ? "Update" : "Add"} />
        </form>
        <div className="todo-list">
          {data.length === 0 ? (
            <p className="empty">No Task Added</p>
          ) : (
            data.map((i, index) => (
              <div className="todo-item" key={index + 1}>
                <span>{i}</span>
                <div className="icons">
                  <FaEdit
                    className="edit-icon"
                    onClick={() => editTask(index)}
                  />
                  <FaTrash
                    className="delete-icon"
                    onClick={() => deleteTask(index)}
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
