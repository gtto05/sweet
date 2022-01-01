## init project

```zsh
yarn create react-app sweet
// or
npx create-react-app sweet
// eslint formater
npx install-peerdeps --dev eslint-config-wesbos

```

## Global Style

1. **create** `src/styles/GlobalStyle.js`

```javascript
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
/* css */
`;
export default GlobalStyle;
```

2. component `App` **call** `GlobalStyle`

```javascript
// App.js
import GlobalStyles from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyles />
      <h3>Project name: sweet</h3>
      <p>by Hansum</p>
    </>
  );
}
```

## Header

1. **create** component `src/views/landingPage.js`
2. **create** component `src/components/Header.js` & **styled**

```javascript
import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="navigation">
          <Logo />
          <div className="navMenu">
            <nav>
              <ul>
                <li>
                  <Link to="home">首页</Link>
                </li>
                <li>
                  <Link to="services">支持</Link>
                </li>
                <li>
                  <Link to="about">关于</Link>
                </li>
                <li>
                  <Link to="contact">联系我们</Link>
                </li>
              </ul>
            </nav>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--lightBlue_1);
  border-bottom: 1px solid var(--mediumSlateBlue);
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
  nav ul li {
    display: inline-block;
    margin: 0 0.5rem;
    a {
      font-size: 1.6rem;
      font-weight: 500;
      display: inline-block;
      padding: 0.5rem 1rem;
      color: var(--darkBlue_2);
    }
    &:hover {
      a {
        text-decoration: underline;
      }
    }
  }
`;

export default Header;
```

3. component `LandingPage` **call** component `Header`
4. component `App` **call** component`LandingPage`
5. **create** component `Logo` & **styled**

```js
/* Logo.js */
import React from "react";
import styled from "styled-components";

const LogoStyles = styled.div`
  max-width: 100px;
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

function Logo() {
  return (
    <LogoStyles>
      <svg viewBox="0 0 71 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        ...
      </svg>
    </LogoStyles>
  );
}

export default Logo;
```

8. **create** component `ThemeSwitcher` & **styled**

```javascript
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import styled from "styled-components";

const ThemeSwitcherStyles = styled.div`
  label {
    --gap: 5px;
    --size: 20px;
    height: 30px;
    width: 55px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    background-color: #cfc8f4;
    border-radius: 50px;
    z-index: 1;
    .icon {
      height: var(--size);
      width: var(--size);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 75%;
      color: var(--white);
    }
    /* 背景 */
    &::after {
      position: absolute;
      content: "";
      border-radius: 50%;
      transform: translateY(-50%);
      top: 50%;
      left: var(--gap);
      height: var(--size);
      width: var(--size);
      z-index: -1;
      background-color: var(--mediumSlateBlue);
      transition: 0.5s ease left;
    }
  }
  input {
    width: 0;
    height: 0;
    display: none;
    visibility: hidden;
    &:checked + label::after {
      left: calc(100% - var(--size) - var(--gap));
    }
  }
`;

function ThemeSwitcher() {
  return (
    <ThemeSwitcherStyles>
      <input type="checkbox" id="switcher" />
      <label htmlFor="switcher">
        <div className="icon">
          <FiSun />
        </div>
        <div className="icon">
          <FiMoon />
        </div>
      </label>
    </ThemeSwitcherStyles>
  );
}

export default ThemeSwitcher;
```

## ThemeContext

1. **create** contexts `ThemeContext`
2. **create** data `themeList`
