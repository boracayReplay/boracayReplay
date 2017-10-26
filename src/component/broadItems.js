import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import _ from 'lodash';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';


export class Broaditems extends Component{
  constructor() {
    super();

    this.pageSize = 10;

    this.state={
      currentPage:1,
      items:[]
    }
  }
  componentWillMount(){
      console.log("string22")
  };

  componentDidMount(){
  }

  render(){
    return (
        <div> HEllo </div>
    );
  }
}
