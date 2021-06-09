# Principais Tags HTML5 (Semântica)

### 1. `<header>`

Quando utlizar?

- Quando no início da página, é visto como global
- pode ser usado em outros elementos semânticos como `<article>` e `<section>`
- Não usar um `<header>` dentro de outro e nem dentro de `<footer>`
- Não possui atributos específicos

```html
<body>
	<header>
		<h1>Título</h1>

		<nav></nav>
	</header>

	<section>
		<header>
			<h2>Título da seção</h2>
			<p>Mais um pouco sobre...</p>
		</header>
	</section>
</body>
```

### 2. `<nav>`

Onde e por que utilizar?

- Para representar um seção da nossa página para apontar ou direcionar para outra página ou seção
- Em navegões globais ou secundárias
- não possui atribuitos específicosm, somente os globais

```html
<header>
	<nav>
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</nav>
</header>

<article>
	<section>
		<header>
			<nav></nav>
		</header>
	</section>
</article>
```

### 3. `<main>`

Onde e por que utilizar?

- usar uma vez por página, para exibir o conteudo principal (tópico central)
- não possui atribuitos específicosm, somente os globais

### 4. `<article>`

Onde e por que utilizar?

- Para estruturar blocos de conteúdos relacionados (artigos, blogs, fotografias, etc...)
- não possui atribuitos específicosm, somente os globais

```html
<body>
	<header></header>

	<main>
		<h1>Receitas</h1>
		<p>Essa é uma página de receitas</p>

		<article>
			<h2>Receita 1</h2>
			<p>ingredientes</p>
			<p>forma de fazer</p>
		</article>

		<article>
			<h2>Receita 2</h2>
			<p>ingredientes</p>
			<p>forma de fazer</p>
		</article>
	</main>
</body>
```

### 5. `<aside>`

Conteúdos levemente relacionados ao conteúdo principal

- explicações
- glossários
- links extras
- biografia do autor
- informações de perfil
- **atributos: globais**

### 6. `<footer>`

Geralmente fica no final da página

- informações do autor
- copyright
- contatos
- sitemap
- voltar ao topo, etc..
- **atributos: globais**

```html
<footer>&copy; 2021 - DEV.MGCK</footer>
```

### 7. `<section>`
- Serve para inclur seções 
- antigamente usava-se `<div>` para separar blocos ou seções
- geralmente vem acompanhado com título 
- Apenas atributos globais
