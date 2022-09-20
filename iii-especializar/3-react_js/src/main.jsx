import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './pages/Home'

import './styles/global.css'

// Renderização do DOM (árvore de elementos carregados no navegador)
// <Home /> -> componente inserido através do id 'root' no index.html
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
)
