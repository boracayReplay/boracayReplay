import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyALHtOYNaeVpKVYmi0VJR0OrQn85e81VY8",
    authDomain: "boracay-eddc8.firebaseapp.com",
    databaseURL: "https://boracay-eddc8.firebaseio.com",
    projectId: "boracay-eddc8",
    storageBucket: "boracay-eddc8.appspot.com",
    messagingSenderId: "270618019752"
};

firebase.initializeApp(config);

export class Onair extends Component{
  constructor() {
    super();
  }
  componentWillMount(){
  };

  componentDidMount(){
  }

  render(){
    return (
      <div> Hello1 </div>
    );
  }
}
