import React from 'react';
import Header from './components/Header';
import Mylife from './components/Mylife';
import Languages from './components/Languages';
import Link from './components/Link';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Mylife />
      <Languages />
      <Link />
    </div>
  );
}

export default App;
