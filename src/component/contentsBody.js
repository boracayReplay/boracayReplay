import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Onair} from './onAir';
import {Broaditems} from './broadItems';

export class ContentsBody extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
        getContent(this.props.displayType)
    );
  }
}

function getContent(type) {
  if (type === "onair") {
    return <Broaditems/>;
  } else {
    return <Onair/>;
  }
}
