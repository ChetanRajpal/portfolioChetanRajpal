import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'left'}}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Chetan Rajpal</h2>
                        <h4 style={{color: 'grey'}}>Front End Developer </h4>
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
                        <p>mywebsite.com</p>
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