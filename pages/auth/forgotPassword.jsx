import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export default function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
      <>
        <div className="block main-box-card">
          <form
            className="box box-card-second m-auto"
            onSubmit={handleSubmit()}
          >
            <div className="block">
              <lable className="label title is-3">
                Ingresa tu cuenta de correo electrónico
              </lable>
              <p>
                Te enviaremos un link a tu correo para que puedas recuperar tu
                cuenta
              </p>
            </div>
            <div className="block">
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
            <div className="field block">
              <label className="label">
                <p className="control">
                  <button className="button is-purple is-rounded">
                    Enviar
                  </button>
                </p>
              </label>
            </div>
            <Link href="/">
              <a ClassName="button is-rounded is-redounded-main">
                <button className="button is-rounded is-redounded-main">
                  Cancelar
                </button>
              </a>
            </Link>
          </form>
        </div>
      </>
    );
}