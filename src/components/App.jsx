import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from '../reducers';
import FriendsListComponent from './friendsList';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={FriendsListComponent} />
    </Router>
  </Provider>

);
export default App;
