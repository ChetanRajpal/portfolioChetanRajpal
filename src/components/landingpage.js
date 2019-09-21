import React, {Component} from "react";
import CH from './ch.jpg';

class Landing extends Component {
    render(){
        return(
            <div className="landing-style landing-style-mobile" style={{width: '100%', margin: 'auto'}}>
                <div className="landing-grid landing-style-mobile">
                    <div>
                        <img
                            src={CH}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Cyber Security Enthusiast</h1>

                            <hr/>

                            <p>Cyber Security | HTML/CSS | Bootstrap | React | Linux | MySQL</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github" aria-hidden="true" />
                                </a>

                                {/* Facebook */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-facebook" aria-hidden="true" />
                                </a>

                                {/* Instagram */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-instagram" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;