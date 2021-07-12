const { Router } = require("express");
const { check } = require("express-validator");

const {
  getCalculo,
  postCalculo,
} = require("../controllers/calculos.controller");
const { validarCampos } = require("../middlewares/validarCampos.middleware");
const router = Router();

router.get(
  "/:expression/:precision?",
  [
    check(
      "precision",
      "La precisión debe ser un número entero mayor o igual que 0 y menor o igual que 15"
    )
      .optional()
      .isInt({ min: 0, max: 15 }),
    validarCampos,
  ],
  getCalculo
);

router.post(
  "/",
  [
    check(
      "precision",
      "La precisión debe ser un número entero mayor o igual que 0 y menor o igual que 15"
    )
      .optional()
      .isInt({ min: 0, max: 15 }),
    validarCampos,
  ],
  postCalculo
);

module.exports = router;
