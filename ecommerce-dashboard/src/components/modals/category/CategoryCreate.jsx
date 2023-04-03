import * as React from 'react';
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createColor } from '../../../features/colors/colorSlice';
import { useNavigate } from "react-router-dom";

const CategoryCreate = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState()

    const handleChange = (e) => {
        setData(e.target.value)
    }


    function handleSubmit(event) {
        event.preventDefault();
        const formdata = new FormData()
        for (let i = 0; i < data.length; i++) {
            formdata.append(`image[${i}]`, data[0])
        }
        formdata.append('name:az',data.value)
        formdata.append('title:az',data.value)
        formdata.append('keywords:az',data.value)
        formdata.append('description:az',data.value)
        formdata.append('name:en',data.value)
        formdata.append('title:en',data.value)
        formdata.append('keywords:en',data.value)
        formdata.append('description:en',data.value)
        formdata.append('slug:az',data.value)
        formdata.append('order:az',data.value)
        formdata.append('status:az',data.value)
        formdata.append('keywords:az',data.value)
        formdata.append('keywords:az',data.value)
        
    }
    return (
        <div>
            <h1>Create Category</h1>
            <Form onSubmit={handleSubmit}>
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
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Gender Status</Form.Label>
                    <Form.Control type="text" placeholder="Enter Gender Status" onChange={e => setData({ ...data, status: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Gender Status</Form.Label>
                    <Form.Select type="text" placeholder="Enter Gender Status" onChange={e => setData({ ...data, gender: e.target.value })} />
                    <Form.option value=""></Form.option>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Category Status</Form.Label>
                    <Form.Control type="file" multiple placeholder="Enter Gender Status" onChange={e => setData({ ...data, image: e.target.value })} />
                </Form.Group>

                <Button variant="contained" type='submit'>SEND</Button>
            </Form>
        </div>
    );
}

export default CategoryCreate