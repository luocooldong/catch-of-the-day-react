import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAORS1Og_KAcRVIEIdBFMJMZqG9jr58Of0",
  authDomain: "helloworldgengyudong.firebaseapp.com",
  databaseURL: "https://helloworldgengyudong.firebaseio.com",
  projectId: "helloworldgengyudong",
  storageBucket: "helloworldgengyudong.appspot.com",
  messagingSenderId: "439092694146"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;

