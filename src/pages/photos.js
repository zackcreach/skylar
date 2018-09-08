import React from 'react'

import '../styles/styles.scss'
import styled, { css } from 'emotion'

import Header from '../layouts/header'
import Content from '../layouts/content'
import Transition from '../components/transition'

class Photos extends React.Component {
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
    this.setState({
      in: false,
    })
    window.removeEventListener('resize', this.handleResize)
  }
  render() {
    const { data } = this.props
    const assetNumber = data.allImageSharp.edges.length
    const assetHalf = assetNumber / 2
    return (
      <section>
        <Header headerWidth={this.state.width} />
        <Transition show={this.state.in}>
          <div ref={node => (this.container = node)}>
            <Content>
              <h2>Photos</h2>
              <div className={container}>
                <div className={column}>
                  {data.allImageSharp.edges.map(({ node }, index) => {
                    if (index + 1 <= assetHalf)
                      return (
                        <img
                          key={index}
                          className={image}
                          src={node.sizes.src}
                        />
                      )
                  })}
                </div>
                <div className={column}>
                  {data.allImageSharp.edges.map(({ node }, index) => {
                    if (index + 1 > assetHalf)
                      return (
                        <img
                          key={index}
                          className={image}
                          src={node.sizes.src}
                        />
                      )
                  })}
                </div>
              </div>
            </Content>
          </div>
        </Transition>
      </section>
    )
  }
}

export default Photos

export const query = graphql`
  query PhotosPageQuery {
    allImageSharp(
      filter: { id: { regex: "/viewer|photos/" } }
      sort: { fields: [id], order: ASC }
    ) {
      edges {
        node {
          sizes(maxWidth: 600) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
const container = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`
const column = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 650px) {
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
