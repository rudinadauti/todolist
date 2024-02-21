
import { Button, Checkbox, Input, List } from "@mui/joy";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a showe"]);
    const [newTask, setNewTask] = useState("");


    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }
    function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);


    }

    function editTask(index) {
        // return (

        // )

    }

    function completeTask(index) {
        setTasks(
            tasks.map((tasks) => {
                if (index.id === tasks.id) {
                    return { ...index, completed: !index.completed };
                }
                return index;
            })
        );

    };



    return (
        <div className="to-do-list">
            <h1> To-Do-List</h1>

            <div>
                <Input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <Button
                    className="add-button"
                    onClick={addTask}>
                    Add</Button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <List key={index}>
                        <span className="text"> {task} </span>
                        <Button className="delete-button"
                            onClick={() => deleteTask(index)}>
                            < MdDeleteForever />
                        </Button>
                        <Button className="edit-button"
                            onClick={() => editTask(index)}>
                            Edit
                        </Button>
                        <Button className="complete-button"
                            onClick={() => completeTask(index)}>
                            Done
                        </Button>
                    </List>

                )}
            </ol>

        </div>
    );
}
export default ToDoList;