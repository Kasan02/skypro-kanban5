import Header from "./components/Header/header";
import Main from "./components/Main/main";
import PopBrowse from './components/Popups/popBrowse/popBrowse';
import PopNewCard from './components/Popups/popNewCard/popNewCard';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <PopBrowse />
      <PopNewCard />
    </>
  );
};

export default App;
