# Elementos não semânticos para uso Genérico

## `<div><div>`
- Usa-se quando não é possível encontrar um elemento de **bloco** semântico.

## `<span><span>`
- Usa-se quando não é possível encontrar um elemento de **texto** semântico.
- *Atenção para o uso frequente!*

> Em ambas as tags, use atributos globais como `id` e `class` para entregar maior significado

```html
<h1>Título <span class="destaque">destacado</span></h1>


<div class="card">
	<h2>Carrinho de compras</h2>
</div>
