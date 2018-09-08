import React from 'react'
import Link from 'gatsby-link'

import '../styles/styles.scss'
import styled, { css } from 'emotion'

const Navigation = ({ dots }) => (
  <ul className={navigation}>
    <li>
      <Link to="/about">About</Link>
    </li>
    {dots ? <span className={dotShow}>·</span> : ''}
    <li>
      <Link to="/resume">Resume</Link>
    </li>
    {dots ? <span className={dotShow}>·</span> : ''}
    <li>
      <Link to="/demo">Demo</Link>
    </li>
    {dots ? <span className={dotShow}>·</span> : ''}
    <li>
      <a href="//lifelesswasteful.com">Blog</a>
    </li>
    {dots ? <span className={dotShow}>·</span> : ''}
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
)

export default Navigation

const navigation = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  @media (min-width: 430px) {
    justify-content: space-between;
    width: auto;
  }

  & a {
    color: var(--color-secondary);
    font-weight: 300;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  & li {
    transition: all 0.35s ease;
  }

  & li:hover {
    color: var(--color-primary-hover);
    transform: translateY(-1px);
  }
`

const dotShow = css`
  display: none;

  @media (min-width: 430px) {
    display: inline;
    font-size: 1.5rem;
    color: var(--color-primary);
  }
`
