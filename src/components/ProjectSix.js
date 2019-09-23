import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectSix extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="proect-six"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-six">Project 6</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>
            Project 6
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectSix;