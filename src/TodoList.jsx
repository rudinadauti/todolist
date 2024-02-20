
import { Button, Input, List } from "@mui/joy";
import React, { useState } from "react";

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

    }

    function doneTaskDown(index) {

    }



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
                            Delete
                        </Button>
                        <Button className="edit-button"
                            onClick={() => editTask(index)}>
                            Edit
                        </Button>
                        <Button className="done-button"
                            onClick={() => doneTask(index)}>
                            Done
                        </Button>
                    </List>

                )}
            </ol>

        </div>
    );
}
export default ToDoList;