import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import dotAnimation from './dotAnimation/dotAnimation';

function App() {
  return (
    <div className="App">
      <Header />
      <dotAnimation />
      <Footer />
    </div>
  );
}

export default App;
