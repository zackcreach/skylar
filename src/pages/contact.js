import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Header from '../layouts/header';
import Content from '../layouts/content';
import Transition from '../components/transition';

class Contact extends React.Component {
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
              <h2>Contact</h2>
              <div className={contactContainer}>
                <div className={contactBox}>
                  <h2>Bookings</h2>
                  <p><a href="http://www.soltalent.com/" target="_blank">Sol Talent</a></p>
                  <p><a href="mailto:info@soltalent.com">Email</a></p>
                  843-882-7560
                </div>
                <div className={contactBox}>
                  <h2>Direct</h2>
                  <p><a href="mailto:skylardenney1@gmail.com">Email</a></p>
                  <p>304-906-8780</p>
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
  display:flex;
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
  border: 2px solid rgb(147,213,213);
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

export default Contact;