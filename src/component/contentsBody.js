import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Onair} from './onair';
import {Broaditems} from './broadItems';

export class ContentsBody extends React.Component {
  render(){
    return (
      getContent(this.props.displayType)
    );
  }
}

function getContent(type) {
  if (type === "onair") {
    return <Onair/>;
  } else {
    return <Broaditems/>;
  }
}
