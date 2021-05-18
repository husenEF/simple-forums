const validate = (schema) => async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    next();
  } catch (err) {
    return res.json({
      status: false,
      message: err.message,
      data: [],
    });
  }
};

module.exports = validate;
