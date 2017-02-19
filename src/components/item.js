/**
 * Created by free-lunch on 2017. 2. 19..
 */

import React from 'react';

class Item extends React.Component {

  render() {
    return (
      <div className="card-content white-text">
        <span className="card-title" >{ this.props.title }
        </span>
        <p>
          {this.props.body}
        </p>
      </div>
    );
  }
}

export default Item;