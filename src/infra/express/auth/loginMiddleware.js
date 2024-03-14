import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email().max(200).required()
    .messages({
      'string.max': 'O campo "email" deve ter no máximo {#limit} caracteres.',
      'string.email': 'O campo "email" deve ser um email válido.',
      'string.empty': 'O campo "email" não pode estar vazio.',
      'any.required': 'O campo "email" é obrigatório.',
    }),
  senha: Joi.string().min(6).required()
    .messages({
      'string.min': 'O campo "senha" deve ter no mínimo {#limit} caracteres.',
      'string.empty': 'O campo "senha" não pode estar vazio.',
      'any.required': 'O campo "senha" é obrigatório.',
    }),
});

function createLoginProtectMiddleware() {
  return async function loginMiddleware(request, response, next) {
    try {
      request.body = await loginSchema.validateAsync(request.body);
      next();
    }
    catch(error) {
      next(error);
    }
  }
}

export { createLoginProtectMiddleware };
