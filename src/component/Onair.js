import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import _ from 'lodash';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';

export class Onair extends Component{
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

  componentDidMount(){
    let regularStation = firebase.database().ref('broad-real/regular');
    let cableStation = firebase.database().ref('broad-real/cable');
    let currentKBS:[];
    let currentMBC:[];
    let currentSBS:[];
    let currentEducation:[]
    let currentHomeshop:[]
    let currenteNewseconomy:[];
    let currentSynthese:[];

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
                <Thumbnail src="#" alt="120x200">
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
                  <Thumbnail src="#" alt="120x200">
                    <h3 >{smallBroadcast.name}</h3>
                    <p>
                      <Button>  <a href={smallBroadcast.link} target="_blank"> 바로가기  </a> </Button>
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
                  <Thumbnail src="#" alt="120x200">
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
                  <Thumbnail src="#" alt="120x200">
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
            {this.state.currentHomeshop.map((smallBroadcast, i ) => {
              return (
                <Col xs={5} md={3} key={i}>
                  <Thumbnail src="#" alt="120x200">
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
            {this.state.currenteNewseconomy.map((smallBroadcast, i ) => {
              return (
                <Col xs={5} md={3} key={i}>
                  <Thumbnail src="#" alt="120x200">
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
            {this.state.currentSynthese.map((smallBroadcast, i ) => {
              return (
                <Col xs={5} md={3} key={i}>
                  <Thumbnail src="#" alt="120x200">
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
