
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import css from './app.scss';
import firebase from 'firebase';
//import {getItem} from './dbTest';

const config = {
    apiKey: "AIzaSyALHtOYNaeVpKVYmi0VJR0OrQn85e81VY8",
    authDomain: "boracay-eddc8.firebaseapp.com",
    databaseURL: "https://boracay-eddc8.firebaseio.com",
    projectId: "boracay-eddc8",
    storageBucket: "boracay-eddc8.appspot.com",
    messagingSenderId: "270618019752"
};

firebase.initializeApp(config);

class App extends Component{
  constructor() {
  super();
  this.state = {
    currentItem: '',
    username: '',
    items: []
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}
handleSubmit(e) {
e.preventDefault();
  const itemsRef = firebase.database().ref('items');
  const item = {
    title: this.state.currentItem
}
  itemsRef.push(item);
  this.setState({
    currentItem: '',
    username: ''
  });
}
componentDidMount() {
  const itemsRef = firebase.database().ref('items');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState = []
    for (let item in items) {
      newState.push({
        id: item,
        title: items[item].title,
        user:items[item].user
      });
    }
    this.setState({
      items: newState
    });
  });
}
render() {
  return (
      <div>
          {
          this.state.items.map((item) => {
            return (
              <div key={item.id}
                <div> <a href={item.user} target="_blank">{item.title}</a></div>
              </div>
            )
          })
        }
      </div>
  )}
}

export default App;
