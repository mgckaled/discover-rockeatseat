# Trabalhando com Arquivos e Diretórios no Terminal

## Informando o diretório anual

`pwd` = mostrar o diretório atual

- `cd ~` = ir para a pasta _starter_, origem da pasta do usuário

## Navegando pelas pastas

`cd` = change directory (mudar de diretório)

- `cd .` = diretório atual
- `cd ..` = voltar diretórios
- `cd ../../` = voltar 2 diretórios ou mais
- `cd -` = voltar de onde veio
- Usar `''` ou `""` ou `\` para tratar nomes com espaços

## Listando arquivos e pastas

`ls` = lista arquivos e pastas

- `-l` = mais informações
- `-a` = all (exibe todos os arquivos)
- `-h` = human (mostra as unidade de tamanho de arquivo)
- `-R` = recursive (exibe arquivos separados por pasta)
- `-S` = ordenar pelo tamanho

## Obtendo informações dos aquivos

`file [name]` = exibe tipo de arquivo e outras informações

`stat [name]` = exibe nome, modificações, tamanho e outras informações

## Criando diretórios

`mkdir` = make directories (criar diretórios)

- `mkdir -p [../..] [../..] ...` = criar multiplos diretórios com subdiretórios

## Criando arquivos

`touch` = alterar registro de data e hora de arquivos ou pastas. Também cria um ou mais arquivos

## Copiando arquivos e pastas

`cp` = copy

- opção `-r` = copiar diretórios (r de recursivo)
- ex: `copy -r <1> <2> <...> <dir>`

## Mover ou renomear arquivos e pastas

`mv` = move

- Pode mover multiplas pastas e arquivos. O último argumento da sequencia será o objeto da mudança

## Remover arquivos e pastas

`rm` = remove (para sempre)

- opção `-r` recursive = remove diretórios
- opção `-f` force = força remoção

## Wildcards

`*` = representa 1 ou mais caracteres

`?` = representa 1 caractere

## Encontrando arquivos ou diretórios

`find` = buscar

- `find <path> arg[expression]`
  - opção `-type <d|f>` = selecionar arquivo ou pasta, `d` ou `f`
  - opção `-name` = digitar nome do arquivo
  - Usa-se wildcards `*|?` para abranger busca

## Exibindo conteúdo de arquivos

`less <name>` = visualizar o arquivo. `w` para cima, `l` para baixo e `q` para sair

`cat <name>` = printar o conteúdo do arquivo

> arquivos binários não exibem linguagem humana
