import React from 'react'

import '../styles/styles.scss'
import { css } from 'emotion'

import Header from '../components/header'
import Content from '../components/content'
import Transition from '../components/transition'

class Voiceover extends React.PureComponent {
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
      <section>
        <Header headerWidth={this.state.width} />
        <Transition show={this.state.in}>
          <div ref={node => (this.container = node)}>
            <Content>
              <h2>Commercial Demo</h2>
              <figure>
                <audio className={audio} controls src="audio/voiceover.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              </figure>
              <p className={content}>More to come!</p>
            </Content>
          </div>
        </Transition>
      </section>
    )
  }
}

const audio = css`
  width: 100%;
`

const content = css`
  padding: 20px 0;
`

export default Voiceover
