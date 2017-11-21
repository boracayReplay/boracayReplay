import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Thumbnail, Button, Modal} from 'react-bootstrap';
import warningImg from '../img/warning.png';

export class ModalPopUp extends Component {
    constructor(props){
        super(props);
        this.state={
            modalstatus:this.props.modalstatus
        }
        this._openModal = this._openModal.bind(this);
        this._closeModal = this._closeModal.bind(this);
    }

    componentWillMount(){
    }
    componentDidMount(){
    }

    setmodal(){

    }

    _openModal() {
    }

    _closeModal() {
        this.setState({modalstatus:false});
    }

    render(){
        console.log("this",this.state.modalstatus)

        return (
            <Modal show={this.state.modalstatus} onHide={this._closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title> modal? </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Thumbnail alt="" src={warningImg}> </Thumbnail>
                    <p>
                        ???
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button>닫기</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

