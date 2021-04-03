# At-rules

* Está relacionado ao comportamento do CSS
* começa com o sinal de `@` seguido do identificador do valor

## Exemplos comuns


- @import  <!-- incluir um CSS externo -->

- @media  <!-- regras condicionais para dispositivos -->

- @font-face  <!-- fontes externas -->

- @key-frames <!-- Animation -->

```css
@import "https://local.com/styles.css";

@media (min-width: 500px){
  /* regras aqui */
}

@font-face {
  /* regras aqui */
}

@key-frames nameOfAnimation {
  /* regras aqui */
}

```