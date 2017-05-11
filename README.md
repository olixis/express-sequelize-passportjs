## Seleção Web
**Maqhin Soluções Tecnológicas: coding challenge**

====================
#### Considerações Gerais
Será indicado um repositório privado no GitLab para este projeto e você deve fornecer o nome da sua conta no GitLab (caso não tenha, o registro é gratuito) para o email indicado pela Maqhin para ser incluído no projeto, i.e., todos os seus commits devem estar registrados aqui, pois queremos ver como você trabalha.

Esse problema tem 2 constraints:

a) Eu preciso conseguir rodar seu código em um Mac OSX ou no Ubuntu;

b) Eu executarei seu código com os seguintes comandos ou algo similar (dê-me as instruções):

    git clone seu-fork
    cd seu-fork
    ./configure
    make

Esses comandos tem que ser o suficiente para configurar meu Mac OSX ou Ubuntu e rodar seu programa.

Pode considerar que eu tenho instalado no meu sistema Java, Pyhton, Ruby ou Go. Qualquer outra dependência que eu precisar você tem que prover.

O problema que você tem que resolver é o problema de cadastro de Ocorrência do Vigilante em versão WEB com HTML/CSS/Javascript + o backend usando a linguagem de programação da sua preferência.

O repositório contém um arquivo com tipos de ocorrência em json e algumas imagens necessárias para implementação da parte Web: com o desenho da tela.

**Registre tudo**: testes que forem executados, ideias que gostaria de implementar se tivesse tempo (explique como você as resolveria, se houvesse tempo), decisões que forem tomadas e seus porquês, arquiteturas que forem testadas e os motivos de terem sido modificadas ou abandonadas. Crie um arquivo COMMENTS.md ou HISTORY.md no repositório para registrar essas reflexões e decisões.

=====================
#### O Problema

O Vigilante é um sistema desenvolvido pela Maqhin, onde usuários podem registrar "Ocorrências Urbanas". O cadastro de Ocorrência é apresentada em uma interface acessível pela WEB onde os usuários cadastram suas Ocorrências. Uma vez realizado o cadastro da Ocorrência, o usuário recebe uma tela com o comprovante do sucesso e um mapa com ocorrências cadastradas até aquele momento.

============================
#### Regras de negócio

1. Os usuário podem cadastrar quantas ocorrências desejar, entretanto, a Maqhin não gostaria de receber cadastros oriundos de uma máquina e sim cadastros realizados por pessoas manualmente.
2. A interface do produto é importante. Porém, você não tem muito tempo, então faça o melhor possível no tempo que tem.
3. A Maqhin gostaria de consultar numa URL, o total de geral ocorrências cadastradas e o total de cadastros de ocorrências por categoria.


===============================================
#### O que será avaliado na sua solução?

1. Sua solução será submetida a uma bateria de testes para garantir que sua solução atende aos requisitos solicitados.
2. Seu código será observado por uma equipe de desenvolvedores que avaliarão a simplicidade e clareza da solução, a arquitetura, documentação, estilo de código, testes unitários, testes funcionais, nível de automação dos testes, o design da interface e a implementação do código.
3. A automação da infra-estrutura também é importante. Imagine que você precisará fazer deploy do seu código em múltiplos servidores, então não é interessante ter que ficar entrando máquina por máquina para fazer o deploy da aplicação.


===============================================
#### Diferenciais
1. O Vigilante tem abrangência Nacional, sua solução será submetida a uma bateria de testes de performance para garantir que atende aos requisitos de performance e escalabilidade.
2. Criação de testes automatizados e sua cobertura será considerado um diferencial importante.

=============
#### Dicas

- Use ferramentas e bibliotecas open source, mas documente as decisões e os porquês;
- Automatize o máximo possível;
- Em caso de dúvidas, pergunte.
