import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_state = {};

export default (state = INITIAL_state, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};