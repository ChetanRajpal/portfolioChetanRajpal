import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import pic15 from "./pic15.jpg";


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                <Cell col={12}>
                        <h1 style={{textAlign:"center", fontFamily:"Georgia", fontWeight:"bold"}}>Resume</h1>
                        <hr className="headinghr"/>
                    </Cell>
                    <Cell col={4}>
                        <div style={{textAlign: 'left'}}>
                            <img
                                className="image-resume"
                                src={pic15}
                                alt="avatar"
                                style={{height: '150px', borderRadius:"75px"}}
                            />
                        </div>

                        <h2 style={{paddingTop: '1em'}}>Chetan Rajpal</h2>
                        <h4 style={{color: '#5F5F5F'}}>Front End Developer </h4>
                        <hr style={{borderTop: '3px solid #642B73', width: '50%'}}/>
                        <p>Intend to build a career with a leading corporate with committed and dedicated people, 
                            which will provide me the right environment to use my skills in Cyber Security and 
                            Forensics and to be a part of a team that dynamically works towards the growth of the 
                            organization.</p>
                        <hr style={{borderTop: '3px solid #642B73', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Delhi/NCR, India</p>
                        <h5>Email</h5>
                        <p>chetanrajpal04@gmail.com</p>
                        <h5>Web</h5>
                        <p>chetanrajpal.tk</p>
                        <hr style={{borderTop: '3px solid #642B73', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2017}
                            endYear={2017}
                            schoolName="NSIC, NEW Delhi, India"
                            schoolDescription="Cyber Security and Cyber Forensics Certificate Course"
                        />
                        <hr style={{borderTop: '3px solid #642B73'}} />
                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName="Jaypee Institute of Information Technology, Noida, India"
                            schoolDescription="Electronics and Communication Engineering"
                        />
                        <hr style={{borderTop: '3px solid #642B73'}} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2017}
                            endYear={"till Date"}
                            jobName="Agile Softech Pt. Ltd."
                            jobDescription="Front End Developer. Designed, implemented and monitored web pages, web sites and web applications for
                            continuous improvement."
                        />
                        <hr style={{borderTop: '3px solid #642B73'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Cyber Security"
                            progress={80}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="Java"
                            progress={70}
                        />
                        <Skills
                            skill="React"
                            progress={55}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;