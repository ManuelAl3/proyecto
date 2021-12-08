import Layout from '../../components/Layout';
import ButtonSave from '../../components/buttonSave';
import MessageInfo from '../../components/messageInfo';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";

export default function IncomeSurvey(){
    const { register,handleSubmit, formState: { errors } } = useForm();
     // BACKEND
     const eIngresoColRef = collection(db, "encuestasIngreso");

    const initialStateValues = {
        res1:'',
        res2:'',
        res3:'',
        res4:[]
    };
    const [encuesta, setEncuesta] = useState(initialStateValues);

    const handleInputChange = e => {
        console.log(e.target);
        const { name, value } = e.target;
        setEncuesta({...encuesta, [name]: value});
    }

    const createEncuesta = () => {
        //e.preventDefault();
        for (let index = 0; index < document.getElementsByName('res4[]').length; index++) {
            encuesta.res4[index]=document.getElementsByName('res4[]')[index].checked;
        };
        console.log(encuesta);
        addEncuesta(encuesta);
        //alert(newEIngresoR1,newEIngresoR2,newEIngresoR3,newEIngresoR4);
        //await addDoc(eIngresoColRef, {res1: newEIngresoR1, res2: newEIngresoR2, res3: newEIngresoR3, res4: newEIngresoR4});
      };

    const addEncuesta = async (encuestaObject) =>{
        await addDoc(eIngresoColRef, {res1: encuestaObject.res1, res2: encuestaObject.res2, res3: encuestaObject.res3, res4: encuestaObject.res4});
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
        <Layout title="Encuesta de ingreso" description="Encuesta de ingreso al programa de estudios de ingeniería en software">
          <div className="title-main-quizz block">
            <p className="title is-2">
              Encuesta de ingreso al programa de estudios de ingeniería en software
            {/*
              {forms.map((data) => {
                return <p className="title is-2">{data.titulo}</p>;
              })}
            */}
            </p>
          </div>

          <MessageInfo />

          {/* Módulo de encuesta*/}
          <form
            className="quizz-main m-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="field is-horizontal box">
              <div className="field-is is-normal">
                <label name="question_id" className="label">
                  Escuela de procedencia <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      {...register("res1", {
                        required: {
                          value: true,
                          message: "Campo obligatorio",
                        },
                      })}
                      name="res1"
                      /*value={forms.answer}*/
                      onChange={handleInputChange}
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                    {errors.res1 && (
                      <p className="error-message-field">
                        ¡{errors.res1.message}!
                      </p>
                    )}
                  </p>
                </div>
              </div>
              <div className="field-is is-normal">
                <label name="question_id" className="label">
                  Especialidad cursada en tu escuela de procedencia:
                  <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      {...register("res2", {
                        required: {
                          value: true,
                          message: "Campo obligatorio",
                        },
                      })}
                      name="res2"
                      onChange={handleInputChange}
                      /*value={forms.answer}*/
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                    {errors.res2 && (
                      <p className="error-message-field">
                        ¡{errors.res2.message}!
                      </p>
                    )}
                  </p>
                </div>
              </div>
              {/* Módulo checkradio*/}
              <div className="block">
                <label name="question_id" className="label">
                  ¿Cómo te enteraste de la Universidad Politécnica de Durango?
                </label>
                <div className="section-check">
                  <div className="control">
                    <label className="radio">
                      <input
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="paginas"
                        onChange={handleInputChange}
                      />
                      Páginas Web
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="redes"
                        onChange={handleInputChange}
                      />
                      Redes Sociales
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="medios"
                        onChange={handleInputChange}
                      />
                      Medios de comunicación (televisión, radio, periódico,
                      otro)
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="vista"
                        onChange={handleInputChange}
                      />
                      Visita guiada programada por mi bachillerato
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="pendones"
                        onChange={handleInputChange}
                      />
                      Pendones
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="recomendación "
                        onChange={handleInputChange}
                      />
                      Recomendación de alguien más
                    </label>
                  </div>
                </div>
                <div className="control ">
                  <div className="field-is is-normal">
                    <label className="label">Otro:</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="answer"
                          /*value={forms.answer}*/
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Módulo checkbox*/}
              <div className="block">
                <label name="question_id" className="label">
                  ¿Qué te motiva a estudiar Ingeniería en Software?
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      onChange={handleInputChange} name="res4[]" type="checkbox" className="m-rght" />
                    Diseñar y desarrollar software a la medida y/o genérico de
                    calidad.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      onChange={handleInputChange} name="res4[]" type="checkbox" className="m-rght" />
                    Diseñar y crear bases de datos y aplicaciones para su
                    manipulación.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      onChange={handleInputChange} name="res4[]" type="checkbox" className="m-rght" />
                    Gestionar, administrar e implementar proyectos de innovación
                    en el área de software.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      onChange={handleInputChange} name="res4[]" type="checkbox" className="m-rght" />
                    Proporcionar soporte técnico y estratégico a la
                    infraestructura de tecnologías de información.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      onChange={handleInputChange} name="res4[]" type="checkbox" className="m-rght" />
                    Integrar nuevas soluciones de software a servicios modernos
                    como el comercio electrónico.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      onChange={handleInputChange} name="res4[]" type="checkbox" className="m-rght" />
                    Desarrollar investigación en el campo del desarrollo y
                    reingeniería de las tecnologías de la información.
                  </label>
                </div>
                <div className="control ">
                  <div className="field-is is-normal">
                    <label name="question_id" className="label">
                      Otro:
                    </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res4[]"
                          /*value={forms.answer}*/
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

            {/* Botón de guardar encuesta*/}
            <ButtonSave />
          </form>
        </Layout>
      </>
    );
}

/*export async function getStaticProps() {
    try {
      const res = await fetch('http://localhost:3200/preguntas')
      const data = await res.json()
      return {
        props: {
          data
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
*/