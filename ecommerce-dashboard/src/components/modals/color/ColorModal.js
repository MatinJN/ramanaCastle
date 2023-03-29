import * as React from 'react';
import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap';
import ColorList from '../../creatlist/ColorList'



export default function ColorModal() {
  const [fullscreen, setFullscreen] = React.useState(true);
  const [show, setShow] = React.useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div>
      <Button onClick={handleShow}><Button variant="contained">Add Color</Button></Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Color List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ColorList/>
        </Modal.Body>
      </Modal>
    </div>
  );
}