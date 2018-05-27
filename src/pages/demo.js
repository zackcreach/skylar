import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Header from '../layouts/header';
import Content from '../layouts/content';
import Transition from '../components/transition';

class Demo extends React.Component {
  state = {
    width: null,
    in: true
  }
  componentDidMount() {
    this.setState({
      width: this.container.offsetWidth
    })
  }
  componentWillUnmount() {
    this.setState({
      in: false
    })
  }
  render() {
    return (
      <section>
        <Header headerWidth={this.state.width} />
        <Transition show={this.state.in}>
          <div ref={node => this.container = node}>
            <Content>
              <h2>Demo</h2>
              <iframe className={iframe} src="https://www.youtube.com/embed/1DYbD3r2Mvs" allowFullScreen></iframe>
              <iframe className={iframe} src="https://www.youtube.com/embed/1PAjsbAHoB0" allowFullScreen></iframe>	
            </Content>
          </div>  
        </Transition>
      </section>
    )
  }
}

export default Demo;

const iframe = css`
  width: 100%;
  height: 350px;
  border: 0;

  &:first-of-type {
    margin-bottom: 20px;
  }
`