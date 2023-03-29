import * as React from 'react';
import Button from '@mui/material/Button';
import {BsPencil} from "react-icons/bs";
import { Modal } from 'react-bootstrap';



export default function GenderModal() {
  const [fullscreen, setFullscreen] = React.useState(true);
  const [show, setShow] = React.useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  <Button className="me-2 mb-2" onClick={true}>
          
        </Button>

  return (
    <div>
      <Button onClick={handleShow}><Button variant="contained">Edit Gender</Button></Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </div>
  );
}