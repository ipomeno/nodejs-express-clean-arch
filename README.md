# nodejs-express-clean-arch
Estudando arquitetura limpa usando padrões javascript em vez forçar contratos de interface typescript. Apenas para ver como isso poderia ser aplicado de na prática.

# Ainda usando classes
Apesar de alguns lugares usarem funções, ainda estou usando classes para o repositório. O formato atual, passando a conexão do banco de dados para o repositório é ruim porque não terei como gerenciar a transação entre repositórios. Uma possibilidade de resolver isso seria removendo o banco do repositório e passando ele para o caso de uso controlar quando usar transações nos repositórios. Para isso, é necessário passar a conexão do banco de dados ou a transação (knex) para os métodos dos repositórios sempre que necessário.

Acredito que terei de desmembrar os repositórios em métodos de um namespace em vez de usar classes.
