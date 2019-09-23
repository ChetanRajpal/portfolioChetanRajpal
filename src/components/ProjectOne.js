import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectOne extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="proect-one"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-one">Project 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>
            Project 1
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectOne;