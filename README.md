# Imagetech prova prática

Repositório para disponibilização da resolução da prova tecnica
## Requisitos 

- [Node](https://nodejs.org)
- [PostgresSQL](https://www.postgresql.org/download/)
## Instalação

Para executar este projeto em seu ambiente local, siga os passos abaixo:

1. Certifique-se de ter o Node.js e Postgres instalado no seu sistema. 

2. Clone este repositório para o seu computador:

   ```bash
   https://github.com/davidgamaserrate1/imagetech_prova_pratica.git

3. Acesse o diretório do projeto:

   ```bash
   cd imagetech_prova_pratica
   ```

4. Instale as dependências utilizando o npm:

   ```bash
   npm install
   ```
5. Crie um banco de dados e adicione as credenciais dele no .env do back-end

6. Após ter o banco criado e configurado no .env, será necessário realizar as migrações da tabelas, acesse o diretório do back-end 
   ```bash
   cd back-end
   ```
7. Execute o seguinte comando
      ```bash
   npx prisma migrate dev 

   ```

## Executando o Projeto

Certifique-se de estar na raiz do projeto. Você pode executar o projeto localmente com o seguinte comando:

```bash
npm start
```
Isso iniciará o aplicativo em modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

## Portas das aplicações

| app        | port |
| ---------- | ---- |
| front-end  | 3000 |
| back-end   | 4000 |

## Observações
- Ao realizar o cadastro, temos uma opção "Cadastro de administrador", afim de simularmos um super usuario. Esta opção foi inserida no cadastro afim de evitar inserts direto no banco de dados e tornar o processo mais iterativo
- Por questões de tempo, a metodologia utilizada para realizar a proteção de criação dos produtos (via tela) foi atraves de uma informação na tabela de usuário, onde é atribuido ao realizar o cadastro .  Após realizar o login, essa informação é salva no localStorage e as paginas/componentes consomem esta informação. Tenho ciencia de que não é a maneira correta e segura de se trabalhar com esse tipo de informação, porém por questões de tempo, precisei utilizar essa metodologia para separarmos as visualizações de acordo com os papeis de usuário.
