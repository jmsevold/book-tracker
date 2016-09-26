import * as actionTypes from '../actions/actionTypes';

export default function bookReducer(state = [], action){
  switch (action.type){
    case actionTypes.ADD_BOOK:
      return [...state, Object.assign({}, action.book)];
    default:
      return state;
  }
}