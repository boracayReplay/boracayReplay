import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {NavBar, Nav, NavItem} from 'react-bootstrap';
import {ContentsBody} from './contentsBody'

export class HeadBar extends React.Component {
  constructor(){
    super()
    this.state = {
      displayType:"onair"
    };
    this.onClickButton = this.onClickButton.bind(this);
  }

  componentWillMount(){
  }

  componentdidMount(){

  }
  onClickButton(clickedType){
    this.setState({displayType:clickedType})
  }

  render(){
    return (
      <div>
      <nav className="navbar navbar-default navbar-doublerow navbar-trans navbar-fixed-top">
        <nav className="navbar navbar-top hidden-xs">
          <div className="container">
            <ul className="nav navbar-nav pull-left">
              <li><a href="#"><span className="glyphicon glyphicon-thumbs-up text-white"></span></a></li>
              <li><a href="#"><span className="glyphicon glyphicon-globe text-white"></span></a></li>
              <li><a href="#"><span className="glyphicon glyphicon-pushpin text-white"></span></a></li>
            </ul>
            <ul className="nav navbar-nav pull-right">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="dividline light-grey"></div>
        </nav>
        <nav className="navbar navbar-down">
          <div className="container">
            <div className="flex-container">
              <div className="navbar-header flex-item">
                <div className="navbar-brand" href="#">Boracay</div>
              </div>
              <div id="navmenu"> </div>
              <Nav className="nav navbar-nav flex-item hidden-xs">
                <NavItem onClick={ () => this.onClickButton("onair")}>  Menu1 </NavItem>
                <NavItem onClick={ () => this.onClickButton("false")}>  Menu2 </NavItem>
              </Nav>
              <ul className="nav navbar-nav flex-item hidden-xs pull-right">
                <li><a href="#" className="">offer!</a></li>
              </ul>
              <div className="dropdown visible-xs pull-right">
                <button className="btn btn-default dropdown-toggle " type="button" id="dropdownmenu" data-toggle="dropdown">
                  <span className="glyphicon glyphicon-align-justify"></span>
                </button>
                <ul className="dropdown-menu">
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">contact us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </nav>
      <ContentsBody displayType={this.state.displayType}/>
    </div>
    );
  }
}
//
// ReactDOM.render(
//   <Navmenu/>, document.getElementById('navmenu')
// );
