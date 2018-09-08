import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Logo from '../components/logo';
import Navigation from '../components/navigation';
import Transition from '../components/transition';

class IndexPage extends React.Component {
  state = {
    in: true
  }
  componentWillUnmount() {
    this.setState({
      in: false
    })
  }
  render() {
    return (
      <Transition show={this.state.in}>
        <div className={index}>
          <div className={logo__container}>
            <Logo />
          </div>
          <div className={navigation__container}>
            <Navigation dots />
          </div>
        </div>
      </Transition>
    )
  }
}

export default IndexPage;

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
const index = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  min-height: 700px;
  padding-bottom: 60px;
  
  @media (min-width: 430px) {
    min-height: auto;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-bottom: 0;
  }
`
const logo__container = css`
  margin: 50px 0 50px 0;
  display: flex;
  font-size: 4rem;
  line-height: .9;
  text-align: center;

  @media (min-width: 430px) {
    padding: 0 20px;
    font-size: calc(100vw / 6.5);
  }
  
  @media (min-width: 740px) {
    padding: 0;
  }

  @media (min-width: 1200px) {
    font-size: 6.75rem;
    letter-spacing: -1px;
  }
`
const navigation__container = css`
  font-size: 1.5rem;
  height: 40%;
  
  & > ul {
    flex-direction: column;
    justify-content: space-around;
  }

  & a {
    font-size: 1.1rem;
    font-weight: 400;
  }
  
  @media (min-width: 430px) {
    padding: 0;
    width: 350px;
    height: 300px;    
  }
`