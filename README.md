# Trybesmith 🛠️

É um projeto que desenvolvi um CRUD (Create, Read, Update e Delete) de itens medievais, no formato de uma API, utilizando Typescript.


<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary>

Uma loja de itens medievais, como aquelas espadas feitas sob encomenda para uma pessoa específica, no formato de uma _API_, utilizando _Typescript_ e _Sequelize_.

Desenvolvi as camadas de _Service_ e _Controllers_ da aplicação em seu código, utilizando _JWT_ para autenticar algumas rotas, além de testes para garantir o correto funcionamento delas. A aplicação tem _endpoints_ que darão suporte a operações de criação, leitura e atualização de informações.

---

⚠️ **Dicas Importantes** ⚠️:

- Não há Front-end neste projeto. Não se preocupe com a visualização das coisas, apenas com as funcionalidades e qualidade do código;

- A API foi desenvolvida dentro da pasta `./src`.
- Os testes foram desenvolvidos na raiz da aplicação, em um diretório chamado `tests`.

</details>

# Instalando o projeto

1. Clone o repositório

- `git clone git@github.com:tryber/Mandytrajano90/Trybesmith.git`.
- Entre na pasta do repositório que você acabou de clonar:

  - `cd Trybesmith`

  2. Instale as dependências 

- `npm install`

<details>
  <summary><strong>🐳 Especificações sobre uso do Docker</strong></summary>

> Rode os serviços `app-trybesmith` e `db` com o comando `docker-compose up -d --build`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
- Esses serviços irão inicializar um container chamado `trybesmith_api` e outro chamado `trybesmith_db`.
- A partir daqui você pode rodar o container `trybesmith_api` via CLI ou abri-lo no VS Code.

  > Rode o comando `npm run db:reset` (este comando vai funcionar somente após a criação do tipos solicitados no requisito) para criar o banco de dados, as tabelas que serão utilizadas e populá-las.

  > Use o comando `docker exec -it trybesmith_api bash` para entrar no container.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Para visualizar o logs do nodemon em seu terminal use os seguintes comandos:

  > `docker ps`: para visualizar os containers ativos e pegar o `CONTAINER ID`;

  > `docker logs -f <id_do_container>`: para visualizar os logs do seu servidor com nodemon;

</details>

<details>
  <summary><strong>🧪 Execução de testes localmente</strong></summary>

Para rodar os testes localmente utilize o seguinte comando:

```bash
npm run test:local
```

Para os verificar os testes de cobertura utilize o seguinte comando:

```bash
npm run test:coverage
```
 </details>
 
<details>
  <summary><strong>🎲 Diagrama Entidade Relacionamento do projeto</strong></summary>
  O banco de dados do projeto segue a estrutura abaixo: <br/>

<img width="539" alt="diagram-der" src="https://github.com/user-attachments/assets/4de386e3-09e8-4a46-9b35-b88cba24f690">

  
<br/>  
<strong>Correção:</strong>
Na tabela `products`, ocorreu um equivoco na denominação da coluna `amount`. A nomenclatura correta é `price`. 

</details>

<details>
  <summary><strong>🪑 Tabelas</strong></summary>

O banco terá duas tabelas: pessoas usuárias (`users`) e produtos (`products`).

Toda a parte de criação do banco de dados, das tabelas, seeders e _models_ do sequelize já está pronta. Você pode verificar toda a configuração e associações nos arquivos dentro do diretório `src/database`.

</details>

## 👁️ Dê uma olhada no código


https://github.com/user-attachments/assets/409de876-2218-41fb-a5f4-7913f6783afe




<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
