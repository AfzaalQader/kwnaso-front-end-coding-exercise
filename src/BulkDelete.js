import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { setTaskAction } from './redux/action';
import { Container } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

// const taskList = JSON.parse(localStorage.getItem('task'));

const BulkDelete = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [taskList, setTaskList] = useState([]);
  const [ids, setIds] = useState([]);

  const bulkDelete = async (e, index) => {
    let temp = [...ids];
    let findIndex = true;
    for(let i = 0; i < temp.length; i++) {
      if(index == temp[i]) {
        findIndex = false;
        temp.splice(i, 1);
        break;
      }
    }

    if(findIndex) {
      temp.push(index);
    }
    setIds(temp);
  }

  const handleSubmitDelete = async () => {
    const temp = [...taskList];
    console.log("Id:::::: ", ids)
    for (let i = 0; i < ids.length; i++) {

      temp.splice(ids[i].id, 1);
    }
   /*  const newArray = _.remove(temp, function (o, index) {
      console.log("index::::::: ", index, o);
      _.map(ids, function (id) {
        return index == id;
      })
    }) */
    setIds([])
    console.log("newArra::::::::::: ", temp)
    await dispatch(setTaskAction(temp));
  }

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
          <ul style={{ listStyleType: 'none' }}>
            {taskList.map((item, index) => (
              <li key={index} className="bg-light" style={{ marginTop: '10px', padding: '10px', fontSize: '20px' }}>
                <input type="checkbox" onChange={(e) => {
                  bulkDelete(e, index)
                }} />
                &nbsp; {item.name}
              </li>
            ))}
          </ul>
        )}
        {
          ids.length > 0 ? (
            <Button variant="primary" size="lg" onClick={handleSubmitDelete}>Delete</Button>
          ) : ''
        }
        {/* <button  disable={ids.length > 0 ? "true" : "false"}>Delete</button> */}
      </Container>
    </>
  );
};

export default BulkDelete;

