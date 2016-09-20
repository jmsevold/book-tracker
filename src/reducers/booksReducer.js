import * as actionTypes from '../actions/actionTypes';

export default function bookReducer(state = [], action){
  switch (action.type){
    case actionTypes.ADD_BOOK_SUCCESS:
      return [...state, Object.assign({}, action.book)];
    default:
      return state;
  }
}