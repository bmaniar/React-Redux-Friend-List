import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from '../reducers';
import FriendsListComponent from './friendsList';

const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={FriendsListComponent} />
        </Router>
      </Provider>
    );
  }
}
