import React, {Component} from "react";
//import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Grid, Cell } from 'react-mdl';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardDeck} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Projects extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                        <h1>Projects</h1>
                    </Cell>
                    <Cell col={12}>
                    <CardDeck>
                      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                         <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                         <CardBody>
                           <CardTitle>Analysis of Malware Linux.MulDrop.14</CardTitle>
                           <CardSubtitle>Device - Raspberry Pi</CardSubtitle>
                           <CardText>In this project me and my team analyzed the working/spreading of a 
                               malware name Linux.MulDrop.14 which infected many Raspberry Pis and converted 
                               them to crypto currency mining machine. This Malware got into the pi as ssh ports 
                               were open. Then it installs zmap, sshpass and mining script, it also changed the 
                               default password to long password as most of the users use default username and 
                               password to ssh into the pi. Only way we got to know malware was by determining 
                               password using another non infected linux machine with professional usb write 
                               blocker so that it doesn’t change the state of sdcard. Then we tracked the ssh 
                               records and commands and then recognized how the device was infected.
                            </CardText>
                         </CardBody>
                      </Card>

                      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                          <CardBody>
                             <CardTitle>Card title</CardTitle>
                             <CardSubtitle>Card subtitle</CardSubtitle>
                             <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                             <Button>Button</Button>
                          </CardBody>
                      </Card>

                      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                           <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                           <CardBody>
                             <CardTitle>Card title</CardTitle>
                             <CardSubtitle>Card subtitle</CardSubtitle>
                             <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                             <Button>Button</Button>
                           </CardBody>
                      </Card>
                      </CardDeck>
                      </Cell>


                      <Cell col={12}>
                    <CardDeck>
                      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                         <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                         <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                           <Button>Button</Button>
                         </CardBody>
                      </Card>

                      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                          <CardBody>
                             <CardTitle>Card title</CardTitle>
                             <CardSubtitle>Card subtitle</CardSubtitle>
                             <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                             <Button>Button</Button>
                          </CardBody>
                      </Card>

                      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                           <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                           <CardBody>
                             <CardTitle>Card title</CardTitle>
                             <CardSubtitle>Card subtitle</CardSubtitle>
                             <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                             <Button>Button</Button>
                           </CardBody>
                      </Card>
                      </CardDeck>
                      </Cell>

                </Grid>
            </div>
        );
    }
}

export default Projects;