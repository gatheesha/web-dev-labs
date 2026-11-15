import React, { useState, useReducer, useRef, useEffect } from 'react'

function reducer(state, action){
    switch(action.type){
        case "ADD":
            return [...state, {text: action.payload, completed: false}];
        case "TOGGLE":
            return state.map((task, i) =>
                i === action.payload ? {...task, completed: !task.completed} : task
            );
        case "REMOVE":
            return state.filter((_, i) => i !== action.payload);
        default:
            return state;
    }
}

function ToDoList(){

    const [tasks, dispatch] = useReducer(reducer, []);
    const [newTask, setNewTask] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            dispatch({type: "ADD", payload: newTask});
            setNewTask("");
        }
    }

    function toggleTask(index){
        dispatch({type: "TOGGLE", payload: index});
    }

    function deleteTask(index){
        dispatch({type: "REMOVE", payload: index});
    }

    return(
    <div className="to-do-list">

        <h1>TO DO LIST</h1>

        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className="add-button"
                onClick={addTask}>
                ADD
            </button>
        </div>
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span
                        className={task.completed ? "text completed" : "text"}
                        onClick={() => toggleTask(index)}>
                        {task.text}
                    </span>
                    <button
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        REMOVE
                    </button>
                </li>
            )}
        </ol>
    </div>);
}
export default ToDoList
