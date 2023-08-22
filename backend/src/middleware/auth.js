const checkAuth = (req, res, next) => {
  const authParam = req.query.auth; // Obtén el valor del parámetro "auth"

  if (authParam === "secretkey") {
    // Si el valor es correcto, permite el acceso
    next();
  } else {
    // Si el valor es incorrecto, deniega el acceso
    res.status(403).json({ message: "Acceso denegado Choquito!!!." });
  }
};

module.exports = {
  checkAuth,
};
