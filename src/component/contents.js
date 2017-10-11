import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Onair} from './onair';
import {navMenu} from './navMenu';

class Contents extends React.Component {
  constructor(){
    super()
    this.state = {
      isToggleOn: true
    };
    this.onClickButton = this.onClickButton.bind(this);
  }

  componentWillMount(){
  }

  componentdidMount(){
    console.log(this.state.isToggleOn);
  }

  render(){
    return (
        <div> {this.state.isToggleOn ? <Onair/> : <Contents2/> } </div>
    );
  }
}

ReactDOM.render(
  <Navmenu/>, document.getElementById('myhead')
);
