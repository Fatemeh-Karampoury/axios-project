import React, { Component, useEffect, useState } from 'react';
import  Axios  from 'axios';
import './App.css';

function App() {
const[name, setName]= useState("")
const [predictResule, setPredictResult]=useState([])

const changeCatfact =(event)=>{
   Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
setPredictResult(res.data)
 });
}

  return (
    <div className="App">
  <input className='input-ng' placeholder='My name is...' type='text' onChange={(event)=>setName(event.target.value)}></input>
  <button className='btn' onClick={changeCatfact}>submit</button>
  <div className='h-name'>
  <h1 >name: {predictResule?.name }</h1>
  <h1 >age: {predictResule?.age }</h1>
    </div>
    </div>
  );
}

export default App;
