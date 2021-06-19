import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Firebase config
firebase.initializeApp({
    apiKey: 'AIzaSyDkuuP2nKU6PatMIZPXKD_2r7RcnZ5MD88',
    authDomain: 'take-abc.firebaseapp.com',
    projectId: 'take-abc',
    storageBucket: 'take-abc.appspot.com',
    messagingSenderId: '569223435598',
    appId: '1:569223435598:web:4b698eda3804cc750e3a1f',
    measurementId: 'G-CYXSLTZSRL',
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
