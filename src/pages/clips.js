import React from 'react'

import '../styles/styles.scss'
import { css } from 'emotion'

import Header from '../components/header'
import Content from '../components/content'
import Transition from '../components/transition'

class Clips extends React.PureComponent {
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
              <h2>Clips</h2>
              <iframe
                className={iframe}
                src="https://www.youtube.com/embed/b5r1rCBIrSc"
                title="Clip 1"
                allowFullScreen
              />
              <iframe
                className={iframe}
                src="https://www.youtube.com/embed/ba1nqM0NQ-c"
                title="Clip 2"
                allowFullScreen
              />
              <iframe
                className={iframe}
                src="https://www.youtube.com/embed/mz6GsoAb49w"
                title="Clip 4"
                allowFullScreen
              />
              <iframe
                className={iframe}
                src="https://www.youtube.com/embed/M8oGZ42Tw-Q"
                title="Clip 4"
                allowFullScreen
              />
            </Content>
          </div>
        </Transition>
      </section>
    )
  }
}

export default Clips

const iframe = css`
  width: 100%;
  height: 350px;
  border: 0;
  margin-bottom: 20px;
`
