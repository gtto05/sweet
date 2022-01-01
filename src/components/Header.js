import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

/* style */
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
  .navMenu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
  .menuIcon,
  .closeIcon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 10px;
    padding: 3px;
    svg {
      color: var(--darkBlue_1);
    }
    &:hover {
      background-color: #8080803b;
    }
  }
  @media only screen and (max-width: 768px) {
    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      width: 90%;
      max-width: 250px;
      top: 0;
      right: 0;
      background-color: var(--lightBlue_2);
      height: 100vh;
      z-index: 100;
      transform: translateX(100%);
      transition: 0.3s ease transform;
      overflow: hidden;
      .closeIcon {
        position: absolute;
        top: 10px;
        right: 10px;
        &:hover {
          svg {
            color: var(--white);
          }
        }
      }
    }
    nav.open {
      transform: translateX(0);
    }
    nav ul li {
      display: block;
      text-align: right;
      width: 100%;
      margin: 0.5rem 0;
      a {
        display: block;
        width: 100%;
      }
    }
  }
`;
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width:768px)').matches
  );
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.matchMedia('(max-width:768px)').matches);
    });
  }, []);
  console.log(isMobile);
  return (
    <HeaderStyles>
      <div className="container">
        <div className="navigation">
          <Logo />
          <div className="navMenu">
            <nav className={isMobile && isNavOpen ? 'open' : undefined}>
              {isMobile && (
                <div
                  className="closeIcon"
                  onClick={() => {
                    setIsNavOpen(false);
                  }}
                  onKeyDown={() => {
                    setIsNavOpen(false);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <FiX />
                </div>
              )}
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
            {isMobile && (
              <div
                className="menuIcon"
                tabIndex={0}
                role="button"
                onClick={() => {
                  setIsNavOpen(true);
                }}
                onKeyDown={() => {
                  setIsNavOpen(true);
                }}
              >
                <FiMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
