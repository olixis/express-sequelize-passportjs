# 16/05 - Criada a base do backend que consiste em expressJS com bd MySQL.
- ~~Para autenticação será usada a lib PassportJS que está baixada mas não deu tempo de implementar hoje.~~
- Para ORM foi utilizado SequelizeJS.
- ~~Falta fazer a tela de login~~, formulário para inserção de marcador , ~~autenticação~~, dockerizar a aplicação, lógica dos marcadores.
- O maps já carrega (limitado a localhost e localhost:3000), porém, sem nenhuma funcionalidade de marcador implementada ainda.
- Faltam testes automatizados.
- Ainda há código a ser limpo gerado automaticamente pelo express-generator quando o projeto foi criado.

- **Enquanto a aplicação estiver sem docker, ela só rodará caso exista um banco mysql ativo com um schema chamado 'test' com usuário 'root' e senha nula, além de terem sido executadas as migrations.** (Ou você pode alterar a linha: const sequelize = new Sequelize('mysql://'seuusuariodb':'seupassword'@localhost:3306/'seuschema') em app.js para se conectar a um banco, mesmo assim ainda é necessário rodar as migrations (sequelize db:migrate) para criar as tabelas no banco)


### Caso a última condição da lista esteja satisfeita, para rodar a aplicação rode os comandos:
    git clone https://olixis@gitlab.com/estagio_maqhin/desafio-caiofontes.git
    cd desafio-caiofontes
    npm install
    npm install -g sequelize-cli
    sequelize db:migrate
    npm start

# 19/05 - Implementado autenticação, login/logout com sessão.

- Registro de usuários com implementação pendente, porém, a entidade já está configurada para cadastrar usuários no banco.
- Estudando a mudança do framework css bulma para bootstrap -> (que já está sendo usado na tela de login)
- Correção na entidade de usuário.

*  Alguns templates html prontos foram pegos da internet (página de login) e utilizados para agilizar o dev.

# 22/05 - Implementado registro de usuário, esboço de tela de mapa, marcadores

- Registro de usuários implementado, pendente testes automatizados e front end para erros de cadastro e/ou validação de usuário
- Melhoria na tela de mapa , esboço do formulário de ocorrência
- Marcadores no mapa ao clicar, falta implementar a lógica para obter informação do ponto clicado para salvar no banco junto com informação do formulário.


