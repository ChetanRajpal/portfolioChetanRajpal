import React, {Component} from "react";
import { Grid, Cell } from 'react-mdl';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import ProjectFour from './ProjectFour';
import ProjectFive from './ProjectFive';
import ProjectSix from './ProjectSix';
import Button from 'react-bootstrap/Button';
import rasp from './rasp_project_img.jpg';
import ids from './ids.jpg';
import reales from './realestate.jpg';
import antv from './antv.jpg';
import braille from './braillekey.jpg';
import toll from './tollplaza.jpg';


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
                        <h1 style={{textAlign:"center", fontFamily:"Georgia", fontWeight:"bold"}}>Projects</h1>
                        <hr className="headinghr"/>
                    </Cell>
                    <Cell col={12}>
                    <CardDeck>
                         <Card>
                         <Card.Img variant="top" src={rasp} />
                         <Card.Body>
                         <Card.Title>ANALYSIS OF MALWARE Linux.MulDrop.14</Card.Title>
                         </Card.Body>
                         <Card.Footer className="text-center">
                         <Button variant="flat" size="xl" onClick={() => this.setState({ poShow: true })}>Read</Button>
                         <ProjectOne show={this.state.poShow} onHide={poClose} />
                         </Card.Footer>
                         </Card>
                         <Card>
                         <Card.Img variant="top" src={ids} />
                         <Card.Body>
                         <Card.Title>STUDY OF FIREWALL AND IDS</Card.Title>
                         </Card.Body>
                         <Card.Footer className="text-center">
                         <Button variant="flat" size="xl" onClick={() => this.setState({ ptShow: true })}>Read</Button>
                         <ProjectTwo show={this.state.ptShow} onHide={ptClose} />
                         </Card.Footer>
                         </Card>
                         <Card>
                           <Card.Img variant="top" src={reales} />
                           <Card.Body>
                             <Card.Title>REAL ESTATE WEB PORTAL</Card.Title>
                             </Card.Body>
                           <Card.Footer className="text-center">
                           <Button variant="flat" size="xl" onClick={() => this.setState({ pthShow: true })}>Read</Button>
                           <ProjectThree show={this.state.pthShow} onHide={pthClose} />
                           </Card.Footer>
                         </Card>
                       </CardDeck>  
                    </Cell>
                    <Cell col={12}>
                    <CardDeck>
                         <Card>
                         <Card.Img variant="top" src={antv} />
                         <Card.Body>
                         <Card.Title>ANDROID TV MEDIA PLAYER</Card.Title>
                         </Card.Body>
                         <Card.Footer className="text-center">
                         <Button variant="flat" size="xl" onClick={() => this.setState({ pfShow: true })}>Read</Button>
                         <ProjectFour show={this.state.pfShow} onHide={pfClose} />
                         </Card.Footer>
                         </Card>
                         <Card>
                         <Card.Img variant="top" src={braille} />
                         <Card.Body>
                         <Card.Title>WIRELESS BRAILLE KEYBOARD AND PEDOMETER FOR BLINDS</Card.Title>
                         </Card.Body>
                         <Card.Footer className="text-center">
                         <Button variant="flat" size="xl" onClick={() => this.setState({ pfiShow: true })}>Read</Button>
                         <ProjectFive show={this.state.pfiShow} onHide={pfiClose} />
                         </Card.Footer>
                         </Card>
                         <Card>
                           <Card.Img variant="top" src={toll} />
                           <Card.Body>
                             <Card.Title>AUTOMATIC TOLL PLAZA SYSTEM USING ARDUINO AND GSM</Card.Title>
                             </Card.Body>
                           <Card.Footer className="text-center">
                           <Button variant="flat" size="xl" onClick={() => this.setState({ psShow: true })}>Read</Button>
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