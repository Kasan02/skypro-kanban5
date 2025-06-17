import Header from "./components/Header/header.jsx";
import Main from "./components/Main/main.jsx";
import PopBrowse from './components/Popups/popBrowse/popBrowse.jsx';
import PopNewCard from './components/Popups/popNewCard/popNewCard.jsx';
import "./App.css"

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
