import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import styled from 'styled-components';
import { NavbarProps } from '@/types/navbar';

const Navbar = ({ data, onChangeLanguage }: NavbarProps) => {
  const [menu, setMenu] = useState(false);
  const menuMobile = useRef<HTMLDivElement>(null);
  const ID = useId();

  const hideMenu = () => {
    setMenu(false);
    document.removeEventListener('scroll', hideMenu);
    document.querySelector('main')?.removeEventListener('click', hideMenu);
  };

  useEffect(() => {
    document.addEventListener('scroll', hideMenu);
    document.querySelector('main')?.addEventListener('click', hideMenu);
  }, [menu]);

  return (
    <StyledNavbar className="navbar navbar-expand-lg bg-dark">
      <Link href="/" className="navbar-brand-lg">
      <i className="fab fa-node-js"></i> <text style={{color: "#fff"}}>Edicrei Marcondes</text>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setMenu(!menu)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        ref={menuMobile}
        className={`collapse navbar-collapse flex-lg-grow-0 text-center mt-3 mt-lg-0 ${
          menu ? 'show' : ''
        }`}
      >
        <ul className="navbar-nav nav-pills align-items-center mb-3 mb-lg-0 me-lg-5">
          {data.map((link, index) => (
            <li key={`${ID}-${index}`} className="nav-item">
              <StyledLink
                href={link.link}
                className="nav-link me-lg-2"
                scroll={false}
              >
                <text style={{color: "#fff"}}>
                {link.title}
                </text>
              </StyledLink>
            </li>
          ))}
        </ul>
        <Flag
          type="image"
          src="/brazil-flag-icon.svg"
          onClick={() => {
            onChangeLanguage('PL');
            hideMenu();
          }}
        />
        <Flag
          type="image"
          src="/united-kingdom-flag-icon.svg"
          className="ms-3"
          onClick={() => {
            onChangeLanguage('EN');
            hideMenu();
          }}
        />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  justify-content: space-around;
  padding: 17px 0;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(146, 161, 176, 0.4);
  z-index: 10;

  @media (max-width: 991px) {
    & .navbar-collapse {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        top: -5%;
        left: 0;
        border-top: 1px solid rgba(115, 115, 115, 0.4);
      }
    }
  }
`;

const StyledLink = styled(Link)`
  padding: 0;
  border-radius: 0 !important;
  font-weight: bold;
  font-size: 18px;
  color: #0e2431;
  transition: all 0.2s linear;

  &:hover {
    padding: 5px 0;
    border-bottom: 2px solid #011aff;
  }

  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

const Flag = styled.input`
  width: 28px;
  height: 20px;
  box-shadow: 0 2px 6px rgba(66, 68, 90, 0.75);

  @media (min-width: 992px) {
    width: 25px;
    height: 17px;
  }
`;
