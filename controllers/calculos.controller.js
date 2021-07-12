const { response, request } = require("express");
const { calcularExpression } = require("../helpers/calcular-expression");

const getCalculo = (req = request, res = response) => {
  const { expression, precision = 2 } = req.params;
  const precisionNumber = parseInt(precision);
  try {
    const respuesta = calcularExpression(expression, precisionNumber);
    res.json({
      msg: respuesta,
    });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
    });
  }
};

const postCalculo = (req = request, res = response) => {
  const { expression, precision = 2 } = req.body;
  const precisionNumber = parseInt(precision);
  try {
    const respuesta = calcularExpression(expression, precisionNumber);
    res.json({
      msg: respuesta,
    });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
    });
  }
};

module.exports = {
  getCalculo,
  postCalculo,
};
