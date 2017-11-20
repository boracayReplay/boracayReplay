import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {HeadBar} from './component/headBar'
import './app.scss';
const config = {
    apiKey: "AIzaSyALHtOYNaeVpKVYmi0VJR0OrQn85e81VY8",
    authDomain: "boracay-eddc8.firebaseapp.com",
    databaseURL: "https://boracay-eddc8.firebaseio.com",
    projectId: "boracay-eddc8",
    storageBucket: "boracay-eddc8.appspot.com",
    messagingSenderId: "270618019752"
};

firebase.initializeApp(config);

class App extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){

  }

  componentdidMount(){
  }

  render(){
    return (
      <div>
        <HeadBar/>
      </div>
    );
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('main')
);
