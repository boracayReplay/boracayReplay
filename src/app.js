/**
 * Created by free-lunch on 2017. 2. 4..
 */

 /*

import React from 'react';
import ReactDOM from 'react-dom';
import Item from './components/item';
import firebase from 'firebase';


firebase.initializeApp({
  serviceAccount: "serviceAccountKey.json",
  databaseURL: "https://boracay-eddc8.firebaseio.com/"
});

const itemId = 199;
function itemCountIncrease(itemId){
  firebase.database().ref('items/' + itemId).once('count').then(function (snapshot){
    var itemCount = snapshot? snapshot.val().count + 1 : 1;
    console.log('itemCount', itemCount);®
    firebase.database().ref('items/' + itemId).set({
      count:itemCount
    });
  })

}
itemCountIncrease(itemId);

const item = document.getElementById('item');

ReactDOM.render(<Item title = "준호님"
                      body = "최고"/>, item);

                      */

const css = require('./app.scss');

console.log('start');
