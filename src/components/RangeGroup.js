import React, { Component } from 'react';
import Range from './Range';

class RangeGroup extends Component {
  constructor() {
    super();

    this.state = {};
  }

  onChange = (value) => {
    value = parseInt(value, 10) || 0;
    this.props.onChange && this.props.onChange(value);
    this.setState({
      value
    });
  }

  render() {
    const style = {
      width: '100%',
      height: '100%',
      textAlign: 'center'
    };
    
    const children = this.props.children;
    const itemsCount = children.length;
    const direction = this.props.direction || 'horizontal';
    const mergedProps = {
      noInput: false,
      side: '',
      direction: this.props.direction,
      onChange: this.onChange
    };

    if (this.state.value !== undefined) {
      mergedProps.value = this.state.value; 
    }

    if (itemsCount === 2) {
      if (direction === 'horizontal') {
        mergedProps.side = (children[0].type === Range) ? 'left' : 'right';
      } else {
        mergedProps.side = (children[0].type === Range) ? 'top' : 'bottom';
      }

      return (
        <div style={style}>
          {React.cloneElement(
            this.props.children[0], Object.assign(mergedProps))}
          {React.cloneElement(
            this.props.children[1], Object.assign(mergedProps))}
        </div>
      );
    } else {
      mergedProps.noInput = true;

      return (
        <div style={style}>
          {React.cloneElement(children, mergedProps)}
        </div>
      );
    }
  }
}

export default RangeGroup;
