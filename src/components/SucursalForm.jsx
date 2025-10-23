import React, { useState, useEffect } from 'react';
import { createSucursal, updateSucursal } from '../api';

const initialForm = {
  nombreSucursal: '',
  pais: '',
  departamento: '',
  direccionExacta: '',
  codigoPais: '+502',
  telefono: '',
  nombreEncargado: '',
  estado: 'Alta'
};

export default function SucursalForm({ onSaved, editar, onCancel }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (editar) setForm(editar);
    else setForm(initialForm);
  }, [editar]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editar && editar.id) {
      await updateSucursal(editar.id, form);
    } else {
      await createSucursal(form);
    }
    onSaved();
  };

  return (
    <div>
      <h2>{editar ? 'Editar Sucursal' : 'Nueva Sucursal'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombreSucursal" placeholder="Nombre" value={form.nombreSucursal} onChange={handleChange} required /> <br />
        <input name="pais" placeholder="País" value={form.pais} onChange={handleChange} required /> <br />
        <input name="departamento" placeholder="Departamento" value={form.departamento} onChange={handleChange} required /> <br />
        <input name="direccionExacta" placeholder="Dirección" value={form.direccionExacta} onChange={handleChange} required /> <br />
        <input name="codigoPais" placeholder="Código País" value={form.codigoPais} onChange={handleChange} required /> <br />
        <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required /> <br />
        <input name="nombreEncargado" placeholder="Encargado" value={form.nombreEncargado} onChange={handleChange} required /> <br />
        <select name="estado" value={form.estado} onChange={handleChange}>
          <option value="Alta">Alta</option>
          <option value="Baja">Baja</option>
        </select> <br /><br />
        <button type="submit">Guardar</button>
        {editar && <button type="button" onClick={onCancel}>Cancelar</button>}
      </form>
    </div>
  );
}
