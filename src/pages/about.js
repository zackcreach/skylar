import React from 'react'
import Link from 'gatsby-link'

import '../styles/styles.scss'
import styled, { css } from 'emotion'

import Header from '../layouts/header'
import Content from '../layouts/content'
import Transition from '../components/transition'

class About extends React.Component {
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
              <h2>Actor. Writer. Cat video enthusiast.</h2>

              <p>Hey there and welcome to my website!</p>
              <p>
                I’m an actor local to Atlanta auditioning all over the
                Southeast, but I made my journey to the fantastic HOT-Lanta
                after a 5-year stint in Los Angeles where I received a Theater
                Arts degree from The American Academy of Dramatic Arts and
                studied at UCB, iO West, The Ivanna Chubbuck Studio, and various
                other schools around town.
              </p>
              <p>
                If you’d like to see what I do, I perform on an improv team
                called Big Poppa on Thursday nights at Village Theater as well
                as on other teams like The Actor’s Worst Nightmare at Highwire
                Comedy!
              </p>
              <p>
                Along with acting, I write a{' '}
                <a href="//lifelesswasteful.com">
                  blog called Life Less Wasteful
                </a>{' '}
                about my journey to live with less trash, ‘cause we all could be
                a little kinder to the planet, y’know?
              </p>
              <p>
                So peruse my site, check out my blog and feel free to get in
                contact with me if you have any questions. Have an awesome day!
              </p>
            </Content>
          </div>
        </Transition>
      </section>
    )
  }
}

export default About
