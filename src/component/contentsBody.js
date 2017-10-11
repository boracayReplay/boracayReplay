import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Onair} from './onair';

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
    return <Onair/>;
  } else {
    return <div> 아직 없어 </div>;
  }
}
