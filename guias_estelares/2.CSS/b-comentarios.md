# Comentários

* Não irá afetar seu código
* Ajuda a lembrar blocos de códigos
* Deixa dicas para leitura
* Ajuda outros entenderem
* Nunca esqueça de fechar um comentário aberto

```css

/* Básico */
/* ------------------------------------ */
body {
    font: 1em/150% Helvetica, Arial, sans-serif;
    padding: 1em;
    margin: 0 auto;
    max-width: 33em;
}

@media (min-width: 70em) {
    /* Lets special case the global font size. On large 
    screen or window, ew increase the font size for bertter 
    readability */
    body{
        font-size: 130%;
    }
}

h1 {font-size: 1.5em;}

div, p #id::first-line {
    background-color: red;
    border-radius: 3px;
}

div, p {
    margin: 0;
    padding: 1em;
}

/* div p + p {
    padding-top: 0;
} */

```