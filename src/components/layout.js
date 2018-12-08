import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { TransitionGroup } from 'react-transition-group'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/styles.scss'
import { css } from 'emotion'

import ico from '../images/favicon.png'
import Viewer from './viewer'

class Layout extends React.PureComponent {
  changeImage = index => this.setState({ currentImageIndex: index })

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allImageSharp(
              filter: { fluid: { originalName: { regex: "/viewer/" } } }
              sort: { fields: [fluid___originalName], order: ASC }
            ) {
              edges {
                node {
                  id
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div className={outer}>
            <div className={inner}>
              <Helmet>
                <title>Skylar Denney</title>
                <meta charset="UTF-8" />
                <meta
                  name="description"
                  content="The Portfolio of Skylar Denney"
                />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
                <link rel="shortcut icon" href={ico} type="image/x-icon" />
                <link
                  href="https://fonts.googleapis.com/css?family=Playfair+Display:400|Lato:300,400"
                  rel="stylesheet"
                />
              </Helmet>
              {/* <TransitionGroup className={left}>
                {this.props.children}
              </TransitionGroup> */}
              <div className={left}>{this.props.children}</div>
              <aside className={right}>
                <Viewer imageData={data} />
              </aside>
            </div>
          </div>
        )}
      />
    )
  }
}

export default Layout

Layout.propTypes = {
  children: PropTypes.func,
}

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
const outer = css`
  ${flex};
  flex-direction: column;
  background: var(--color-primary);
  height: 100vh;
`
const inner = css`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #f1ecec;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 430px) {
    width: 90%;
    margin: 30px 0 30px 0;
    box-shadow: 20px 20px 80px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 1200px) {
    display: flex;
    margin: 0;
    height: 100%;
    width: 1200px;
    max-height: 600px;
  }
`
const left = css`
  overflow: scroll;
  background-color: #f1ecec;
  padding: 0 25px 0 25px;
  width: 100%;

  @media (min-width: 430px) {
    padding: 0 40px 0 40px;
  }

  @media (min-width: 1200px) {
    margin: auto;
    height: 100%;
    width: 60%;
    padding: 0 40px 0 40px;
  }
`
const right = css`
  display: none;
  order: -1;

  @media (min-width: 1200px) {
    display: block;
    order: 0;
    width: 40%;
    height: auto;
  }
`
