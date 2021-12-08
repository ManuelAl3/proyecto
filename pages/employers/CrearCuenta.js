import React from "react";
import {
  Container,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button,
  Grid,
} from "@mui/material";

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessIcon from '@mui/icons-material/Business';
import PasswordIcon from '@mui/icons-material/Password';

import Header from "../../components/layout/Header";

const CrearCuenta = () => {
  return (
    <>
      <Header />
      
     
      

      <Grid container alignItems="center" direction="column" rowSpacing={3}>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="email"><AlternateEmailIcon /> Correo electronico</InputLabel>
            <Input id="email" type="email" aria-describedby="email-helper" />
            <FormHelperText id="email-helper">
              Tu correo electronico
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="text"> <BusinessIcon /> Nombre de la empresa</InputLabel>
            <Input id="empresa" type="text" aria-describedby="text-helper" />
            <FormHelperText id="email-helper">
              El nombre de la empresa a registrar
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="pwd"><PasswordIcon /> Contraseña</InputLabel>
            <Input
              id="password"
              type="password"
              aria-describedby="password-helper"
            />
            <FormHelperText id="password-helper">
              Entre 8 y 16 caracteres
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item md={12}>
          <Button variant="contained" color="primary">
            Registrarse
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CrearCuenta;
