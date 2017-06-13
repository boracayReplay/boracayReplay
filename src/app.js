
import React from 'react';
import ReactDOM from 'react-dom';
import css from './app.scss';
import {getItem} from './dbTest.js';

const item = document.getElementById('item');
const liTag = document.getElementById('list');

//const item2 = document.getElementById('DBdata');
const fbData = new Object();

//ReactDOM.render(
  // <h1>does not working firebase real DB!!!</h1>, item);

 getItem().then(function(snapshot) {
   //console.log(snapshot);
   var keys = Object.keys(snapshot);

   //console.log("snapshot 입니다." +snapshot );
   console.log("keys 입니다." +keys );
   //console.log("value 입니다." +);

   //Listrender(keys, snapshot[keys])

 });


(function(key){
  const li = document.createElement('li');
  for(var a in key){
    li.innerText = key[0];

    //liTag.setAttribute("onClick", snap);
  }
});

getItem();
//     console.log(name);

//console.log(object1);
//item2.innerText = getData;
