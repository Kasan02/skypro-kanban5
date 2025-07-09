import { useState, useEffect, useRef } from 'react';
import {
  HeaderWrapper,
  Container,
  HeaderBlock,
  Logo,
  Nav,
  MainButton,
  UserButton,
  Popup,
  UserButtonWrapper,
} from './header.styled';
const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const popupRef = useRef(null);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
    }
  }, []);
  useEffect(() => {
    const body = document.body;
    if (isDarkTheme) {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkTheme]);
  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };
  const handleUserClick = () => {
    setShowUserPopup(prev => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowUserPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <HeaderWrapper $mode={isDarkTheme ? 'dark' : 'light'}>
      <Container>
        <HeaderBlock>
          <Logo>
            <a href="/" target="_self" rel="noopener noreferrer">
              <img
                src={isDarkTheme ? 'images/logo_dark.png' : 'images/logo.png'}
                alt="logo"
              />
            </a>
          </Logo>
          <Nav>
            <MainButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </MainButton>
            <UserButtonWrapper>
              <UserButton onClick={handleUserClick}>
                Ivan Ivanov {showUserPopup ? '▲' : '▼'}
              </UserButton>
              {showUserPopup && (
                <Popup ref={popupRef} $mode={isDarkTheme ? 'dark' : 'light'}>
                  <p>Ivan Ivanov</p>
                 <p>ivan.ivanov@gmail.com</p>
                  <div className="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      checked={isDarkTheme}
                      onChange={toggleTheme}
                    />
                  </div>
                  <button type="button">
                    <a href="#popExit">Выйти</a>
                  </button>
                </Popup>
              )}
            </UserButtonWrapper>
          </Nav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
};
export default Header;