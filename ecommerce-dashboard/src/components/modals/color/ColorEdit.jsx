import React from 'react'
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createColor } from '../../../features/colors/colorSlice';
import { useNavigate } from "react-router-dom";

const ColorEdit = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [inputData, setInputData] = useState({
    "name:az": '',
    "name:en": '',
    color_code: '',
    status:'',
    order:'',
  }
  )
  function handleSubmit(event) {
    event.preventDefault();
      dispatch(createColor(inputData))
      console.log(inputData);
      

  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Color Name az</Form.Label>
              <Form.Control type="text" placeholder="Enter Color Name" onChange={e=>setInputData({...inputData , 'name:az':e.target.value})} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Color Name en</Form.Label>
              <Form.Control type="text" placeholder="Enter Color Name" onChange={e=>setInputData({...inputData , "name:en":e.target.value})} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Color Code</Form.Label>
              <Form.Control type="text" placeholder="#000000" onChange={e=>setInputData({...inputData , color_code:e.target.value})} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Color Order</Form.Label>
              <Form.Control type="text" placeholder="Enter Color Order" onChange={e=>setInputData({...inputData , order:e.target.value})} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Color Status</Form.Label>
              <Form.Control type="text" placeholder="Enter Color Status" onChange={e=>setInputData({...inputData , status:e.target.value})} />
            </Form.Group>
            <Button variant="contained" type='submit'>SEND</Button>
          </Form>
    </div>
  )
}

export default ColorEdit