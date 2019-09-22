import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{}}>{this.props.skill}
                    </div>
                </Cell>
                <Cell col={8}>
                <div> 
                    <ProgressBar style={{display:'flex', marginTop:'3%', width: '85%'}} progress={this.props.progress} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;