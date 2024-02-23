import { loginControllerPort } from "../../../../Ports/Usuario/loginControllerPort.js";

function loginRequestAdapter(request) {
  const { email, senha } = request.body;
  return { email, senha };
}

export async function loginController(request, response, next) {
  try {
    const loginInput = loginRequestAdapter(request);
    const loginOutput = await loginControllerPort(loginInput);
    response.status(200)
      .json(loginOutput);
  } catch (error) {
    response.status(500)
      .json({ message: error.message, trace: error.stack });
  }

}