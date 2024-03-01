import React, { useState } from "react";
import { Button, Input } from "@mui/joy";
import { MdDeleteForever, MdFileDownloadDone, } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { IoIosAddCircle } from "react-icons/io";

function ToDoList() {
    const [tasks, setTasks] = useState([
        { text: "Eat Breakfast", completed: false },
        { text: "Take a shower", completed: false }
    ]);
    const [newTask, setNewTask] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingValue, setEditingValue] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function editTask(index) {
        setEditingIndex(index);
        setEditingValue(tasks[index].text);
    }

    function saveTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].text = editingValue;
        setTasks(updatedTasks);
        setEditingIndex(null);
    }

    function toggleComplete(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    return (
        <div className="to-do-list">
            <h1>TO DO LIST <LuListTodo /> </h1>
            <div>
                <Input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <Button className="add-button" onClick={addTask}>Add</Button>
            </div>
            <ol>

                {tasks.map((task, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <>
                                <Input
                                    type="text"
                                    value={editingValue}
                                    onChange={(e) => setEditingValue(e.target.value)}
                                />
                                <Button className="save-button" onClick={() => saveTask(index)}>Save</Button>
                            </>
                        ) : (
                            <>
                                <span style={{ marginRight: "80px" }} className={task.completed ? 'completed' : ''}>{task.text}</span>
                                <div>
                                    <Button className="delete-button" onClick={() => deleteTask(index)}
                                        size="sm"
                                        variant="soft">
                                        <MdDeleteForever />
                                    </Button>
                                    <Button className="edit-button" onClick={() => editTask(index)}
                                        size="sm"
                                        variant="soft"
                                    >
                                        <FaRegEdit />
                                    </Button>
                                    <Button className="complete-button" onClick={() => toggleComplete(index)}
                                        size="sm"
                                        variant="soft"
                                    >
                                        {task.completed ? <BsCheckCircleFill /> : <MdFileDownloadDone />}
                                    </Button>
                                </div>
                            </>

                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;