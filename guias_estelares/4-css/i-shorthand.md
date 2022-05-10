# ShortHand

* Junção de propriedades
* resumido
* legível

```css

h3 {

	/* background properties */
	background-color: coral;
	background-image: -moz-element();
	background-repeat: no-repeat;
	background-position: left top;

	/* background shorthand */
	background: #000 url(images/bg.gif) no-repeat left top;
}

h4 {

	/* background properties */
	font-style: italic;
	font-weight: bold;
	font-size: .8em;
	line-height: 1.2;
	font-family: Arial, sans-serif;
	

	/* background shorthand */
	font: italic bold .8em/1.2 Arial, sans-serif;
}

```
## Detalhes

* não irá considerar propriedades anteriores
* valores não especificados irão assumir o valor padrão
* geralmente, a ordem descrita não importa, mas, se houver muitas
propriedades com valores semelhantes, poderemos encontrar problemas

## Propriedades que aceitam shorthand

 background, font (en-US), margin, border (en-US), border-top (en-US), border-right (en-US), border-bottom (en-US), border-left, border-width (en-US), border-color (en-US), border-style (en-US), transition, animation, transform, padding, list-style (en-US), border-radius.

 **https://developer.mozilla.org/pt-BR/docs/Web/CSS/Shorthand_properties**