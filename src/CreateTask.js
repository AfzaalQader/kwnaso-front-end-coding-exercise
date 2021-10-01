import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskAction } from './redux/action';

const CreateTask = (props) => {
    const [task, setTask] = useState(null);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        const target = e.target;
        let task_name = target.value;
        setTask(task_name)
    }

    const onClickSubmit = async (e) => {
        const taskArray = [...state.getAllTaskReducer.tasks];
        let obj = {
            id: taskArray.length + 1,
            name: task
        }
        taskArray.push(obj);
        await dispatch(setTaskAction(taskArray));
        props.history.push('/')
    }

    return (
        <>
            <Container>
                <h1>Create Task</h1>
                <div>
                    <div>
                        <input type="text" name="taskName" placeholder="Enter Task Name" onChange={onInputChange} style={{width: '20%', borderRadius: '5px'}} />
                        <br />
                        <button onClick={onClickSubmit} style={{marginTop: '10px', }}>Submit</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CreateTask;
