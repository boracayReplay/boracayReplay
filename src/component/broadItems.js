import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import _ from 'lodash';


export class Broaditems extends Component{
  constructor() {
    super();

    this.pageSize = 10;

    this.state={
      currentPage:1,
    }
  }
  componentWillMount(){
  };

  componentDidMount(){
    // broad-real/regular'

    let items = firebase.database().ref('broad-items/enter').orderByChild('created_date').limitToFirst(10);
    items.on('value',(snapshot) => {
      console.log(snapshot.val());
    });


  }


  render(){
    return (
      <div> Hello </div>
        // <div>
        //   <div className="kbs">
        //     {this.state.currentKBS.map((smallBroadcast, i ) => {
        //       return (<div key={i}> <a href={smallBroadcast.link} target="_blank"> {smallBroadcast.name} </a> </div>);
        //     })}
        //   </div>
        //   <div className="mbc">
        //     {this.state.currentMBC.map((smallBroadcast, i ) => {
        //       return (<div key={i}> <a href={smallBroadcast.link} target="_blank"> {smallBroadcast.name} </a> </div>);
        //     })}
        //   </div>
        //   <div className="sbs">
        //     {this.state.currentSBS.map((smallBroadcast, i ) => {
        //       return (<div key={i}> <a href={smallBroadcast.link} target="_blank"> {smallBroadcast.name} </a> </div>);
        //     })}
        //   </div>
        // </div>
    )
  }
  // }
}
