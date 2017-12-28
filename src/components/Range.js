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
    if (this.props.input) { return (
      <Slider {...this.props} value={this.state.value}
        onChange={this.onSliderChange} onAfterChange={this.onAfterChange}/>
    )}
    else { return (
      <Slider />
    )}
  }
}

export default Range;
