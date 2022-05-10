# Como funciona a Web?

> *você quer entrar em um site, então abre seu navegar e...*


- **Você digita a URL: https//rocketseat.com.br**
  - HTTP: 
    - Hypertext Transfer Protocol (conjunto regras)
    - Função: trocar mensagem entre computaores
    - Mensagem -> a mensagem é quebrada em diversos pedaçõs / pacotes (Chunks)
  - URL: 
    - Uniform Resource Locator:
      - Localizador e identificador de um recurso
      - Recurso: nesse caso, o site 

---

- **É iniciada uma linha de comunicação, através do protocolo TCP, entre o seu computador(cliente) até o computador que tem a página(servidor)**
  - Cliente:
    - O computador, dispositivo,ou o aplicativo que faz o pedido
    - Browser, por exemplo
  - Servidor: Computador configurado para receber os pedidos e enviar as respostas aos pedidos
  - TCP:
    - Transmission Control Protocol (conjunto de regras)
    - Função: garantir que os pacotes cheguem corretamente ao destino

---

- **O endereço é convertido em um IP(76.76.21.21) através do DNS. Nesse caso o IP é do servidor que tem a página https//rocketseat.com.br** (Todos os dispositivos conectados a Internet têm IP)
  - IP:
    - Internet Protocol (conjunto de regras)
    - Função: endereçamento de computadores
  - DNS:
    - Domain Name Servers (dicionário)
    - Função: Converter um Domínio em um endereço de de IP

---

- **Seu pedido está percorrendo diversos proxies**
  - Proxy:
    - Qualquer dispositivo no meio do caminho
    - Modem, Roteador, outros dispositivos . Normalmente são muitos
    - Função: Encaminhamento dos pacotes

---

- **Seu pedido chega até o servidor**

---

- **O servidor analisa seu pedido e te dá uma resposta, podendo ser positiva ou negativa(endereço não encontrado)**

---

- **O caminho de volta é semelhante ao de ida, passando pela linha de comunicação que foi criada(mesmo caminho)**

---

- **O Browser recebe os pedaços e monta a tela do site**

---

- **Esse processo acontece muitas vezes, pois para cada recurso(html,css, javascript, imagem...) é feita uma nova conexão**

