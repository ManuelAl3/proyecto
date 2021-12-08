import Layout from '../Layout';
import ButtonSave from '../buttonSave';
import MessageInfo from '../messageInfo';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

export default function GraduateFollowUp(){
  //BACKEND

  const encuestaColRef = collection(db, "encuestaEgresoFollowUp");

  const initialStateValues = {
    res1:'',
    res2:'',
    res3:'',
    res4:'',
    res5:'',
    res6:'',
    res7:'',
    res8:'',
    res9:[],
    res10:'',
    res11:'',
    res12:'',
    res13:'',
    res14:'',
    res15:'',
    res16:[],
    res17:'',
    res18:[]
  };
  const [encuesta, setEncuesta] = useState(initialStateValues);

  const handleInputChange = e => {
      const { name, value } = e.target;
      setEncuesta({...encuesta, [name]: value});
  }

  const createEncuesta = e => {
      e.preventDefault();
      for (let index = 0; index < document.getElementsByName('res9[]').length; index++) {
          encuesta.res9[index]=document.getElementsByName('res9[]')[index].checked;
      };
      for (let index = 0; index < document.getElementsByName('res16[]').length; index++) {
          encuesta.res16[index]=document.getElementsByName('res16[]')[index].checked;
      };
      for (let index = 0; index < document.getElementsByName('res18[]').length; index++) {
          encuesta.res18[index]=document.getElementsByName('res18[]')[index].checked;
      };
      console.log(encuesta);
      addEncuesta(encuesta);
      //alert(newEIngresoR1,newEIngresoR2,newEIngresoR3,newEIngresoR4);
      //await addDoc(eIngresoColRef, {res1: newEIngresoR1, res2: newEIngresoR2, res3: newEIngresoR3, res4: newEIngresoR4});
    };

  const addEncuesta = async (encuestaObject) =>{
      await addDoc(encuestaColRef,
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
          res18: encuestaObject.res18
        });
  }

  //FRONTEND
   const { register,handleSubmit, formState: { errors } } = useForm();
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
    };

    return (
      <>
        <Layout title="Encuesta de seguimiento de egresados">
          <div className="title-main-quizz block">
            <p className="title is-2">Encuesta de seguimiento de egresados</p>
          </div>

          <MessageInfo />

          <form className="quizz-main m-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="box">
              <div className="block">
                <label className="label">
                  Actualmente vive en: <span className="span-req">*</span>
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      {...register("radio", { required: true })}
                      name="res1"
                      onChange={handleInputChange}
                    />
                    Ciudad de Durango
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res1"
                      onChange={handleInputChange}
                    />
                    En otro municipio de Durango
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res1"
                      onChange={handleInputChange}
                    />
                    En otro estado del país
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res1"
                      onChange={handleInputChange}
                    />
                    Fuera del país
                  </label>
                </div>
                {errors.checkbox && (
                  <p className="error-message-field">¡Campo obligatorio!</p>
                )}
              </div>
              <div className="block">
                <label className="label">
                  Donde vive, ¿es su lugar de origen?
                  <span className="span-req">*</span>
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      name="res2"
                      type="checkbox"
                      className="m-rght"
                    />
                    Si
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      name="res2"
                      type="checkbox"
                      className="m-rght"
                    />
                    No
                  </label>
                </div>
                {errors.checkbox && (
                  <p className="error-message-field">¡Campo obligatorio!</p>
                )}
              </div>
              <div className="block">
                <label className="label">
                  ¿Está titulado? <span className="span-req">*</span>
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                    />
                    Si
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      name="res3"
                      type="checkbox"
                      className="m-rght"
                    />
                    No
                  </label>
                </div>
                {errors.checkbox && (
                  <p className="error-message-field">¡Campo obligatorio!</p>
                )}
              </div>
              <div className="block">
                <label className="label">Año en que tramitó su título: </label>
                <div className="select">
                  <select>
                    <option
                      name="res4"
                      value="2021"
                      onChange={handleInputChange}
                    >
                      2021
                    </option>
                    <option
                      name="res4"
                      value="2020"
                      onChange={handleInputChange}
                    >
                      2020
                    </option>
                    <option
                      name="res4"
                      value="2019"
                      onChange={handleInputChange}
                    >
                      2019
                    </option>
                    <option
                      name="res4"
                      value="2018"
                      onChange={handleInputChange}
                    >
                      2018
                    </option>
                    <option
                      name="res4"
                      value="2017"
                      onChange={handleInputChange}
                    >
                      2017
                    </option>
                    <option
                      name="res4"
                      value="2016"
                      onChange={handleInputChange}
                    >
                      2016
                    </option>
                    <option
                      name="res4"
                      value="2015"
                      onChange={handleInputChange}
                    >
                      2015
                    </option>
                    <option
                      name="res4"
                      value="2014"
                      onChange={handleInputChange}
                    >
                      2014
                    </option>
                    <option
                      name="res4"
                      value="2013"
                      onChange={handleInputChange}
                    >
                      2013
                    </option>
                    <option
                      name="res4"
                      value="2012"
                      onChange={handleInputChange}
                    >
                      2012
                    </option>
                    <option
                      name="res4"
                      value="2011"
                      onChange={handleInputChange}
                    >
                      2011
                    </option>
                    <option
                      name="res4"
                      value="2010"
                      onChange={handleInputChange}
                    >
                      2010
                    </option>
                    <option
                      name="res4"
                      value="2009"
                      onChange={handleInputChange}
                    >
                      2009
                    </option>
                    <option
                      name="res4"
                      value="2008"
                      onChange={handleInputChange}
                    >
                      2008
                    </option>
                    <option
                      name="res4"
                      value="2007"
                      onChange={handleInputChange}
                    >
                      2007
                    </option>
                    <option
                      name="res4"
                      value="2006"
                      onChange={handleInputChange}
                    >
                      2006
                    </option>
                    <option
                      name="res4"
                      value="2005"
                      onChange={handleInputChange}
                    >
                      2005
                    </option>
                  </select>
                </div>
              </div>
              <div className="block">
                <label className="label">
                  En caso de no haberse titulado señale la causa:
                </label>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      className="m-rght"
                      name="answer"
                      name="res5"
                      onChange={handleInputChange}
                    />
                    Por no tener interés en ello
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      className="m-rght"
                      name="answer"
                      name="res5"
                      onChange={handleInputChange}
                    />
                    Por falta de tiempo
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      className="m-rght"
                      name="answer"
                      name="res5"
                      onChange={handleInputChange}
                    />
                    Por falta de información
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      className="m-rght"
                      name="answer"
                      name="res5"
                      onChange={handleInputChange}
                    />
                    Por problemas económicos
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      className="m-rght"
                      name="answer"
                      name="res5"
                      onChange={handleInputChange}
                    />
                    Está en trámite la titulación
                  </label>
                </div>
                <div className="control ">
                  <div className="field-is is-normal">
                    <label className="label">Otro:</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                          name="res5"
                          onChange={handleInputChange}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block">
                <label className="label">
                  Una vez que concluyó su licenciatura, ¿realizó estudios de
                  posgrado? <span className="span-req">*</span>
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                      name="res6"
                      onChange={handleInputChange}
                    />
                    Si
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                      name="res6"
                      onChange={handleInputChange}
                    />
                    No
                  </label>
                </div>
                {errors.checkbox && (
                  <p className="error-message-field">¡Campo obligatorio!</p>
                )}
              </div>
              <div className="block">
                <label className="label">
                  En caso de haber realizado estudios de posgrado, indique el
                  estatus del mismo <span className="span-req">*</span>
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                      name="res7"
                      onChange={handleInputChange}
                    />
                    En curso
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                      name="res7"
                      onChange={handleInputChange}
                    />
                    Concluido
                  </label>
                </div>
                {errors.checkbox && (
                  <p className="error-message-field">¡Campo obligatorio!</p>
                )}
              </div>
              <div className="block">
                <div className="field-is is-normal">
                  <label className="label">Nombre del posgrado:</label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                        name="res8"
                        onChange={handleInputChange}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="field-is is-normal">
                  <label className="label">
                    Institución en dónde lo realizó:
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                        name="res8"
                        onChange={handleInputChange}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="block">
                <label className="label">
                  Seleccione los tipos de actualización que ha tomado una vez
                  que egresó de la licenciatura:
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res9[]"
                      onChange={handleInputChange}
                    />
                    Cursos en línea
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res9[]"
                      onChange={handleInputChange}
                    />
                    Cursos precenciales
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res9[]"
                      onChange={handleInputChange}
                    />
                    Diplomados
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res9[]"
                      onChange={handleInputChange}
                    />
                    Certificaciones
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res9[]"
                      onChange={handleInputChange}
                    />
                    Maestría
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res9[]"
                      onChange={handleInputChange}
                    />
                    Doctorado
                  </label>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="tags">
                <label className="label has-text-light">
                  Trayectoria y Ubicación en el Mercado Laboral
                  <span className="forma"></span>
                </label>
              </div>
              <div className="block">
                <label className="label">
                  ¿Tenía usted empleo al concluir sus estudios de licenciatura?
                  <span className="span-req">*</span>
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                      name="res10"
                      onChange={handleInputChange}
                    />
                    Si
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                      name="res10"
                      onChange={handleInputChange}
                    />
                    No
                  </label>
                </div>
                {errors.checkbox && (
                  <p className="error-message-field">¡Campo obligatorio!</p>
                )}
              </div>
              <div className="block">
                <label className="label">
                  ¿Se encuentra usted laborando actualmente?
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res11"
                      onChange={handleInputChange}
                    />
                    Si
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res11"
                      onChange={handleInputChange}
                    />
                    No
                  </label>
                </div>
              </div>

              {/*Módulo checkbox*/}

              <div className="block">
                <label className="label">
                  ¿Qué te motiva a estudiar Ingeniería en Software?
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res12"
                      onChange={handleInputChange}
                    />
                    He enviado CV a empresas pero no he recibido respuesta
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res12"
                      onChange={handleInputChange}
                    />
                    No me interesa trabajar en algo relacionado a mi profeción
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res12"
                      onChange={handleInputChange}
                    />
                    No he encontrado una oportunidad laboral que me convenza
                  </label>
                </div>
                <div className="control ">
                  <div className="field-is is-normal">
                    <label className="label">Otro:</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                          name="res12"
                          onChange={handleInputChange}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="field-is is-normal">
                  <label className="label">
                    En caso de encontrarse trabajando actualmente indique el
                    nombre de la empresa:
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                        name="res13"
                        onChange={handleInputChange}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="field-is is-normal">
                  <label className="label">Puesto que ocupa: </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                        name="res14"
                        onChange={handleInputChange}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="block">
                <label className="label">
                  ¿El trabajo que desempeña actualmente se relaciona con su
                  profesión?
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res15"
                      onChange={handleInputChange}
                    />
                    Si
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res15"
                      onChange={handleInputChange}
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="block">
                <label className="label">
                  En caso de trabajar en un perfil diferente al de su
                  licenciatura, ¿cuáles son las causas?
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res16[]"
                      onChange={handleInputChange}
                    />
                    Falta de habilidad y destrezas propias
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res16[]"
                      onChange={handleInputChange}
                    />
                    Falta de interés por trabajar en su área
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res16[]"
                      onChange={handleInputChange}
                    />
                    Conocimientos insuficientes
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res16[]"
                      onChange={handleInputChange}
                    />
                    Conocimientos obsoletos
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res16[]"
                      onChange={handleInputChange}
                    />
                    Falta de experiencia
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res16[]"
                      onChange={handleInputChange}
                    />
                    Dificultad para aplicar conocimientos adquiridos
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res16[]"
                      onChange={handleInputChange}
                    />
                    Falta de fuentes de empleo
                  </label>
                </div>
                <div className="control ">
                  <div className="field-is is-normal">
                    <label className="label">Otro:</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                          name="res16[]"
                          onChange={handleInputChange}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block">
                <label className="label">Usted trabaja:</label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res17"
                      onChange={handleInputChange}
                    />
                    Dentro del estado de Durango
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res17"
                      onChange={handleInputChange}
                    />
                    Fuera del estado de Durango
                  </label>
                </div>
              </div>
              <div className="block">
                <label className="label">
                  1.- Selecciona las principales actividades que realizas o has
                  realizado en tu puesto de trabajo.
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res18[]"
                      onChange={handleInputChange}
                    />
                    Planeo proyectos de software considerando estándares de
                    calidad.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res18[]"
                      onChange={handleInputChange}
                    />
                    Analizo requerimientos para automatizar y/u optimizar
                    procesos en las organizaciones para el desarrollo y/o
                    implementación de proyectos de software.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res18[]"
                      onChange={handleInputChange}
                    />
                    Evalúo proyectos de software bajo estándares de calidad.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res18[]"
                      onChange={handleInputChange}
                    />
                    Diseño proyectos de software para automatizar y optimizar
                    procesos en las organizaciónes.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res18[]"
                      onChange={handleInputChange}
                    />
                    Desarrollo actividades para la administraación de proyectos
                    de software con estándares de calidad, para automatizar y
                    optimizar procesos en las organizaciones.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res18[]"
                      onChange={handleInputChange}
                    />
                    Realizo actividades de actualización afines a mi formación
                    profecional.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res18[]"
                      onChange={handleInputChange}
                    />
                    Desarrollo software para empresas o instituciones.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res18[]"
                      onChange={handleInputChange}
                    />
                    Participo en actividades académicas afines a mi formación
                    profecional.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res18[]"
                      onChange={handleInputChange}
                    />
                    Participo en actividades de investigación afines a mi
                    formación profecional.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="m-rght"
                      name="res18[]"
                      onChange={handleInputChange}
                    />
                    Participo como socio o tengo mi propia empresa de desarrollo
                    de software en donde se generan proyectos para la mejora
                    organizacional.
                  </label>
                </div>
                <div className="control ">
                  <div className="field-is is-normal">
                    <label className="label">Otro:</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                          name="res18[]"
                          onChange={handleInputChange}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Botón de guardar encuesta*/}
            <ButtonSave />
          </form>
        </Layout>
      </>
    );
}
