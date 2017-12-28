import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Range extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }
  onSliderChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  }
  onAfterChange = (value) => {
    console.log(value); //eslint-disable-line
  }
  render() {
    return (
      <Slider value={this.state.value}
        min={this.props.min} max={this.props.max} step={this.props.step}
        vertical={true}
        onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
      />
    );
  }
}

export default Range;
