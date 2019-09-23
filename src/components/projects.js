import React, {Component} from "react";
//import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Grid, Cell } from 'react-mdl';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
///import 'bootstrap/dist/css/bootstrap.css';
//import "mdbreact/dist/css/mdb.css";
//import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import ProjectFour from './ProjectFour';
import ProjectFive from './ProjectFive';
import ProjectSix from './ProjectSix';
import Button from 'react-bootstrap/Button';


class Projects extends Component {


    constructor(props, context) {
        super(props, context);
    
        this.state = {
          poShow: false,
          ptShow: false,
          pthShow: false,
          pfShow: false,
          pfiShow: false,
          psShow: false
        };
      }

    render(){
        let poClose = () => this.setState({ poShow: false });
        let ptClose = () => this.setState({ ptShow: false });
        let pthClose = () => this.setState({ pthShow: false });
        let pfClose = () => this.setState({ pfShow: false });
        let pfiClose = () => this.setState({ pfiShow: false });
        let psClose = () => this.setState({ psShow: false });
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                        <h1>Projects</h1>
                    </Cell>
                    <Cell col={12}>
                    <CardDeck>
                         <Card>
                         <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_avatar3.png" />
                         <Card.Body>
                         <Card.Title>Project 1</Card.Title>
                         <Card.Text>
                          Project 1
                         </Card.Text>
                         </Card.Body>
                         <Card.Footer className="text-center">
                         <Button variant="flat" size="xl" onClick={() => this.setState({ poShow: true })}>Read More</Button>
                         <ProjectOne show={this.state.poShow} onHide={poClose} />
                         </Card.Footer>
                         </Card>
                         <Card>
                         <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_avatar3.png" />
                         <Card.Body>
                         <Card.Title>Project 2</Card.Title>
                         <Card.Text>
                             Project 2
                         </Card.Text>
                         </Card.Body>
                         <Card.Footer className="text-center">
                         <Button variant="flat" size="xl" onClick={() => this.setState({ ptShow: true })}>Read More</Button>
                         <ProjectTwo show={this.state.ptShow} onHide={ptClose} />
                         </Card.Footer>
                         </Card>
                         <Card>
                           <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_avatar3.png" />
                           <Card.Body>
                             <Card.Title>Project 3</Card.Title>
                             <Card.Text>
                               Project 3
                             </Card.Text>
                           </Card.Body>
                           <Card.Footer className="text-center">
                           <Button variant="flat" size="xl" onClick={() => this.setState({ pthShow: true })}>Read More</Button>
                           <ProjectThree show={this.state.pthShow} onHide={pthClose} />
                           </Card.Footer>
                         </Card>
                       </CardDeck>  
                    </Cell>
                    <Cell col={12}>
                    <CardDeck>
                         <Card>
                         <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_avatar3.png" />
                         <Card.Body>
                         <Card.Title>Project 4</Card.Title>
                         <Card.Text>
                          Project 4
                         </Card.Text>
                         </Card.Body>
                         <Card.Footer className="text-center">
                         <Button variant="flat" size="xl" onClick={() => this.setState({ pfShow: true })}>Read More</Button>
                         <ProjectFour show={this.state.pfShow} onHide={pfClose} />
                         </Card.Footer>
                         </Card>
                         <Card>
                         <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_avatar3.png" />
                         <Card.Body>
                         <Card.Title>Project 5</Card.Title>
                         <Card.Text>
                             Project 5
                         </Card.Text>
                         </Card.Body>
                         <Card.Footer className="text-center">
                         <Button variant="flat" size="xl" onClick={() => this.setState({ pfiShow: true })}>Read More</Button>
                         <ProjectFive show={this.state.pfiShow} onHide={pfiClose} />
                         </Card.Footer>
                         </Card>
                         <Card>
                           <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_avatar3.png" />
                           <Card.Body>
                             <Card.Title>Project 6</Card.Title>
                             <Card.Text>
                               Project 6
                             </Card.Text>
                           </Card.Body>
                           <Card.Footer className="text-center">
                           <Button variant="flat" size="xl" onClick={() => this.setState({ psShow: true })}>Read More</Button>
                           <ProjectSix show={this.state.psShow} onHide={psClose} />
                           </Card.Footer>
                         </Card>
                       </CardDeck>  
                    </Cell>    
                </Grid>
            </div>
        );
    }
}

export default Projects;