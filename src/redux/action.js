export const setTaskAction = (data) => async (dispatch) => {
  dispatch({ type: 'CREATE_TASK', payload: data });
};
