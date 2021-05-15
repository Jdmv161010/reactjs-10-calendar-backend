/*
    Rutas de Eventos: /events
    host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const {
  crearEvento,
  obtenerEventos,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

//Validar token en TODAS las peticiones
router.use(validarJWT);

//Crear nuevo evento
router.post(
  "/",
  [
    //Middlewares
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],

  crearEvento
);

//Obtener eventos
router.get("/", obtenerEventos);

//Actualizar evento
router.put(
  "/:id",
  [
    //Middlewares
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],
  actualizarEvento
);

//Eliminar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
