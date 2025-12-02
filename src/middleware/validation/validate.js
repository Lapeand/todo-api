const validate = (schema) => (req, res, next) => {
  try{
    const validateData = schema.parse(req.body);

    req.body = validateData;
    next()

  } catch(err){
    return res.status(400).json({
      message: "Ошибка валидация",
      errors: err.errors
    })
  }
}

module.exports = validate;