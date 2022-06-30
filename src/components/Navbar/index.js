import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import LogoIcon from '../../images/logo1.png';
import LogoText from '../../images/logo2.png';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LogoContainer
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);

  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            {scrollNav ? (
              <NavLogo to="/" onClick={toggleHome}>
                <LogoContainer>
                  <img className="logo-text" src={LogoText} alt="logo" />
                </LogoContainer>

              </NavLogo>
            ) : (
              <NavLogo to="/" onClick={toggleHome}>
                <LogoContainer>
                  <img className="logo-icon" src={LogoIcon} alt="logo" />
                  <img className="logo-text" src={LogoText} alt="logo" />
                </LogoContainer>
              </NavLogo>

            )}

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >Sobre nós</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >Serviços</NavLinks>
              </NavItem>
            </NavMenu>
            {/*  <NavBtn>
              <NavBtnLink to="/singin">Sign In</NavBtnLink>
            </NavBtn> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;