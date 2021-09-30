import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from './CustomTextField';


const AddressForm = ({ checkoutToken, test }) => {

  const methods = useForm();

  

 

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data}))}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="state" label="State" />
            <FormInput required name="Country" label="Country" />
            <FormInput required name="zip" label="Zip / Postal code" />
            <FormInput required name="number" label="Phone Number" />
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
