import React from'react';
import { BrowserRouter  as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Public from './components/Public';
import Private from './components/Private';

function App() {

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/public" element={<Public />}/>
          <Route path="/private" element={<Private />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;