import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/navigation'

import '../styles/styles.scss';
import styled, { css } from 'emotion';

const Logo = () => (
  <Link to="/">
    <div className={logo}>Skylar Denney</div>
  </Link>
)

export default Logo;

const logo = css`
  font-family: 'Lobster', Georgia, serif;
  font-style: normal;
  color: var(--turq);
  transition: all .25s ease;

  &:hover {
    color: var(--turqHover);
    transform: translateY(-1px);
  }
`