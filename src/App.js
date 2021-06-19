import './App.css';
import React ,{useState} from 'react'

function App() {
   const [name,setName]=useState(localStorage.getItem('userName'));
   console.log(name);
  function eventHandler(e)
  {  
     setName(e.target.value);
     localStorage.setItem('userName',name)
  }
  return (
    <div className="App">
      <header className="App-header">
        <input type='text' onChange={eventHandler}/>
        <b>{name}</b>
      </header>
    </div>
  );
}

export default App;
