import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="section-login">
        <div className="container-login-left" id="particles-js"></div>
        <div className="container-login-right" id="container-right">
          <Image
            alt="..."
            src="/images/wave.svg"
            width={1500}
            height={1000}
            objectFit="fill"
          />
          <form className="container-login m-auto" onSubmit={handleSubmit()}>
            <div className="field">
              <h1 className="label title is-2">Inicia sesión</h1>
            </div>
            <div className="field">
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
            <div className="field">
              <label className="label">
                Contraseña
                <p className="control has-icons-left">
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      }
                    })}
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
            <div className="field">
              <Link href="/auth/forgotPassword">
                <a className="hashtag">Olvidé mi contraseña</a>
              </Link>
            </div>
            <div className="field">
              <label className="label">
                <p className="control">
                  <button className="button is-purple is-rounded">
                    Aceptar
                  </button>
                </p>
              </label>
            </div>
            <div className="section-register-clic">
              <Link href="/auth/signup">
                <p>
                  ¿No tienes una cuenta?<a>Regístrate</a>
                </p>
              </Link>
            </div>
          </form>
          <Image
            alt="..."
            src="/images/wave-2.svg"
            width={1500}
            height={1000}
            objectFit="fill"
          />
        </div>
      </div>
    </>
  );
}