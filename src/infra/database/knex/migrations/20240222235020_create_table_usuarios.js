/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('perfis', (table) => {
    table.bigint('id').unsigned();
    table.string('nome', 100).notNullable();
    table.datetime('cadastro').notNullable();
    table.datetime('alteracao').notNullable();
    table.primary('id', 'pk_perfis');
  });

  await knex.schema.createTable('usuarios', (table) => {
    table.bigint('id').unsigned();
    table.string('nome', 100).notNullable();
    table.string('cpf', 11).defaultTo(null);
    table.string('telefone', 30).defaultTo(null);
    table.string('email', 200).notNullable();
    table.string('senha', 200).notNullable();
    table.bigint('perfil_id').unsigned().notNullable();
    table.datetime('cadastro').notNullable();
    table.datetime('alteracao').notNullable();
    table.boolean('ativo').defaultTo(true);
    table.primary('id', 'pk_usuarios');

    table.foreign('perfil_id', 'fk_usuarios_perfis')
      .references('perfis.id')
      .onUpdate('cascade')
      .onDelete('restrict');
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists('usuarios');
  await knex.schema.dropTableIfExists('perfis');
}
