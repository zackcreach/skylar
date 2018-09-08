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
              <h2>Actor. Writer. Yogi. Cat video enthusiast.</h2>
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
                If you’d like to see what I do, I perform regularly on a House
                Team at Highwire Comedy, Co. here in Atlanta as well as on other
                teams like The Actor’s Worst Nightmare!
              </p>
              <p>
                Along with acting, I get together with a group of super savvy
                girls to collaborate on writing projects like sketches and
                screenplays each week.
              </p>
              <p>
                I also am an avid yogi that loves rock climbing and, as stated
                above…cat videos. Seriously. If you need a good laugh, I can
                hook you up.
              </p>
              <p>
                So peruse my site, feel free to get in contact with me if you
                have any questions, and have an awesome day!
              </p>
            </Content>
          </div>
        </Transition>
      </section>
    )
  }
}

export default About
