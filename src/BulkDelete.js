import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { setTaskAction } from './redux/action';

// const taskList = JSON.parse(localStorage.getItem('task'));

const BulkDelete = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [taskList, setTaskList] = useState([]);
  const [ids, setIds] = useState([]);

  const bulkDelete = async(index) => {
    let temp = [...ids];
    temp.push(index);
    setIds(temp);
  }

  const handleSubmitDelete = async() => {
    const temp = [...taskList];
    console.log(temp)
    console.log(ids)
    for(let i = 0; i < ids.length; i++) {
      temp.splice(ids[i],1);
    }
    
    await dispatch(setTaskAction(temp));
  }

  useEffect(() => {
    const tasks = _.cloneDeep(state.getAllTaskReducer.tasks);
    setTaskList(tasks);
  }, [state.getAllTaskReducer.tasks]);

  return (
    <>
      <h1>List Task</h1>
      {taskList.length <= 0 ? (
        <h5>Data not Found</h5>
      ) : (
        <ul style={{listStyleType: 'none'}}>
          {taskList.map((item, index) => (
            <li key={index}>
              <input type="checkbox" onChange={() => {
                bulkDelete(index)
              }} />
              &nbsp; {item.name}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleSubmitDelete}>Delete</button>
    </>
  );
};

export default BulkDelete;

