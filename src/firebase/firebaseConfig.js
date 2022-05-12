import firebase from 'firebase/app';
import 'firebase/firestore';
import { REACT_API_KEY } from '../keys';
require('firebase/auth');

const firebaseConfig = {
  apiKey: REACT_API_KEY,
  authDomain: "proiectcloudcomputingmatei.firebaseapp.com",
  projectId: "proiectcloudcomputingmatei",
  storageBucket: "proiectcloudcomputingmatei.appspot.com",
  messagingSenderId: "545517482471",
  appId: "1:545517482471:web:2b6f005dcc01ed7f5a4d42",
  measurementId: "G-TESHNLFK4Y"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

