import React from 'react';
import Maketext from './maketext';
import './App.css';
import Displaytext from './displaytext';
import Tweet from './tweet';

class App extends React.Component{
  
render(){

  return (
    <div className="App">
     
     <div className="input">
       <Maketext/> 
     </div>
     <div>
       <Tweet/>
     </div>

     <div className='output-text'>
       <Displaytext/>
     </div>

     </div>
  )
}
}

export default App;
