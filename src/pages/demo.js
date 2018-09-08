import React from 'react'
import Link from 'gatsby-link'

import '../styles/styles.scss'
import styled, { css } from 'emotion'

import Header from '../layouts/header'
import Content from '../layouts/content'
import Transition from '../components/transition'

class Demo extends React.Component {
  state = {
    width: 400,
    in: true,
  }
  componentDidMount() {
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
    return (
      <section>
        <Header headerWidth={this.state.width} />
        <Transition show={this.state.in}>
          <div ref={node => (this.container = node)}>
            <Content>
              <h2>Demo</h2>
              <iframe
                className={iframe}
                src="https://www.youtube.com/embed/eF5fNyDVHaI"
                allowFullScreen
              />
              <iframe
                className={iframe}
                src="https://www.youtube.com/embed/EUxu71yZB08"
                allowFullScreen
              />
              <iframe
                className={iframe}
                src="https://www.youtube.com/embed/M8oGZ42Tw-Q"
                allowFullScreen
              />
            </Content>
          </div>
        </Transition>
      </section>
    )
  }
}

export default Demo

const iframe = css`
  width: 100%;
  height: 350px;
  border: 0;
  margin-bottom: 20px;
`
