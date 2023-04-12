import React from 'react'
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewSize } from '../../../features/size/sizeSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SizeCreate = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState()
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData()
    formdata.append('size', data.value)
    formdata.append('order', data.value)
    formdata.append('status', data.value)
    dispatch(saveNewSize(formdata))
    toast.success('Size Created Successfully')
    
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Size</Form.Label>
          <Form.Control type="text" placeholder="Size" onChange={e => setData({ ...data, size: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Size Order</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Order" onChange={e => setData({ ...data, order: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Size Status</Form.Label>
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

export default SizeCreate