import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CreateSome = () => {
  return (
    <>
      <section>
        <h1>Gender Create</h1>
        <Link to= 'gendercreate'><Button variant="contained">Add Gender</Button></Link>
        <Link to= 'genderlist'><Button variant="contained">Edit Gender</Button></Link>
        
      </section>
      <section>
        <h1>Material</h1>
        <Link to= 'materialcreate'><Button variant="contained">Add Material</Button></Link>
        <Link to= 'materiallist'><Button variant="contained">Edit Material</Button></Link>
        
      </section>
      <section>
        <h1>Color</h1>
        <Link to= 'colorcreate'><Button variant="contained">Add Color</Button></Link>
        <Link to= 'colorlist'><Button variant="contained">Edit Color</Button></Link>
        
      </section>
      <section>
        <h1>Size</h1>
        <Link to= 'sizecreate'><Button variant="contained">Add Size</Button></Link>
        <Link to= 'sizelist'><Button variant="contained">Edit Size</Button></Link>
        
      </section>

    </>
  )
}

export default CreateSome