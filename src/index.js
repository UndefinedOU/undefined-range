import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Range from './components/Range'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Range value={25} max={100} min={0} step={2}/>, document.getElementById('root'));
registerServiceWorker();
