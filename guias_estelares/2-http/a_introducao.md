# Introdução

## 1. O Que é HTTP?

### **Hypertext Transfer Protocol**
*Protocolo de transferência de Hipertexto*

> Hipertexto, em um resumo lúdico, é um texto com poderes!

### Visão Geral
- Permite troca de informações e dados na internet
- Uma troca de mensagens
- HTML, CSS, Scripts, Imagens, Vídeos
- Uma chamada para cada um desses recursos

---

## 2. Visualização e Comunicação

> Como funciona a troca de mensagens entre o >nosso browser (cliente) e o servidor?

> Qual é o tipo e a forma das mensagens trocadas?

### **RECURSO**
- Local que irei enviar o pedido
- Usarei uma URL para acessar o recurso
- Exemplo:
  - https://google.com.br
  - http://localhost:3000/posts?q=oracle


### **MENSAGEM**:
- Pedido (*request*):
  - Methods
    - Definição do tipo de pedido
    - qual ação eu quero fazer no servidor
    - Exemplo:
      - *GET*: pegar um recurso  
      - *POST*: criar ou postar um recurso
  - Headers
  - Body
- Resposta (*response*):
  - *Status Code*:
    - Resposta do servidor sobre o estado do do pedido/solicitação
    - Exemplo:
      - *200*: Pedido atendido com sucesso (OK - acesso á pagina)
      - *301*: Redirecionamento...
      - *404*: Página não encontrada ou que não existe mais
      - *500*: Erro interno de servidor
- *Request/Response* (pontos em comum):
  - Headers
    - Campor informativos
    - Propriedade: Valor
    - Ecemplos
      - Content-Type: application/json (Tipo de Conteúdo)
      - User-Agent: Chrome
      - Request URL: www.google.com
  - Body
    - HTML
    - Conteúdo
    - JSON
- Exemplos:
> **REQUEST MESSAGE** <br>
> GET/index.html HTTP/1.1 <br>
> User-Agent Mozilla/4.0 <br>
> Accept: text/html 

> **REQUEST MESSAGE** <br>
> HTTP/1.1 200 OK <br>
> Server: Express <br>
> Content-Type: text/html <br>
> `<html>...<html>`

---

## 3. Visualizando com cURL
*Git Bash já vem com o cURL instalado*

- Exibir manual do cURL: `curl --manual` 
- Exibir help do cURL: `curl -h` ou `curl --help`
- Exibir resposta padrão do recurso (url) informado: `curl <url>`
- Incluir resposta dos headers: `curl -i <url>`
- Mostrar todos os detalhes da resposta: `curl -v <url>`
