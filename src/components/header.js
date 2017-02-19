/**
 * Created by free-lunch on 2017. 2. 4..
 */

import React from 'react';

class Header extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      name : ''
    };
  }

  render() {
    return (
      <div>
        <button> onClick= {()=> {this.setState({name:'jeonghun'})}}
        </button>
        <h1> Hello! {this.state.name} </h1>
      </div>
  );
  }
}

export default Header;