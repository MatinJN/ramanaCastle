import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGenders } from '../../../features/genders/genderSlice';
import { saveNewCategory } from '../../../features/categories/categorySlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

const CategoryCreate = () => {
    const dispatch = useDispatch();
    const { genders } = useSelector(state => state.gender)
    useEffect(() => {
        dispatch(fetchAllGenders())

    }, [dispatch])

    const animatedComponents = makeAnimated()

    const [data, setData] = useState()
    const [select, setSelect] = useState()
    const newGenderArray = genders.map(gender => ({
        label: gender.name,
        value: gender.name,
        id: gender.id,
    }));
    console.log("ssss", newGenderArray);

    const handleChange = (newGenderArray) => {
        setSelect(newGenderArray);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const formdata = new FormData()
        try {
            formdata.append('image', data.image)
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
            console.log(data,select);
            for (let i = 0; i < select.length; i++) {
                formdata.append('genders[]', select[i].value);
            }
            
            dispatch(saveNewCategory())
            toast.success('Category saved successfully')
        } catch (error) {
            toast.error(error.message)
        }
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
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Check this switch"
                    onChange={e => setData({ ...data, status: e.target.checked ? '1' : '0' })}
                />
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={newGenderArray}
                    value={select}
                    onChange={handleChange}
                />
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Category Image</Form.Label>
                    <Form.Control type="file" multiple placeholder="Enter Gender Status" onChange={e => setData({ ...data, image: e.target.value })} />
                </Form.Group>

                <Button variant="contained" type='submit'>SEND</Button>
                <ToastContainer />
            </Form>
        </div>
    );
}

export default CategoryCreate