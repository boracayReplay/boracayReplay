import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import _ from 'lodash';
import {Grid, Row, Col, Thumbnail, Button, Modal} from 'react-bootstrap';
import defaultImg from '../img/default.png'


export class Broaditems extends Component{
  constructor() {
    super();

    this.pageSize = 11;
    this.lastKey = null;
    this.lastCreatedDate = "";

    this.state={
      currentPage:1,
      items:[],
      modalOpened:false,
      modalData: {
          links:[]
      }
    }

    this._onClick = this._onClick.bind(this);
    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
  }
  componentWillMount(){
  };

  componentDidMount(){
    window.addEventListener("wheel", _.throttle(this._wheel.bind(this), 500));
    let items = firebase.database().ref('broad-items/enter').orderByChild('created_date').limitToFirst(this.pageSize);
    items.on('value',(snapshot) => {
    	const receivedItems = _.entries(snapshot.val());
    	this.lastKey = receivedItems[receivedItems.length-1][0];
        this.lastCreatedDate = receivedItems[receivedItems.length-1][1]["created_date"];
        receivedItems.pop();

        this.setState({
            items:_.concat(this.state.items, receivedItems)
        })
    });
  };

	_wheel(event) {
		if (event.deltaY <= 0) {
			return;
		}

		this.setState({
			currentPage:this.state.currentPage+ 1
		});

		let items = firebase.database().ref('broad-items/enter')
		.orderByChild('created_date')
		.startAt(this.lastCreatedDate, this.lastKey)
		.limitToFirst(this.pageSize);

		items.on('value',(snapshot) => {
			const receivedItems = _.entries(snapshot.val());
			this.lastKey = receivedItems[receivedItems.length-1][0];
			this.lastCreatedDate = receivedItems[receivedItems.length-1][1]["created_date"];
            receivedItems.pop();

			this.setState({
				items:_.concat(this.state.items, receivedItems)
			})
		});
	}

    _onClick(index, smallBroadcast){
        this._openModal(index, smallBroadcast);
    }

    _openModal(index, smallBroadcast) {
        this.setState({
            modalOpened:true,
            modalData:smallBroadcast
        });
    }

    _closeModal() {
        this.setState({modalOpened:false});
    }

    _extractImgsrcFromThumbimage(thumbnail){
        if (_.isNil(thumbnail)) {
            return ''
        }
        if (thumbnail.match("ipinpro/img/blank")){
          thumbnail = defaultImg
        }
        return thumbnail;
    }

    _extractDomainFromLink(link) {
        if (_.isNil(link)) {
            return ''
        }
        let domain ='';
        domain = link.replace("https://","").replace("http://","").replace("www.","").split("/")
        return domain[0];
    }

    _extractMetaFromLinks(links) {
        let linksMap = new Map();
        links.map((l) => {
            let linkDomain = this._extractDomainFromLink(l);
            if (linksMap.has(linkDomain)) {
                linksMap.get(linkDomain).push(l)
            } else {
                linksMap.set(linkDomain,[l]);
            }
        });
        return Array.from(linksMap);
    }

  render(){
    return (
      <Grid>
        <Row>
            {
              this.state.items.map((smallBroadcast, i ) => {
                return (
                    <Col className="broad-col" xs={10} md={3} key={i}>
                        <Thumbnail alt="none" src={this._extractImgsrcFromThumbimage(smallBroadcast[1].thumb_image)}>
                            <p>  {smallBroadcast[1].title} </p>
                            <Button onClick={() => this._onClick(i, smallBroadcast[1])}> 바로 가기 </Button>
                        </Thumbnail>
                </Col>);
            })}
        </Row>
          <Modal show={this.state.modalOpened} onHide={this._closeModal}>
              <Modal.Header closeButton>
                  <Modal.Title>{this.state.modalData.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Thumbnail alt="" src={this._extractImgsrcFromThumbimage(this.state.modalData.thumb_image)}> </Thumbnail>
                  <div>
                      {this._extractMetaFromLinks(this.state.modalData.links).map((linkDomain, i) => {
                          return (
                              <div key={i}>
                                 <p className="broad-title" style={{cursor: "Default"}}>{linkDomain[0]}</p>
                                 <div>{linkDomain[1].map((link,i) => {
                                      return (
                                          <p className="broad-links" key={i}><a href={link} target="_blank"> {" "}바로 보러 가기 - {i+1}</a></p>
                                      );
                                  })}
                                 </div>
                             </div>
                          )
                      })}
                  </div>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={this._closeModal}>닫기</Button>
              </Modal.Footer>
          </Modal>
      </Grid>
    )
  }
}