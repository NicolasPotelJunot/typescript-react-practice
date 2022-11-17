import { useForm } from "../hooks/useForm";

interface Formdata {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {
  const { formulario, handleChange } = useForm<Formdata>({
    email: "nico@gmail.com",
    nombre: "nico",
    edad: 35,
  });

  const { email, nombre, edad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="from-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="from-label">Nombre</label>
        <input
          type="email"
          name="nombre"
          className="form-control"
          value={nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="from-label">Edad</label>
        <input
          type="number"
          name="edad"
          className="form-control"
          value={edad}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
