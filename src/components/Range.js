import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Range extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({value: Math.min(nextProps.value, this.props.max)});
  }
  onSliderChange = (value) => {
    this.props.handleSliderChange && this.props.handleSliderChange(value)
    this.setState({value: value});
  }
  onAfterChange = (value) => {
    console.log(value); //eslint-disable-line
  }
  render() {
    let style = {
      display: 'inline-block',
      width: 'calc(100% - 96px)', // 60px input, 6px input border+padding, 30px space
      margin: 0
    }
    if (this.props.side === 'left') {
      style.marginLeft = '10px';
    }
    if (this.props.side === 'right') {
      style.marginRight = '10px';
    }
    if (!this.props.side || this.props.side === 'only') {
      style.marginTop = '10px';
      style.marginLeft = '10px';
      style.width = 'calc(100% - 20px)';
    }
    if (this.props.vertical) {
      style = {
      position: 'relative',
      top: '10px',
      display: 'block',
      marginLeft: '10px',
      height: 'calc(100% - 20px)'
      }
    }
    if (this.props.side === 'top') {
      style.height = 'calc(100% - 53px)'; // TODO: specs for input dimensions!
      style.marginBottom = '10px';
      style.marginLeft = '37px';
    }
    if (this.props.side === 'bottom') {
      style.height = 'calc(100% - 53px)'; // TODO: specs for input dimensions!
      style.top = '0px';
      style.marginLeft = '37px';
    }
    return (
      <Slider {...this.props}
        style={style}
        value={this.state.value}
        onChange={val => this.onSliderChange(val)}
        onAfterChange={this.onAfterChange}
      />
    );
  }
}

export default Range;
