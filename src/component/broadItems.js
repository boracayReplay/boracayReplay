import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import _ from 'lodash';

export class Broaditems extends Component{
  constructor() {
    super();
    this.state={
    }
  }
  componentWillMount(){
  };

  componentDidMount(){
    let items = firebase.database().ref('broad-real/broad-items');

        items.on('value',(snapshot) => {

        this.setState({
        })

        // for(let item in stationData){
        //
        //   // let value = Object.keys(stationData[item])
        // }
          // console.log(value)
          // current.push({
          //   [value]:stationData[item][value]
          // })

        // }
        // for(let item in stationData){
        //   for (let sotitle in stationData[item]){
        //     newState.push(
        //       //{[sotitle]:stationData[item][sotitle]}
        //       stationData[item]
        //     );
        //   }
        // }

      });
  }
  // [{staitontype:방송국, name:방송국 소제목, link:방송주소, thumb_image:imgae_url},{staitontype:방송국, name:방송국 소제목, link:방송주소, thumb_image:imgae_url}]

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
