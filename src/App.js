import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAB6eKgM97tbdqm2AjZLkpIY-q-yBlkZ-E',
      authDomain: 'manager-34658.firebaseapp.com',
      databaseURL: 'https://manager-34658.firebaseio.com',
      projectId: 'manager-34658',
      storageBucket: 'manager-34658.appspot.com',
      messagingSenderId: '380486741152'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
