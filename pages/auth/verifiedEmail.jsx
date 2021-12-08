export default function activationEmail() {
    return (
      <>
        <div className="block main-box-card">
          <div className="box box-card-second m-auto">
            <div className="block">
              <lable className="label title is-3">¡Con exito!</lable>
              <p>
                Tu correo electrónico ha sido verificado, ahora ya puedes
                acceder a tu nueva cuenta de usuario
              </p>
            </div>
          </div>
        </div>
        <style jsx>{`
          div.main-box-card {
            padding-top: 50px;
          }
          .is-3 {
            text-align: center;
          }
        `}</style>
      </>
    );
}