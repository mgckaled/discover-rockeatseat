# Estágios dos arquivos no VCS (Git)

```mermaid
graph TD
  subgraph Resumo
    F[[Modified]] --> G[[Staged]]
    G --> H[[Commited]]
  end
  subgraph Fluxo Padrao
    A[git ini] --> C[Work Directory]
    B(git clone)--> C
    C --> |add| D(Stage Area)
    D --> |commit|E(Local Repository)
  end

```

## Working Directory

- Todos os nossos arquivos
- Working Tree

## Stage Area

- Preparação dos nossos arquivos, para serem comitados
- Index
- Stage tree

## Repository (local)

- Banco de dados dos nossos arquivos
- Onde ficarão os pontos da história
- Ou o histórico

teste
