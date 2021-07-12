const math = require("mathjs");

const calcularExpression = (expression, precision) => {
  try {
    const resultado = math.evaluate(expression);
    const resultadoFinal = math.format(resultado, {
      precision: precision,
      notation: "fixed",
    });
    return resultadoFinal;
  } catch (error) {
    throw new Error("La expresión enviada es inválida");
  }
};

module.exports = {
  calcularExpression,
};
