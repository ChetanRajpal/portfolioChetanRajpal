import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ProjectTwo extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="proect-two"
      >
        <Modal.Header closeButton>
          <Modal.Title id="project-two">STUDY OF FIREWALL AND IDS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{fontSize:"1.3em"}}>
          In this study, I gained knowledge on working of Firewall and IDS. I also
studied about the types of firewalls i.e. Software based and Hardware based. Moreover,
learned various techniques of designing a network by changing the positions of
various hardware and understanding the flow of data and protecting it. Additional, I gained knowledge
how Hackers penetrates into network and attack them.
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ProjectTwo;