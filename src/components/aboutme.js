import React, {Component} from "react";
import { Grid, Cell } from 'react-mdl';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



class AboutMe extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <Carousel showThumbs={false} showArrows={false} autoPlay={true} showStatus={false} infiniteLoop={true}>
                <div>
                    <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="" />
                </div>
                <div>
                    <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="" />
                </div>
                <div>
                    <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="" />
                </div>
            </Carousel>
                   </Cell>
                    <Cell col={8}>
                       <h1>About Me</h1>
                       <p>This is Chetan Rajpal, 
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