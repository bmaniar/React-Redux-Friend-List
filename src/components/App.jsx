import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducers from '../reducers';
import FriendsListComponent from './friendsList';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={FriendsListComponent} />
      </Router>
    </Provider>
  </MuiThemeProvider>
);
export default App;
