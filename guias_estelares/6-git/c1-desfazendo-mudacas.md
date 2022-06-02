# Desfazendo Mudanças no Git

## Desfazendo Modificações

* Restaurar ou descartar alterações no arquivo:  `git restore |nome-arquivo|`

## Trazendo de volta do Staged

* Retirar ou remover arquivo do Stage Area: `git restore --staged |nome-arquivo|`
* Retirar ou remover todos os arquivos do Stage Area: `git restore --staged .`
* Resetar arquivo do último commit `git reset HEAD |nome-arquivo|`
* Resetar todos os arquivos do último commit `git reset HEAD .`

## Corrigir o último commit

* Alterar a mensagem do commit: `git commit --amend -m "|mensagem|"`. Repare que qualquer alteração altera a série (hash) do commit.
* Remomer aquivo do último commit: `git rm |nome-arquivo|`

## Recuperando Arquivos

* `git checkout |7-últimos-números-hash| -- |nome-aquivo|`

## Removendo arquivos não rastreados

* Mostrar lista dos arquivos a serem deletados:`git clean -n`
* Remover arquivos não rastreados: `git clean -f`. A remoção será feita de forma definitiva, logo a Lixeira não conterá o que foi removido.

## Revertendo um commit

* Reverter o repositório para um commit específico `git revert HEAD~|num-seq-commit|` ou `git revert |7-últimos-números-hash|`
* Mostrar resumo do hitórico de commits: `git log --oneline`
