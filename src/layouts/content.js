import React from 'react'
import Link from 'gatsby-link'

import '../styles/styles.scss'
import styled, { css } from 'emotion'

const Content = ({ children }) => <div className={content}>{children}</div>

export default Content

const content = css`
  padding: 150px 0 40px 0;

  @media (min-width: 700px) {
    padding: 110px 0 40px 0;
  }
`
