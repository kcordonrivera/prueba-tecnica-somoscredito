import React, { useState } from 'react';
import SucursalForm from './components/SucursalForm';
import SucursalList from './components/SucursalList';

function App() {
  const [editar, setEditar] = useState(null);
  const [reloadFlag, setReloadFlag] = useState(false);

  const handleEdit = (sucursal) => setEditar(sucursal);
  const afterSaved = () => {
    setEditar(null);
    setReloadFlag(!reloadFlag);
  };
  const handleCancel = () => setEditar(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>Gestión de Sucursales - Somos Crédito</h1>
      <SucursalForm editar={editar} onSaved={afterSaved} onCancel={handleCancel} />
      <hr />
      <SucursalList key={reloadFlag} onEdit={handleEdit} />
    </div>
  );
}

export default App;

