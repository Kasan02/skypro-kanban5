
import Header from './components/Header/header';
import Main from './components/Main/main';
import PopBrowse from './popups/PopBrowse/popBrowse';
import PopNewCard from './popups/PopNewCard/popNewCard';
import PopUser from './popups/PopUser/PopUser';

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
