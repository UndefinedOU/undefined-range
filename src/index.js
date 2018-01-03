import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Input from './components/Input';
import Range from './components/Range';
import RangeGroup from './components/RangeGroup';
import registerServiceWorker from './registerServiceWorker';

let style = {
  margin: '20px',
  width: '210px',
  height: '50px',
  'backgroundColor': 'lightyellow'
};

ReactDOM.render(
  <div style={{padding: '20px'}}>
    <div style={style}>
      <Range value={30} min={0} max={200} />
    </div>

    <RangeGroup style={style}>
      <Range value={50} min={0} max={100} />
    </RangeGroup>

    <hr style={{marginTop: '50px'}}/>
    <RangeGroup style={style}>
      <Input value={123} icon='Y' />
      <Range value={80} min={0} max={150} />
    </RangeGroup>

    <RangeGroup style={style}>
      <Range value={80} min={0} max={150} />
      <Input value={123} icon="Y" />
    </RangeGroup>

    <hr style={{marginTop: '50px'}}/>
    <div style={{...style, width: '30px', height: '200px'}}>
      <Range value={30} min={0} max={200} vertical={true} />
    </div>

    <RangeGroup direction='vertical' style={{...style, height: '200px', width: '86px'}}>
      <Range value={80} min={0} max={150} />
      <Input value={123} icon="Y" />
    </RangeGroup>

    <RangeGroup direction='vertical' style={{...style, height: '200px', width: '86px'}}>
      <Input value={123} icon="Y" />
      <Range value={80} min={0} max={150} />
    </RangeGroup>
  </div>
  , document.getElementById('root')
);
registerServiceWorker();
