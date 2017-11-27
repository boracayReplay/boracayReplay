import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import _ from 'lodash';
import {Grid, Row, Col, Thumbnail, Button, Modal} from 'react-bootstrap';
import defaultImg from '../img/default_tv.png'


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
    window.addEventListener("wheel", _.throttle(this._wheel.bind(this), 1000));
    let items = firebase.database().ref('broad-items/enter').orderByChild('created_date').limitToLast(this.pageSize);
		items.on('value',(snapshot) => {
			const receivedItems = _.entries(snapshot.val());
			const firstItem = receivedItems.shift();
			this.lastKey = firstItem[0];
			this.lastCreatedDate = firstItem[1]["created_date"];
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
		.endAt(this.lastCreatedDate, this.lastKey)
		.limitToLast(this.pageSize);

		items.on('value',(snapshot) => {
			const receivedItems = _.entries(snapshot.val());
			const firstItem = receivedItems.shift();
			this.lastKey = firstItem[0];
			this.lastCreatedDate = firstItem[1]["created_date"];
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
        {console.log(this.state.modalData.thumb_image)}
    }

    _closeModal() {
        this.setState({modalOpened:false});
        console.log(this.state.modalData.links[0])
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
                    <Col className="broadcol" xs={10} md={3} key={i}>
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
                  <p>
                      {this._extractMetaFromLinks(this.state.modalData.links).map(linkDomain => {
                          return (
                              <div>
                                 <p>{linkDomain[0]}</p>
                                 <p>{linkDomain[1].map((link,index) => {
                                      return (
                                          <p><a href={link} target="__blank">   ( {index+1} 부 바로보기 !!! )</a></p>
                                      );
                                  })}
                                 </p>
                             </div>
                          )
                      })}
                  </p>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={this._closeModal}>닫기</Button>
              </Modal.Footer>
          </Modal>
      </Grid>
    )
  }
}