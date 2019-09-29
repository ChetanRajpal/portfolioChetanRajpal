import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import "bootstrap-css-only/css/bootstrap.min.css";
import pic11 from './pic11.jpg';
import Map from 'pigeon-maps'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap//Button';



class Contact extends Component {
 

  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
            <Cell col={12}>
            <h2 style={{textAlign:"center", fontFamily:"Georgia", fontWeight:"bold", fontFamily:"Georgia", fontWeight:"bold"}}>Contact Me</h2>
            <hr className="headinghr"/>
            </Cell>
            <Cell col={6} style={{paddingTop:"20px"}}>
            <img
              src={pic11}
              className="contact-image" 
              alt="avatar"
              style={{height: '251px', borderRadius:'20px', margin:'auto'}}
               />
          </Cell>
          <Cell col={6}>
          <div style={{ margin:'auto'}}>
          <h3 style={{fontFamily: 'Anton'}}>Location</h3>
          <Map center={[28.6139, 77.2090]} zoom={11.8} width={500} height={200}></Map>
          </div>
          </Cell>
          <Cell col={4}>
              <div style={{textAlign:'center', paddingTop:'10px'}}>
              <i style={{fontSize: '40px'}} className="fas fa-envelope-square" aria-hidden="true"/>
              <h2 style={{fontSize:'190%', fontFamily: 'Anton', textAlign:'center'}}>E-mail</h2>
              </div>
              <div style={{fontFamily: 'Anton', textAlign:'center', fontSize:'20%'}}>
              <h3 style={{fontSize:'650%'}}>chetanrajpal04@gmail.com</h3>
              </div>
          </Cell>
          <Cell col={4}>
              <div style={{textAlign:'center', paddingTop:'10px'}}>
              <i style={{fontSize: '40px'}} className="fab fa-skype" aria-hidden="true"/>
              <h2 style={{fontSize:'190%', fontFamily: 'Anton', textAlign:'center'}}>Skype</h2>
              </div>
              <div style={{fontFamily: 'Anton', textAlign:'center', fontSize:'20%'}}>
              <h3 style={{fontSize:'650%'}}>live:chetanrajpal04</h3>
              </div>
          </Cell>
          <Cell col={4}>
              <div style={{textAlign:'center', paddingTop:'10px'}}>
              <i style={{fontSize: '40px'}} className="fab fa-telegram" aria-hidden="true"/>
              <h2 style={{fontSize:'190%', fontFamily: 'Anton', textAlign:'center'}}>Telegram</h2>
              </div>
              <div style={{fontFamily: 'Anton', textAlign:'center', fontSize:'20%'}}>
              <h3 style={{fontSize:'650%'}}>@ChetanRajpal</h3>
              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;