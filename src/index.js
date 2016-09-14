import React     from 'react';
import ReactDOM  from 'react-dom';
import App       from './containers/App';
import BookForm  from './components/BookForm';
import StartPage from './components/StartPage';
import BookGoal  from  './components/BookGoal';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={StartPage}></IndexRoute>
      <Route path="/book-form" component={BookForm}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
