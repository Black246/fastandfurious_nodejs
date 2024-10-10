const express = require('express');
const sequelize = require('./database/database');  // Conexión a la base de datos
const vehicleRoutes = require('./src/routes/vehicleRoutes');
require('dotenv').config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', vehicleRoutes);

// Probar la conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Conectado a la base de datos PostgreSQL.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

// Sincronizar modelos con la base de datos
sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados con la base de datos.');
    })
    .catch(err => {
        console.error('Error sincronizando los modelos:', err);
    });

// Puerto de la aplicación
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
