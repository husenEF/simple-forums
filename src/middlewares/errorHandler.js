const errorHandler = (err, _, res, next) => {
  if (err.name === "NotFound") {
    return res.status(404).json({
      errors: err.errors,
    });
  } else if (err.name === "Unauthorized") {
    return res.status(401).json({
      errors: err.errors,
    });
  } else if (err.name === "BadRequest") {
    return res.status(400).json({
      errors: err.errors,
    });
  } else if (err.name === "InternalServer") {
    return res.status(500).json({
      errors: err.errors,
    });
  } else {
    return res.status(500).json({
      errors: [{ message: "Some error occured in internal server!" }],
    });
  }
};

module.exports = errorHandler;
