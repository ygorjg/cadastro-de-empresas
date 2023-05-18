# Cadastro de Empresas

A aplicação consiste em uma lista de empresas, podendo obter mais informações, editar ou excluir cada empresa, além de poder adicionar novas empresas a lista.

O back-end foi construído utilizando TypeScript e Node (Express), TypeORM e banco de dados PostgreSQL.

O front-end foi construído com React JS e foi usado Chakra UI para a estilização.

#

## Configurações para rodar o projeto

#

## - Back-End:

1 - No diretório back-end, utilizar o comando "yarn install" para instalar as dependências do projeto.

2 - Criar um banco de dados (PostgreSQL) e adicionar as informações necessárias para a conexão com o banco em um arquivo .env - O exemplo está em .env.example.

3 - Com o banco de dados criado e o arquivo .env configurado corretamente, utilizar o comando "yarn migration:generate" que irá gerar as migrações com o TypeORM. Feito isso, utilizar o comando "yarn migration:run" que irá persistir as migrações e criar a tabela no banco de dados.

4 - Iniciar o servidor com o comando "yarn dev". Se nenhuma alteração no código for feita, a API deve rodar na URL: http://localhost:4000/

## - Front-End:

1 - No diretório front-end, utilizar o comando "yarn install" para instalar as dependências do projeto.

2 - Utilizar o comando "yarn start" para iniciar a aplicação.
