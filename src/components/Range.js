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
      width: 'calc(100% - 80px)',
      margin: 0
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
