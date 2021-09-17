const { Router } = require("express");
const { check } = require("express-validator");

const {
  getCalculo,
  postCalculo,
} = require("../controllers/calculos.controller");
const { validarCampos } = require("../middlewares/validarCampos.middleware");
const router = Router();

router.get("/", (req, res) => {
  res.json({
    data: {
      nombre: "Juan Segundo Riera",
      legajo: "43774",
    },
  });
});
module.exports = router;
