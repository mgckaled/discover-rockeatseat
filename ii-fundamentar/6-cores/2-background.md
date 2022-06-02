# Background

- Define um fundo para nosso elemento
- sua área de atuação é a caixa toda
- por padrão, é transparente

## Exemplos

- Usar cores sólidas
- Usar imagens
- Controlar
  - a posição das imagens,
  - se elas repetem ou não,
  - o tamanho delas na caixa
- usar a cor e imagem juntas
- usar cor gradiente

```css
  /* cor de fundo */
  background-color: aqua;

  /* aplicar um imagem no fundo */
  background-image: url(<link da imagem>);
  /* não repetir imagens, poi  
   o padrão de repetição é no eixo x e y, juntos */
  background-repeat: no-repeat;
  /* repetição no eixo y -> vertical */
  background-repeat: repeat-y;
  /* repetição no eixo x -> horizontal */
  background-repeat: repeat-x;

  /* alterar a posição da imagem */
  background-position: center;

  /* alterar o tamanho da imagem */
  /* cobre todo o espaço da box */
  background-size: contain;
  /* imagem se expande para cobrir todo o box */
  background-size: cover;
  /* % -> <horizontal%> <vertical%>  */
  background-size: 50% 25% ;
  background-size: 50% auto ;
  /* outras dimensões -> rem px */
  background-size: 50px;

  /* a imagem a partir da borda */
  background-origin: border-box;
  /* a imagem se ajuda na área do conteúdo da box */
  background-origin: content-box;
  /* a imagem a partir do padding */
  background-origin: padding-box;

  /* manipula a imagem dentro da flex-box */
  backgroound-clip: padding-box;

  /* A imagem acompanha o scrolling PADRÃO */
  background-attachment: scroll;
  /* fixa a imagem no scrolling */
  background-attachment: fixed;
```

## Shorthand

```css
  background: rgb(10, 10, 50) url(<link>) no repeat center top / 3rem bordex-box content-box;
```

## Gradient

```css
/* gradiente linear */
background: linear-gradient(45deg, red, yellow);
/* gradiente circular */
ackground: radial-gradient(rgba(<color>), rgba(<color>));
```

## Multiplor valores no background

É possível incluir multiplos valores de `background` separando a sequencia de *shorthand* por virgulas
