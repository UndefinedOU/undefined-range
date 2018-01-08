var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Range from './Range';

var RangeGroup = function (_Component) {
  _inherits(RangeGroup, _Component);

  function RangeGroup() {
    _classCallCheck(this, RangeGroup);

    var _this = _possibleConstructorReturn(this, (RangeGroup.__proto__ || Object.getPrototypeOf(RangeGroup)).call(this));

    _this.onChange = function (value) {
      value = parseInt(value, 10) || 0;
      _this.setState({
        value: value
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(RangeGroup, [{
    key: 'render',
    value: function render() {
      var style = {
        width: '100%',
        height: '100%',
        textAlign: 'center'
      };

      var children = this.props.children;
      var itemsCount = children.length;
      var direction = this.props.direction || 'horizontal';
      var mergedProps = {
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
          mergedProps.side = children[0].type === Range ? 'left' : 'right';
        } else {
          mergedProps.side = children[0].type === Range ? 'top' : 'bottom';
        }

        return React.createElement(
          'div',
          { style: style },
          React.cloneElement(this.props.children[0], Object.assign(mergedProps)),
          React.cloneElement(this.props.children[1], Object.assign(mergedProps))
        );
      } else {
        mergedProps.noInput = true;

        return React.createElement(
          'div',
          { style: style },
          React.cloneElement(children, mergedProps)
        );
      }
    }
  }]);

  return RangeGroup;
}(Component);

export default RangeGroup;