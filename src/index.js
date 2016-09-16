import React              from 'react';
import ReactDOM           from 'react-dom';
import App                from './containers/App';
import BookFormContainer  from './containers/BookFormContainer';
import BooksListContainer from './containers/BooksListContainer';
import StartPage          from './components/StartPage';
import BookProgressContainer           from  './containers/BookProgressContainer';
import './index.css';
import {Router, Route, hashHistory, IndexRoute, browserHistory} from 'react-router';

//this.props.params.bookId availiable in BookGoal

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={StartPage}></IndexRoute>
      <Route path="/book-form" component={BookFormContainer}></Route>
      <Route path="/my-books" component={BooksListContainer}></Route>
      <Route path="/progress/:bookId" component={BookProgressContainer}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
