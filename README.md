# TRPG

A proposta do TRpg é criar uma rede social para que jogadores de rpg por meio de textos possam ter um ambiente favorável, bonito e com todas as funcionalidades que eles precisam para que consigam se divertir e conhecer novas pessoas para jogar.

# A estrutura do projeto

Esse será um projeto fullstack, dessa forma, precisamos dar conta de toda a estrutura dele, seja backend e frontend. Por razões de estudos, iniciaremos pelo backend e depois iremos para o front.


## O que precisa ser feito

### Backend

- [x] Estruturar o projeto em NestJS, utilizando Prisma e MongoDB
- [x] Idealizar quais serão as API's necessárias para montar os Schemas no Prisma.
- [x] Desenvolver os Schemas no Prisma.
- [x] Conectar ao banco de dados e criar as collections necessárias
- [x] Criar a API de autenticação de usuário para SignUp da própria plataforma.
- [x] Criar a API de Login do usuário com o cadastro da própria plataforma.
- [ ] Criar a API para Auth com login de terceiros (Google Auth)
- [ ] Criar a API para recuperar senha de usuário, caso ele esqueça a senha
- [ ] Criar a API para a criação/edição/deleção de profiles
- [ ] Criar a API para a criação/edição/deleção de comunidades
- [ ] Criar a API para a criação/edição/deleção de tópicos
- [ ] Criar a API para a criação/edição/deleção de posts
- [ ] Criar testes integrados para cada uma das API's citadas
- [ ] Criar testes e2e para cada uma das API's citadas

### Frontend

- [ ] Verificar quais serão as tecnologias que serão usadas, provavelmente Nuxt com mais alguma coisa.
- [ ] Estudar qual o melhor editor de texto para ser implementado na plataforma.
- [ ] Desenvolver um protótipo, minimamente, decente para as telas e como serão as interações entre elas.
- [ ] Desenvolver a tela de login/cadastro de usuário
- [ ] Realizar a integração dessa tela com o backend
- [ ] Desenvolver a tela de cadastro de profile
- [ ] Desenvolver a tela inicial do projeto trazendo o profile criado
- [ ] Fazer a validação na tela principal, verificando se o usuário tem profile, caso tenha, exibir o profile, caso não, levar para a tela de criação de profile
- [ ] Desenvolver a tela que mostra todos os amigos do usuário
- [ ] Desenvolver a tela que mostra todas as comunidades do usuário
- [ ] Desenvolver a tela de comunidades
- [ ] Desenvolver o fórum onde terão os tópicos na comunidade
- [ ] Desenvolver a tela dos tópicos onde serão exibidos os posts
- [ ] Desenvolver a formatação básica dos posts que aparecerão nos tópicos por default, caso o usuário não escolha uma formatação.
- [ ] Desenvolver testes no frontend para cada uma das telas e garantir que estão funcionando corretamente.

### Infra

- [ ] Estudar o que seria necessário para viabilizar esse projeto online, funcionando, podendo ter usuários utilizando-o.
- [ ] Tentar tornar realidade esse projeto depois de entender o que seria necessário de infra para tal.
