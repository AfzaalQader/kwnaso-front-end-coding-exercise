import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Container } from 'react-bootstrap';

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
      <Container>
        <h1>List Task</h1>
        {taskList.length <= 0 ? (
          <h5>Data not Found</h5>
        ) : (
          <ol>
            {taskList.map((item, index) => (
              <li key={index} className="bg-light" style={{marginTop: '10px', padding: '10px', fontSize: '20px'}}>{item.name}</li>
            ))}
          </ol>
        )}
      </Container>
    </>
  );
};

export default ListTask;
