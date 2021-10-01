import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import Menu from './Menu';

// const taskList = JSON.parse(localStorage.getItem('task'));

const ListTask = () => {
  const state = useSelector((state) => state);
  const [taskList, setTaskList] = useState([]);

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
        <ul>
          {taskList.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListTask;
