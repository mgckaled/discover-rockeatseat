# Trabalhando com fontes

Tipografia transmite mensagem
- negrito
- tamanho
- estilo

## Basic Font Properties
- `font-family`
- `font-weight`
- `font-style`
- `font-size`


### __Font Family__
- tipo de fonte de um elemento
- lista de fontes e ordem de prioridade
- inclui _falback_ font

```css
p {
  font-family: 'Times New Roman', Times, serif;
}
```
- fonte serifada: que têm dobras nas extremidades das letras

### __Font Weight__

- O estilo da fonte
- _normal bold ligther bolder_
- de 100 a 900
```css
span {
  font-weight: bold;
  font-weight: 300;
}
```
[https://www.w3.org/TR/css-fonts/](https://www.w3.org/TR/css-fonts/)


### __Font Style__

- O estilo da fonte

```css
span {
  font-style: italic;
  font-weight: oblique;
  font-weight: normal;
}
```


### __Font Size__

O tamanho da fonte
```css
p {
  font-size: 18px; -> fixa
  font-size: 1.2rem; -> root-element
  font-size: 1.5em; -> parent-element
}
```

---


## Web-Fonts

- fontes do sistema x fontes da web
- como usar fontes para web?
  - `@font-face`
  - `@import`
  - `<link>`



### Referências
- [https://www.w3.org/TR/css-fonts/](https://www.w3.org/TR/css-fonts/)
- [https://css-tricks.com/](https://css-tricks.com/)
