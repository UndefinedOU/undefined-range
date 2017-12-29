import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Input from './components/Input/Input.js'
import Range from './components/Range'
import registerServiceWorker from './registerServiceWorker';

class RangeGroup extends React.Component {
  render() {
    if (this.props.children.length === 2) { return (
      <div style={this.props.style}>
        {React.cloneElement(this.props.children[0], { side: 'left'})}
        {React.cloneElement(this.props.children[1], { side: 'right'})}
      </div>)}
    else { return (
      <div style={this.props.style}>
        {React.cloneElement(this.props.children, { side: 'only'})}
      </div>)}
  }
}

let style = {
  margin: '50px',
  padding: '10px',
  width: '210px',
  height: '125px',
  'backgroundColor': 'lightyellow'
};
ReactDOM.render(
  <div style={{padding: '20px'}}>
    <RangeGroup style={style}>
      <Range value={50} min={0} max={100} />
    </RangeGroup>
    <hr style={{marginTop: '50px'}}/>
    <RangeGroup style={style}>
      <Range value={80} min={0} max={150} />
      <Input value={123} icon="Y"/>
    </RangeGroup>
  </div>
  , document.getElementById('root')
);
registerServiceWorker();
