const initialValue = {
    tasks: [],
  };

export function getAllTaskReducer(state = initialValue, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CREATE_TASK': {
      return {
        ...state,
        tasks: payload,
      };
    }
    default: {
      return state;
    }
  }
}
