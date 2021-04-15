# Valores e unidade de medida (CSS)

- cada propriedade possui valores `property: value`
- estudo constante a fim de entender as propriedades e seus valores

## Prática

- Como conhecer e estudar os valores na documentação?
  - `<color> <lenght>`
- os termos podem variar: `values` ou `data types`

Exemplo: [https://developer.mozilla.org/pt-BR/docs/Web/CSS/color](https://developer.mozilla.org/pt-BR/docs/Web/CSS/color)

---

## Tipos Numéricos

Há vários tipos de valores de propriedades no CSS. Use os valores listados abaixo para buscar informações no MDN quando precisar.

- `integer` - número inteiro como -10 ou 223
- `number` - número decimal como -2.4, 64, ou 0.233
- `dimension` - é um `number` com uma unidade junto: `90deg(graus), 2s(segundos), 8px(pixels)`
- `percentage` - representa a fração de outro número: `50%, 0.1%`

### Unidades Comuns

- `length` - Representa um valor de distância: `px, em, vw` (mais utilizados)
- `angle` - Representa um ângulo: `deg, rad, turn`
- `time` - Representa um tempo: `s, ms`
- `resolution` - Representa resoluções para dispositivos: `dpi (density pixels)`

---

## Distâncias `<length>`

### **Distâcias absolutas**

São fixas e não alteram seu valor <br>

| Unidade |        Nome        |        Equivalência |
| :------ | :----------------: | ------------------: |
| **cm**  |    Centímetros     |     1cm = 96px/2.54 |
| **in**  | Inches (polegadas) | 1in = 2.54cm = 96px |
| **px**  |       Pixels       | 1px = 1/96th of 1in |

- O mais comun e mais utilizado é o **px**
- Recomenda-se não usar o _cm_

### **Distâncias relativas**

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho de tela

- *viewport*: o tamanho da parte visível da tela do dispositivo. Ela pode ser alterada dependendo do tamanho dispositivo. É um conceito importante para layouts responsivos

| Unidade |                Relativo a                 |
| :------ | :---------------------------------------: |
| **em**  |          Tamanho da font do pai           |
| **rem** | Tamanho da font elemento raiz (root/html) |
| **vh**  |           1% da viewport widgt            |
| **vh**  |           1% da viewpot height            |

- 1º exemplo: `2em` vai transformar o tamanho da fonte em `32px` (duplica o tamanho do elemento pai)

```html
<div>
	<p>parágrafo</p>
</div>
```

```css
div {
	font-size: 18px;
}

p {
	font-size: 2em;
}
```
- 2º exemplo: `1.6em` vai buscar o tamanho da fonte do root (`16px` por padrão do navegador)


```css
p {
	font-size: 1.6em;
}
```

--- 


## Porcentagens
- Em muito casos é tratado da mesma maneira que as distâncias `<lenght>`
- Sempre será relativo a algum valor

1° Exemplo: Nesse caso, é 50% com relação ao que está guardado no browser

```css
html {
  font-size: 50%;
}
```
2° Exemplo: 100% da largura do `<body>`

```css
div {
  background-color: blue;
  width: 100%;
  height: 100px;
}
```

--- 


## Posições `<position>`
Representa um conjunto de coordenadas 2D:
- top, right, bottom, left, center

* Usado para alguns tipos de propriedades
* Não confundir com a propriedade `position`



---


## Funções

Em programação, funções são reconhecidas por causar um reaproveitamento de código.
- `rgb()`
- `hsl()`
- `url()`
- `calc()`


--- 


## Strings e identificadores

- Strings: texto envolto em aspas
- Indetificadores: red, black, gold


