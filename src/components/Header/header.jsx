import { useState, useEffect, useRef } from 'react';

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
    <header className="header">
      <div className="container">
        <div className="header__block">

          <div className="header__logo _show">
            <a href="/" target="_self">
              <img
                src={isDarkTheme ? "images/logo_dark.png" : "images/logo.png"}
                alt="logo"
              />
            </a>
          </div>

          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>

            <button
              onClick={handleUserClick}
              className="header__user _hover02"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Ivan Ivanov
            </button>

            {showUserPopup && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
                ref={popupRef}
              >
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>

                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={isDarkTheme}
                    onChange={toggleTheme}
                  />
                </div>

                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
