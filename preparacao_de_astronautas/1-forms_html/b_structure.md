# Estrutura de Formulário

## `<form>` tag
- Elemento que definirá um formulário
- É um container estilo `<section> | <footer>`, que receberá elementos específicos de um formulário
- O elemento HTML `<form>` representa uma seção de um documento que contém controles interativos que permitem ao usuário submeter informação a um determinado servidor web
- É possível utilizar as pseudo-classes de CSS `:valid` e `:invalid` para aplicar estilo a um elemento `<form>`
- Atributos Básicos
  - _action_: A URI que vai processar a informação enviada via formulário
  - _method_: 
    - __GET__: Corresponde ao método HTTP GET - os dados são acoplados ao URI do atributo `action`. 
    - __POST__: Corresponde ao método HTTP POST - os dados são incluídos no corpo do formulário e enviados ao sevidor
- Recomenda-se não criar um `<form>` dentro de outro, caso contrário poderá haver erros no _html_

- Mais informações: [https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/form](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/form)

```html
<!-- Form que envia uma requisição GET -->
<form action="" method="get">
  <label for="GET-name">Name:</label>
  <input id="GET-name" type="text" name="name">
  <input type="submit" value="Save">
</form>

<!-- Simple form which will send a POST request -->
<form action="" method="post">
  <label for="POST-name">Name:</label>
  <input id="POST-name" type="text" name="name">
  <input type="submit" value="Save">
</form>

<!-- Form with fieldset, legend, and label -->
<form action="" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" name="radio" id="radio"> <label for="radio">Click me</label>
  </fieldset>
</form>
```

---


## `<fieldset>` tag
O elemento HTML `<fieldset>` é usado para agrupar elementos, assim como labels `(<label>)`, dentro de um formulário web.
- agrupamentos de campos
- mesmo propósito
- deixa o html mais semântico e acessível
- __Atributos Especiais__:
  - _disabled_: 
    - desabilita todos os elementos internos
    - não serão enviados ao submeter/enviar o formulário
  - _form_
    - o 'id' de um formulário ao qual esse fieldset pertence
    - não precisa estar dentro do formulário
  - _name_
    - nome do grupo

- `<legend>`
  - nome do agrupamento
  - primeiro elemento dentro da _fieldset_

- mais informações: [https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/fieldset](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/fieldset)

```html
<form id="contato" action="">
	<button>Enviar</button>
</form>

<fieldset form="contato" name="inputs-contact">
	<legend>Contato</legend>
	<label for="">Nome</label>
	<input type="text" />
</fieldset>
```

---


## `<>` tag