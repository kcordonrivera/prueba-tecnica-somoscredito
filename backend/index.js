const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/db');
const Sucursal = require('./models/Sucursal');
const sucursalesRouter = require('./routes/sucursales');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/sucursales', sucursalesRouter);

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos exitosa');

    await sequelize.sync();
    console.log('✅ Tablas sincronizadas correctamente');

    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
  }
})();
