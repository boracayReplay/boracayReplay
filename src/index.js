import App from './app.js'
import React from 'react';
import ReactDom from 'react-dom';


var test1 = 'test1';

console.log(test1);

ReactDom.render(
    <App />,
    document.getElementById('root')
);
