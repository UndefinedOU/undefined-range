import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Range from './components/Range'
import registerServiceWorker from './registerServiceWorker';

let style = {
  margin: '50px',
  padding: '10px',
  width: '210px',
  height: '125px',
  'background-color': 'lightyellow'
};
ReactDOM.render(
  <div style={style}>
    <Range value={25} max={100} min={0} step={2}/>
  </div>
  , document.getElementById('root')
);
registerServiceWorker();
