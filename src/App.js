import React, { useEffect } from 'react';
import './App.css';
import Grid from './features/Grid/Grid';
import { useDispatch } from 'react-redux';
import { initializeArray } from './features/Grid/gridSlice';
function App() {
  const dispatch = useDispatch();
  function handleKeyDown(e){
    if(e.key === "ArrowRight"){
    dispatch(initializeArray());
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
