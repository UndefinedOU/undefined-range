import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import Input from './components/Input/Input.js'
// es-lint-disable-next-line
// import {Input, TextArea, GenericInput} from 'react-text-input';
import Range from './components/Range';
import registerServiceWorker from './registerServiceWorker';

class RangeGroup extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleTextChange(val) {
    console.log(`Text value recieved by parent: ${val}`);
    this.setState({value: Number(val)});
  };
  handleSliderChange(val) {
    console.log(`Slider value recieved by parent: ${val}`);
    this.setState({value: Number(val)});
  }
  render() {
    let mergeObj = {
      handleTextChange: this.handleTextChange.bind(this),
      handleSliderChange: this.handleSliderChange.bind(this)
    };
    if (this.state.value !== undefined) mergeObj.value = this.state.value;
    if (this.props.children.length === 2) { return (
      <div style={this.props.style}>
        {React.cloneElement(this.props.children[0],
          Object.assign({side: 'left'}, mergeObj)
        )}
        {React.cloneElement(this.props.children[1],
          Object.assign({side: 'right'}, mergeObj)
        )}
      </div>)}
    else { return (
      <div style={this.props.style}>
        {React.cloneElement(this.props.children, {
          side: 'only'})}
      </div>)}
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value};
  }
  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value})
  }
  handleUpdate(value) {
    this.props.handleTextChange && this.props.handleTextChange(value)
    this.setState({value: value});
  }
  render() {
    style = {
      display: 'inlineBlock',
      width: '60px',
      margin: 0
    };
    if (this.props.side === 'left') {
      style.marginRight = '10px';
    }
    if (this.props.side === 'right') {
      style.marginLeft = '10px';
    }
    return (
      <input {...this.state}
        style={style}
        value={this.state.value}
        onChange={e => this.handleUpdate(e.target.value)} />
    )
  }
}

let style = {
  margin: '20px',
  padding: '10px',
  width: '210px',
  height: '125px',
  'backgroundColor': 'lightyellow'
};

ReactDOM.render(
  <div style={{padding: '20px'}}>
    <div style={style}>
      <Range value={30} min={0} max={200} />
    </div>

    <RangeGroup style={style}>
      <Range value={50} min={0} max={100} />
    </RangeGroup>

    <hr style={{marginTop: '50px'}}/>
    <RangeGroup style={style}>
      <Input value={123} icon="Y" />
      <Range value={80} min={0} max={150} />
    </RangeGroup>

    <RangeGroup style={style}>
      <Range value={80} min={0} max={150} />
      <Input value={123} icon="Y" />
    </RangeGroup>
  </div>
  , document.getElementById('root')
);
registerServiceWorker();
