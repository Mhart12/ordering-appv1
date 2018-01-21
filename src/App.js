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
      apiKey: 'AIzaSyD_UF-KyxUp6XjAMdmQBPWn9ToJM2RBP7c',
      authDomain: 'orderingappv1.firebaseapp.com',
      databaseURL: 'https://orderingappv1.firebaseio.com',
      projectId: 'orderingappv1',
      storageBucket: 'orderingappv1.appspot.com',
      messagingSenderId: '1021887257452'
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
