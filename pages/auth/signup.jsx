import React from 'react';
import { useForm } from 'react-hook-form';

import Link from 'next/link';
import { signup, logout, useAuth } from '../../firebase';

import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';

import { useRef } from 'react';
import { useState } from 'react';

import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { async } from '@firebase/util';

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const registroColRef = collection(db, "usuarios");
  const initialStateValues = {
    username: "",
    first_last_name: "",
    second_last_name: "",
    email: "",
    password: "",
    selectRol: "",
  };
  const [registro, setRegistro] = useState(initialStateValues);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setRegistro({ ...registro, [name]: value });
  };

  const createRegistro = async () => {
    console.log(registro);
    await addRegistro(registro);
  };

  const addRegistro = async (registroObject) => {
    await addDoc(registroColRef, {
      username: registroObject.username,
      first_last_name: registroObject.first_last_name,
      second_last_name: registroObject.second_last_name,
      email: registroObject.email,
      password: registroObject.password,
      selectRol: registroObject.rol,
    });
  };

  //----AUTH----------

  const emailRef = useRef();
  const passRef = useRef();

  async function handleSingup() {
    try {
      setLoading(true);
      await signup(emailRef.current.value, passRef.current.value);
      createRegistro();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  // ------- Link Email ------- //

  const actionCodeSettings = {
    url: "http://localhost:3000/auth/verifiedEmail",
    // This must be true.
    handleCodeInApp: true,
  };

  const auth = getAuth();
  const email = currentUser?.email;
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });


  return (
    <>
      <div className="section-register">
        <div className="container-register-left" id="particles-js"></div>
        <div className="container-register-right" id="container-right">
          {/*-<span className="img-wave-top">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#863f92"
                  fill-opacity="0.8"
                  d="M0,224L40,234.7C80,245,160,267,240,234.7C320,203,400,117,480,90.7C560,64,640,96,720,122.7C800,149,880,171,960,154.7C1040,139,1120,85,1200,90.7C1280,96,1360,160,1400,192L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                ></path>
              </svg>
              </span>-*/}
          <form
            className="container-register m-auto"
            onSubmit={handleSubmit()}
            action="/auth/login"
          >
            <div className="label">
              <h1 className="label title is-2">Registro</h1>
            </div>
            <div className="label">
              <label className="label">Nombre(s)</label>
              <div className="control">
                <input
                  onChange={handleInputChange}
                  className="input is-purple"
                  type="text"
                  name="username"
                  placeholder="Tu Nombre(s)"
                />
              </div>
            </div>
            <div className="label">
              <label className="label">Primer apellido</label>
              <div className="control">
                <input
                  onChange={handleInputChange}
                  className="input is-purple"
                  type="text"
                  name="first_last_name"
                  placeholder="Tu Apellido(s)"
                />
              </div>
            </div>
            <div className="label">
              <label className="label">Segundo apellido</label>
              <div className="control">
                <input
                  onChange={handleInputChange}
                  className="input is-purple"
                  type="text"
                  name="second_last_name"
                  placeholder="Tu Apellido(s)"
                />
              </div>
            </div>
            <div className="label">
              <label className="label">Correo electrónico</label>
              <p className="control has-icons-left has-icons-right">
                <input
                {...register("email", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "El formato no es correcto",
                    },
                  })}
                  onChange={handleInputChange}
                  ref={emailRef}
                  className="input is-purple"
                  type="email"
                  name="email"
                  placeholder="Ingresa tu correo electronico"
                />
                {errors.email && (
                  <span className="error-message-field">
                    {errors.email.message}
                  </span>
                )}
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="label">
              <label className="label">
                Contraseña
                <p className="control has-icons-left">
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      minLength: {
                        value: 8,
                        message:
                          "(8 caracteres, 1 carácter especial, 1 mayúscula, 1 número)",
                      },
                      }
                    })}
                    onChange={handleInputChange}
                    ref={passRef}
                    className="input is-purple"
                    type="password"
                    name="password"
                    placeholder="Ingresa una contraseña"
                  />
                  {errors.password && (
                    <span className="error-message-field">
                      {errors.password.message}
                    </span>
                  )}
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </label>
            </div>
            <div className="control field">
              <label className="label">Rol </label>
              <div className="select">
                <select onChange={handleInputChange} name="selectRol">
                  <option
                    name="rol"
                    onChange={handleInputChange}
                    value="aspirante"
                  >
                    Aspirante
                  </option>
                  <option
                    name="rol"
                    onChange={handleInputChange}
                    value="alumno"
                  >
                    Alumno
                  </option>
                  <option
                    name="rol"
                    onChange={handleInputChange}
                    value="egresado"
                  >
                    Egresado
                  </option>
                  <option
                    name="rol"
                    onChange={handleInputChange}
                    value="docente"
                  >
                    Docente
                  </option>
                  <option
                    name="rol"
                    onChange={handleInputChange}
                    value="administrado_sec"
                  >
                    Administrador
                  </option>
                </select>
              </div>
            </div>
            <div className="label">
              <label className="label">
                <p className="control">
                  <button
                    disabled={loading || currentUser}
                    className="button is-purple is-rounded"
                    onClick={handleSingup}
                  >
                    Registrar
                  </button>
                </p>
              </label>
            </div>
            <div className="section-login-clic">
              <Link href="/">
                <p>
                  ¿Ya tienes una cuenta?<a>Inicia sesión</a>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div>Haz iniciado sesion con: {currentUser?.email} </div>
      <button disabled={loading || !currentUser} onClick={handleLogout}>
        Cerrar Sesion
      </button>
    </>
  );
}