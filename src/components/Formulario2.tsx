import { useForm } from "../hooks/useForm";

export const Formulario2 = () => {
  const { formulario, handleChange } = useForm({
    postal: "ABC",
    ciudad: "cordoba",
  });

  const {postal, ciudad} = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="from-label">postal</label>
        <input
          type="text"
          name="postal"
          value={postal}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="from-label">Ciudad</label>
        <input
          type="text"
          name="ciudad"
          value={ciudad}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
