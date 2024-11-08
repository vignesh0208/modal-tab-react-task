import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContainer from './components/MainContainer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default App;
