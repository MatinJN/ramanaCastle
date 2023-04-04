import * as React from 'react';
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { saveNewGender } from '../../../features/genders/genderSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
;
const GenderCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const [data, setData] = useState()
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData()
    formdata.append('name:az', data.value)
    formdata.append('title:az', data.value)
    formdata.append('keywords:az', data.value)
    formdata.append('description:az', data.value)
    formdata.append('name:en', data.value)
    formdata.append('title:en', data.value)
    formdata.append('keywords:en', data.value)
    formdata.append('description:en', data.value)
    formdata.append('slug', data.value)
    formdata.append('order', data.value)
    formdata.append('status', data.value)
    dispatch(saveNewGender(data))
    toast("Gender saved successfully")
    
  }
  return (
    <div>
      <h1>Gender Add</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch"
          onChange={e => setData({ ...data, status: e.target.checked ? '1' : '0' })}
        />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Name az</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setData({ ...data, 'name:az': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Title az</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setData({ ...data, 'title:az': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Keywords az</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={e => setData({ ...data, 'keywords:az': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Description az</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={e => setData({ ...data, 'description:az': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Name en</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={e => setData({ ...data, "name:en": e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Title en</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={e => setData({ ...data, 'title:en': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Keywords en</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={e => setData({ ...data, 'keywords:en': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Description en</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={e => setData({ ...data, 'description:en': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Gender Slug</Form.Label>
          <Form.Control type="text" placeholder="Enter slug" onChange={e => setData({ ...data, slug: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Gender Order</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={e => setData({ ...data, order: e.target.value })} />
        </Form.Group>
        <Button variant="contained" type='submit'>SEND</Button>
        <ToastContainer />
      </Form>
    </div>
  );
}

export default GenderCreate

