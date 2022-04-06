import React, { useRef } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { useScrollTo } from "react-use-window-scroll";

const Navbar = () => {
  const ulRef = useRef(null);

  const toggleNavbar = () => {
    ulRef.current.classList.toggle("open");
  };
  const { user, logout } = useAuth();

  const scrollTo = useScrollTo();

  const handleClick = () => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <NavbarContainer onClick={handleClick}>
        <NavbarLarge>
          <h3>
            <BrandLink to="/">SpringSpree'22</BrandLink>
          </h3>
          <ul className="nav-links">
            <li>
              <StyledLink to="/events">Events</StyledLink>
            </li>
            <li>
              <StyledLink to="/gallery">Gallery</StyledLink>
            </li>
            <li>
              <StyledLink to="/sponsors">Sponsors</StyledLink>
            </li>
            <li>
              <StyledLink to="/team">Team</StyledLink>
            </li>
            <li>
              <StyledLink to="/faq">FAQs</StyledLink>
            </li>
            <li>
              <StyledLink to="/contacts">Contact Us</StyledLink>
            </li>

            {user ? (
              <li>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="more-button"
                    data-bs-toggle="dropdown"
                  >
                    More
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="more-button">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button onClick={logout} className="dropdown-item">
                        logout
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <>
                <li>
                  <StyledLink to="/login">Login</StyledLink>
                </li>
              </>
            )}
          </ul>
        </NavbarLarge>
        <NavbarSmallNav className="Hello">
          {/*  */}
          <h3>
            <Link to="/" className="brand-name">
              SpringSpree'22
            </Link>
          </h3>
          <button id="toggle-navbar" onClick={toggleNavbar}>
            <div className="hamburger" id="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </button>
        </NavbarSmallNav>
        <SmallNavLinks
          ref={ulRef}
          className="small-nav-links small-nav"
          id="mobile-nav-links"
          onClick={toggleNavbar}
        >
          <li>
            <StyledLink to="/events" style={{ textDecoration: "none" }}>
              Events
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/gallery">Gallery</StyledLink>
          </li>
          <li>
            <StyledLink to="/sponsors">Sponsors</StyledLink>
          </li>
          <li>
            <StyledLink to="/team">Team</StyledLink>
          </li>
          <li>
            <StyledLink to="/faq">FAQs</StyledLink>
          </li>
          <li>
            <StyledLink to="/contacts">Contact Us</StyledLink>
          </li>
          {user ? (
            <>
              <li>
                <StyledLink to="/profile">Profile</StyledLink>
              </li>
              <li>
                <button onClick={logout} className="btn btn-primary">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <StyledLink to="/login">Login</StyledLink>
              </li>
            </>
          )}
        </SmallNavLinks>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

const SmallNavLinks = styled.ul`
  display: none;
  > li {
    list-style: none;
    margin-top: 5px;
  }
`;

const NavbarContainer = styled.div`
  position: fixed;
  z-index: 12000;
  width: 100%;
  color: white;
  font-family: "Poppins";
  top: 0;
  background-color: #2b0538;
  backdrop-filter: blur(5px);

  .nav-links {
    margin-bottom: 0;
  }

  > .open {
    @media (max-width: 860px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding: 10px 1rem;
      transition: all 300ms ease-in-out;
      z-index: 120;
    }
  }
`;

const BrandLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: "Steinfeld";
  font-size: 2rem;

  &:hover {
    color: orange;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none !important;
  position: relative;
  border-bottom: none;
  outline: none;

  &:hover {
    color: orange;
  }
`;

const NavbarLarge = styled.div`
  background-color: rgba(0, 0, 0, 0.308);
  display: flex;
  padding: 10px 75px;
  justify-content: space-between;

  > h3 {
    font-weight: 400;
    font-size: 3rem;
    display: flex;
    align-items: center;
  }

  > ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    align-items: center;
  }

  > ul li a {
    -webkit-transition: all 100ms ease-in 10ms;
    -o-transition: all 100ms ease-in 10ms;
    transition: all 100ms ease-in 10ms;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

const NavbarSmallNav = styled.div`
  background-color: rgba(0, 0, 0, 0.308);
  display: none;
  > h3 {
    > a {
      color: white;
      text-decoration: none;
      font-family: "Steinfeld";

      &:hover {
        color: orange;
      }
    }
  }

  > #toggle-navbar {
    background: none;
    border: none;
    transform: scale(0.75);

    > .hamburger .line {
      width: 50px;
      height: 5px;
      background-color: #ecf0f1;
      display: block;
      margin: 8px auto;
      border-radius: 8px;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }

    .brand-name {
      font-family: "Steinfeld";
    }
  }

  @media (max-width: 860px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px 1rem;
    transition: all 300ms ease-in-out;
    z-index: 120;
  }
`;
