import { loginControllerPort } from "../../../../Ports/Auth/loginControllerPort.js";
/**
 * 
 * @param {import("express").Request} request 
 * @returns {loginInput}
 */
function loginRequestAdapter(request) {
  const { email, senha } = request.body;
  return { email, senha };
}

async function loginController(request, response, next) {
  try {
    const loginInput = loginRequestAdapter(request);
    const loginOutput = await loginControllerPort(loginInput);
    response.status(200)
      .json(loginOutput);
  } catch (error) {
    next(error);
  }
}

export { loginController }