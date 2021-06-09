# Atribuindo mais estilos as fontes

### `font-variant`


### `font-stretch`


### `letter-spacing`
- Espaço entre caracteres

```css
p {
  letter-spacing:0.5em;
}
```

### `word-spacing`
- Espaço entre palavras

```css
p {
  word-spacing: 0.25em;
}
```

### `line-height`
- Espaços entre linhas
- Pode ser com unidades ou sem unidades de medida
- Comnuns: 1.5 ou 2.

```css
p {
  line-height: 1.6;
}
```

### `text-transform`
- Transformação de texto
- `uppercase, capitalize, lowercase, none`

```css
p {
  text-transform: uppercase;
}
```
### `text-decoration`
- aparência decorativa de um texto
- __line__: `underline | overline | line-through`
- __style__: `wavy | dotted | double | dashed | solid`
- __color__: `<color>` values

```css
p {
  text-decoration: underline, solid, red; 
}
```


### `text-align`
- Alinhamento de um texto
- ``

```css
p {
  text-align: justify;
}
```


### `text-shadow`
- sombra aplicada a um texto
- permite multiplos valores
- __ordem__: `offset-x | offset-y | blur-radius | color` 

```css
p {
  text-shadow: 1px 1px 1px red, 2px 2px 2px green;
}
```


### Shorthand
É possível agrupar várias propriedades dentro da property `font:`
- `-style | -variant | -weight | -stretch | -size | line-height | -family `
```css
/* size e line-heigt são separados por uma barra '/' */
#especial p {
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```
