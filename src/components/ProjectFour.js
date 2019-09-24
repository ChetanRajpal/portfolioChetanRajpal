import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectFour extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="proect-four"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-four">ANDROID TV MEDIA PLAYER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{fontSize:"1.3em"}}>
          This app basically allows users to acquire media such as Music, Movies
and TV shows from NAS and arrange them in beautiful format. This app directly plays
these media from NAS present in a local network.
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectFour;