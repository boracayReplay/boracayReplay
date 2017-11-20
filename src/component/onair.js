import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import _ from 'lodash';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';


let defaultImg = '';
    // 'https://firebasestorage.googleapis.com/v0/b/boracay-eddc8.appspot.com/o/boracay%2Fboracay%2Fdefault_tv.png?alt=media&token=0987bfca-771b-43fe-b31d-14589dbab684';

export class Onair extends React.Component{
  constructor() {
    super();
    this.state={
      currentKBS:[],
      currentMBC:[],
      currentSBS:[],
      currentEducation:[],
      currentHomeshop:[],
      currenteNewseconomy:[],
      currentSynthese:[]
    }
  }
  componentWillMount(){
  };

  // noinspection JSAnnotator
    componentDidMount(){
    let regularStation = firebase.database().ref('broad-real/regular');
    let cableStation = firebase.database().ref('broad-real/cable');
    let currentKBS=[];
    let currentMBC=[];
    let currentSBS=[];
    let currentEducation=[];
    let currentHomeshop=[];
    let currenteNewseconomy=[];
    let currentSynthese=[];


    regularStation.on('value',(snapshot) => {
        let regularData = snapshot.val();

        this.setState({
          currentKBS:_.values(regularData['kbs']),
          currentMBC:_.values(regularData['mbc']),
          currentSBS:_.values(regularData['sbs'])
        })
    });
    cableStation.on('value',(snapshot) => {
        let cableData = snapshot.val();

        this.setState({
          currentEducation:_.values(cableData['education']),
          currentHomeshop:_.values(cableData['homeshopping']),
          currenteNewseconomy:_.values(cableData['news & economy']),
          currentSynthese:_.values(cableData['종편']),
        })
    });
  }

  render(){
    return (
        <Grid className="onairitems">
        <Row className="kbs">
        {this.state.currentKBS.map((smallBroadcast, i) => {
          return (
              <Col xs={5} md={3} key={i}>
                <Thumbnail src={defaultImg} alt="">
                  <h3 >{smallBroadcast.name}</h3>
                  <p>
                    <Button>  <a href={smallBroadcast.link} target="_blank"> 바로가기  </a> </Button>
                  </p>
                </Thumbnail>
              </Col>
            )
        })}
        </Row>
        <Row className="mbc">
          {this.state.currentMBC.map((smallBroadcast, i ) => {
            return (
              <Col xs={5} md={3} key={i}>
                <Thumbnail src={defaultImg} alt="">
                  <h3 >{smallBroadcast.name}</h3>
                  <p>
                    <Button> <a href={smallBroadcast.link} target="_blank"> 바로가기  </a> </Button>
                  </p>
                </Thumbnail>
              </Col>
            );
          })}
        </Row>
        <Row className="sbs">
          {this.state.currentSBS.map((smallBroadcast, i ) => {
            return (
              <Col xs={5} md={3} key={i}>
                <Thumbnail src="#" alt="">
                  <h3 >{smallBroadcast.name}</h3>
                  <p>
                    <Button>  <a href={smallBroadcast.link} target="_blank"> 바로가기  </a> </Button>
                  </p>
                </Thumbnail>
              </Col>
            );
          })}
        </Row>
        <Row className="Education">
          {this.state.currentEducation.map((smallBroadcast, i ) => {
            return (
              <Col xs={5} md={3} key={i}>
                <Thumbnail src="#" alt="">
                  <h3 >{smallBroadcast.name}</h3>
                  <p>
                    <Button>  <a href={smallBroadcast.link} target="_blank"> 바로가기  </a> </Button>
                  </p>
                </Thumbnail>
              </Col>
            );
          })}
        </Row>
        <Row className="Homeshop">
          {this.state.currentHomeshop.map((smallBroadcast, i ) => {
            return (
              <Col xs={5} md={3} key={i}>
                <Thumbnail src="#" alt="">
                  <h3 >{smallBroadcast.name}</h3>
                  <p>
                    <Button>  <a href={smallBroadcast.link} target="_blank"> 바로가기  </a> </Button>
                  </p>
                </Thumbnail>
              </Col>
            );
          })}
        </Row>
        <Row className="Newseconomy">
          {this.state.currenteNewseconomy.map((smallBroadcast, i ) => {
            return (
              <Col xs={5} md={3} key={i}>
                <Thumbnail src="#" alt="">
                  <h3 >{smallBroadcast.name}</h3>
                  <p>
                    <Button>  <a href={smallBroadcast.link} target="_blank"> 바로가기  </a> </Button>
                  </p>
                </Thumbnail>
              </Col>
            );
          })}
        </Row>
        <Row className="Synthese">
          {this.state.currentSynthese.map((smallBroadcast, i ) => {
            return (
              <Col xs={5} md={3} key={i}>
                <Thumbnail src="#" alt="">
                  <h3 >{smallBroadcast.name}</h3>
                  <p>
                    <Button>  <a href={smallBroadcast.link} target="_blank"> 바로가기  </a> </Button>
                  </p>
                </Thumbnail>
              </Col>
            );
          })}
        </Row>
      </Grid>
    )
  }
}
