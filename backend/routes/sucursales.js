const express = require('express');
const router = express.Router();
const Sucursal = require('../models/Sucursal');

// Listar todas las sucursales
router.get('/', async (req, res) => {
  try {
    const sucursales = await Sucursal.findAll();
    res.json(sucursales);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener sucursales' });
  }
});

// Obtener por ID
router.get('/:id', async (req, res) => {
  try {
    const sucursal = await Sucursal.findByPk(req.params.id);
    if (!sucursal) return res.status(404).json({ message: 'No encontrada' });
    res.json(sucursal);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener sucursal' });
  }
});

// Crear nueva sucursal
router.post('/', async (req, res) => {
  try {
    const nueva = await Sucursal.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear sucursal', error: error.message });
  }
});

// Editar sucursal existente
router.put('/:id', async (req, res) => {
  try {
    const sucursal = await Sucursal.findByPk(req.params.id);
    if (!sucursal) return res.status(404).json({ message: 'No encontrada' });

    await sucursal.update({ ...req.body, fechaModificacion: new Date() });
    res.json(sucursal);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar sucursal' });
  }
});

// Eliminar sucursal
router.delete('/:id', async (req, res) => {
  try {
    const sucursal = await Sucursal.findByPk(req.params.id);
    if (!sucursal) return res.status(404).json({ message: 'No encontrada' });

    await sucursal.destroy();
    res.json({ message: 'Sucursal eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar sucursal' });
  }
});

module.exports = router;
