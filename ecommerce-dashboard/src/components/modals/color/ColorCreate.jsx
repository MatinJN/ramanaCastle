import * as React from 'react';
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createColor } from '../../../features/colors/colorSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ColorCreate = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState()
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData()
    formdata.append('name:az', data.value)
    formdata.append('name:en', data.value)
    formdata.append('order', data.value)
    formdata.append('color_code', data.value)
    formdata.append('status', data.value)
    dispatch(createColor(data))
    toast('Color saved successfully')
    
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Color Name az</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setData({ ...data, 'name:az': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Color Name en</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setData({ ...data, 'name:en': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Color Code</Form.Label>
          <Form.Control type="text" placeholder="#000000" onChange={e => setData({ ...data, color_code: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Color Order</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Order" onChange={e => setData({ ...data, order: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Color Status</Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Check this switch"
            onChange={e => setData({ ...data, status: e.target.checked ? '1' : '0' })}
          />
        </Form.Group>
        <Button variant="contained" type='submit'>SEND</Button>
        <ToastContainer />
      </Form>
    </div>
  );
}

export default ColorCreate