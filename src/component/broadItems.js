import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import _ from 'lodash';
import {Grid, Row, Col} from 'react-bootstrap';


export class Broaditems extends Component{
  constructor() {
    super();

    this.pageSize = 10;
    this.lastKey = null;
    this.lastCreatedDate = "";

    this.state={
      currentPage:1,
      items:[]
    }

  }
  componentWillMount(){
		// let items = firebase.database().ref('broad-items/enter').orderByChild('created_date').limitToFirst(10);
		// items.on('value',(snapshot) => {
		// 	this.state.items= _.concat(this.state.items, _.entries(snapshot.val()));
		// });
  };

  componentDidMount(){
    // broad-real/regular'
		window.addEventListener("wheel", _.throttle(this.wheel.bind(this), 500));

    let items = firebase.database().ref('broad-items/enter').orderByChild('created_date').limitToFirst(10);
    items.on('value',(snapshot) => {
    	console.log(snapshot.val())
    	const receivedItems = _.entries(snapshot.val());
    	this.lastKey = receivedItems[receivedItems.length-1][0];
			this.lastCreatedDate = receivedItems[receivedItems.length-1][1]["created_date"];

			this.setState({
        items:_.concat(this.state.items, receivedItems)
      })
    });
  };

	wheel(event) {

		if (event.deltaY <= 0) {
			return;
		}

		this.setState({
			currentPage: this.state.currentPage+ 1
		});

		let items = firebase.database().ref('broad-items/enter')
		.orderByChild('created_date')
		.startAt(this.lastCreatedDate, this.lastKey)
		.limitToFirst(this.pageSize);

		items.on('value',(snapshot) => {
			const receivedItems = _.entries(snapshot.val());
			this.lastKey = receivedItems[receivedItems.length-1][0];
			this.lastCreatedDate = receivedItems[receivedItems.length-1][1]["created_date"];
			this.setState({
				items:_.concat(this.state.items, receivedItems)
			})
		});

	}

  render(){
    return (
      <Grid className="aaa">
        <Row className="bbbb">
					{
					  this.state.items.map((smallBroadcast, i ) => {
						return (<Col xs={6} md={4} key={i}> <a href={smallBroadcast[1].link} target="_blank"> {smallBroadcast[1].title} </a> </Col>);
					})}
        </Row>
      </Grid>
    )
  }
  // }
}
