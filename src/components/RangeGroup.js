import React from 'react';

class RangeGroup extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleTextChange(val) {
    console.log(`Text value recieved by parent: ${val}`);
    let num = Number(val);
    this.setState({value: (isNaN(num))? 0 : num});
  };
  handleSliderChange(val) {
    console.log(`Slider value recieved by parent: ${val}`);
    let num = Number(val);
    this.setState({value: (isNaN(num))? 0 : num});
  }
  render() {
    let side1 = 'left', side2 = 'right';
    let mergeObj = {
      handleTextChange: this.handleTextChange.bind(this),
      handleSliderChange: this.handleSliderChange.bind(this)
    };
    if (this.props.direction && (this.props.direction === 'vertical')) {
      mergeObj.vertical = true;
      side1 = 'top', side2 = 'bottom';
      }
    if (this.state.value !== undefined) mergeObj.value = this.state.value;

    if (this.props.children.length === 2) { return (
      <div style = {this.props.style}>
        {React.cloneElement(
          this.props.children[0], Object.assign({side: side1}, mergeObj))}
        {React.cloneElement(
          this.props.children[1], Object.assign({side: side2}, mergeObj))}
      </div>)}
    else { return (
      <div style={{...this.props.style}}>
        {React.cloneElement(this.props.children, {
          side: 'only'})}
      </div>)
    }
  }
}

export default RangeGroup;
