import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectTwo extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="proect-two"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-two">Project 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>
            Project 2
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectTwo;