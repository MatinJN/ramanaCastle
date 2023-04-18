import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { Form } from "react-bootstrap";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { fetchAllCategories } from "../features/categories/categorySlice";
import { fetchAllMaterials } from "../features/materials/materialSlice";
import { fetchAllGenders } from "../features/genders/genderSlice";
import { fetchAllColors } from "../features/colors/colorSlice";
import { fetchAllsize } from "../features/size/sizeSlice";
import { saveNewProduct } from "../features/products/productSlice";
import { toast, ToastContainer } from "react-toastify";

//create 4 input and add button if add button onclick create new 4 input then this data submit whith formik react js?

const CreateProduct = () => {
  let dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { colors } = useSelector((state) => state.color);
  const { genders } = useSelector((state) => state.gender);
  const { materials } = useSelector((state) => state.material);
  const { sizes } = useSelector((state) => state.size);

  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllMaterials());
    dispatch(fetchAllColors());
    dispatch(fetchAllGenders());
    dispatch(fetchAllsize());
  }, []);
  useEffect(() => {
    dispatch(fetchAllGenders());
  }, [dispatch]);

  const [data, setData] = useState();
  const [select, setSelect] = useState([]);

  // input states
  const [additionalInputs, setAdditionalInputs] = useState([]);
  const [nextInputNumber, setNextInputNumber] = useState(5);
  const inputRef = useRef(null);

  // input function
  // function handleAddInputs() {
  //   setAdditionalInputs((prevInputs) =>
  //     [...prevInputs, "", "", ""].map((input, index) => {
  //       const inputNumber = nextInputNumber + index;
  //       return {
  //         options: (inputNumber % 3 === 0) ? ["Stock var", "Stock yox"] : colors.map((e) => e.name),
  //         name: (inputNumber % 3 === 2) ? "color_id" : (inputNumber % 3 === 0) ? "color_stock" : "color_image",
  //         value: colors.map((e) => e.id),
  //         type: (inputNumber % 3 === 2) ? "file" : "select"
  //       }
  //     })
  //   );
  //   setNextInputNumber(nextInputNumber + 4);
  // }
  function handleAddInputs() {
    setAdditionalInputs((prevInputs) =>
      [...prevInputs, "", "", ""].map((input, index) => {
        const inputNumber = nextInputNumber + index;
        let type;
        let name;
        let options;
        switch (inputNumber % 3) {
          case 0:
            name = "color_stock";
            type = "select";
            options = ["Stock var", "Stock yox"];
            break;
          case 1:
            name = "card";
            type = "switch";
            break;
          case 2:
            name = "color_id";
            type = "file";
            break;
          default:
            break;
        }
        return {
          options,
          name,
          value: colors.map((e) => e.id),
          type,
        };
      })
    );
    setNextInputNumber(nextInputNumber + 4);
  }


  function handleChange(e) {
    e.preventDefault();

  }

  function handleBlur(e) {
    const { name, value } = e.target;
    if (value !== "") {
      if (select.map((e) => e.value).includes(value)) {
        return null
      }
      else {
        setSelect((prev) => [...prev, { name, value }]);
      }

    }
  }



  let [arr, setArr] = useState([])
  function handleSubmit(event) {


    for (const iter of select) {
      setArr((prev) => ({ ...prev, iter }))
    }


    event.preventDefault();
    const formdata = new FormData();
    try {
      // formdata.append("image", data["image"]);
      formdata.append("name:az", data["name:az"]);
      formdata.append("title:az", data["title:az"]);
      formdata.append("keywords:az", data["keywords:az"]);
      formdata.append("description:az", data["description:az"]);
      formdata.append("name:en", data["name:en"]);
      formdata.append("title:en", data["title:en"]);
      formdata.append("keywords:en", data["keywords:en"]);
      formdata.append("description:en", data["description:en"]);
      formdata.append("slug", data["slug"]);
      formdata.append("order", data["order"]);
      formdata.append("status", data["status"]);
      formdata.append("quantity", data["quantity"]);
      formdata.append("price", data["price"]);
      formdata.append("discount_price", data["discount_price"]);
      formdata.append("stock", data["stock"]);
      formdata.append("sizes", data["sizes"]);
      formdata.append("categories", data["categories"]);
      formdata.append("materials", data["materials"]);
      formdata.append("genders", data["genders"]);
      formdata.append("color_image", data["color_image"]);
      formdata.append("color_id", data["color_id"]);

      let newData = { ...data, select: [select].map((e) => e) };
      console.log("newData", newData);
      // dispatch(saveNewProduct(formdata));
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
              setData({ ...data, "keywords:az": e.target.value })
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
          <Form.Label>Product Size</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Size</option>
            {sizes && sizes.map((size) => (
              <option value={size.name}>{size.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Categories</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Gender</option>
            {categories && categories.map((category) => (
              <option>{category.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Materials</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Material</option>
            {materials && materials.map((material) => (
              <option>{material.name}</option>
            ))}
          </Form.Select>

        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Product Genders</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Gender</option>
            {genders && genders.map((gender) => (
              <option>{gender.name}</option>
            ))}
          </Form.Select>

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

        <div>
          <label>
            Color Id
          </label>
          <select
            ref={inputRef}
            onBlur={handleBlur}
            name="color_id"
            onChange={handleChange}
          >
            <option value="">Stock</option>
            {colors && colors.map(color => (
              <option value={color.id}>{color.name}</option>
            ))}
          </select>
          <label htmlFor="">Color Image</label>
          <input
            required
            type="file"
            name="color_image"
            placeholder={"type..."}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="">Color Stock</label>
          <Form.Check
                  type='switch'
                  id="color_stock"
                  onBlur={handleBlur}
                  onChange={() => console.log("Switch toggled")}/>

          {/* {additionalInputs.map((input, index) => (
            <React.Fragment key={index + nextInputNumber}>
              {input.type === "select" ? (
                <select onBlur={handleBlur} name={input.name}>
                  <option value="">Stock</option>
                  {input.options &&
                    input.options.map((option, index) => (
                      <option key={index} value={option==="Stock var"?1:0}>
                        {option}
                      </option>
                    ))}
                </select>
              ) : (
                <input
                  onBlur={handleBlur}
                  type={input.type}
                  name={input.name}
                  placeholder={`Additional Input ${index + 1}`}
                />
              )}
            </React.Fragment>
          ))} */}
          {additionalInputs.map((input, index) => (
            <React.Fragment key={index + nextInputNumber}>
              {input.type === "select" ? (
                <select onBlur={handleBlur} name={input.name}>
                  <option value="">Stock</option>
                  {input.options &&
                    input.options.map((option, index) => (
                      <option key={index} value={option === "Stock var" ? 1 : 0}>
                        {option}
                      </option>
                    ))}
                </select>
              ) : input.type === "switch" ? (
                <div>
                  <label htmlFor={input.name}>Card</label>
                  <Form.Check
                  type='switch'
                  id={input.name}
                  name={input.name}
                  onBlur={handleBlur}
                  onChange={() => console.log("Switch toggled")}/>

                  
                </div>
              ) : (
                <input
                  onBlur={handleBlur}
                  type={input.type}
                  name={input.name}
                  placeholder={`Additional Input ${index + 1}`}
                />
              )}
            </React.Fragment>
          ))}

          <span onClick={handleAddInputs}>+ Add 4 more inputs</span>
        </div>

        <Button variant="contained" type="submit">
          SEND
        </Button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default CreateProduct;

