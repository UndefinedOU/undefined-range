var _templateObject = _taggedTemplateLiteral(['\n  width: 48px;\n'], ['\n  width: 48px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import './index.css';

import styled from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

import { Input as UndefinedInput } from 'undefined-inputs';

import { Range, RangeGroup } from './components';

import registerServiceWorker from './registerServiceWorker';

var Input = styled(UndefinedInput)(_templateObject);

var style = {
  margin: '20px',
  width: '400px',
  padding: '10px',
  'backgroundColor': '#ccc'
};

ReactDOM.render(React.createElement(
  'div',
  { style: { padding: '20px' } },
  React.createElement(
    'div',
    { style: style },
    React.createElement(Range, { value: 30, min: 0, max: 200 })
  ),
  React.createElement(
    'div',
    { style: style },
    React.createElement(
      RangeGroup,
      null,
      React.createElement(Range, { value: 50, min: 0, max: 100 })
    )
  ),
  React.createElement('hr', null),
  React.createElement(
    'div',
    { style: style },
    React.createElement(
      RangeGroup,
      null,
      React.createElement(Input, { value: 123, type: 'number' }),
      React.createElement(Range, { value: 80, min: 0, max: 150 })
    )
  ),
  React.createElement(
    'div',
    { style: style },
    React.createElement(
      RangeGroup,
      null,
      React.createElement(Range, { value: 80, min: 0, max: 150 }),
      React.createElement(Input, { value: 123, type: 'number' })
    )
  ),
  React.createElement('hr', null),
  React.createElement(
    'div',
    { style: Object.assign({}, style, { width: '60px', height: '200px' }) },
    React.createElement(Range, { value: 30, min: 0, max: 200, direction: 'vertical' })
  ),
  React.createElement(
    'div',
    { style: Object.assign({}, style, { width: '60px', height: '200px' }) },
    React.createElement(
      RangeGroup,
      { direction: 'vertical' },
      React.createElement(Range, { value: 80, min: 0, max: 150 }),
      React.createElement(Input, { value: 123, type: 'number' })
    )
  ),
  React.createElement(
    'div',
    { style: Object.assign({}, style, { width: '60px', height: '200px' }) },
    React.createElement(
      RangeGroup,
      { direction: 'vertical' },
      React.createElement(Input, { value: 123, type: 'number' }),
      React.createElement(Range, { value: 80, min: 0, max: 150 })
    )
  )
), document.getElementById('root'));
registerServiceWorker();