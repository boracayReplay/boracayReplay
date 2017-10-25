import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import _ from 'lodash';
import {Grid, Row, Col} from 'react-bootstrap';

export class Onair extends Component{
  constructor() {
    super();
    this.state={
      currentKBS:[],
      currentMBC:[],
      currentSBS:[]
    }
  }
  componentWillMount(){
  };

  componentDidMount(){
    let regularStation = firebase.database().ref('broad-real/regular');
    let currentKBS:[];
    let currentMBC:[];
    let currentSBS:[];

    regularStation.on('value',(snapshot) => {
        let stationData = snapshot.val();
        let stationKeys = Object.keys(stationData);

        this.setState({
          currentKBS:_.values(stationData['kbs']),
          currentMBC:_.values(stationData['mbc']),
          currentSBS:_.values(stationData['sbs'])
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
        // <ul>
        // {() => {for (let broadcast in this.state.current) {
        //     for (let smallBroadcast in broadcast) {
        //       console.log(smallBroadcast);
        //       return (<div> {smallBroadcast.link} </div>);
        //     }
        //   }
        // }
        <Grid className="onairitems">
          <Row className="kbs">
            {this.state.currentKBS.map((smallBroadcast, i ) => {
              return (<Col xs={6} md={4} key={i}> <a href={smallBroadcast.link} target="_blank"> {smallBroadcast.name} </a> </Col>);
            })}
          </Row>
          <Row className="mbc">
            {this.state.currentMBC.map((smallBroadcast, i ) => {
              return (<Col xs={6} md={4} key={i}> <a href={smallBroadcast.link} target="_blank"> {smallBroadcast.name} </a> </Col>);
            })}
          </Row>
          <Row className="sbs">
            {this.state.currentSBS.map((smallBroadcast, i ) => {
              return (<Col xs={6} md={4} key={i}> <a href={smallBroadcast.link} target="_blank"> {smallBroadcast.name} </a> </Col>);
            })}
          </Row>
        </Grid>
        // <div className="kbs">
        //   {this.state.currentKBS.map((smallBroadcast, i ) => {
        //     return (<div key={i}> <a href={smallBroadcast.link} target="_blank"> {smallBroadcast.name} </a> </div>);
        //   })}
        // </div>
        //   </ul>
        // </div>
    )
  }
}
