import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const INPUT_WIDTH = 48;
const INPUT_HEIGHT = 30;
const INPUT_RANGE_MARGIN = 20;

class Range extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    let value = parseInt(nextProps.value, 10);
    if (value >= this.props.min && value <= this.props.max) {
      this.onChange(value);
    }
  }

  onChange = (value) => {
    this.props.onChange && this.props.onChange(value);
    this.setState({
      value
    });
  }

  render() {
    let style = {};
    const direction = this.props.direction || 'horizontal';
    const noInput = (typeof this.props.noInput === 'undefined') ? true : this.props.noInput;

    if (direction === 'horizontal') {
      const width = noInput ?  `100%` : `calc(100% - ${INPUT_WIDTH}px - ${INPUT_RANGE_MARGIN}px)`;

      style = {
        width,
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: 0
      };

      if (this.props.side === 'left') {
        style.marginRight = `${INPUT_RANGE_MARGIN}px`;
      }
      
      if (this.props.side === 'right') {
        style.marginLeft = `${INPUT_RANGE_MARGIN}px`;
      }

    } else {
      const height = noInput ?  `100%` : `calc(100% - ${INPUT_HEIGHT}px - ${INPUT_RANGE_MARGIN}px)`;

      style = {
        display: 'block',
        margin: 'auto',
        height
      };

      if (this.props.side === 'top') {
        style.marginBottom = `${INPUT_RANGE_MARGIN}px`;
      }

      if (this.props.side === 'bottom') {
        style.marginTop = `${INPUT_RANGE_MARGIN}px`;
      }
    }

    return (
      <Slider {...this.props}
        vertical={direction === 'vertical'}
        handleStyle={{ borderColor: '#ccc' }}
        trackStyle={{ backgroundColor: '#aaa' }}
        style={style}
        value={this.state.value}
        onChange={val => this.onChange(val)}
      />
    );
  }
}

export default Range;
