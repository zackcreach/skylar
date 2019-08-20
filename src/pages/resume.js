import React from 'react'

import '../styles/styles.scss'
import { css } from 'emotion'

import Header from '../components/header'
import Content from '../components/content'
import Transition from '../components/transition'

class Resume extends React.Component {
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
                <p className={colLeft}>Hair: Auburn</p>
                <p className={colRight}>info@soltalent.com</p>
              </div>
              <div className={row}>
                <p className={colLeft}>Eyes: Blue</p>
                <p className={colRight}>
                  <a href="http://www.soltalent.com" target="_blank">
                    soltalent.com
                  </a>
                </p>
              </div>

              <h2 className={heading}>TV</h2>
              <div className={row}>
                <p className={colLeft}>Insatiable</p>
                <p className={colMid}>Co-star</p>
                <p className={colRight}>Netflix / Maggie Kiley</p>
              </div>

              <h2 className={heading}>Film</h2>
              <div className={row}>
                <p className={colLeft}>Hillbilly Elegy</p>
                <p className={colMid}>Supporting (2020 Release)</p>
                <p className={colRight}>RON HOWARD/Netflix</p>
              </div>
              <div className={row}>
                <p className={colLeft}>The Glorias: A Life on the Road</p>
                <p className={colMid}>Supporting (2020 Release)</p>
                <p className={colRight}>Dir: Julie Taymor</p>
              </div>
              <div className={row}>
                <p className={colLeft}>Godzilla: King of the Monsters</p>
                <p className={colMid}>Supporting</p>
                <p className={colRight}>WARNER BROS/Michael Dougherty</p>
              </div>
              <div className={row}>
                <p className={colLeft}>Just Imagine</p>
                <p className={colMid}>Starring</p>
                <p className={colRight}>Dir: Sarah Moss</p>
              </div>
              <div className={row}>
                <p className={colLeft}>Do I?</p>
                <p className={colMid}>Starring</p>
                <p className={colRight}>Dir: Nell Nakkan</p>
              </div>
              <div className={row}>
                <p className={colLeft}>Lonely Liberal Island</p>
                <p className={colMid}>Lead</p>
                <p className={colRight}>Dir: Derek Evans</p>
              </div>
              <div className={row}>
                <p className={colLeft}>The Actress</p>
                <p className={colMid}>Lead</p>
                <p className={colRight}>Dir: Nell Nakkan</p>
              </div>
              <div className={row}>
                <p className={colLeft}>Going Together</p>
                <p className={colMid}>Supporting</p>
                <p className={colRight}>Dir: Sophie Webb</p>
              </div>
              <div className={row}>
                <p className={colLeft}>Man Up</p>
                <p className={colMid}>Supporting</p>
                <p className={colRight}>Dir: Cyrus Hogg</p>
              </div>

              <h2 className={heading}>Theater</h2>
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
                <p className={colLeft}>Five Women Wearing the Same Dress</p>
                <p className={colMid}>Meredith</p>
                <p className={colRight}>AADA</p>
              </div>
              <div className={rowAstrisk}>
                <p className={colRight}>
                  *American Academy of Dramatic Arts (AADA)
                </p>
              </div>

              <h2 className={heading}>Commercial</h2>
              <div className={row}>
                <p className={colFull}>List/conflicts available upon request</p>
              </div>

              <h2 className={heading}>Training</h2>
              <div className={row}>
                <p className={colFull}>
                  <b>Formal:</b> The American Academy of Dramatic Arts (LA)
                </p>
              </div>
              <div className={row}>
                <p className={colFull}>
                  <b>Acting:</b> Ivanna Chubbuck Studio (LA), BGB Studio (ATL),
                  L.A. On-Camera Training Center
                </p>
              </div>
              <div className={row}>
                <p className={colFull}>
                  <b>Comedy:</b> iO West, Upright Citizens Brigade (LA),
                  Highwire Comedy (ATL), Village Theater Improv (ATL)
                </p>
              </div>

              <h2 className={heading}>Special Skills</h2>
              <div className={row}>
                <p className={colFull}>
                  <b>Instruments:</b> Oboe, basic piano
                </p>
              </div>
              <div className={row}>
                <p className={colFull}>
                  <b>Dialects:</b> Standard British, Cockney, Irish, New York,
                  Southern, Valley Girl
                </p>
              </div>
              <div className={row}>
                <p className={colFull}>
                  <b>Other:</b> Improv, yoga, rock climbing (bouldering), basic
                  stage combat, basic ballet, eyebrow contortionist
                </p>
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
  font-size: 0.8rem;
  padding: 2px;

  @media (min-width: 430px) {
    font-size: 1rem;
  }

  &:nth-child(2n + 1) {
    background-color: rgba(255, 255, 255, 0.75);
  }
`

const rowAstrisk = css`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;

  @media (min-width: 430px) {
    font-size: 1rem;
  }
`

const col = css`
  padding: 0;
`

const colLeft = css`
  ${col};
  width: 38%;
  text-align: left;
`

const colMid = css`
  ${col};
  width: 24%;
  text-align: left;
`

const colRight = css`
  ${col};
  width: 38%;
  text-align: right;
`

const colFull = css`
  ${col};
  width: 100%;

  & b {
    font-weight: 500;
  }
`

export default Resume
