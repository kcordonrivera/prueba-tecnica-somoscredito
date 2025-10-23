import React, { useEffect, useState } from 'react';
import { getSucursales, deleteSucursal } from '../api';

export default function SucursalList({ onEdit }) {
  const [sucursales, setSucursales] = useState([]);

  const cargar = async () => {
    const data = await getSucursales();
    setSucursales(data);
  };

  useEffect(() => {
    cargar();
  }, []);

  const handleDelete = async (id, nombre) => {
    if (!window.confirm(`¿Eliminar la sucursal "${nombre}"?`)) return;
    await deleteSucursal(id);
    cargar();
  };

  return (
    <div>
      <h2>Listado de Sucursales</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>País</th>
            <th>Departamento</th>
            <th>Teléfono</th>
            <th>Encargado</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sucursales.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.nombreSucursal}</td>
              <td>{s.pais}</td>
              <td>{s.departamento}</td>
              <td>{s.codigoPais} {s.telefono}</td>
              <td>{s.nombreEncargado}</td>
              <td>{s.estado}</td>
              <td>
                <button onClick={() => onEdit(s)}>Editar</button>
                <button onClick={() => handleDelete(s.id, s.nombreSucursal)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}