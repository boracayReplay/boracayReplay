
import React from 'react';
import ReactDOM from 'react-dom';
import css from './app.scss';
import {person} from './dbTest.js';

const item = document.getElementById('item');

ReactDOM.render(
  <h1> does not working firebase real DB!!! </h1>, item);

console.log(person);

//console.log(firebaseDB.db)
