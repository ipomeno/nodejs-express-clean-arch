export default async function (usuarioRepository, filter) {
  return await usuarioRepository.contar(filter);
}