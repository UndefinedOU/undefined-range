import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import styled from 'styled-components';

import {
  Range,
  RangeGroup
} from '../components';

import {
  Input as UndefinedInput
} from 'undefined-inputs';

const Container = styled.div`
  width: 200px;
  height: 200px;
`;

const Input = styled(UndefinedInput)`
  width: 48px;
`;

storiesOf('Range (Horizontal)', module)
  .add('normal use case', () => {
    return (
      <Container>
        <Range min={0} max={100} value={50}/>
      </Container>
    );
  });

storiesOf('Range (Vertical)', module)
  .add('normal use case', () => {
    return (
      <Container>
        <Range min={0} max={100} value={50} direction="vertical"/>
      </Container>
    );
  });

storiesOf('RangeGroup (Horizontal)', module)
  .add('with Range only', () => {
    return (
      <Container>
        <RangeGroup value={100}>
          <Range min={0} max={200} />
        </RangeGroup>
      </Container>
    );
  })
  .add('with Input and Range (Input first)', () => {
    return (
      <Container>
        <RangeGroup value={80}>
          <Input max={200} type="number"/>
          <Range min={0} max={150} />
        </RangeGroup>
      </Container>
    );
  })
  .add('with Input and Range (Input last)', () => {
    return (
      <Container>
        <RangeGroup value={80}>
          <Range min={0} max={150} />
          <Input max={200} type="number"/>
        </RangeGroup>
      </Container>
    );
  });

storiesOf('RangeGroup (Vertical)', module)
  .add('with Range only', () => {
    return (
      <Container>
        <RangeGroup value={100} direction="vertical">
          <Range min={0} max={200} />
        </RangeGroup>
      </Container>
    );
  })
  .add('with Input and Range (Input first)', () => {
    return (
      <Container>
        <RangeGroup value={80} direction="vertical">
          <Input max={200} type="number"/>
          <Range min={0} max={150} />
        </RangeGroup>
      </Container>
    );
  })
  .add('with Input and Range (Input last)', () => {
    return (
      <Container>
        <RangeGroup value={80} direction="vertical">
          <Range min={0} max={150} />
          <Input max={200} type="number"/>
        </RangeGroup>
      </Container>
    );
  });
