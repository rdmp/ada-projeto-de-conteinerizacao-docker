# My Anime List with Docker

## Projeto

- Rayane Martins Assis
- Rafael Delfino de Magalhães Pena
- Renata Martins Assis

## Descrição

Este projeto é uma aplicação web para visualizar uma lista de animes. O back-end é construído com Node.js e TypeScript, utilizando Prisma como ORM para interagir com um banco de dados MySQL. O front-end é desenvolvido com React, exibindo dados consumidos da API do back-end.

## Tecnologias Utilizadas

- Back-end: Node.js, Express, Prisma, TypeScript
- Front-end: React, CSS
- Banco de Dados: MySQL
- Infraestrutura: Docker

## Como Executar

## Execução com Docker Compose

### Pré-requisitos

- Docker e Docker Compose instalados

### Instruções

1. **Clonar o Repositório**: Clone o repositório para sua máquina local usando e acesse o diretório /app:
   
   ```sh
   git clone https://github.com/rdmp/ada-projeto-de-conteinerizacao-docker.git
   ```

   ```sh
   cd /app
   ```

2. **Subir os Containers do Docker**: Navegue até a pasta raiz do projeto e execute:

   **obs**: Como temos mais de um arquivo docker-compose, é necessário especificar qual arquivo será utilizado, para isso, utilize o comando abaixo:

   ```sh
   docker compose -f docker-compose.yaml up
   ```

   Este comando constrói e inicia os containers para o back-end, front-end e banco de dados.

3. **Acessar a Aplicação**: 
   - Front-end: Acesse `http://localhost` no seu navegador.
   - Back-end API: Disponível em `http://localhost:3000`.

4. **Parar os Containers**: Para parar os containers, execute:

   **obs**: Como temos mais de um arquivo docker-compose, é necessário especificar qual arquivo será utilizado, para isso, utilize o comando abaixo:

   ```sh
   docker compose -f docker-compose.yaml down
   ```

## Deploy da Aplicação no Swarm

O Docker Swarm é utilizado para gerenciar um cluster de contêineres Docker e permite a execução de aplicações em múltiplas máquinas. Para executar a aplicação Anime List utilizando o Docker Swarm, siga os passos abaixo:

### Instruções

1. **Inicialize o Docker Swarm (se ainda não estiver inicializado):**

   ```sh
   docker swarm init
   ```

   Se você estiver em uma rede com múltiplos endereços IP, pode ser necessário especificar um endereço IP com `--advertise-addr`.

2. **Crie as imagens Docker (se ainda não tiver feito):**
   ```sh
   docker build -t [seu_usuario_docker]/anime_list_back:latest ./back
   docker build -t [seu_usuario_docker]/anime_list_front:latest ./front
   ```

3. **Faça o push das imagens para um registry (como o Docker Hub):**

   ```sh
   docker push [seu_usuario_docker]/anime_list_back:latest
   docker push [seu_usuario_docker]/anime_list_front:latest
   ```

4. **Atualize o `docker-compose.yml` com as imagens construídas:**

   Modifique o arquivo para usar as imagens do Docker Hub em vez de construir a partir do Dockerfile.

5. **Faça o deploy da stack no Swarm:**

   ```sh
   docker stack deploy -c docker-compose.yml [nome_da_sua_stack]
   ```

   Substitua `[nome_da_sua_stack]` por um nome de sua escolha para a stack.

6. **Verifique o status dos serviços:**

   ```sh
   docker stack services [nome_da_sua_stack]
   ```

   Isso mostrará os serviços em execução e o número de réplicas.

7. **Remover a stack e liberar as portas da aplicação**:

   ```sh
    docker stack rm [nome_da_sua_stack]
   ```

### Acessando a Aplicação

- A aplicação frontend estará acessível em `http://localhost`.
- A API backend estará acessível em `http://localhost:3000`.

### Gerenciamento e Escalabilidade

- **Para escalar um serviço:**
  ```sh
  docker service scale [nome_da_sua_stack]_[serviço]=NUM_REPLICAS
  ```

- **Para remover a stack:**
  ```sh
  docker stack rm [nome_da_sua_stack]
  ```

- **Para sair do Swarm:**
  ```sh
  docker swarm leave --force
  ```

## Estrutura do Projeto

### Back-end

O back-end é uma API REST construída com Express e TypeScript. Utiliza Prisma para gerenciar o acesso ao banco de dados MySQL. As principais funcionalidades incluem:

- Listar animes

As migrations e seeds do banco de dados são gerenciadas através de scripts Prisma e executadas automaticamente ao iniciar o container Docker.

### Front-end

O front-end é desenvolvido com React e estilizado com CSS. Consiste em uma interface de usuário que consome dados da API do back-end e exibe uma lista de animes. Cada anime é apresentado em um card contendo informações como título, imagem, sinopse e outros detalhes.

O layout da página inclui um fundo estilizado com temática de anime e títulos com efeitos de animação para criar uma experiência visual atraente.


## Contribuições

Para contribuir com o projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção.
3. Faça suas alterações.
4. Envie um pull request.


---
