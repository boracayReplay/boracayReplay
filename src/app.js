
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

/*
class App extends Component{
  constructor() {
    super();

    this.state = {
      name:20,
      speed:10
    };
  }
  componentWillMount:function() {
    const roofRef = firebase.database().ref().child('test');
    roofRef.on('value', snap =>{
      this.iems.push({
        name:snap.val(),
        speed:snap.val()
      });
    });
  }
  render() {
    return (
      <div class="col-md-3 col-sm-6 hero-feature">
          <div class="thumbnail">
              <img src="http://placehold.it/800x500" alt=""/>
              <div class="caption">
                  <h1>{this.state.name}</h1>
                  <h3>{this.state.speed}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <p>
                      <a href="#" class="btn btn-primary">Buy Now!</a> <a href="#" class="btn btn-default">More Info</a>
                  </p>
              </div>
          </div>
      </div>
    );
  }
}*/

class App extends Component {
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
      title: this.state.currentItem,
      user: this.state.username
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
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render() {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1>Fun Food Friends</h1>

            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                  <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
                  <button>Add Item</button>
                </form>
          </section>
          <section className='display-item'>
              <div className="wrapper">
                <ul>
                  {this.state.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>brought by: {item.user}
                          <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
