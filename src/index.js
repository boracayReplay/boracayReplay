/**
 * Created by free-lunch on 2017. 2. 4..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Item from './components/item';

const item = document.getElementById('item');

ReactDOM.render(<Item title = "준호님"
                      body = "최고"/>, item);

