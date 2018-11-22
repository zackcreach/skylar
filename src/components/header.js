import React from 'react'
import { Link } from 'gatsby'

import '../styles/styles.scss'
import styled, { css } from 'emotion'

import Logo from './logo'
import Navigation from './navigation'

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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 30px 0 30px 0;
  background-color: #f1ecec;

  @media (min-width: 600px) {
    position: fixed;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
  }
`
const logo__container = css`
  font-size: 2.5rem;
  line-height: 0.9;
  padding-bottom: 20px;

  @media (min-width: 600px) {
    width: auto;
    font-size: 2.5rem;
    line-height: 0.9;
    padding-bottom: 0;
    padding-right: 10px;
  }
`
const navigation__container = css`
  width: 300px;

  @media (min-width: 600px) {
    padding: 8px 0 0 0;
    flex: 0 0 360px;
  }

  @media (min-width: 1200px) {
    flex: 0 0 300px;
  }
`
