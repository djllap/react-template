import React from 'react';
import Split from './composition/Split';
import './App.css';

function App() {
  return (
    <main className='App'>
      <Split>
        left
      </Split>  
      <Split>
        right
      </Split>
      
    </main>
  );
}

export default App;