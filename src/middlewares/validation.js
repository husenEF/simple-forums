const validate = (schema) => async (req, res, next) => {
  // const { value, error } = await schema.validateAsync(req.body);
  // console.log({ value, error });
  try {
    const { value, error } = await schema.validateAsync(req.body);
    // console.log({ value, error });
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
