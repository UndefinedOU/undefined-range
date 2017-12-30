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
    let side1 = 'left', side2 = 'right';
    let mergeObj = {
      handleTextChange: this.handleTextChange.bind(this),
      handleSliderChange: this.handleSliderChange.bind(this)
    };
    if (this.props.direction && (this.props.direction === 'vertical')) {
      mergeObj.vertical = true;
      side1 = 'top', side2 = 'bottom'
    }
    if (this.state.value !== undefined) mergeObj.value = this.state.value;

    if (this.props.children.length === 2) { return (
      <div style={this.props.style}>
        {React.cloneElement(this.props.children[0],
          Object.assign({side: side1}, mergeObj)
        )}
        {React.cloneElement(this.props.children[1],
          Object.assign({side: side2}, mergeObj)
        )}
      </div>)}
    else { return (
      <div style={{...this.props.style}}>
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
      margin: '10px'
    };
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
  width: '210px',
  height: '50px',
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

    <hr style={{marginTop: '50px'}}/>
    <div style={{...style, width: '30px', height: '200px'}}>
      <Range value={30} min={0} max={200} vertical={true} />
    </div>

    <RangeGroup direction='vertical' style={{...style, height: '200px', width: '86px'}}>
      <Range value={80} min={0} max={150} />
      <Input value={123} icon="Y" />
    </RangeGroup>

    <RangeGroup direction='vertical' style={{...style, height: '200px', width: '86px'}}>
      <Input value={123} icon="Y" />
      <Range value={80} min={0} max={150} />
    </RangeGroup>
  </div>
  , document.getElementById('root')
);
registerServiceWorker();
