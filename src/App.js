import React, { useEffect } from 'react';
import './App.css';
import Grid from './features/Grid/Grid';
import { useDispatch } from 'react-redux';
import { initializeArray, moveRight } from './features/Grid/gridSlice';
function App() {
  const dispatch = useDispatch();
  function handleKeyDown(e){
    if(e.key === "ArrowLeft"){
    dispatch(initializeArray([{row:2,col:0,value:8},{row:2,col:1,value:4},{row:2,col:2,value:4},{row:2,col:3,value:16}]));
  }
  else if(e.key === "ArrowRight"){
    dispatch(moveRight());
  }
}
  useEffect(()=>{
    window.addEventListener("keydown",handleKeyDown);
  },[])
  return (
    <div className="App">
      <div className='buttonHandle'>
        <Grid/>
      </div>
    </div>
  );
}

export default App;
