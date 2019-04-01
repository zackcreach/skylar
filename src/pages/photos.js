import React from 'react'

import '../styles/styles.scss'
import { css } from 'emotion'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Content from '../components/content'
import Transition from '../components/transition'

class Photos extends React.PureComponent {
  state = {
    width: 400,
    in: true,
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }
  handleResize = () => {
    this.setState({
      width: this.container.offsetWidth || window.innerWidth,
    })
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
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
                  fluid(maxWidth: 660) {
                    originalName
                    src
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <section>
            <Header headerWidth={this.state.width} />
            <Transition show={this.state.in}>
              <div ref={node => (this.container = node)}>
                <Content>
                  <h2>Photos</h2>
                  <div className={container}>
                    <div className={column}>
                      {data.allImageSharp.edges.map(({ node }, index) => {
                        if (index + 1 <= data.allImageSharp.edges.length / 2)
                          return (
                            <img
                              key={index}
                              className={image}
                              src={node.fluid.src}
                              alt={`${index + 1} of Skylar`}
                            />
                          )
                        else return null
                      })}
                    </div>
                    <div className={column}>
                      {data.allImageSharp.edges.map(({ node }, index) => {
                        if (index + 1 > data.allImageSharp.edges.length / 2)
                          return (
                            <img
                              key={index}
                              className={image}
                              src={node.fluid.src}
                              alt={`${index + 1} of Skylar`}
                            />
                          )
                        else return null
                      })}
                    </div>
                  </div>
                </Content>
              </div>
            </Transition>
          </section>
        )}
      />
    )
  }
}

export default Photos

const container = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  -webkit-overflow-scrolling: auto;

  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`
const column = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 600px) {
    width: 50%;

    &:nth-of-type(1) {
      margin: 0 3px 0 0;
    }

    &:nth-of-type(2) {
      margin: 0 0 0 3px;
    }
  }
`
const image = css`
  width: 100%;
  margin: 0 0 6px 0;
`
