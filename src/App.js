import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

import HomeIco from './media/icons/home';
import PortfolioIco from './media/icons/portfolio';
import ContactIco from './media/icons/contact';
import LinkedinIco from './media/icons/linkedin';
import GithubIco from './media/icons/github';
import SettingsIco from './media/icons/settings';

import ContactForm from './ContactForm';


const black = '#171717';
const red = '#B80C09';
const navy = '#364A62';
const orange = '#BA2D0B';
const grey = '#dbdbdb';
const turquoise = '#3587a4';
const white = '#ffffff';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: false,
      portfolio: false,
      contact: false,
      settings: false,
      primary: turquoise,
      secondary: grey,
      style: {backgroundImage: `repeating-linear-gradient(${grey} 0, ${grey} 50px, ${white} 0, ${white} 100px)`},
      translate: false,
      message: window.location.hash === '#success' || window.location.hash === '#error'
    }
  }

  sectionOpen(section) {
    switch (section) {
      case 'portfolio':
        this.setState({portfolio: true, contact: false});
        break;
      case 'contact':
        this.setState({portfolio: false, contact: true});
        break;
      default:
        this.setState({portfolio: false, contact: false});
    }
    this.setState({section: true})
  };

  sectionClose = () => {
    this.setState({section: false})
  };

  toggleSettings(e) {
    e.preventDefault();
    this.setState({settings: !this.state.settings})
  };

  changeTheme(color) {
    switch (color) {
      case 'black':
        this.setState({settings: false, primary: red, secondary: black, style: {backgroundImage: `repeating-linear-gradient(${black} 0, ${black} 50px, ${white} 0, ${white} 100px)`}});
        break;
      case 'orange':
        this.setState({settings: false, primary: navy, secondary: orange, style: {backgroundImage: `repeating-linear-gradient(${orange} 0, ${orange} 50px, ${white} 0, ${white} 100px)`}});
        break;
      default:
        this.setState({settings: false, primary: turquoise, secondary: grey, style: {backgroundImage: `repeating-linear-gradient(${grey} 0, ${grey} 50px, ${white} 0, ${white} 100px)`}});
    }
  }

  toggleTranslation() {
    this.setState({translate: !this.state.translate})
  };

  resetHistory() {
    if (window.location.hash === '#success' || window.location.hash === '#error') {
      window.history.pushState(null, null, '/');
      this.setState({message: false})
    }
  };

  render() {
    return (
      <div className="background" style={this.state.style}>
        <Container>
          <Row>
            <Col xs={12} sm={10} lg={8} xl={6} offset={{sm: 1, lg: 2, xl: 3}}>
              <div className="wrapper">
                <div className={`stripe${this.state.section ? " close" : " open"}`}>
                  <div className="content" style={{position: 'relative'}}>
                    <a href="#" className="settings" onClick={(e) => this.toggleSettings(e)}>
                      <span style={{color: this.state.primary}}>{this.state.translate ? "Settings" : "Ustawienia"}</span>
                      <SettingsIco fill={this.state.primary} bg={white}/>
                    </a>
                    <a href="https://www.linkedin.com/in/natalia-kulas" className="linkedin">
                      <span style={{color: this.state.primary}}>LinkedIn</span>
                      <LinkedinIco fill={this.state.primary}/>
                    </a>
                    <a href="https://github.com/nataliakulas" className="github">
                      <span style={{color: this.state.primary}}>GitHub</span>
                      <GithubIco fill={this.state.primary}/>
                    </a>
                    <div className={`settings-bar${this.state.settings ? " visible" : ""}`}>
                      <div className="square black" onClick={() => this.changeTheme('black')}/>
                      <div className="square orange" onClick={() => this.changeTheme('orange')}/>
                      <div className="square grey " onClick={() => this.changeTheme('')}/>
                      <div className="separator" style={{borderTopColor: this.state.secondary}}/>
                      <div className="square" style={{color: this.state.primary}} onClick={() => this.toggleTranslation()}>{this.state.translate ? "pl" : "en"}</div>
                    </div>
                    <Row>
                      <Col>
                        <div className="content" style={{marginRight: 100, height: 130}}>
                          <p>{this.state.translate ? "en" : "pl"}</p>
                        </div>
                        <div className="content" style={{marginRight: 45}}>
                          <p>{this.state.translate ? "en" : "pl"}</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className={`stripe-bar`} style={{backgroundColor: this.state.primary}}>
                  <ul>
                    <li onClick={this.sectionClose} className="immobile">
                      <HomeIco fill={white}/></li>
                    <li onClick={() => this.sectionOpen('portfolio')}>
                      <PortfolioIco fill={white}/>
                      <span>Portfolio</span>
                    </li>
                    <li onClick={() => this.sectionOpen('contact')}>
                      <ContactIco fill={white}/>
                      <span>{this.state.translate ? "Contact" : "Kontakt"}</span>
                    </li>
                  </ul>
                </div>
                <div className={`section${this.state.section ? " open" : ""}`}>
                  <div className="content">
                    {this.state.portfolio ?
                      <div className="swipe">
                        <div className="stripe-box-wrapper">
                          <div className="stripe-box ratio">
                            <div className="stripe-background"/>
                            <div className="stripe-label" style={{backgroundColor: this.state.primary}}>
                              <div className="content">
                                <a href="https://ratio-test.surge.sh">
                                  {this.state.translate ? "Ratio Accounting Office" : "Ratio Biuro Rachunkowe"}
                                </a>
                                <p></p>
                              </div>
                            </div>
                          </div>
                          <div className="stripe-box empty" style={{backgroundImage: `repeating-linear-gradient(${this.state.secondary} 0, ${this.state.secondary} 5px, ${white} 0, ${white} 10px)`}}>
                            <div className="stripe-background"/>
                          </div>
                          <div className="stripe-box opad">
                            <div className="stripe-background"/>
                            <div className="stripe-label" style={{backgroundColor: this.state.primary}}>
                              <div className="content">
                                <a href="https://opad.surge.sh">One Picture a day</a>

                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="stripe-box-wrapper">
                          <div className="stripe-box empty" style={{backgroundImage: `repeating-linear-gradient(${this.state.secondary} 0, ${this.state.secondary} 5px, ${white} 0, ${white} 10px)`}}>
                            <div className="stripe-background"/>
                          </div>
                          <div className="stripe-box arcadi">
                            <div className="stripe-background"/>
                            <div className="stripe-label" style={{backgroundColor: this.state.primary}}>
                              <div className="content">
                                <a href="https://arcadiconnect.fr">Arcadi Connect</a>

                              </div>
                            </div>
                          </div>
                          <div className="stripe-box cc">
                            <div className="stripe-background"/>
                            <div className="stripe-label" style={{backgroundColor: this.state.primary}}>
                              <div className="content">
                                <a href="https://counting-counter.surge.sh">Counting Counter</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="stripe-box-wrapper">
                          <div className="stripe-box ww">
                            <div className="stripe-background"/>
                            <div className="stripe-label" style={{backgroundColor: this.state.primary}}>
                              <div className="content">
                                <a href="https://nataliakulas.github.io/whetherweather-app/">Whether Weather</a>
                              </div>
                            </div>
                          </div>
                          <div className="stripe-box iggi">
                            <div className="stripe-background"/>
                            <div className="stripe-label" style={{backgroundColor: this.state.primary}}>
                              <div className="content">
                                <a href="https://ig-gi.surge.sh">Indeks Glikemiczny - Glycemic Index</a>
                              </div>
                            </div>
                          </div>
                          <div className="stripe-box empty" style={{backgroundImage: `repeating-linear-gradient(${this.state.secondary} 0, ${this.state.secondary} 5px, ${white} 0, ${white} 10px)`}}>
                            <div className="stripe-background"/>
                          </div>
                        </div>
                      </div> :
                      <ContactForm field={this.state.primary} input={this.state.secondary} translate={this.state.translate}/>
                    }
                  </div>
                </div>
                {this.state.message && window.location.hash === '#success' &&
                <button className="delete" style={{width: '100%', backgroundColor: this.state.primary}} type="button" onClick={() => this.resetHistory()}>
                  <span>{this.state.translate ? "Your message has been sent!" : "Wiadomość została wysłana!"}</span>
                </button>
                }
                {this.state.message && window.location.hash === '#error' &&
                <button className="delete" style={{width: '100%', backgroundColor: this.state.primary}} type="button" onClick={() => this.resetHistory()}>
                  <span>{this.state.translate ? "An error occurred while submitting the message." : "W czasie wysyłania wiadomości wystąpił błąd."}</span>
                </button>
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

