import React, { useState } from 'react';
import './App.scss';
import FormSlider from './components/form/form';
import Result from './components/result/result';
import Preview from './components/preview/preview';

function App() {

  const [topLeft, settopLeft] = useState(0);
  const [topRight, settopight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);

  function receivesData(params) {
    settopLeft(params.topLeft);
    settopight(params.topRight);
    setBottomLeft(params.bottomLeft);
    setBottomRight(params.bottomRight);
  }

  return (
    <div className="bodyForm">
      <h2 className="tituloApp">Border Radius Generator</h2>
      <div className="formGrid">
        <Preview topLeft={topLeft} topRight={topRight} bottomRight={bottomRight} bottomLeft={bottomLeft} />
        <FormSlider submit={receivesData}/>
      </div>
      <Result topLeft={topLeft} topRight={topRight} bottomRight={bottomRight} bottomLeft={bottomLeft} />
    </div>
  );
}

export default App;
