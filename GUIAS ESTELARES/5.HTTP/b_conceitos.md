# Conceitos

## 1. Conceitos Gerais

CONCEITO:
- Simples:
  - Legível
  - Qualquer pessoa
- Cliente/Servidor
  - Requisição/Resposta
  - Pedir um lanche
- Stateless
  - Não guarda informações (estado)
  - Não existe relação entre conexões
  - Jogar uma moeda
  - Sessões (ex: login e senha) - em casos das mesmas solicitações de recursos
    - Cookies (rastros de informações)
    - Storages (formas de armazenamentos)
- Extensível
  - Atravé do cabeçalho, podemos fazer diversas trocas de informações entre o cliente-servidor, conforme a necessidade
  - Headers: informações para comunicação
  - Body: corpo do pedido ou da resposta


----

## 2. Cliente

***Quem é o cliente?***
- User-Agent:
  - Browser
  - cURL
- Entidade que dá início a comunicação

**Pedidos - Ações de clientes**:
- GET
- POST
- PUT
- DELETE

----

## 3. Servidor
- Se apresenta como uma máquina
- Preparado para ouvir e processar
- Vários servidores em um computador ou vários computadores representado um servidor
- Resposta:
  - headers: Status Code
    - 404 - não encontrado
    - 500 - erro no servidor
  - body

----

## 4. Proxies
- Representantes
- Fica entre o cliente e o servidor (Exs: roteador e modem)
- Ajudam a fazer o transporte de dados
- Diversas funções:
  - Cache (função: devolver info com mais agilidade)
  - Filtro (tipo de antivírus, ou controle parental)
  - Load Balancing (distribuição de carga. Ex: carregar um vídeo)
  - Autenticação (modem)
  - Autorização 
