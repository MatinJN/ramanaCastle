import React from 'react'
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateSize } from '../../../features/size/sizeSlice';

const SizeEdit = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    const [inputData, setInputData] = useState({
      size: '',
      status: '',
      order: '',
    }
    )
    function handleSubmit(event) {
      event.preventDefault();
        dispatch(updateSize(inputData))
        console.log(inputData);
        
  
    }
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Size</Form.Label>
            <Form.Control type="text" placeholder="Size" onChange={e => setInputData({ ...inputData, size: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Size Order</Form.Label>
            <Form.Control type="text" placeholder="Enter Color Order" onChange={e => setInputData({ ...inputData, order: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Size Status</Form.Label>
            <Form.Control type="text" placeholder="Enter Color Status" onChange={e => setInputData({ ...inputData, status: e.target.value })} />
          </Form.Group>
          <Button variant="contained" type='submit'>SEND</Button>
        </Form>
      </div>
    )
}

export default SizeEdit