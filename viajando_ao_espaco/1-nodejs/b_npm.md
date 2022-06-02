# NPM - Node Package Manager

## Glossary: Dependencies, Packages, Modules

- [X] Verificar se temos o _npm_ instalado `npm -v` ou `npm --version`.
- [X] Criar nossso próprio pacote: `npm init` ou `npm init -y` para responder sim para todas as perguntas.
- [X] O que é arquivo package.json
- [X] Utilizar módulos de terceiros: `npm install <module>` ou `npm i <module>` ou `npm i <module> -D` para ambiente de desenvolvimento. Uma forma diferente de atualizar os módulos e mover e remover as dependências de forma manual e em seguida digitar no terminal `npm update`
- [X] O que é diretório _node_modules_
- [X] O que é arquivo package-lock.json. Serve para fazer um mapeamento de todas as dependências (módulos) que existem no projeto. Recomenda-se não alterar.
- [X] Criar scripts para rodar com o _npm_. Dentro do arquivo _package-lock.json_, no objeto "scripts", incluir o atributo "start" com o comando `node <nome-arquivo>`. Em seguida, no terminal, execute o comando `npm run start`. É possível criar um comando para cada atributo adicionado dentro de "scripts". Exemplo: para executar o atributo 'dev', basta rodar o comando `npm run dev`.
- [X] Instalar pacotes de maneira global: `npm i <module> -g`. Para verificar o local de instalação dos módulos globais: `npm root -g`.
- [X] Desinstalar pacotes : `npm uninstall <module> -g`. De forma global: `npm uninstall <module> -g`.
- [X] Gerenciando versões de pacotes instalados
  - Sequência numeração versão: __major.minor.patch__:
    - _major_: versão do projeto, podendo quebrar o projeto
    - _minor_: alterações sem quebrar o pacote
    - _patch_: resolução de bug
  - `"<module>": "<version>"`
    - atualiza _minor.patch_ `"<module>": "^1.11.1`"
    - atualiza _patch_ `"<module>": "~1.11.1`"
    - versão fixa `"<module>": "1.11.1`"
    - atualiza todas as versões `"<module>": "*"`
  - Instalar ou alterar para uma versão específica `npm i <module>@<version>`
  - Exibir um resumo das versões dos módulos: `npm outdated`
  - Atualizar todos os módulos: `npm upgrade`
  - Atualizar ou instalar a última versão estável: `npm i <module>@latest`
