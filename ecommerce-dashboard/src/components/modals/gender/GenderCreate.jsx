import * as React from 'react';
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { saveNewGender } from '../../../features/genders/genderSlice';
;
const GenderCreate = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate()

  

  const [inputData, setInputData] = useState({
    "name:az": '',
    "title:az": '',
    "keywords:az": '',
    "description:az": '',
    "keywords:en": '',
    "description:en": '',
    "name:en": '',
    "title:en": '',
    slug: '',
    status: '',
    order: '',
  }
  )
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(saveNewGender(inputData))
    console.log(inputData);
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Name az</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setInputData({ ...inputData, 'name:az': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Title az</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setInputData({ ...inputData, 'title:az': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Keywords az</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setInputData({ ...inputData, 'keywords:az': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Description az</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setInputData({ ...inputData, 'description:az': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Name en</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setInputData({ ...inputData, "name:en": e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Title en</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setInputData({ ...inputData, 'title:en': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Keywords en</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setInputData({ ...inputData, 'keywords:en': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender Description en</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={e => setInputData({ ...inputData, 'description:en': e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Gender Slug</Form.Label>
          <Form.Control type="text" placeholder="#000000" onChange={e => setInputData({ ...inputData, slug: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Gender Order</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Order" onChange={e => setInputData({ ...inputData, order: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Gender Status</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Status" onChange={e => setInputData({ ...inputData, status: e.target.value })} />
        </Form.Group>
        <Button variant="contained" type='submit'>SEND</Button>
      </Form>
    </div>
  );
}

export default GenderCreate