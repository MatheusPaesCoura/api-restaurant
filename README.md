   ### 📌 Nome do Projeto  
API de Restaurante  

### 📖 Descrição  
Esta é uma API REST para gerenciar pedidos em um restaurante. Permite visualizar mesas disponíveis, abrir uma mesa para clientes, gerenciar produtos do menu e calcular o total consumido ao fechar a mesa.  

### 🚀 Tecnologias Utilizadas  
- Node.js  
- Express.js  
- Knex  
- SQLite  
- Insomnia (para testes de API)  
- Beekeeper Studio (para visualizar o banco de dados)  

### 📂 Estrutura do Banco de Dados  
A API utiliza SQLite e contém as seguintes tabelas:  
- **tables**: Armazena as mesas do restaurante.  
- **tables_sessions**: Controla sessões abertas de cada mesa.  
- **products**: Contém os produtos disponíveis no cardápio.  
- **orders**: Registra os pedidos feitos por mesa.  

### ⚙️ Funcionalidades  
✅ Criar e visualizar mesas disponíveis  
✅ Abrir uma mesa para um cliente  
✅ Gerenciar produtos (Criar, Atualizar, Deletar)  
✅ Fechar uma mesa e calcular o total consumido  

### 🛠️ Como Rodar o Projeto  
1. Clone o repositório:  
   ```bash
   git clone https://github.com/seuusuario/repositorio.git
   ```
2. Acesse a pasta do projeto:  
   ```bash
   cd nome-do-projeto
   ```
3. Instale as dependências:  
   ```bash
   npm install
   ```
4. Execute o servidor:  
   ```bash
   npm run dev
   ```
5. Teste a API:  
   - Configure o **Beekeeper Studio** para visualizar o banco de dados SQLite  
   - Utilize o **Insomnia** para testar as rotas da API  
   - No projeto, há um arquivo chamado **request-insomnia**, que contém todas as rotas. Basta importá-lo no **Insomnia** e utilizar.  

### 📌 Endpoints Principais  
| Método | Rota                 | Descrição |
|--------|----------------------|-----------|
| GET    | `/tables`            | Lista todas as mesas disponíveis |
| POST   | `/table-session`     | Abre uma mesa para clientes |
| GET    | `/table-session`     | Lista todas as mesas (abertas e fechadas) |
| PATCH  | `/table-session`     | Fecha uma mesa |
| PUT    | `/orders`            | Cria um novo pedido |
| GET    | `/orders/table-session/:id`  | Filtra os pedidos por mesa |
| GET    | `/orders/table-session/2/total`  | Registra um pedido |
| GET    | `/products`          | Lista os produtos |
| POST   | `/products`          | Cria um novo produto |
| PUT    | `/products/:id`      | Atualiza um produto |
| DELETE | `/products/:id`      | Deleta um produto |

### 📜 Licença  
Este projeto está sob a licença MIT.
