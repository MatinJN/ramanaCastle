import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { fetchAllCategories } from "../features/categories/categorySlice";
import { fetchAllMaterials } from "../features/materials/materialSlice";
import { fetchAllGenders } from "../features/genders/genderSlice";
import { fetchAllColors } from "../features/colors/colorSlice";
import { fetchAllsize } from "../features/size/sizeSlice";
import { saveNewProduct } from "../features/products/productSlice";
import { toast, ToastContainer } from "react-toastify";
import makeAnimated from 'react-select/animated';
import Select from 'react-select';



const CreateProduct = () => {
  let dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { colors } = useSelector((state) => state.color);
  const { genders } = useSelector((state) => state.gender);
  const { materials } = useSelector((state) => state.material);
  const { sizes } = useSelector((state) => state.size);


  const fetchingData = async () => {
    try {
      await dispatch(fetchAllCategories());
      await dispatch(fetchAllMaterials());
      await dispatch(fetchAllColors());
      await dispatch(fetchAllGenders());
      await dispatch(fetchAllsize());
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchingData()
  }, [dispatch]);

  const [data, setData] = useState()
  const [select, setSelect] = useState([]);
  const [image, setImage] = useState([]);
  const [sizeSel, setSizesel] = useState([]);
  const [genderSel, setGendersel] = useState([]);
  const [categorySel, setCategorysel] = useState([]);
  const [materialSel, setMaterialsel] = useState([]);

  let arrColorId = []
  let arrColorStock = []
  let arrsizeSel = sizeSel.map((e) => e['id'])
  let arrgenderSel = genderSel.map((e) => e['id'])
  let arrcategorySel = categorySel.map((e) => e['id'])
  let arrmaterialSel = materialSel.map((e) => e['id'])


  const animatedComponents = makeAnimated()


  const sizeArr = sizes.map(size => ({
    label: size.size,
    value: size.size,
    id: size.id,
  }))



  const genderArr = genders.map(gender => ({
    label: gender.name,
    value: gender.name,
    id: gender.id,
  }))

  const categoryArr = categories.map(category => ({
    label: category.name,
    value: category.name,
    id: category.id,
  }))

  const materialArr = materials.map(material => ({
    label: material.name,
    value: material.name,
    id: material.id,
  }))


  const handleSize = (e) => {

    setSizesel(e);
  };

  const handleGender = (e) => {
    setGendersel(e);
  };

  const handleCategory = (e) => {
    setCategorysel(e);
  };

  const handleMaterial = (e) => {
    setMaterialsel(e);
  };




  // input states
  function handleBlur(e) {
    const { value } = e.target;
    if (value !== "") {
      if (select.map((e) => e.value).includes(value)) {
        return null
      }
      else {
        if (value === "1" || value === '0') {
          setSelect((prev) => [...prev, { colorStock: [value] }]);
        }
        else {
          setSelect((prev) => [...prev, { colorId: [value] }]);
        }

      }

    }
  }
  //inputs
  const [inputList, setinputList] = useState([
    { color_id: "", color_image: "", color_stock: "" },
  ]);

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([
      ...inputList,
      { color_id: "", color_image: "", color_stock: "" },
    ]);
  };


  function handleSubmit(event) {
    event.preventDefault();

    for (let i = 0; i < select.length; i++) {
      if (select[i]['colorId'] && select[i]['colorId'].length) { // Check if 'colorId' exists and is not empty
        for (let j = 0; j < select[i]['colorId'].length; j++) {
          if (select[i]['colorId'][j]) {
            arrColorId.push(select[i]['colorId'][j]);
          }
        }
      }
      if (select[i]['colorStock'] && select[i]['colorStock'].length) { // Check if 'colorStock' exists and is not empty
        for (let j = 0; j < select[i]['colorStock'].length; j++) {
          if (select[i]['colorStock'][j] !== undefined) {
            arrColorStock.push(select[i]['colorStock'][j]);
          }
        }
      }
    }
    try {
      let newData = {
        ...data, size: [...arrsizeSel],
        category: [...arrcategorySel], gender: [...arrgenderSel], material: [...arrmaterialSel],
        colors: { color_id: arrColorId, stock: arrColorStock }, color_image: image['color_images'].map(e => e)
      };
      console.log("newData", newData);
      dispatch(saveNewProduct(newData));
      toast.success("Category saved successfully");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      <h1>Create Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Product Name az</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Color Name"
            onChange={(e) => setData({ ...data, "name:az": e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Product Title az</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Color Name"
            onChange={(e) => setData({ ...data, "title:az": e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Product Keywords az</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender Name"
            onChange={(e) =>
              setData((data) => ({ ...data, "keywords:az": e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Product Description az</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender Name"
            onChange={(e) =>
              setData({ ...data, "description:az": e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Product Name en</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender Name"
            onChange={(e) => setData({ ...data, "name:en": e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Product Title en</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender Name"
            onChange={(e) => setData({ ...data, "title:en": e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Product Keywords en</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender Name"
            onChange={(e) =>
              setData({ ...data, "keywords:en": e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Product Description en</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender Name"
            onChange={(e) =>
              setData({ ...data, "description:en": e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Slug</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter slug"
            onChange={(e) => setData({ ...data, slug: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Order</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender Order"
            onChange={(e) => setData({ ...data, order: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender Order"
            onChange={(e) => setData({ ...data, quantity: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender Order"
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Discount Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender Order"
            onChange={(e) =>
              setData({ ...data, discount_price: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Enter Gender Order"
            onChange={(e) => setData({ ...data, image: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Size</Form.Label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={sizeArr}
            value={sizeSel}
            onChange={handleSize}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Category</Form.Label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={categoryArr}
            value={categorySel}
            onChange={handleCategory}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Material</Form.Label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={materialArr}
            value={materialSel}
            onChange={handleMaterial}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Gender</Form.Label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={genderArr}
            value={genderSel}
            onChange={handleGender}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Status</Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            onChange={(e) =>
              setData({ ...data, status: e.target.checked ? "1" : "0" })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Stock</Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            onChange={(e) =>
              setData({ ...data, stock: e.target.checked ? "1" : "0" })
            }
          />
        </Form.Group>
        {inputList.map((x, i) => {
          return (
            <div className="row mb-3">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Product Color</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleBlur}
                >
                  <option>Select Gender</option>
                  {colors &&
                    colors.map((color) => <option value={color.id}>{color.name}</option>)}
                </Form.Select>
              </Form.Group>
              <div class="form-group col-md-4">
                <label>Color Image</label>
                <input
                  multiple
                  type="file"
                  required
                  class="form-control"
                  placeholder="Enter Last Name"
                  onChange={(e) => {
                    const files = e.target.files;
                    const paths = [];

                    for (let i = 0; i < files.length; i++) {
                      paths.push(files[i].name);
                    }
                    setImage((prev) => ({ ...prev, color_images: paths }));
                  }}
                />
              </div>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Product Color</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleBlur}
                >
                  <option>Select Gender</option>
                  <option value="1">Stockda Var</option>
                  <option value="0">Stockda yoxdur</option>

                </Form.Select>
              </Form.Group>
              <div class="form-group col-md-2 mt-4">
                {inputList.length !== 1 && (
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleremove(i)}
                  >
                    Remove
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button className="btn btn-success" onClick={handleaddclick}>
                    Add More
                  </button>
                )}
              </div>
            </div>
          );
        })}

        <Button variant="contained" type="submit">
          SEND
        </Button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default CreateProduct