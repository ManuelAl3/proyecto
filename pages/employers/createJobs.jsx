import { useForm } from 'react-hook-form';
import ButtonSave from '../../components/buttonSave';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../styles/employers.module.css';


export default function createJobs() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  console.log(errors);

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

  const onSubmit = data => {
      console.log(data);
      alertActivated();
  }

  return (
    <>
      <div className={styles.img}>
        <Image
          priority
          src="/images/employers.svg"
          height={200}
          width={200}
          alt="..."
        />
      </div>

      <div className={styles.img2}>
        <Image
          priority
          src="/images/investing.svg"
          height={300}
          width={300}
          alt="..."
        />
      </div>

      <form className={styles.container}  onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label title is-2">Lorem</label>
        </div>
        <div className="field">
          <label className="label">Tipo</label>
          <div className="control">
            <div className="select">
              <select {...register}>
                <option value="Empresa">Empresa</option>
                <option value="Institución">Institución</option>
                <option value="Organización">Organización</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Usuario</label>
          <div className="control">
            <div className="select">
              <select {...register}>
                <option value="Practicante">Practicante</option>
                <option value="Egresado">Egresado</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Tipo de empresa</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="tipoEmpresa"
              {...register("tipoEmpresa", {})}
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <label className="label">Teléfono</label>
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="number"
                    placeholder="teléfono"
                    {...register("teléfono", {})}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Nombre de contacto</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="nombreContacto"
              {...register("nombreContacto", {})}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Correo electrónico</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="correo"
              name="email"
              {...register("correo", {
                required: {
                  value: true,
                  maxLength: 0,
                  message: "Campo obligatorio",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El formato no es correcto",
                },
              })}
            />
            {errors.email &&
              ((<p className="help is-danger">¡{errors.email.message}!</p>),
              (
                <span className="icon is-small is-right">
                  <i className="bx bx-user">Hola mundo</i>
                </span>
              ))}
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div className="field is-horizontal">
          <label className="label">Descripción</label>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  type="text"
                  placeholder="descripción"
                  {...register("descripción", { required: true })}
                />
              </div>
            </div>
          </div>
        </div>
        <ButtonSave></ButtonSave>
      </form>
    </>
  );
}