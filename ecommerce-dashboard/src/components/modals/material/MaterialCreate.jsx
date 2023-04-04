import React from 'react'
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createMaterials } from '../../../features/materials/materialSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MaterialCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()



  const [data, setData] = useState()


  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData()
    formdata.append('name:az', data.value)
    formdata.append('name:en', data.value)
    formdata.append('slug', data.value)
    formdata.append('order', data.value)
    formdata.append('status', data.value)
    dispatch(createMaterials(data))
    toast("Material saved successfully")
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Material Name az</Form.Label>
          <Form.Control type="text" placeholder="Enter Material Name" onChange={e => setData({ ...data, 'name:az': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Material Name en</Form.Label>
          <Form.Control type="text" placeholder="Enter Material Name" onChange={e => setData({ ...data, "name:en": e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Material Code</Form.Label>
          <Form.Control type="text" placeholder="slug" onChange={e => setData({ ...data, slug: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Material Order</Form.Label>
          <Form.Control type="text" placeholder="Enter Material Order" onChange={e => setData({ ...data, order: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Material Status</Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            onChange={e => setData({ ...data, status: e.target.checked ? '1' : '0' })}
          />
        </Form.Group>
        <Button variant="contained" type='submit'>SEND</Button>
        <ToastContainer />
      </Form>
    </div>
  );
}

export default MaterialCreate