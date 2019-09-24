import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectSix extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="proect-six"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-six">AUTOMATIC TOLL PLAZA SYSTEM USING ARDUINO AND GSM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{fontSize:"1.3em"}}>
            I did this project as a minor project with my team member. As the name suggest, Automatic Toll Plaza SYSTEM
            is designed to make the manually operated Toll Systems to be automated. Arduino, GSM Module, Hex Keypad and
            RFID Reader and writer was used in this project.
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectSix;