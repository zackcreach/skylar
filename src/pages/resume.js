import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Header from '../layouts/header';
import Content from '../layouts/content';
import Transition from '../components/transition';

class Resume extends React.Component {
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
              <h2>Resume</h2>
              <div className={row}>
								<p className={colLeft}>Height: 5’5”</p>
								<p className={colRight}>Sol Talent</p>
							</div>
              <div className={row}>
								<p className={colLeft}>Weight: 110lbs</p>
								<p className={colRight}>Tel. 843-882-7560</p>
							</div>
              <div className={row}>
								<p className={colLeft}>Hair: Red</p>
								<p className={colRight}>info@soltalent.com</p>
							</div>
              <div className={row}>
								<p className={colLeft}>Eyes: Blue</p>
								<p className={colRight}><a href='http://www.soltalent.com'>soltalent.com</a></p>
							</div>
						
							<h2 className={heading}>TV</h2>
              <div className={row}>
								<p className={colLeft}>Insatiable</p>
								<p className={colMid}>Co-star</p>
								<p className={colRight}>Netflix / Maggie Kiley</p>
							</div>
						
							<h2 className={heading}>Film</h2>
              <div className={row}>
								<p className={colLeft}>Godzilla: King of Monsters</p>
								<p className={colMid}>Featured</p>
								<p className={colRight}>Legendary Ent./ Michael Dougherty</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Just Imagine</p>
								<p className={colMid}>Lead</p>
								<p className={colRight}>Sarah Moss</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Going Together</p>
								<p className={colMid}>Featured</p>
								<p className={colRight}>Sophie Webb</p>
							</div>
							<div className={row}>
								<p className={colLeft}>The Actress</p>
								<p className={colMid}>Supporting</p>
								<p className={colRight}>Nell Nakkan</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Man Up</p>
								<p className={colMid}>Supporting</p>
								<p className={colRight}>Cyrus Hogg</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Do I?</p>
								<p className={colMid}>Lead</p>
								<p className={colRight}>Nell Nakkan</p>
							</div>
						
							<h2 className={heading}>Theater</h2>
							<div className={row}>
								<p className={colLeft}>The MANologues</p>
								<p className={colMid}>Ensemble</p>
								<p className={colRight}>Switchyards</p>
							</div>
							<div className={row}>
								<p className={colLeft}>HuMan Up</p>
								<p className={colMid}>Ensemble</p>
								<p className={colRight}>The Mammal Gallery</p>
							</div>
							<div className={row}>
								<p className={colLeft}>The Broken Hearts Club</p>
								<p className={colMid}>Shannie</p>
								<p className={colRight}>The Complex</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Suburbia</p>
								<p className={colMid}>Erica</p>
								<p className={colRight}>AADA</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Dinner With Friends</p>
								<p className={colMid}>Karen</p>
								<p className={colRight}>AADA</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Look Homeward, Angel</p>
								<p className={colMid}>Helen</p>
								<p className={colRight}>AADA</p>
							</div>
							<div className={row}>
								<p className={colLeft}>La Ronde</p>
								<p className={colMid}>Young Wife</p>
								<p className={colRight}>AADA</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Doubt: A Parable</p>
								<p className={colMid}>Sister James</p>
								<p className={colRight}>AADA</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Arcadia</p>
								<p className={colMid}>Thomasina</p>
								<p className={colRight}>AADA</p>
							</div>
							<div className={row}>
								<p className={colLeft}>The Tempest</p>
								<p className={colMid}>Miranda</p>
								<p className={colRight}>AADA</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Major Barbara</p>
								<p className={colMid}>Jenny</p>
								<p className={colRight}>AADA</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Five Women Wearing the Same Dress</p>
								<p className={colMid}>Meredith</p>
								<p className={colRight}>AADA</p>
							</div>
							<div className={row}>
								<p className={colLeft}>Once A Catholic</p>
								<p className={colMid}>Mary Mooney</p>
								<p className={colRight}>AADA</p>
							</div>
							<div className={rowAstrisk}>
								<p className={colRight}>*American Academy of Dramatic Arts (AADA)</p>
							</div>
						
							<h2 className={heading}>Training</h2>
							<div className={row}>
								<p className={colFull}>iO West – Los Angeles, CA</p>
							</div>
							<div className={row}>
								<p className={colFull}>Ivanna Chubbuck Studio – Los Angeles, CA</p>
							</div>
							<div className={row}>
								<p className={colFull}>UCB Improv – Los Angeles, CA</p>
							</div>
							<div className={row}>
								<p className={colFull}>L.A. On-Camera Training Center – Jamison Haase – Los Angeles, CA</p>
							</div>
							<div className={row}>
								<p className={colFull}><b>The American Academy of Dramatic Arts, Associate of Arts</b> – Los Angeles, CA</p>
							</div>
							<div className={row}>
								<p className={colFull}>Sword Fights, Inc. – Stage Combat, Brian Danner – Los Angeles, CA</p>
							</div>
							<div className={row}>
								<p className={colFull}>Highwire Comedy Improv – Atlanta, GA</p>
							</div>
							<div className={row}>
								<p className={colFull}>Village Theater Improv – Atlanta, GA</p>
							</div>
							<div className={row}>
								<p className={colFull}>Drama Inc. Chubbuck – Atlanta, GA</p>
							</div>
						
							<h2 className={heading}>Special Skills</h2>
							<div className={row}>
								<p className={colFull}>Instruments: Oboe, basic piano</p>
							</div>
							<div className={row}>
								<p className={colFull}>Dialects: Standard British, Cockney, Irish, New York, Southern, Valley Girl</p>
							</div>
							<div className={row}>
								<p className={colFull}>Other: Improv, yoga, rock climbing (bouldering), basic stage combat, basic ballet, eyebrow contortionist</p>
							</div>
						
            </Content>
          </div>  
        </Transition>
      </section>
    )
  }
}

const heading = css`
	padding: 45px 0 15px 0;
`

const row = css`
	display: flex;
	justify-content: space-between;
	font-size: .8rem;
	padding: 2px;
	
	@media (min-width: 430px) {
		font-size: 1rem;
	}
	
	&:nth-child(2n + 1) {
		background: rgba(0, 0, 0, .033);
	}
`

const rowAstrisk = css`
	display: flex;
	justify-content: flex-end;
`

const col = css`
	padding: 0;
`

const colLeft = css`
	${col};
	width: 42%;
	text-align: left;
	`

const colMid = css`
	${col};
	width: 16%;
	text-align: left;
`

const colRight = css`
	${col};
	width: 42%;
	text-align: right;
`

const colFull = css`
	${col};
	width: 100%;
`

export default Resume;