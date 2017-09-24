
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

export class App extends Component{
  constructor() {
    super();
    this.state={
      items:[{
        "name":'villy',
        'age':"string"
      }]
    }
  }
  componentWillMount(){
  };

  componentDidMount(){
    let regularStation = firebase.database().ref('broad-real/regular');

    regularStation.on('value',(snapshot) => {
        let stationData = snapshot.val();
        let stationKeys = Object.keys(stationData);
        let newState = [];
        // for(let item in stationData){
        //   newState.push({
        //     item:stationData[item]
        //   });
        // }
        this.setState({
          items:[{
          key1:'value1', key2:'value2'
          },{
          key1:'value3', key2:'value4'
          }]
        });
    });
  }

  render(){
    return (
      <div> {this.state.items.map((item, i) => {
        return (
          <div>
            <div key={i}> {item.key1}, {item.key2} </div>
          </div>
        );
      })}
      </div>
    );
  }
}
