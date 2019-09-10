import React from 'react';
import './App.scss';

import MainApp from './components/mainApp';
import Test from './components/test';

function App() {
  return (
    <div className="App">

      <div className="App-bk-img"></div>
      <div className="App-bk-solid">
        <MainApp />
      </div>


      Foodie Finds <i className="fa fa-500px"></i>
      
      <Test />


    </div>
  );
}

export default App;
