import Layout from '../../components/Layout';
import ButtonSave from '../../components/buttonSave';
import MessageInfo from '../../components/messageInfo';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";

export default function StudyEconomic(){
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
        <Layout title="Estudio socio - económico">
          <div className="title-main-quizz block">
            <p className="title is-2">Estudio socio - económico</p>
          </div>

          <MessageInfo />

          <form className="quizz-main m-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="box">
              <div className="block">
                <label className="label">
                  1. Estado civil: <span className="span-req">*</span>
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                    />
                    Soltero(a)
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                    />
                    Casado(a)
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                    />
                    Unión libre
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                    />
                    Divorciado(a)
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("checkbox", { required: true })}
                      type="checkbox"
                      className="m-rght"
                    />
                    Viudo(a)
                  </label>
                </div>
                {errors.checkbox && (
                  <p className="error-message-field">¡Campo obligatorio!</p>
                )}
              </div>

              {/* Checkbox */}

              <div className="block">
                <label className="label">2. ¿Eres foráneo(a)? </label>
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
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      3. En caso de ser foráneo específica:
                      <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">a. Estado: </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          {...register("res6", { required: true })}
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                        {errors.radio && (
                          <p className="error-message-field">
                            ¡Campo obligatorio!
                          </p>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">b. Municipio: </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          {...register("res6", { required: true })}
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                        {errors.radio && (
                          <p className="error-message-field">
                            ¡Campo obligatorio!
                          </p>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      4. ¿De quién dependes económicamente?
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
              </div>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      5. ¿Quién paga tu inscripción?
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
              </div>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      6. Menciona los integrantes de tu familia y edad de cada
                      uno
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
              </div>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      7. ¿Con quién vives actualmente?
                      <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          {...register("res", { required: true })}
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                        {errors.res && (
                          <p className="error-message-field">
                            ¡Campo obligatorio!
                          </p>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">8. Ocupación de madre: </label>
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
              </div>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">9. Ocupación de padre: </label>
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
              </div>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      10. Número de personas que dependen económicamente de ti
                      <span className="span-req">*</span>
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        <input
                          {...register("res", { required: true })}
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                        {errors.res && (
                          <p className="error-message-field">
                            ¡Campo obligatorio!
                          </p>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">
                      11. ¿Cuántos miembros de tu familia aportan al ingreso
                      familiar?
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
              </div>
              {/* Checkbox */}
              <div className="block">
                <label className="label">
                  12. ¿Trabajas? <span className="span-req">*</span>
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input {...register("checkbox", { required: true })} type="checkbox" className="m-rght" />
                    Si
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input {...register("checkbox", { required: true })} type="checkbox" className="m-rght" />
                    No
                  </label>
                </div>
                {errors.checkbox && (
                  <p className="error-message-field">
                    ¡Campo obligatorio!
                  </p>
                )}
              </div>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">13. ¿En dónde trabajas? </label>
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
              </div>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">14. Horario laboral </label>
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
              </div>
              {/* Checkbox */}
              <div className="block">
                <label className="label">
                  15. ¿Cuentas actualmente con alguna beca?
                  <span className="span-req">*</span>
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input {...register("checkbox", { required: true })} type="checkbox" className="m-rght" />
                    Si
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input {...register("checkbox", { required: true })} type="checkbox" className="m-rght" />
                    No
                  </label>
                </div>
                {errors.checkbox && (
                  <p className="error-message-field">
                    ¡Campo obligatorio!
                  </p>
                )}
              </div>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-is is-normal" id="field-quizz">
                    <label className="label">16. ¿Qué beca es? </label>
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
              </div>
              {/* Checkbox */}
              <div className="block">
                <label className="label">
                  15. ¿Cuentas actualmente con alguna beca?
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input type="checkbox" className="m-rght" />
                    Mensual
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input type="checkbox" className="m-rght" />
                    Bimestral
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input type="checkbox" className="m-rght" />
                    Trimestral
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input type="checkbox" className="m-rght" />
                    Anual
                  </label>
                </div>
              </div>
            </div>

            {/* Botón de guardar encuesta */}
            <ButtonSave />
          </form>
        </Layout>
      </>
    );
}