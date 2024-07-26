// import { useState, useEffect } from "react";
import './App.css'
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';

function App() {
  return (
    <>
      <div>
        <h1>Sip Happens Café </h1>
        <p>Please leave your feedback about our service by selecting one of the options below.
</p>
      </div>
       <Options />
      <Feedback />
     
         </>
  )
}

export default App
