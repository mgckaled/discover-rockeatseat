# Fundamentos do ReactJS

## Introdução

O que é ReactJS?
Uma biblioteca JavaScript que tem o objetivo de criação de interfaces.

Porque ReactJS é uma biblioteca e não um framework?
Porque ele não tem uma opinião forte, ele não tem uma estrutura de pastas e regras que os frameworks em si tem. Ele te dá mais liberdade para criar as interfaces da maneira que preferir.

## Executando projeto

Existem duas maneiras de navegar até a pasta do seu projeto, pelo próprio terminal, utilizando o comando cd ou arrastando a pasta do projeto para dentro do VS Code.

Em seguida, será necessário baixar as dependências necessárias para a execução do projeto. Podemos utilizar o npm quanto o yarn como gerenciador de pacotes.

Certifique-se que está na pasta do projeto e execute o comando desejado:

- `yarn install`
- `npm install`

Após a instalação das dependências, execute o comando abaixo:

Utilize o mesmo gerenciador do comando anterior

- `npm run dev`
- `yarn dev`

Após executar o comando acima, abra o seu navegador e acesse o endereço:

## Estrutura React

Quando criamos um projeto ReactJS utilizando o Vite, essa será a visualização da nossa estrutura inicial de pastas do nosso projeto.

O arquivo `index.html` é o principal arquivo do nosso projeto, ele importará o arquivo `main.jsx` e fará com que o conteúdo seja exibido em nosso navegador.

O arquivo `main.jsx` terá a função de renderizar o componente `<App />` e inserir através da _DOM_ do nosso **HTML** pelo `id="root"`.

## JSX

É uma extensão do JavaScript bem semelhante ao **HTML**. Basicamente ele é uma sintaxe que o _ReactJS_ utiliza para que possamos criar as nossas interfaces de forma declarativa.

O JSX utiliza funções dentro dos arquivos e o retorno dessas funções retornam tags **HTML**.

## Estrutura pastas e arquivos

📁 `node_modules` - A pasta onde ficam todas dependências e módulos do nosso projeto.

📁 `src` - Pasta principal onde ficará todos os nossos arquivos.

`App.css` - Arquivo de estilização do `App.jsx`

`App.jsx` - Página inicial do nosso projeto que será exibida no navegador.

`favicon.svg` - Ícone de favorito da página.

`index.css` - Arquivo de estilização global logo.

**svg** - Arquivo de imagem da logo do ReactJS.

`main.jsx` - Arquivo responsável por inicializar nossa aplicação.

`index.html` - Arquivo _HTML_ onde será injetado todo o JavaScript que for compilado para ser exibido no navegador.

`.gitignore` - Esse arquivo descreve quais arquivos e pasta não devem subir para o Github.

`package.json` - Arquivo responsável pelas dependências do nosso projeto. Contém informações do pacote, como: scripts, dependências, número de versão e etc...

`package-lock.json` - Parecido com o `package.json`, esse arquivo descreve as características das dependências do projeto como versão, integridade dos links e muito mais.

`vite.config.js` - Arquivo de configuração do Vite.

## Fragment

Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos (Fragment) permitem agrupar uma lista de filhos sem adicionar nós extras ao **DOM**.

Exemplo:

```jsx
function Home() {
	return (
		<>
			<h1>Lista de Presença.</h1>
			<input type="text" placeholder="Digite o nome..." />
			<button type="button">Adicionar</button>
		</>
	)
}

export default Home
```

`<> </>` -> fragment

No exemplo acima, poderia ser utilizado uma `<div>` para agrupar esses três elementos.

## Importando arquivos no CSS

A importação de um arquivo global deverá ser realizada no arquivo main.jsx

`global.css`

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```

`main.jsx`

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'

// Arquivo de estilização global
import './styles/global.css'

ReactDOM.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>,
	document.getElementById('root')
)
```

## Separando CSS

Nesta aula criamos uma pasta chamada Home, contendo os arquivos `index.jsx` e `styles.css`

Dessa forma, a estrutura fica bem mais organizada e separamos as responsabilidades de cada arquivo.

## Componentes

Componente nada mais do que um bloco de código reutilizável e independente.

Recomenda-se a criação de uma pasta dentro de `/src` chamada `Components`

**Atenção**: para se importar um componente é necessário colocar o nome da função separa por `{}`

## Propriedades

As propriedades dentro de um componente faz com que você possa passar valores diferentes para cada um deles.

Facilita o acesso de propriedade dentro de cada um dos componentes

```jsx
export function Card(props) {
	return (
		<div className="card">
			<strong>{props.name}</strong>
			<small>{props.time}</small>
		</div>
	)
}
```

## Estado

O **Hook** `useState` permite ter variáveis em componentes funcionais. Você passa o estado inicial para esta função e ele retorna uma variável com o valor atual do estado (não necessariamente o estado inicial).

## Imutabilidade

É o princípio que o Estado do React respeitam. O estado

O conteúdo diz que o conteúdo não deverá ser alterado, mas sim substituido

## Key Prop

Em uma listagem, normalmente utilizamos o `map()` do JavaScript para trazer todos os dados dessa lista. No React, precisamos passar uma propriedade _key_ para que esse dado nunca se repita e evitar que erros desse tipo aconteçam. Além disso, a aplicação ficará mais performática

## Hooks

São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra _use_ por convenção. Exemplos de hooks: `useState`, `useEffect`.

## useEffect

O `useEffect` é executado automaticamente sempre que o componente é renderizado.

A estrutura do `useEffect` é da seguinte forma:

```jsx
useEffect(() => {
	// Dentro do objeto devemos colocar todas. ações que serão executadas.
	// Os arrays definem quais os estados que o useEffect depende.
}, [])
```
