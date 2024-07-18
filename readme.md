# Gerenciamento de Produtos API

Esta aplicação é uma API de gerenciamento de produtos construída com Node.js, Express, Prisma e Zod. A API permite criar, listar, atualizar e remover produtos no banco de dados MySQL.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Endpoints](#endpoints)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma
- Zod
- MySQL

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gerenciamento-produtos-api.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd gerenciamento-produtos-api
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```env
   DATABASE_URL=mysql://usuario:senha@localhost:3306/nome_do_banco
   PORT=3000
   ```

2. Configure o Prisma:
   ```bash
   npx prisma migrate dev --name init
   ```

## Uso

Para iniciar a aplicação, execute o comando:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## Estrutura de Pastas

```bash
├── src
│   ├── config
│   │   └── env.ts
│   ├── controllers
│   │   └── products.ts
│   ├── libs
│   │   └── prismaClient.ts
│   ├── middlewares
│   │   └── errorHandlerMiddleware.ts
│   ├── schemas
│   │   ├── createProductSchema.ts
│   │   ├── productIdSchema.ts
│   │   └── updateProductSchema.ts
│   ├── useCases
│   │   ├── products
│   │   │   ├── createProduct.ts
│   │   │   ├── getProductById.ts
│   │   │   ├── listProducts.ts
│   │   │   ├── removeProduct.ts
│   │   │   └── updateProduct.ts
│   └── index.ts
└── package.json
```

## Endpoints

### Listar Produtos

```
GET /products
```
Retorna uma lista de todos os produtos.

### Criar Produto

```
POST /products
```
Cria um novo produto.
#### Body
```json
{
  "name": "Produto Exemplo",
  "description": "Descrição do produto exemplo",
  "price": "29.99"
}
```

### Obter Produto por ID

```
GET /products/:productId
```
Retorna um produto específico pelo ID.

### Atualizar Produto

```
PUT /products/:productId
```
Atualiza um produto existente.
#### Body
```json
{
  "name": "Produto Atualizado",
  "description": "Descrição atualizada",
  "price": "39.99"
}
```

### Remover Produto

```
DELETE /products/:productId
```
Remove um produto específico pelo ID.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
