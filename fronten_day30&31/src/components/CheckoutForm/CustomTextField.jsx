import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        // as={TextField}
        name={name}
        control={control}
        // label={label}
        // fullWidth
        // required={required}
        error={isError}
        render = {({ field})=> (
          <TextField
              fullWidth
              label={label}
              required={required}
          />
      )}
      />
    </Grid>
  );
}

export default FormInput;
