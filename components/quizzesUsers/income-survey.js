import { useState, useEffect } from 'react';
import Layout from '../Layout';
import { db } from '../../firebase';
import { collection, getDocs} from "firebase/firestore";

export default function IncomeSurvey(){

  const [eIngreso, seteIngreso] = useState([]);
  const eIngresoColRef = collection(db, "encuestasIngreso");

  useEffect(() => {
    const geteIngreso = async () => {
      const data = await getDocs(eIngresoColRef);
      seteIngreso(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    geteIngreso()
  }, [])

    return (
      <>
        <Layout>
          <div className="title-main-quizz block">
            <p className="title is-3">
              Encuesta de ingreso al programa de estudios de ingeniería en software
            </p>
          </div>
              <form
                className="quizz-main m-auto"
              >
            {eIngreso.map((e) => {
              return (
                <div className="field is-horizontal box">
                  <div className="field-is is-normal">
                    <label name="question_id" className="label">
                      Escuela de procedencia
                    </label>
                  </div>
                  <div className="field-body block">
                    <div className="field">
                      <p className="control">
                        {e.res1}
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
                        {e.res2}
                      </p>
                    </div>
                  </div>

                  <div className="block">
                    <label name="question_id" className="label">
                      ¿Cómo te enteraste de la Universidad Politécnica de Durango?
                    </label>
                    <div className="section-check">
                      <div className="control">
                        <label className="radio">
                          {e.res3}
                        </label>
                      </div>
                  </div>

                  <div className="block">
                    <label name="question_id" className="label">
                      ¿Qué te motiva a estudiar Ingeniería en Software?
                    </label>
                    <div className="section-check">
                      <label className="checkbox">
                        {e.res4}
                      </label>
                    </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </form>
        </Layout>
      </>
    );
}