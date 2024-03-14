import Joi from 'joi';

const usuarioSchema = Joi.object({
  id: Joi.number().integer().min(0).allow(null).optional()
    .messages({
      'number.base': 'O campo "id" deve ser um número inteiro ou null.',
      'number.min': 'O campo "id" deve ser um número inteiro maior que {#limit}.',
    }),
  ativo: Joi.number().integer().min(0).max(1).required()
    .messages({
      'number.base': 'O campo "ativo" deve ser um número inteiro.',
      'number.min': 'O campo "ativo" deve ser um número inteiro maior que {#limit}.',
      'number.max': 'O campo "ativo" deve ser um número inteiro menor que {#limit}.',
      'any.required': 'O campo "ativo" é obrigatório.'
    }),
  perfil_id: Joi.number().integer().min(1).required()
    .messages({
      'number.min': 'O campo "perfil_id" deve ser um número inteiro maior que {#limit}.',
      'any.required': 'O campo "perfil_id" é obrigatório.',
    }),
  nome: Joi.string().max(100).required()
    .messages({
      'string.max': 'O campo "nome" deve ter no máximo {#limit} caracteres.',
      'string.empty': 'O campo "nome" não pode estar vazio.',
      'any.required': 'O campo "nome" é obrigatório.',
    }),
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
  cadastro: Joi.string().isoDate().allow(null, '').optional()
    .messages({
      'string.isoDate': 'O campo "cadastro" deve ser uma data válida no formato ISO.',
      'any.required': 'O campo "cadastro" é obrigatório.'
    }),
  alteracao: Joi.string().isoDate().allow(null, '').optional()
    .messages({
      'string.isoDate': 'O campo "alteracao" deve ser uma data válida no formato ISO.',
      'any.required': 'O campo "alteracao" é obrigatório.'
    }),
});

function createUsuarioAdicionarProtectMiddleware() {
  return async function usuarioAdicionarMiddleware(request, response, next) {
    try {
      request.body = await usuarioSchema.validateAsync(request.body);
      next();
    }
    catch(error) {
      next(error);
    }
  }
}

export { createUsuarioAdicionarProtectMiddleware };