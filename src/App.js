import React from 'react';
import './App.scss';
import Header from './components/Header';

import MainApp from './components/mainApp';

function App() {
  return (
    <div className="App">
      {/* Foodie Finds <i className="fa fa-500px"></i> */}
      <MainApp />
      <Header />
    </div>
  );
}

export default App;
