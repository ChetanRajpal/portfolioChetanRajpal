import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectOne extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="proect-one"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-one">ANALYSIS OF MALWARE Linux.MulDrop.14</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{fontSize:"1.3em"}}>
          In this project me and my team analyzed the working/spreading of a
malware name Linux.MulDrop.14 which infected many Raspberry Pis and converted
them to crypto currency mining machine. This Malware got into the pi as ssh ports
were open. Then it installs zmap, sshpass and mining script, it also changed the
default password to long password as most of the users use default username and
password to ssh into the pi. Only way we got to know malware was by determining
password using another non infected linux machine with professional usb write
blocker so that it doesn’t change the state of sdcard. Then we tracked the ssh
records and commands and then recognized how the device was infected.
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectOne;