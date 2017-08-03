import React from 'react';
import ReactDOM from 'react-dom';

import HelloPoo from './HelloPoo';
import Header from './components/header/Header';
import './base.css';

import 'normalize.css';

const root = document.getElementById('root');

ReactDOM.render(<Header />, root);
