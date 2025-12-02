const { z } = require('zod');

const todoSchema = z.object({
  title: z
    .string()
    .min(3, "Название должно содержать минимум 3 символа")
    .max(100, "Название должно содержать максимум 100 символов"),
  
  completed: z
    .boolean()
});


module.exports = todoSchema;