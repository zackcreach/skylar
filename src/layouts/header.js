import React from 'react'
import Link from 'gatsby-link'

import '../styles/styles.scss'
import styled, { css } from 'emotion'

import Logo from '../components/logo'
import Navigation from '../components/navigation'

const Header = ({ headerWidth }) => (
  <div className={header} style={{ width: headerWidth }}>
    <div className={logo__container}>
      <Logo />
    </div>
    <div className={navigation__container}>
      <Navigation />
    </div>
  </div>
)

export default Header

const header = css`
  position: fixed;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 30px 0 30px 0;
  background: linear-gradient(var(--color-tertiary) 98%, transparent);

  @media (min-width: 600px) {
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
  }
`
const logo__container = css`
  font-size: 2.5rem;
  line-height: 0.9;
  padding-bottom: 15px;

  @media (min-width: 600px) {
    width: auto;
    font-size: 2.5rem;
    line-height: 0.9;
    padding-bottom: 0;
  }
`
const navigation__container = css`
  font-size: 0.9rem;
  width: 290px;

  @media (min-width: 600px) {
    font-size: 1.1rem;
    padding: 8px 0 0 0;
  }
`
