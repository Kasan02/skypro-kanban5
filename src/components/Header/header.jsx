import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  ThemeLabel,
} from "./header.styled";

const Header = ({ isAuth, setIsAuth, user, setUser }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isDarkTheme) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  const handleUserClick = () => setShowUserPopup((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowUserPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsAuth(false);
    setUser(null);
    setShowUserPopup(false);
    navigate("/sign-in");
  };

  const handleLogin = () => {
    navigate("/sign-in");
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <HeaderWrapper $mode={isDarkTheme ? "dark" : "light"}>
      <Container>
        <HeaderBlock>
          <Logo>
            <a href="/" onClick={handleLogoClick} rel="noopener noreferrer">
              <img
                src={isDarkTheme ? "images/logo_dark.png" : "images/logo.png"}
                alt="logo"
              />
            </a>
          </Logo>

          <Nav>
            {isAuth && user ? (
              <>
                <MainButton id="btnMainNew" onClick={() => navigate("/new")}>
                  Создать новую задачу
                </MainButton>


                <UserButtonWrapper>
                  <UserButton onClick={handleUserClick} aria-haspopup="true" aria-expanded={showUserPopup}>
                    {user.name} {showUserPopup ? "▲" : "▼"}
                  </UserButton>

                  {showUserPopup && (
                    <Popup ref={popupRef} $mode={isDarkTheme ? "dark" : "light"}>
                      <p>{user.name}</p>
                      <p>{user.email}</p>

                      <div className="pop-user-set__theme">
                        <ThemeLabel $mode={isDarkTheme ? "dark" : "light"}>
                          Темная тема
                        </ThemeLabel>
                        <input
                          type="checkbox"
                          checked={isDarkTheme}
                          onChange={toggleTheme}
                          aria-label="Переключить темную тему"
                        />
                      </div>

                      <button type="button" onClick={handleLogout}>
                        Выйти
                      </button>
                    </Popup>
                  )}
                </UserButtonWrapper>
              </>
            ) : (
              <MainButton onClick={handleLogin}>Войти</MainButton>
            )}
          </Nav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;








