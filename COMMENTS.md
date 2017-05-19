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

# 19/05 - Implementado autenticação, Login/Logout com sessão.

- Registro de usuários com implementação pendente, porém, a entidade já está configurada para cadastrar usuários no banco.
- Estudando a mudança do framework css bulma para bootstrap -> (que já está sendo usado na tela de login)

*  Alguns templates html prontos foram pegos da internet e utilizados para agilizar o dev.
