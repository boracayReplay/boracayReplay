
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import css from './app.scss';
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
  const realRef = firebase.database().ref('broad-real');
  console.log(realRef);
  const adaRef = usersRef.child('ada');

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
    //실제 그리는 영역
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
              <div key={item.id}   className="col-md-3 col-sm-6 hero-feature">
                <div className="thumbnail">
                       <img src="http://placehold.it/800x500" alt=""/>
                       <div className="caption">
                        <p> {item.title} </p>
                        <a href="#" className="btn btn-primary">Buy Now!</a> <a href={item.user} className="btn btn-default">More Info</a>
                       </div>
                   </div>
              </div>
            )
          })
        }
      </div>
  )}
}

export default App;
