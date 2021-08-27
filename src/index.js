import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyle } from './global-styles';
import 'normalize.css';
import { firebase } from './libs/firebase.prod'
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyle />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

