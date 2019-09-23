import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectFive extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="proect-five"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-five">Project 5</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>
            Project 5
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectFive;