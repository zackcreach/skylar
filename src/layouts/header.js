import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Logo from '../components/logo'
import Navigation from '../components/navigation'

const Header = ({ headerWidth }) => (
  <div className={header} style={{width: headerWidth}}>
    <div className={logo__container}>
      <Logo />
    </div>
    <div className={navigation__container}>
      <Navigation />
    </div>
  </div>
)

export default Header;

const header = css`
  position: fixed;
  display: flex;
  justify-content: space-between;  
  align-items: center;
  padding: 30px 0 30px 0;
  background: linear-gradient(white 98%, transparent);
`
const logo__container = css`
  font-size: 1.8rem;
  line-height: .9;
  width: 30%;
  /* text-shadow: 2px 2px 0px rgba(200, 200, 200,.4); */

  @media (min-width: 600px) {
    width: auto;
    font-size: 2.3rem;
    line-height: .9;
  }
`
const navigation__container = css`
  font-size: .9rem;
  min-width: 220px;
  
  @media (min-width: 600px) {
    font-size: 1.1rem;
    width: 290px;
    padding: 10px 0 0 0;
  }
`