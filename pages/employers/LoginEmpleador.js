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

import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PasswordIcon from '@mui/icons-material/Password';

import Header from "../../components/layout/Header";
const LoginEmpleador = () => {
  return (
    <>
      <Header />

      <Grid container alignItems="center" direction="column" rowSpacing={2}>
        <Grid item md={12}>
          <FormControl>
              
            <InputLabel htmlFor="email"><AccessibilityIcon />     Correo electronico</InputLabel>
            <Input id="email" type="email" aria-describedby="email-helper" />
            <FormHelperText id="email-helper">
              Tu correo electronico
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="pwd"> <PasswordIcon /> Contraseña</InputLabel>
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
            Acceder
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginEmpleador;
