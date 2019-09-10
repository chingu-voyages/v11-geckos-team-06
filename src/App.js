import React from 'react';
import './App.scss';

import MainApp from './components/mainApp';
import Test from './components/test';

function App() {
  return (
    <div className="App">
      Foodie Finds <i className="fa fa-500px"></i>
      <MainApp />
      <Test />
    </div>
  );
}

export default App;
