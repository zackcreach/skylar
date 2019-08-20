import React from 'react'

import '../styles/styles.scss'
import { css } from 'emotion'

import Header from '../components/header'
import Content from '../components/content'
import Transition from '../components/transition'

class Contact extends React.PureComponent {
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
              <h2>Contact</h2>
              <div className={contactContainer}>
                <div className={contactBox}>
                  <h2>Bookings</h2>
                  <p>
                    <a
                      href="http://www.soltalent.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sol Talent
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@soltalent.com">Email</a>
                  </p>
                  843-882-7560
                </div>
                <div className={contactBox}>
                  <h2>Direct</h2>
                  <p>
                    <a href="mailto:skylardenney1@gmail.com">Email</a>
                  </p>
                </div>
              </div>
            </Content>
          </div>
        </Transition>
      </section>
    )
  }
}

const contactContainer = css`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 430px) {
    flex-wrap: nowrap;
  }
`

const contactBox = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid var(--color-primary);
  padding: 30px 30px 50px 30px;
  margin: 15px 0 0 0;
  width: 100%;
  height: 215px;
  vertical-align: top;
  font-size: 1em;

  &:first-of-type {
    @media (min-width: 430px) {
      margin-right: 15px;
    }
  }

  &:last-of-type {
    @media (min-width: 430px) {
      margin-left: 15px;
    }
  }
`

export default Contact
