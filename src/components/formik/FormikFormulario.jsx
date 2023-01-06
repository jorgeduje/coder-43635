import { Button, Grid, TextField, Typography } from "@mui/material"

import { useFormik } from "formik"

import React from "react"

const FormikFormulario = () => {
  //   const datos = {
  //     name: "",
  //     email: "",
  //     password: "",
  //   }

  //   const enviarForm = () => {}

  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: () => {},
  })

  return (
    <div>
      <Typography color="primary" variant="h2" align="center">
        Formulario de registro
      </Typography>

      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese su nombre"
              name="name"
              variant="outlined"
              fullWidth
              value={values.name}
              onChange={handleChange}
              //   helperText={errors.nombre}
              //   error={errors.nombre ? true : false}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese su email..."
              variant="outlined"
              fullWidth
              name="email"
              value={values.email}
              onChange={handleChange}
              //   error={errors.email ? true : false}
              //   helperText={errors.email}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="password"
              label="Ingrese su contraseña"
              variant="outlined"
              fullWidth
              name="password"
              value={values.password}
              onChange={handleChange}
              //   error={errors.contraseña ? true : false}
              //   helperText={errors.contraseña}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Comprar
        </Button>
      </form>
    </div>
  )
}

export default FormikFormulario
