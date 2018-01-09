var _templateObject = _taggedTemplateLiteral(['\n  width: 200px;\n  height: 200px;\n'], ['\n  width: 200px;\n  height: 200px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 48px;\n'], ['\n  width: 48px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import styled from 'styled-components';

import { Range, RangeGroup } from '../components';

import { Input as UndefinedInput } from 'undefined-inputs';

var Container = styled.div(_templateObject);

var Input = styled(UndefinedInput)(_templateObject2);

storiesOf('Range (Horizontal)', module).add('normal use case', function () {
  return React.createElement(
    Container,
    null,
    React.createElement(Range, { min: 0, max: 100, value: 50 })
  );
});

storiesOf('Range (Vertical)', module).add('normal use case', function () {
  return React.createElement(
    Container,
    null,
    React.createElement(Range, { min: 0, max: 100, value: 50, direction: 'vertical' })
  );
});

storiesOf('RangeGroup (Horizontal)', module).add('with Range only', function () {
  return React.createElement(
    Container,
    null,
    React.createElement(
      RangeGroup,
      { value: 100 },
      React.createElement(Range, { min: 0, max: 200 })
    )
  );
}).add('with Input and Range (Input first)', function () {
  return React.createElement(
    Container,
    null,
    React.createElement(
      RangeGroup,
      { value: 80 },
      React.createElement(Input, { max: 200, type: 'number' }),
      React.createElement(Range, { min: 0, max: 150 })
    )
  );
}).add('with Input and Range (Input last)', function () {
  return React.createElement(
    Container,
    null,
    React.createElement(
      RangeGroup,
      { value: 80 },
      React.createElement(Range, { min: 0, max: 150 }),
      React.createElement(Input, { max: 200, type: 'number' })
    )
  );
});

storiesOf('RangeGroup (Vertical)', module).add('with Range only', function () {
  return React.createElement(
    Container,
    null,
    React.createElement(
      RangeGroup,
      { value: 100, direction: 'vertical' },
      React.createElement(Range, { min: 0, max: 200 })
    )
  );
}).add('with Input and Range (Input first)', function () {
  return React.createElement(
    Container,
    null,
    React.createElement(
      RangeGroup,
      { value: 80, direction: 'vertical' },
      React.createElement(Input, { max: 200, type: 'number' }),
      React.createElement(Range, { min: 0, max: 150 })
    )
  );
}).add('with Input and Range (Input last)', function () {
  return React.createElement(
    Container,
    null,
    React.createElement(
      RangeGroup,
      { value: 80, direction: 'vertical' },
      React.createElement(Range, { min: 0, max: 150 }),
      React.createElement(Input, { max: 200, type: 'number' })
    )
  );
});