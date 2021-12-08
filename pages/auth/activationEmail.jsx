import Link from 'next/link';

export default function activationEmail() {
    return (
      <>
        <div className="block main-box-card">
          <form className="box box-card-second m-auto">
            <div className="block">
              <lable className="label title is-3">
                Hemos enviado un link de verificación a tu correo electrónico
              </lable>
              <p>
                Puedes checar tu bandeja de mensajes de tu correo para acceder
                al link de verificación.
              </p>
            </div>
            <div className="field block">
              <label className="label">
                <p className="control">
                  <Link href="/">
                    <button className="button is-purple is-rounded">
                      Entendido
                    </button>
                  </Link>
                </p>
              </label>
            </div>
          </form>
        </div>
      </>
    );
}
