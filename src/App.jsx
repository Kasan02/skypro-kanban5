import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import PopBrowse from './components/popups/PopBrowse';
import PopNewCard from './components/popups/PopNewCard';
import PopUser from './components/popups/PopUser';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <PopBrowse />
      <PopNewCard />
      <PopUser />
    </>
  );
};

export default App;
