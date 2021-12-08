import Layout from '../Layout';
import ButtonSave from '../buttonSave';
import MessageInfo from '../messageInfo';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";

export default function GraduateSurvey() {
    const { register,handleSubmit, formState: { errors } } = useForm();
    const eIngresoColRef = collection(db, "encuestaGraduacion");

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
        res17:''
    };
    const [encuesta, setEncuesta] = useState(initialStateValues);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setEncuesta({...encuesta, [name]: value});
    }

    const createEncuesta = e => {
        e.preventDefault();
        for (let index = 0; index < document.getElementsByName('res4[]').length; index++) {
            encuesta.res4[index]=document.getElementsByName('res4[]')[index].checked;
        };
        console.log(encuesta);
        addEncuesta(encuesta);
        //alert(newEIngresoR1,newEIngresoR2,newEIngresoR3,newEIngresoR4);
        //await addDoc(eIngresoColRef, {res1: newEIngresoR1, res2: newEIngresoR2, res3: newEIngresoR3, res4: newEIngresoR4});
      };

    const addEncuesta = async (encuestaObject) =>{
        await addDoc(eIngresoColRef,
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
                res17: encuestaObject.res17
            });
    }
    // FRONTEND
    const router = useRouter();
    //let forms = data;

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
          <form className="quizz-main m-auto" onSubmit={handleSubmit(onSubmit)}>
            {/* Módulo periodo de egreso y año de egreso*/}
            <div className="box">
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
                      name="res1"
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
                      name="res1"
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
            <div className="field is-horizontal box">
              <div className="tags">
                <label className="label has-text-light">
                  Desempeño profesional<span className="form"></span>
                </label>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">
                  Empresa en dónde realizaste Estancias I:{" "}
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      onChange={handleInputChange}
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                      name="res3"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">
                  Empresa en dónde realizaste Estancias II:{" "}
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      onChange={handleInputChange}
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                      name="res4"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">
                  Empresa en dónde realizaste Estadías:{" "}
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      onChange={handleInputChange}
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                      name="res5"
                    />
                  </p>
                </div>
              </div>
              {/* Checkbox*/}
              <div>
                <div className="block">
                  <label className="label">
                    ¿Realizaste proceso de dualidad?{" "}
                  </label>
                  <div className="section-check">
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res6"
                      />
                      Si
                    </label>
                  </div>
                  <div className="section-check">
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res6"
                      />
                      No
                    </label>
                  </div>
                </div>
                {/*  Checkbox*/}
                <div className="block">
                  <label className="label">En qué cuatrimestre(s): </label>
                  <div className="section-check">
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res7"
                      />
                      7mo
                    </label>
                  </div>
                  <div className="section-check">
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res7"
                      />
                      8vo
                    </label>
                  </div>
                  <div className="section-check">
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res7"
                      />
                      9no
                    </label>
                  </div>
                </div>
                <div className="block">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      Empresa(s) en los que realizaste dualidad:{" "}
                    </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                          name="res8"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  Módulo checkbox*/}
            <div className="box">
              <div className="tags">
                <label className="label has-text-light">
                  Empleo<span className="forma"></span>
                </label>
              </div>
              <div className="block">
                <label className="label">
                  ¿Trabajas actualmente en algún perfil relacionado a tu
                  licenciatura?{" "}
                </label>
                <div className="section-check">
                  <label className="radio">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      className="m-rght"
                      name="res9"
                    />
                    Si
                  </label>
                </div>
                <div className="section-check">
                  <label className="radio">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      className="m-rght"
                      name="res9"
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="block">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">Perfil de LinkedIn: </label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        onChange={handleInputChange}
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                        name="res10"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Considerando del 1 al 5, donde 1 es insuficiente y 4 es
                    bueno, cómo consideras el desarrollo de habilidades para:{" "}
                  </label>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Analizar, diseñar y desarrollar proyectos de ingeniería de
                    software mediante el uso de metodologías para automatizar y
                    optimizar los procesos de negocio de las empresas.
                  </label>
                </div>
                <div className="section-check block">
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res11"
                      />
                      1 Insuficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res11"
                      />
                      2 Deficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res11"
                      />
                      3 Suficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res11"
                      />
                      4 Bueno
                    </label>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Validar las arquitecturas de software mediante el análisis
                    de requerimientos para eficientar los procesos de negocio de
                    la empresa.
                  </label>
                </div>
                <div className="section-check block">
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res12"
                      />
                      1 Insuficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res12"
                      />
                      2 Deficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res12"
                      />
                      3 Suficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res12"
                      />
                      4 Bueno
                    </label>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Formular soluciones integrales de software mediante el uso
                    de normas, tecnologías y estándares para elevar la calidad
                    tecnológica de la empresa.
                  </label>
                </div>
                <div className="section-check block">
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res13"
                      />
                      1 Insuficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res13"
                      />
                      2 Deficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res13"
                      />
                      3 Suficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res13"
                      />
                      4 Bueno
                    </label>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Proponer tecnologías de información mediante el análisis
                    detallado de las tecnologías de información existentes en la
                    empresa para optimizar el uso de recursos tecnológicos.
                  </label>
                </div>
                <div className="section-check block">
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res14"
                      />
                      1 Insuficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res14"
                      />
                      2 Deficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res14"
                      />
                      3 Suficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res14"
                      />
                      4 Bueno
                    </label>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Desarrollar tecnologías de información mediante técnicas de
                    reingeniería para optimizar.
                  </label>
                </div>
                <div className="section-check block">
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res15"
                      />
                      1 Insuficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res15"
                      />
                      2 Deficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res15"
                      />
                      3 Suficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res15"
                      />
                      4 Bueno
                    </label>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Comunicar de manera efectiva sus ideas, con adecuada
                    expresión oral y escrita en español e inglés, apoyado en
                    tecnologías de información y comunicación, dirigido a
                    diferentes tipos de interlocutores o audiencias.
                  </label>
                </div>
                <div className="section-check block">
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res16"
                      />
                      1 Insuficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res16"
                      />
                      2 Deficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res16"
                      />
                      3 Suficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res16"
                      />
                      4 Bueno
                    </label>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Reconocer la importancia del trabajo grupal y se integra y
                    participa en forma efectiva en equipos multidisciplinarios y
                    multilingües de trabajo.
                  </label>
                </div>
                <div className="section-check block">
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res17"
                      />
                      1 Insuficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res17"
                      />
                      2 Deficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res17"
                      />
                      3 Suficiente
                    </label>
                  </div>
                  <div>
                    <label className="radio">
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        className="m-rght"
                        name="res17"
                      />
                      4 Bueno
                    </label>
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