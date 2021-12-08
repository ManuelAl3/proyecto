import React, { useState, useEffect } from 'react';

import Layout from '../Layout';
import ButtonSave from '../buttonSave';
import MessageInfo from '../messageInfo';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

export default function StudentIdentification(){
  const { register,handleSubmit, formState: { errors } } = useForm();

    const eIngresoColRef = collection(db, "identificacionEstudiante");

    const initialStateValues = {
        res1:'',
        res2:'',
        res3:'',
        res4:'',
        res5:'',
        res6:'',
        res7:'',
        res8:'',
        res9:'',
        res10:'',
        res11:'',
        res12:'',
        res13:'',
        res14:'',
        res15:'',
        res16:'',
        res17:'',
        res18:'',
        res19:'',
        res20:'',
        res21:'',
        res22:'',
        res23:'',
        res24:'',
        res25:'',
        res26:'',
        res27:'',
        res28:'',
        res29:'',
        res30:'',
        res31:'',
        res32:'',
        res33:'',
        res34:'',
        res35:'',
        res36:'',
        res37:'',
        res38:'',
        res39:'',
        res40:'',
        res41:'',
        res42:'',
        res43:''
    };
    const [encuesta, setEncuesta] = useState(initialStateValues);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setEncuesta({...encuesta, [name]: value});
    }

    const createEncuesta = e => {
        e.preventDefault();
        console.log(encuesta);
        addEncuesta(encuesta);
      };

    const addEncuesta = async (encuestaObject) =>{
        await addDoc(
            eIngresoColRef, 
            {
                res1: encuestaObject.res1,
                res2: encuestaObject.res2,
                res3: encuestaObject.res3,
                res4: encuestaObject.res4,
                res5: encuestaObject.res5,
                res6: encuestaObject.res6,
                res7: encuestaObject.res7,
                res8: encuestaObject.res8,
                res9: encuestaObject.res9,
                res10: encuestaObject.res10,
                res11: encuestaObject.res11,
                res12: encuestaObject.res12,
                res13: encuestaObject.res13,
                res14: encuestaObject.res14,
                res15: encuestaObject.res15,
                res16: encuestaObject.res16,
                res17: encuestaObject.res17,
                res18: encuestaObject.res18,
                res19: encuestaObject.res19,
                res20: encuestaObject.res20,
                res21: encuestaObject.res21,
                res22: encuestaObject.res22,
                res23: encuestaObject.res23,
                res24: encuestaObject.res24,
                res25: encuestaObject.res25,
                res26: encuestaObject.res26,
                res27: encuestaObject.res27,
                res28: encuestaObject.res28,
                res29: encuestaObject.res29,
                res30: encuestaObject.res30,
                res31: encuestaObject.res31,
                res32: encuestaObject.res32,
                res33: encuestaObject.res33,
                res34: encuestaObject.res34,
                res35: encuestaObject.res35,
                res36: encuestaObject.res36,
                res37: encuestaObject.res37,
                res38: encuestaObject.res38,
                res39: encuestaObject.res39,
                res40: encuestaObject.res40,
                res41: encuestaObject.res41,
                res42: encuestaObject.res42,
                res43: encuestaObject.res43
            });
    }
    // FRONTEND
    const router = useRouter();
    const alertActivated = () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Finalizado",
        showConfirmButton: false,
        timer: 1600,
      });
      setTimeout(() => {
        router.replace("/polls");
      }, 1600);
    };

    const onSubmit = () => {
        createEncuesta();
        alertActivated();
    }
    return (
      <>
        <Layout>
          <div className="title-main-quizz block">
            <p className="title is-2">Ficha de identificación de alumnos</p>
          </div>

          <MessageInfo />

          <form className="quizz-main m-auto" onSubmit={handleSubmit(onSubmit)}>
            {/* Módulo periodo de egreso y año de egreso*/}
            <div className="field is-horizontal box">
              <div className="tags">
                <label className="label has-text-light">
                  Datos de egreso<span className="forma"></span>
                </label>
              </div>
              <label className="label">Periodo de egreso:</label>
              <div className="section-check block">
                <div className="control">
                  <label className="radio">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      className="m-rght"
                      name="res1"
                    />
                    Enero - Abril
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      className="m-rght"
                      name="res"
                    />
                    Mayo - Agosto
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      className="m-rght"
                      name="res"
                    />
                    Septiembre - Diciembre
                  </label>
                </div>
              </div>
              <label className="label">Año de egreso:</label>
              <div className="select">
                <select>
                  <option name="res2" value="2021" onChange={handleInputChange}>
                    2021
                  </option>
                  <option name="res2" value="2020" onChange={handleInputChange}>
                    2020
                  </option>
                  <option name="res2" value="2019" onChange={handleInputChange}>
                    2019
                  </option>
                  <option name="res2" value="2018" onChange={handleInputChange}>
                    2018
                  </option>
                  <option name="res2" value="2017" onChange={handleInputChange}>
                    2017
                  </option>
                  <option name="res2" value="2016" onChange={handleInputChange}>
                    2016
                  </option>
                  <option name="res2" value="2015" onChange={handleInputChange}>
                    2015
                  </option>
                  <option name="res2" value="2014" onChange={handleInputChange}>
                    2014
                  </option>
                  <option name="res2" value="2013" onChange={handleInputChange}>
                    2013
                  </option>
                  <option name="res2" value="2012" onChange={handleInputChange}>
                    2012
                  </option>
                  <option name="res2" value="2011" onChange={handleInputChange}>
                    2011
                  </option>
                  <option name="res2" value="2010" onChange={handleInputChange}>
                    2010
                  </option>
                  <option name="res2" value="2009" onChange={handleInputChange}>
                    2009
                  </option>
                  <option name="res2" value="2008" onChange={handleInputChange}>
                    2008
                  </option>
                  <option name="res2" value="2007" onChange={handleInputChange}>
                    2007
                  </option>
                  <option name="res2" value="2006" onChange={handleInputChange}>
                    2006
                  </option>
                  <option name="res2" value="2005" onChange={handleInputChange}>
                    2005
                  </option>
                </select>
              </div>
            </div>
            {/* Módulo datos generales*/}
            <div className="field is-horizontal box">
              <div className="tags">
                <label className="label has-text-light">
                  Datos generales<span className="forma"></span>
                </label>
              </div>
              {/* Matrícula*/}
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      Matrícula: <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res3"
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block">
                <label className="label">
                  Fecha de nacimiento: <span className="span-req">*</span>
                </label>
                <form>
                  <input
                    onChange={handleInputChange}
                    name="res4"
                    className="input is-purple"
                    type="date"
                    name="day"
                  />
                </form>
              </div>
              {/* Género*/}
              <div className="block">
                <label className="label">
                  Género: <span className="span-req">*</span>
                </label>
                <div className="section-check">
                  <div className="control">
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        name="answer"
                        name="res5"
                        value="Femenino"
                      />
                      Femenino
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        name="answer"
                        name="res5"
                        value="Masculino"
                      />
                      Masculino
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        name="answer"
                        name="res5"
                        value="Otro"
                      />
                      otro
                    </label>
                  </div>
                </div>
              </div>
              {/* CURP*/}
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      CURP: <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res6"
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Correo electrónico alternativo*/}
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      Correo electrónico alternativo:{" "}
                      <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res7"
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Teléfono de contacto*/}
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label name="res8" className="label">
                      Teléfono de contacto: <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block ">
                    <div className="field">
                      <p className="control input-width-small">
                        <input
                          onChange={handleInputChange}
                          name="res8"
                          className="input is-purple"
                          type="number"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Módulo domicilio actual*/}
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">Domicilio actual </label>
                  </div>
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      Calle: <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block block">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res9"
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>

                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label" type="number">
                      Número exterior: <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res10"
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label" type="number">
                      Número interior: <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res11"
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      Colonia/Fraccionamiento:{" "}
                      <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res12"
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>

                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      Localidad: <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res13"
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>

                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      Estado: <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res14"
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>

                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      Municipio: <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res15"
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Módulo enfermedad/discapacidad*/}
            <div className="field is-horizontal box">
              <div className="tags">
                <label className="label has-text-light">
                  Datos de emergencia<span className="forma"></span>
                </label>
              </div>
              <div className="block">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Si padeces alguna enfermedad o discapacidad favor de
                    indicarla: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res16"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
              </div>
              {/*  Módulo checkbox*/}
              <div className="block">
                <label className="label">
                  En caso de padecer alguna enfermedad ¿recibes tratamiento?:{" "}
                </label>
                <div className="section-check">
                  <div className="control">
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        name="res17"
                        type="radio"
                        value="Si"
                      />
                      Si
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        name="res17"
                        type="radio"
                        value="No"
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/*  Módulo enfermedad/discapacidad*/}
            <div className="field is-horizontal box">
              <div className="tags">
                <label className="label has-text-light">
                  Datos de emergencia<span className="forma"></span>
                </label>
              </div>
              <div className="block">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Si padeces alguna enfermedad o discapacidad favor de
                    indicarla: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
              </div>
              {/*  Módulo checkbox*/}
              <div className="block">
                <label className="label">
                  En caso de padecer alguna enfermedad ¿recibes tratamiento?:
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input type="checkbox" className="m-rght" />
                    Si
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input type="checkbox" className="m-rght" />
                    No
                  </label>
                </div>
              </div>
            </div>

            {/*  Módulo de contactos*/}
            <div className="field is-horizontal box">
              <div className="tags">
                <label className="label has-text-light">
                  Favor de indicar dos contactos en caso de emergencia
                  <span className="forma"></span>
                </label>
              </div>
              {/*  Contacto 1*/}
              <div className="block subsection">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Contacto 1 </label>
                </div>
              </div>
              <div className="block">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Nombre(s): <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res18"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label" type="number">
                    Apellido Paterno: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res19"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label" type="number">
                    Apellido Materno: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res20"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Parentesco: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res21"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Teléfono de contacto: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block ">
                  <div className="field">
                    <p className="control input-width-small">
                      <input
                        onChange={handleInputChange}
                        name="res22"
                        className="input is-purple"
                        type="number"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                {/*  Módulo domicilio actual*/}
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Domicilio actual: </label>
                </div>
                <div className="section-check field">
                  <label className="checkbox">
                    <input
                      onChange={handleInputChange}
                      name="res23"
                      type="checkbox"
                    />
                    Mismo domicilio que el mio
                  </label>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Calle: </label>
                </div>
                <div className="field-body block block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res24"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label" type="number">
                    Número exterior:{" "}
                  </label>
                </div>
                <div className="field">
                  <p className="control">
                    <input
                      onChange={handleInputChange}
                      name="res25"
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label" type="number">
                    Número interior:{" "}
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res26"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Colonia/Fraccionamiento:</label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res27"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Localidad: </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res28"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Estado: </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res29"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Municipio: </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res30"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
              </div>
              {/*  Contacto 2*/}
              <div className="block subsection">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Contacto 2 </label>
                </div>
              </div>
              <div className="block">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Nombre(s): <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res31"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label" type="number">
                    Apellido Paterno: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res32"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label" type="number">
                    Apellido Materno: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res33"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Parentesco: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res34"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Teléfono de contacto: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block ">
                  <div className="field">
                    <p className="control input-width-small">
                      <input
                        onChange={handleInputChange}
                        name="res35"
                        className="input is-purple"
                        type="number"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                {/*  Módulo domicilio actual*/}
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Domicilio actual: </label>
                </div>
                <div className="section-check field">
                  <label className="checkbox">
                    <input
                      onChange={handleInputChange}
                      name="res36"
                      type="checkbox"
                    />
                    Mismo domicilio que el mio
                  </label>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Calle: </label>
                </div>
                <div className="field-body block block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res37"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label" type="number">
                    Número exterior:{" "}
                  </label>
                </div>
                <div className="field">
                  <p className="control">
                    <input
                      onChange={handleInputChange}
                      name="res38"
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label" type="number">
                    Número interior:{" "}
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res39"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Colonia/Fraccionamiento:</label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res40"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Localidad: </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res41"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Estado: </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res42"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Municipio: </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        name="res43"
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Botón de guardar encuesta*/}
            <ButtonSave />
          </form>
        </Layout>
      </>
    );
}
