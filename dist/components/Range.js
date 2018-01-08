var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

var INPUT_WIDTH = 48;
var INPUT_HEIGHT = 30;
var INPUT_RANGE_MARGIN = 20;

var Range = function (_Component) {
  _inherits(Range, _Component);

  function Range(props) {
    _classCallCheck(this, Range);

    var _this = _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, props));

    _this.onChange = function (value) {
      _this.props.onChange && _this.props.onChange(value);
      _this.setState({
        value: value
      });
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(Range, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = parseInt(nextProps.value, 10);
      if (value >= this.props.min && value <= this.props.max) {
        this.onChange(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = {};
      var direction = this.props.direction || 'horizontal';
      var noInput = typeof this.props.noInput === 'undefined' ? true : this.props.noInput;

      if (direction === 'horizontal') {
        var width = noInput ? '100%' : 'calc(100% - ' + INPUT_WIDTH + 'px - ' + INPUT_RANGE_MARGIN + 'px)';

        style = {
          width: width,
          display: 'inline-block',
          verticalAlign: 'middle',
          margin: 0
        };

        if (this.props.side === 'left') {
          style.marginRight = INPUT_RANGE_MARGIN + 'px';
        }

        if (this.props.side === 'right') {
          style.marginLeft = INPUT_RANGE_MARGIN + 'px';
        }
      } else {
        var height = noInput ? '100%' : 'calc(100% - ' + INPUT_HEIGHT + 'px - ' + INPUT_RANGE_MARGIN + 'px)';

        style = {
          display: 'block',
          margin: 'auto',
          height: height
        };

        if (this.props.side === 'top') {
          style.marginBottom = INPUT_RANGE_MARGIN + 'px';
        }

        if (this.props.side === 'bottom') {
          style.marginTop = INPUT_RANGE_MARGIN + 'px';
        }
      }

      return React.createElement(Slider, Object.assign({}, this.props, {
        vertical: direction === 'vertical',
        style: style,
        value: this.state.value,
        onChange: function onChange(val) {
          return _this2.onChange(val);
        }
      }));
    }
  }]);

  return Range;
}(Component);

export default Range;