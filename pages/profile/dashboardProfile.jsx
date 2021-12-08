import Image from "next/image";

export default function dashboardProfile() {
    const name = "Manuel Alberto";
    const primerApellido = "Ortiz";
    const segundoApellido = "Torres";
    const correo = "ejemplo123@gmail.com";
    const rol = "Alumno";
    return (
      <>
        <div className="header-profile"></div>
        <div className="position-box">
          <div className="title-main-quizz box">
            <Image alt="..." src="/images/ISW.png" width={144} height={144} />
            <div className="label-box">
              <label className="title is-2">Mi cuenta</label>
            </div>
            <div className="box-info-user">
              <div className="block">
                <label className="title is-5">Información del usuario</label>
              </div>
              <div className="field-is is-normal">
                <label className="label">Nombre(s)</label>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        name="res1"
                        className="input"
                        type="text"
                        value={name}
                        disabled={true}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field-is is-normal">
                <label className="label">Primer apellido</label>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        name="res1"
                        className="input"
                        type="text"
                        value={primerApellido}
                        disabled={true}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field-is is-normal">
                <label className="label">Segundo apellido</label>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        name="res1"
                        className="input"
                        type="text"
                        value={segundoApellido}
                        disabled={true}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field-is is-normal">
                <label className="label">Correo electrónico</label>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        name="res1"
                        className="input"
                        type="text"
                        value={correo}
                        disabled={true}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field-is is-normal">
                <label className="label">Rol</label>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        name="res1"
                        className="input"
                        type="text"
                        value={rol}
                        disabled={true}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          div.header-profile {
            height: 220px;
            width: 100%;
            background: #863f92;
            background: -webkit-linear-gradient(to right, #863f92, #8f94fb);
            background: linear-gradient(to right, #863f92, #8f94fb);
            position: relative;
          }
          div.position-box {
            width: 100%;
            position: absolute;
          }
          div.label-box {
            padding: 20px;
          }
          div.title-main-quizz {
            margin-top: 50px;
            box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
          }
          div.box-info-user {
            border-radius: 10px;
            border: solid 0.5px;
            border-color: rgba(226, 226, 226, 0.623);
            padding: 20px;
            text-align: left;
          }
        `}</style>
      </>
    );
}
