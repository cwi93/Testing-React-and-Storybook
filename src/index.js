import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

// const & let instead of var
const element = <h1>Hello World</h1>;

const lionHtml = <div id="world"></div>

ReactDom.render(lionHtml, document.getElementById('root'));
