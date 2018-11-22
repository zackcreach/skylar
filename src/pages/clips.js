import React from 'react'

import '../styles/styles.scss'
import { css } from 'emotion'

import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import Transition from '../components/transition'

class Clips extends React.Component {
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
    return (
      <Layout>
        <section>
          <Header headerWidth={this.state.width} />
          <Transition show={this.state.in}>
            <div ref={node => (this.container = node)}>
              <Content>
                <h2>Clips</h2>
                <iframe
                  className={iframe}
                  src="https://www.youtube.com/embed/eF5fNyDVHaI"
                  title="Clip 1"
                  allowFullScreen
                />
                <iframe
                  className={iframe}
                  src="https://www.youtube.com/embed/EUxu71yZB08"
                  title="Clip 2"
                  allowFullScreen
                />
                <iframe
                  className={iframe}
                  src="https://www.youtube.com/embed/M8oGZ42Tw-Q"
                  title="Clip 3"
                  allowFullScreen
                />
              </Content>
            </div>
          </Transition>
        </section>
      </Layout>
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
