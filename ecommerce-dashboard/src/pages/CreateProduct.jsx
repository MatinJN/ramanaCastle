import React, { useEffect, useState } from "react";
import "../scss/productdetails.scss";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../features/categories/categorySlice";
import { fetchAllMaterials } from "../features/materials/materialSlice";
import { fetchAllGenders } from "../features/genders/genderSlice";
import { fetchAllColors } from "../features/colors/colorSlice";
import { saveNewProduct } from "../features/products/productSlice";
import { fetchAllsize } from "../features/size/sizeSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
const CreateProduct = () => {

  let dispatch = useDispatch();
  const { categories } = useSelector(state => state.category)
  const { colors } = useSelector(state => state.color)
  const { genders } = useSelector(state => state.gender);
  const { materials } = useSelector(state => state.material);
  const { sizes } = useSelector(state => state.size);



  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllMaterials());
    dispatch(fetchAllColors());
    dispatch(fetchAllGenders());
    dispatch(fetchAllsize());
  }, [dispatch]);

  const [data, setData] = useState()


  const formik = useFormik({
    initialValues: {


      'name:en': "",
      'name:az': "",
      'title:az': "",
      'title:en': "",
      'description:az': "",
      'description:en': "",
      'keywords:en': "",
      'keywords:az': "",
      'quantity': "",
      'slug': "",
      'price': "",
      'discount_price': "",
      'status': "",
      'order': "",
      'stock': "",
      'image': "",
      'size': "",
      'categories': "",
      'materials': "",
      'colors[color_id][]': "",
      'genders': "",
      'colors[stock][]': "",
      'colors[code][]': "",
      'color_image[][]': ""



    },

    onSubmit: (values) => {

      console.log(values);
      try {
        var req = new FormData();

        req.append("name:en", values.title);
        req.append("name:az", values.title);
        req.append("title:az", values.title);
        req.append("title:en", values.title);
        req.append("description:az", values.title);
        req.append("description:en", values.title);
        req.append("keywords:en", values.title);
        req.append("keywords:az", values.title);
        req.append("quantity", values.title);
        req.append("slug", values.title);
        req.append("price", values.title);
        req.append("discount_price", values.title);
        req.append("status", values.title);
        req.append("order", values.title);
        req.append("stock", values.title);
        req.append("image", values.title);
        req.append("size", values.title);
        req.append("categories", values.title);
        req.append("materials", values.title);
        req.append("colors[color_id][]", values.title);
        req.append("genders", values.title);
        req.append("colors[stock][]", values.title);
        req.append("colors[code][]", values.title);
        req.append("color_image[][]", values.title);
        dispatch(saveNewProduct(req))
      } catch (error) {
        toast.error(error.response.data.Detail);
      }
    },
  });


  // function handleSubmit(event) {
  //   const formdata = new FormData()
  //   formdata.append('name:az', data.value)
  //   formdata.append('title:az', data.value)
  //   formdata.append('keywords:az', data.value)
  //   formdata.append('description:az', data.value)
  //   formdata.append('name:en', data.value)
  //   formdata.append('title:en', data.value)
  //   formdata.append('keywords:en', data.value)
  //   formdata.append('description:en', data.value)
  //   formdata.append('slug', data.value)
  //   formdata.append('order', data.value)
  //   formdata.append('status', data.value)
  // }




  return (
    <div>
      <h1>Product Add</h1>
      <Form onSubmit={formik.handleSubmit}>

        <Form.Group controlId="name:en">
          <Form.Label>Gender Name en</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="name:az">
          <Form.Label>Gender name az</Form.Label>
          <Form.Control type="text" placeholder="Enter Color Name" onChange={formik.handleChange} />
        </Form.Group>



        <Form.Group controlId="title:az">
          <Form.Label>Gender Keywords az</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="title:en">
          <Form.Label>Gender Description az</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="description:az">
          <Form.Label>Gender Name en</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="description:en">
          <Form.Label>Gender Title en</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="keywords:en">
          <Form.Label>Gender Keywords en</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="keywords:az">
          <Form.Label>Gender Description en</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Name" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>quantity quantity</Form.Label>
          <Form.Control type="text" placeholder="Enter slug" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="slug">
          <Form.Label>Gender slug</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Product price</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="discount_price">
          <Form.Label>Product discount_price</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Product status status</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="order">
          <Form.Label>Product order order</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>

        <Form.Group controlId="sizes">
          <Form.Label>SELECT SIZES SELECT SIZES</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="categories">
          <Form.Label>SELECT SIZES SELECT SIZES</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="materials">
          <Form.Label>SELECT materials SELECT materials</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="colors[color_id][]">
          <Form.Label>SELECT colors SELECT colors</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="genders">
          <Form.Label>SELECT genders SELECT genders</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="colors[stock][]">
          <Form.Label>SELECT genders SELECT genders</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="colors[code][]">
          <Form.Label>SELECT genders SELECT genders</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group controlId="color_image[][]">
          <Form.Label>SELECT genders SELECT genders</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender Order" onChange={formik.handleChange} />
        </Form.Group>





        <Form.Group controlId="stock">
          <Form.Label>Stock</Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Check this switch"
            onChange={formik.handleChange}
          // onChange={e => setData({ ...data, status: e.target.checked ? '1' : '0' })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Status</Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Check this switch"
            // onChange={e => setData({ ...data, status: e.target.checked ? '1' : '0' })}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="image">

          <Form.Control
            type="file"
            multiple
            // onChange={e => setData({ ...data, image: e.target.value })}
            onChange={(e) => {
              formik.setFieldValue("imageFile", e.currentTarget.files[0]);
            }}
          >

          </Form.Control>
        </Form.Group>

        <Button variant="contained" type='submit'>SEND</Button>
        <ToastContainer />
      </Form>
    </div>);
};

export default CreateProduct;

 // <div className="productdetails">
    //     <Formik
    //         validationSchema={validScheme}
    //         initialValues={{
    //             Name: '',
    //             Description: '',
    //             StockKeepingUnit: '',
    //             ColorIds: [],
    //             GenderId: '',
    //             MaterialIds: [],
    //             Price: '',
    //             Images: [],
    //         }}
    //         onSubmit={submitHandler}
    //     >
    //         {({ touched, errors, setFieldValue }) => (
    //             <Form className="form">
    //                 <div className="productdetails__title is-invalid">
    //                     <label className="title__h" htmlFor="Name">Name</label>
    //                     <Field name="Name" placeholder="Name"
    //                         className='edit_inputs' />
    //                 </div>
    //                 <ErrorMessage
    //                     name="Name"
    //                     component="div"
    //                     className="invalid-feedback"
    //                 />

    //                 <div className="productdetails__title is-invalid">
    //                     <label className="title__h" htmlFor="Description">Description</label>
    //                     <Field name="Description" placeholder="Description"
    //                         className='edit_inputs' />
    //                 </div>
    //                 <ErrorMessage
    //                     name="Description"
    //                     component="div"
    //                     className="invalid-feedback"
    //                 />
    //                 <div className="productdetails__title is-invalid">
    //                     <label className="title__h" htmlFor="StockKeepingUnit">Stock</label>
    //                     <Field name="StockKeepingUnit" type="number" placeholder="Stock"
    //                         className='edit_inputs' />
    //                 </div>
    //                 <ErrorMessage
    //                     name="StockKeepingUnit"
    //                     component="div"
    //                     className="invalid-feedback"
    //                 />
    //                 <div className="productdetails__title is-invalid">
    //                     <label className="title__h" htmlFor="Price">Price</label>
    //                     <Field name="Price" type="number" placeholder="Price"
    //                         className='edit_inputs' />
    //                 </div>
    //                 <ErrorMessage
    //                     name="Price"
    //                     component="div"
    //                     className="invalid-feedback"
    //                 />

    //                 <div className="productdetails__title is-invalid">
    //                     <label className="title__h" htmlFor="CategoryId">Category</label>
    //                     <Field name="CategoryId" placeholder="Category" as='select'
    //                         className='edit_inputs' >
    //                         <option disabled >Select Category</option>
    //                         {
    //                             categories && categories.map(e => (
    //                                 <option value={e.id}>{e.name}</option>
    //                             ))
    //                         }
    //                         <option value={null}>Other</option>

    //                     </Field>
    //                 </div>
    //                 <ErrorMessage
    //                     name="CategoryId"
    //                     component="div"
    //                     className="invalid-feedback"
    //                 />
    //                 <div className="productdetails__title is-invalid">
    //                     <label className="title__h" htmlFor="GenderId">Gender</label>
    //                     <Field name="GenderId" placeholder="Gender" as='select'
    //                         className='edit_inputs' >
    //                         <option disabled >Select Gender</option>
    //                         {
    //                             genders && genders.map(e => (
    //                                 <option value={e.id}>{e.name}</option>
    //                             ))
    //                         }
    //                         <option value={null}>Other</option>

    //                     </Field>
    //                 </div>
    //                 <ErrorMessage
    //                     name="CategoryId"
    //                     component="div"
    //                     className="invalid-feedback"
    //                 />
    //                 <div className="productdetails__title is-invalid">
    //                     <label className="title__h" htmlFor="MaterialIds">Materials</label>
    //                     <Select name="MaterialIds" options={options} isMulti={true} className="edit_inputs" onChange={e => setFieldValue("MaterialIds", e.map(e => e.value))} />
    //                 </div>
    //                 <ErrorMessage
    //                     name="MaterialIds"
    //                     component="div"
    //                     className="invalid-feedback"
    //                 />

    //                 <div className="productdetails__title is-invalid">
    //                     <label className="title__h" htmlFor="ColorIds">Colors</label>
    //                     <Select options={options2} isMulti={true} className="edit_inputs" onChange={e => setFieldValue("ColorIds", e.map(e => e.value))} />
    //                 </div>
    //                 <ErrorMessage
    //                     name="ColorIds"
    //                     component="div"
    //                     className="invalid-feedback"
    //                 />
    //                 <div className="productdetails__title is-invalid">
    //                     <label className="title__h" htmlFor="Images">Image</label>
    //                     <input type="file" name="Images" multiple={true} className="edit_inputs" onChange={(event) => {
    //                         setFieldValue("Images", event.currentTarget.files);
    //                     }} />
    //                 </div>
    //                 <ErrorMessage
    //                     name="Images"
    //                     component="div"
    //                     className="invalid-feedback"
    //                 />
    //                 <button type="submit" className="bg-success  text-light">Save</button>
    //             </Form>

    //         )}
    //     </Formik>
    // </div>
