import React, { useCallback, useState } from 'react';
import DemoOutput from './DemoOutput'
import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [ isShowTxt , setIsShowText] = useState(false)
  const [ isletShow, setIsletShow] = useState(false)
  console.log('app running');

  const toggleParagraphHandler = useCallback(() => {
    setIsShowText(prevState =>!prevState)
  },[isletShow])
  const letShowTextHendler = () => {
    setIsShowText(true)
  }
  return (
    <div className="app">
      <Button onClick={toggleParagraphHandler}>Show Text </Button>
      <DemoOutput  show= {isShowTxt}/>
      {isShowTxt && <p>this text new</p>}
      <Button onClick={letShowTextHendler}>show</Button>
      <h1>Hi there!</h1>
    </div>
  );
}

export default App;
