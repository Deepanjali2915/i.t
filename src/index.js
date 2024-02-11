import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import Textproduct from './textproduct';
import Featureproduct from './featureproduct';
import Gift from './gift';
import Person from './person';
import Byuget from './byuget';
import Top10 from './top10';
import Anniversary from './anniversary';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Textproduct/>
    <Gift/>
    <Featureproduct/>
    <Person/>
    <Byuget/>
    <Top10/>
    <Anniversary/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
