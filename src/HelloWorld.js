
/**
 * Created by free-lunch on 2017. 2. 4..
 */

import React from 'react';
import {render} from 'react-dom';

function HelloWorld (props) {
  return (
    <h1 class="header center orange-text"> Hello {props.name}!</h1>
  );
}

render(<HelloWorld name="Junho"/>,
  document.getElementById('root'));
