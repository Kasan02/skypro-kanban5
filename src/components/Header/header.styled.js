import styled from "styled-components";

export const HeaderWrapper = styled.header.attrs(() => ({
  className: "header",
}))`
  width: 100%;
  min-height: 60px;
  background-color: ${({ $mode }) => ($mode === "dark" ? "#222" : "#fff")};
  color: ${({ $mode }) => ($mode === "dark" ? "#eee" : "#111")};
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  /* Вложенным элементам передаём цвет */
  *, *::before, *::after {
    color: inherit;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: center;
`;

export const HeaderBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  img {
    height: auto;
    width: 85px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ThemeLabel = styled.p`
  color: ${({ $mode }) => ($mode === "dark" ? "#eee" : "#111")};
  font-size: 13px;
  margin: 0;
`;

export const UserButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const MainButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    background: #0056b3;
  }
`;

export const UserButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  font-weight: 600;
  padding: 5px 10px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Popup = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  width: 213px;
  background: ${({ $mode }) => ($mode === "dark" ? "#2e2e2e" : "#fff")};
  color: ${({ $mode }) => ($mode === "dark" ? "#eee" : "#111")};
  border: 1px solid ${({ $mode }) => ($mode === "dark" ? "#444" : "#ccc")};
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  padding: 34px;
  z-index: 999;
  transition: all 0.2s ease;

  p {
    margin: 6px 0;
    font-size: 14px;
  }

  .pop-user-set__theme {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
    font-size: 13px;
    color: ${({ $mode }) => ($mode === "dark" ? "#eee" : "#111")};
  }

  input[type="checkbox"] {
    transform: scale(1.2);
    cursor: pointer;
  }

  button {
    width: 72px;
    margin-top: 10px;
    margin-left: 35.5px;
    background: ${({ $mode }) => ($mode === "dark" ? "#fff" : "#000")};
    border: 1px solid rgb(86, 94, 239);
    border-radius: 4px;
    color: ${({ $mode }) => ($mode === "dark" ? "#000" : "#fff")};
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;

    a {
      color: ${({ $mode }) => ($mode === "dark" ? "#000" : "#fff")};
      text-decoration: none;
      display: block;
      width: 100%;
      text-align: center;
    }

    &:hover {
      background: gray;
    }
  }
`;



