import React from 'react'

import '../styles/styles.scss'

import Header from '../components/header'
import Content from '../components/content'
import Transition from '../components/transition'
import { css } from 'emotion'

import imdb from '../images/imdb.svg'

class About extends React.PureComponent {
  state = {
    width: 400,
    in: true,
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    window.scrollTo(0, 0)
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
              <h2>Actor. Writer. Voice Artist. Cat video enthusiast.</h2>

              <p>Hey there and welcome to my website!</p>
              <p>
                I’m local to Atlanta, but made the journey here only after
                several years in Los Angeles were I received a Theater Arts
                degree from The American Academy of Dramatic Arts. While in LA,
                I also studied at UCB, iO West, The Ivanna Chubbuck Studio, and
                various other schools around town.
              </p>
              <p>
                I write sketch comedy that has been produced through{' '}
                <a
                  href="https://www.youtube.com/channel/UCrpqF-bBGvVb2IEyQ3nEFng"
                  target="_blank"
                >
                  Respectful Productions
                </a>{' '}
                and also some more serious stuff that you’ll be able to see
                soon!
              </p>
              <p>
                I’m also a voice artist focused mainly on commercials, so if you
                need a voice for your product, head on over to my voiceover page
                to get a taste of this friendly, confident, millennial.
              </p>
              <p>
                If you’d like to see what I do in person, I perform regularly
                around town with my teams Big Poppa and Consenting Adults. Shoot
                me a message to find out when!
              </p>
              <p>
                Peruse my site and feel free to get in contact with me if you
                have any questions. Have an awesome day!
              </p>
              <a href="https://www.imdb.com/name/nm5897469/" target="_blank">
                <img src={imdb} alt="IMDB Logo" class={iconImdb} />
              </a>
            </Content>
          </div>
        </Transition>
      </section>
    )
  }
}

const iconImdb = css`
  margin-top: 10px;
  width: 60px;
`

export default About
