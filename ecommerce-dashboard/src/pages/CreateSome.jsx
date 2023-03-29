import React from 'react'
import GenderModal from '../components/modals/GenderModals'

import { Formik } from 'formik';
import ColorModal from '../components/modals/color/ColorModal';
import MaterialModal from '../components/modals/MaterialModal';
import SizeModal from '../components/modals/SizeModal';
import { Button } from '@mui/material';
import ColorCreate from '../components/modals/color/ColorCreate';

const CreateSome = () => {
  return (
    <>
      <section>
        <h1>Gender Create</h1>
        <Button variant="contained">Add Gender</Button>
        <GenderModal />
      </section>
      <section>
        <h1>Material</h1>
        <Button variant="contained">Add Material</Button>
        <MaterialModal />
      </section>
      <section>
        <h1>Color</h1>
        <ColorCreate/>
        <ColorModal />
      </section>
      <section>
        <h1>Size</h1>
        <Button variant="contained">Add Size</Button>
        <SizeModal />
      </section>

    </>
  )
}

export default CreateSome