# Cores

Usamos CSS para alterar cores do nosso documentos

## Tipos

* `background-color` (para caixas)
* `color` (para textos)
* `border-color` (para caixas)
* outros...
  
## Valores

podemos definir os valores por

* palavra-chave (blue, transparent)
* hexadecinal(#089, #000000)
* funções rgb, rgba, hsl, hsla

```css
element {
  /* keyword values */
  color: currentcolor;

  /* <named-color> values */
  color: red;
  color: orange;
  color: tan;
  color: rebeccapurple;

  /* <hex-color> values 0-F */
  color: #090;
  color: #009900;
  color: #090a;
  color: #009900aa;

  /* <rgb()> values <0-255> */
  /* RED GREEN BLUE */
  /* a -> alfa */
  color: rgb(34, 12, 64, 0.6); 
  color: rgba(34, 12, 64, 0.6); 
  color: rgb(34 12 64 / 0.6); 
  color: rgba(34 12 64 / 0.3); 
  color: rgb(34 12 64 / 30%); 
  color: rgba(34 12 64 / 60%); 
  
  /* <hsl()> values */
  /* Hue - Saturation - Luminace */
  color: hsl(30, 100%, 50%, 0.6); 
  color: hsla(30, 100%, 50%, 0.6); 
  color: hsl(30 100% 50% / 0.6); 
  color: hsla(30 100% 50% / 0.6);

  /* Global Values */
  /* herdar a cor do elemento anterior */
  color: inherit; 
  /* retornar a cor inicial ou do contexto */
  color: initial;
  /* cor indefinida -> usa cor do contexto */
  color: unset;
}
```

## Referência

[https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value](https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value)
