import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectThree extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="proect-three"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-three">REAL ESTATE WEB PORTAL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{fontSize:"1.3em"}}>
          Using this web portal, it will allow users to provide details of their
properties that are for sale or for lease. It also allows users to search for properties
that are for sale by the builder. Moreover users can post their requirements regarding the
property they want to buy or want to rent.
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectThree;