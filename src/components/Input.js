import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value};
  }
  componentWillReceiveProps(nextProps){
    this.setState({value: nextProps.value})
  }
  handleUpdate(value) {
    this.props.handleTextChange && this.props.handleTextChange(value);
    this.setState({value: value});
  }
  render() {
    let style = {display: 'inlineBlock', width: '60px', margin: '10px'};
    return (
      <input {...this.state}
        style={style}
        value={this.state.value}
        onChange={
      e => this.handleUpdate(e.target.value)} />
    )
  }
}

export default Input;