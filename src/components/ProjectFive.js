import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectFive extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="proect-five"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-five">WIRELESS BRAILLE KEYBOARD AND PEDOMETER FOR BLINDS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{fontSize:"1.3em"}}>
            This project was minor project in college. The design of this project used push buttons, Arduino,
            Bluetooth paired with a mono speaker. This allowed Blinds to use the push buttons in special
            combinations with audio from speakers and connectivity via Bluetooth. Moreover, the pedometer
            used GPS and Arduino which allowed family members of blinds to track them. 
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectFive;