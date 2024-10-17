# Teste-Bets-Puppeteer

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus ligula magna, eget lacinia nisl ultricies nec. Quisque sed est sagittis, aliquet sapien nec, ultricies elit. Morbi cursus accumsan elit, eget placerat nisi semper a. Donec ullamcorper leo id lorem faucibus vulputate. In feugiat ultrices nunc, quis aliquet nulla viverra eget. Donec viverra tincidunt lobortis. In mattis ipsum diam, ac accumsan tortor ornare eget. Donec tincidunt tristique ex, varius lacinia risus finibus sit amet. Vestibulum magna nibh, viverra eget nulla mattis, scelerisque euismod elit.

## Estrutura do Projeto
```
um dia quem sabe eu não faça ne?
```

## Pré-requisitos

- Node.js
- Docker

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

### Modo Interativo do Docker

Para usar o modo interativo do Docker:
```sh
docker exec -it id-container /bin/bash
# Se não tiver o bash, use sh
```

## Testando o Puppeteer:
```sh
curl -X POST http://localhost:3000/api/open-bet -H "Content-Type: application/json" -d '{"url": "https://www.betinha.com"}'
```

### Build do Docker

Para buildar o Docker:
```sh
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose build
```

### Subir a Imagem

Para subir a imagem:
```sh
docker compose up
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm start`: Inicia o servidor em modo de produção.

## Estrutura de Pastas

- `app/`: Contém a lógica principal do aplicativo.
- `components/`: Contém os componentes React.
- `hooks/`: Contém hooks personalizados.
- `lib/`: Contém bibliotecas e utilitários.
- `public/`: Contém arquivos públicos estáticos.

