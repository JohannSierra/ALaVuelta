require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const saltRounds = 10;

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch(err => console.log("Error conectando a MongoDB Atlas:", err));

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

// Modelo de Usuario
const Usuario = require('./models/Usuario');

app.post('/register', async (req, res) => {
  try {
    const { nombre, correo, contrasena, tipo } = req.body;

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    if (!correoValido) {
      return res.status(400).json({ mensaje: "Por favor, ingresa un correo válido" });
    }

    if (!nombre || !correo || !contrasena) {
      return res.status(400).json({ mensaje: "Faltan campos por rellenar" });
    }

    bcrypt.hash(contrasena, saltRounds, async (err, hash) => {
      if (err) return res.status(500).json({ mensaje: "Error al encriptar" });

      const nuevoUsuario = new Usuario({ nombre, correo, contrasena: hash, tipo });
      await nuevoUsuario.save();

      res.status(201).json({ mensaje: "Usuario registrado con éxito" });
    });

  } catch (error) {
    console.error('Error en el registro', error);
    res.status(500).json({ mensaje: "Error interno en el servidor" });
  }
});

app.post('/login', async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    const match = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!match) {
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    res.status(200).json({
      mensaje: "Inicio de sesión exitoso",
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        tipo: usuario.tipo,
      },
    });

  } catch (error) {
    console.error('Error en el inicio de sesión', error);
    res.status(500).json({ mensaje: "Error interno en el servidor" });
  }
});
