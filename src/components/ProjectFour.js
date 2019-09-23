import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectFour extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="proect-four"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-four">Project 4</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>
            Project 4
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectFour;