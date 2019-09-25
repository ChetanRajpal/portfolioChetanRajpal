import React, {Component} from "react";
import { Grid, Cell } from 'react-mdl';
import "bootstrap-css-only/css/bootstrap.min.css";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';


class AboutMe extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                    <h1 style={{textAlign:"center", fontFamily:"Georgia", fontWeight:"bold"}}>About Me</h1>
                    <hr className="headinghr"/>
                    </Cell>
                    <Cell col={6}>
                    <Carousel style={{width:'380px', marginTop:'10px'}}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>
                   </Cell>
                    <Cell col={6}>
                       <p className="about-p" style={{fontSize:'130%', height:'100%', paddingTop:'20%'}}>This is Chetan Rajpal, 
                           a Cyber Security Enthusiast and Frontend Developer. 
                           I currently contribute to the Frontend Development in my company. 
                           I'm thriving to learn advance technologies in Cyber Security Area 
                           & contribute to making an impact in this computing world. I enjoy 
                           public speaking & I currently hold a couple of leading 
                           titles in various lectures.</p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default AboutMe;