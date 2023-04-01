import React from 'react'
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateMaterials } from '../../../features/materials/materialSlice';

const MaterialEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [inputData, setInputData] = useState({
    "name:az": '',
    "name:en": '',
    slug: '',
    status: '',
    order: '',
  }
  )
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateMaterials(inputData))
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Material Name az</Form.Label>
          <Form.Control type="text" placeholder="Enter Material Name" onChange={e => setInputData({ ...inputData, 'name:az': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Material Name en</Form.Label>
          <Form.Control type="text" placeholder="Enter Material Name" onChange={e => setInputData({ ...inputData, "name:en": e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Material Code</Form.Label>
          <Form.Control type="text" placeholder="slug" onChange={e => setInputData({ ...inputData, slug: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Material Order</Form.Label>
          <Form.Control type="text" placeholder="Enter Material Order" onChange={e => setInputData({ ...inputData, order: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Material Status</Form.Label>
          <Form.Control type="text" placeholder="Enter Material Status" onChange={e => setInputData({ ...inputData, status: e.target.value })} />
        </Form.Group>
        <Button variant="contained" type='submit'>SEND</Button>
      </Form>
    </div>
  )
}

export default MaterialEdit