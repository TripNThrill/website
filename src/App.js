import React from 'react';
import { Navbar, Footer } from './components'
import './App.css';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <AllRoutes />
        <Footer />
      </header>
    </div>
  );
}

export default App;