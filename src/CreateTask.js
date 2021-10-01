import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setTaskAction} from './redux/action';

const CreateTask = (props) => {
    const [task, setTask] = useState(null);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        const target = e.target;
        let task_name = target.value;
        setTask(task_name)
    }

    const onClickSubmit = async(e) => {
        const taskArray = [...state.getAllTaskReducer.tasks];
        let obj = {
            id: taskArray.length + 1,
            name: task
        }
        taskArray.push(obj);
        await dispatch(setTaskAction(taskArray));
        props.history.push('/')
       /*  let obj = {};
        let taskItem = [];
        taskItem = JSON.parse(localStorage.getItem("task"));
        if(taskItem && taskItem.length > 0) {
            const id = taskItem.length + 1;
            obj = {
                id: id,
                name: task
            }
            taskItem.push(obj);

            localStorage.setItem("task", JSON.stringify(taskItem));
        } else {
            obj = {
                id: 1,
                name: task
            }
            const item = [];
            item.push(obj)
            localStorage.setItem("task", JSON.stringify(item));
        }
        setTaskSubmit(true);
        props.history.push('/') */
    } 

    return (
        <>
            <h1>Create Task</h1>
            <div className="container">
                <div>
                    <input type="text" name="taskName" placeholder="Enter Task Name" onChange={onInputChange} />
                    <br />
                    <button onClick={onClickSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default CreateTask;
