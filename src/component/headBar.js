import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Modal, Thumbnail, Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';
import {ContentsBody} from './contentsBody';
import warningImg from '../img/warning.png';

export class HeadBar extends React.Component {
    constructor() {
        super();
        this.state = {
            displayType: "onair",
            modalOpened:false
        };
        this._clickMenu = this._clickMenu.bind(this);
        this._openModal = this._openModal.bind(this);
        this._closeModal = this._closeModal.bind(this);
    }

    componentWillMount() {
    }

    componentdidMount() {
    }

    _clickMenu(menuType) {
        this.setState(
            {displayType: menuType});
    }

    _clickContactUs() {
      this._mailto()
    }

    _mailto() {
        window.open('mailto:boracay120@gmail.com');
    }

    _openModal() {
        this.setState({
            modalOpened:true,
        });
    }

    _closeModal() {
        this.setState({modalOpened:false});
    }

    render() {
        return (
            <div>
              <nav className="navbar navbar-default navbar-doublerow navbar-trans navbar-fixed-top">
                <nav className="navbar navbar-top hidden-xs">
                  <div className="container">
                    <ul className="nav navbar-nav pull-left">
                      <li><a href="https://www.facebook.com/" target="_blank"><span className="glyphicon glyphicon-thumbs-up text-white"></span></a></li>
                      <li><a href="#"><span className="glyphicon glyphicon-globe text-white"></span></a></li>
                      <li><a href="#"><span className="glyphicon glyphicon-pushpin text-white"></span></a></li>
                    </ul>
                    <ul className="nav navbar-nav pull-right">
                      <li><a href="#" className="text-white">About Us</a></li>
                        <li><a href="#" className="text-white" onClick={() => this._clickContactUs() } >Contact Us </a></li>
                    </ul>
                  </div>
                  <div className="dividline light-grey"></div>
                </nav>
                <nav className="navbar navbar-down">
                  <div className="container">
                    <div className="flex-container">
                      <div className="navbar-header flex-item">
                        <div className="navbar-brand" onClick={() => window.location.reload()}
                             style={{cursor: "pointer"}}>Boracay
                        </div>
                      </div>
                      <Nav className="nav navbar-nav flex-item hidden-xs">
                        <NavItem onClick={() => this._clickMenu("onair")}> 실시간 보기 </NavItem>
                        <NavItem onClick={() => this._clickMenu("false")}> 지난 방송 보기 </NavItem>
                      </Nav>
                      <ul className="nav navbar-nav flex-item hidden-xs pull-right">
                        <li>
                            <Navbar.Collapse>
                                <Navbar.Form pullLeft>
                                    <FormGroup>
                                        <FormControl type="text" placeholder="검색 기능 공사 중"/>
                                    </FormGroup>
                                    {' '}
                                    <Button onClick={() => this._openModal()} type="submit"> Search </Button>
                                </Navbar.Form>
                            </Navbar.Collapse>
                        </li>
                      </ul>
                      <div className="dropdown visible-xs pull-right">
                        <button className="btn btn-default dropdown-toggle " type="button" id="dropdownmenu"
                                data-toggle="dropdown">
                          <span className="glyphicon glyphicon-align-justify"></span>
                        </button>
                        <ul className="dropdown-menu">
                          <NavItem onClick={() => this._clickMenu("onair")}> 실시간 보기 </NavItem>
                          <NavItem onClick={() => this._clickMenu("broad")}> 지난 방송 보기 </NavItem>
                          <li role="separator" className="divider"></li>
                          <li><a href="#">contact us</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </nav>
              <ContentsBody displayType={this.state.displayType}/>
                <Modal show={this.state.modalOpened} onHide={this._closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title> 검색 기능 공사 중 !! </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Thumbnail alt="" src={warningImg}></Thumbnail>
                        <h3> <p style={{textAlign:"center"}}> 더 좋은 서비스를 위하여 공사 중입니다. :) </p> </h3>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this._closeModal}>닫기</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}
