import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectThree extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="proect-three"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-three">Project 3</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>
            Project 3
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectThree;