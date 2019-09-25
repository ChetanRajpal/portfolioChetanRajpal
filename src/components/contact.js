import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import "bootstrap-css-only/css/bootstrap.min.css";

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
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
          </Cell>
          <Cell col={6}>
          <p style={{ width: '100%', margin: 'auto', paddingTop: '3em'}}>Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not only five centuries</p>
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