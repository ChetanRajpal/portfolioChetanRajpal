import React, {Component} from "react";
import Nav from "react-bootstrap/Nav";
import Main from "./components/main";
import {Link} from "react-router-dom";
import chmain from "./components/pic.jpg";


class App extends Component {
    constructor(props) {
        super(props);
        this.w3_open = this.w3_open.bind(this);
        this.w3_close = this.w3_close.bind(this);
    }
    w3_open() {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }
    w3_close() {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }
    render() {

        return (
            <div>

                <Nav className="w3-sidebar nav-color w3-collapse w3-top w3-large w3-padding"
                     style={{zIndex:'3',width:'270px',fontWeight:'bold'}} id="mySidebar">
                    <a href="javascript:void(0)" onClick={this.w3_close} className="w3-button w3-hide-large w3-display-topleft" style={{width:'100%',fontSize:'22px', textAlign:'left' }}>
                        <i className="fas fa-arrow-left"/>
                    </a>

                    <div className="w3-container">
                      <div style={{paddingTop:"45px", textAlign:"center" }}>
                      <Link to="/" onClick={this.w3_close} className="cc-style" >  
                      <img style={{width:"70%", borderRadius:"70%"}} className="image-appbar" src={chmain}/>
                      </Link>
                      </div>  
                        <h3 style={{paddingTop:"20px", paddingBottom:"40px", textAlign:"center"}}>
                            <Link to="/" onClick={this.w3_close} className="cc-style" >
                            <b>Chetan Rajpal</b>
                            </Link>
                            </h3>
                    </div>
                    <div className="w3-bar-block" style={{paddingLeft:"15px"}}>
                        <Link to="/about" onClick={this.w3_close} className="w3-bar-item w3-button w3-hover-white ">About Me</Link>
                        <Link to="/resume" onClick={this.w3_close} className="w3-bar-item w3-button w3-hover-white ">Resume</Link>
                        <Link to="/projects" onClick={this.w3_close} className="w3-bar-item w3-button w3-hover-white ">Projects</Link>
                        <Link to="/contact" onClick={this.w3_close} className="w3-bar-item w3-button w3-hover-white ">Contact</Link>
                    </div>
                </Nav>
                <div className="w3-overlay w3-hide-large" onClick={this.w3_close} style={{cursor:'pointer'}} id="myOverlay">

                </div>
                <header className="w3-container w3-top w3-hide-large nav-color w3-xlarge w3-padding">
                    <a href="javascript:void(0)" className="w3-button w3-margin-right" onClick={this.w3_open}>
                        <i className="fas fa-bars"/>
                    </a>
                    <Link to="/" className="cc-style" >
                    <span>Chetan Rajpal</span>
                    </Link>
                </header>

                <div className="w3-main main-comp-style" style={{marginLeft:'340px',marginRight:'40px'}}>
                    <Main/>
                </div>
            </div>

        );


    }
}

export default App;