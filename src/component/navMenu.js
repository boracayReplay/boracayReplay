import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {NavBar, Nav, NavItem} from 'react-bootstrap';

class Contents2 extends React.Component {
  render(){
    return <div> Contents2 </div>;
  }
}

class Navmenu extends React.Component {
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
  }

  onClickButton(isTrue){
    this.setState({isToggleOn:isTrue});
  }

  render(){
    return (
      <Nav className="nav navbar-nav flex-item hidden-xs">
        <NavItem onClick={ () => this.onClickButton(true)}>  Menu1 </NavItem>
        <NavItem onClick={ () => this.onClickButton(false)}>  Menu2 </NavItem>
      </Nav>
    );
  }
}

ReactDOM.render(
  <Navmenu/>, document.getElementById('navmenu')
);
