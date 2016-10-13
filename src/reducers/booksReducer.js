import * as actionTypes from '../actions/actionTypes';

export function books(state = {
  fetchingBooks: false,
  items: []
}, action){
  switch (action.type){
    case actionTypes.FETCH_BOOK:
      console.log(action.books)
      return Object.assign({}, state, {
        fetchingBooks: false,
        items: [].concat(action.books)
      })
    default:
      return state;
  }
}
