import React, {Component} from "react";
//import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Grid, Cell } from 'react-mdl';
//import Card from 'react-bootstrap/Card';
//import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';

class Projects extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                        <h1>Projects</h1>
                    </Cell>
                    <Cell col={4}>
                    <div className="w3-card-4 w3-dark-grey">
                    <div className="w3-container w3-center w3-hover-shadow">
                    <h3>Project 1</h3>
                    <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" style={{width:'80%'}}/>
                    <h5>Subtitle</h5>
                    <button className="w3-button nav-color">Read More</button>
                    </div>
                    </div>
                    </Cell>
                
                 

                    <Cell col={4}>
                    <div class="w3-card-4 w3-dark-grey">
                    <div class="w3-container w3-center w3-hover-shadow">
                    <h3>Project 2</h3>
                    <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" style={{width:'80%'}}/>
                    <h5>Subtitle</h5>
                    <button class="w3-button nav-color">Read More</button>
                    </div>
                    </div>
                    </Cell>
                    <Cell col={4}>
                    <div class="w3-card-4 w3-dark-grey">
                    <div class="w3-container w3-center w3-hover-shadow">
                    <h3>Project 3</h3>
                    <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" style={{width:'80%'}}/>
                    <h5>Subtitle</h5>
                    <button class="w3-button nav-color">Read More</button>
                    </div>
                    </div>
                    </Cell>
                    <Cell col={4}>
                    <div class="w3-card-4 w3-dark-grey">
                    <div class="w3-container w3-center w3-hover-shadow">
                    <h3>Project 4</h3>
                    <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" style={{width:'80%'}}/>
                    <h5>Subtitle</h5>
                    <button class="w3-button nav-color">Read More</button>
                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;