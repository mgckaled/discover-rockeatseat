# A Cascata (cascading)

A Escolha do Browser de qual regra aplicar, caso haja muitas regras para o mesmo elementos

* Seu estito é lido de cima para baixo, logo a cascata mais abaixo será tratada como prioridade

É levado em consideração 3 fatores

1. Origem do Estilo
2. Especificidade
3. Importância

### 1. Origem do Estilos

inline > tag style > tag links

### 2. Especificidade

É um calculo matemático, onde cada tipo de seletor e origem do estilo,
possuem valores a serem considerados

- 0.Universal selector, combinators e negation pseudo-class (:not())
- 1. Element type selector e pseudo-elements (::before, ::after)
- 10. Classes e attribute selectors ([type="radio"])
- 100. ID selector
- 1000. Inline

### A regra !important

* cuidado, evite seu uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata