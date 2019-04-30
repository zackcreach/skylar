import React from 'react'

import '../styles/styles.scss'
import { css } from 'emotion'

const Content = ({ children }) => <div className={content}>{children}</div>

export default Content

const content = css`
  padding: 10px 0 40px 0;

  @media (min-width: 600px) {
    padding: 140px 0 40px 0;
  }

  @media (min-width: 788px) {
    padding: 110px 0 40px 0;
  }

  a {
    text-decoration: underline;
  }
`
