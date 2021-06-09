# Methods

## HTTP Methods
- Define um conjunto de métodos HTTP
- Indica a ação que o cliente deseja operar
- Podem ser chamados de Verbos HTTP
- Cada um possui sua própria semântica ou significado
- Características:
  - Seguro
    - Não altera o status do servidor
    - Somente Leitura (apenas recebe resposta)
    - Cliente não solicita alterações 
    - Não há carga extra para o servidor
    - O servidor é responsável em manter o método seguro 
    - Quais são?
      - GET --> GET/search.html HTTP/1.1
      - HEAD
      - OPTIONS
  - Idempotente
    - Todos os seguros são ou severiam ser idempotentes
    - Status code poderá ser diferente
    - O servidor tem a responsabilidade de retornar dados da mesma maneira
    - Essa especificação não é garantida de que todos os servidores irão aplicar o conceito corretamente
<br>

### Tabela de Idempotência


| HTTP Method | Idempotência | Segurança |
| :---        |    :----:    |   :---:   |
|  GET  | YES | YES  |
|  HEAD  | YES | YES  |
|  PUT | YES | NO |
|  DELETE  | YES | NO |
|  POST  | NO | NO |
|  PATCH  | NO | NO |
<br>

## **Principais Métodos**
### OPTIONS
- Informação sobre disponibilidade da requisição
  - OPTIONS/index.html HTTP/1.1
  - OPTIONS * HTTP/1.1
- Características
  - Seguro: SIM
  - Idempotente: SIM
  - BODY
    - Request: NÃO
    - Response: NÃO
  - Uso em formulários HTML: NÃO
  - Cacheable: NÃO

### GET
- Pegar / buscar um recurso
- Somente recebe dados
- Características
  - Seguro: SIM (não faz nenhuma alteração no servidor)
  - Idempotente: SIM
  - BODY
    - Request: NÃO
    - Response: SIM
  - Uso em formulários HTML: SIM (Ex: campo de busca)
  - Cacheable: SIM (a ideia é guardar info para reuso do GET)

### HEAD
- Semelhante ao GET, porém...
- ... recebemos somente o cabeçalho -> HEAD/posts
- Características
  - Seguro: SIM (nao faz nenhuma alteração no servidor)
  - Idempotente: SIM
  - BODY
    - Request: NÃO
    - Response: NÃO
  - Uso em formulários HTML: NÃO
  - Cacheable: SIM

### POST
- Publicar/Cadastra um Recurso
- Características
  - Seguro: NÃO
  - Idempotente: NÃO (cada vez que roda uma rota, faz retornos diferentes)
  - BODY (pode responder ou não)
    - Request
    - Response
  - Uso em formulários HTML: SIM (Melhor prática em coleta de informações)
  - Poderá ser Cacheable

### PUT
- Criar / Atualizar um Recurso (por completo)
  - PUT/profile HTTP/1.1
  - Diferença entre POST?
  - Criação: Status-code 201
  - Atualização: Status-code 204(OK sem conteúdo) ou 200 (OK)
- Características
  - Seguro: NÃO
  - Idempotente: SIM (a resposta é sempre a mesma)
  - BODY
    - Request: SIM (altera dados no servidor)
    - Response: NÃO
  - Uso em formulários HTML: NÃO
  - Cacheable: NÃO


### PATCH
- Modificação parcial de um recurso
  - PATCH/posts/1 HTTP/1.1
  - Diferença entre PUT?
- Características
  - Seguro: NÃO
  - Idempotente: NÃO
  - BODY
    - Request: SIM (altera dados no servidor)
    - Response: SIM (Recebe resposta de volta)
  - Uso em formulários HTML: NÃO
  - Cacheable: NÃO

### DELETE
- Remover um recurso
  - DELETE/posts HTTP/1.1
  - Status code:
    - 202 - accepted
    - 204 - no content
    - 200 - ok
- Características
  - Seguro: NÃO
  - Idempotente: SIM
  - BODY
    - Request: POSSIBILIDADE
    - Response: POSSIBILIDADE
  - Uso em formulários HTML: NÃO
  - Cacheable: NÃO

