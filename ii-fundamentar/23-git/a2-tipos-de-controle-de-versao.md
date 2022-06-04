# Tipos de Controle de Versão

## Sistemas Locais

- Copiar os arquivos de outro diretório
- Muito comum e muito simples
- Incrivelmente propensa a erros Amadora
- Fácil de de sobreescrever arquivos, caso haja feito cópia errada
- Considerado amador e antiprodutivo!

> Para superar os possíveis erros, existe o RCS - *Revision Control System*

- Ferramenta popular(antigamente) para controle de versão
- Mantem conjunto de alterações, ou seja, as diferenças entre os arquivos.
- Formato especial no disco
- Recriar como qualquer arquivo se parecia em qualquer ponto no tempo, adicionande-se todas as alterações do arquivo.

>E se você precisar colaborar com desenvolvedores em outros sistemas?

## Sistemas Centralizados

Exemplo: CSV, Subversion, Perforce

- Um único servidor que mantém todos os arquivos de controle de versão
- Vários clietes usam arquivos a partir desse lugar central

>Por muitos anos, este têm sido o padrão para controle de versão

### Vantagens sobre VCSs locais

- Controle sobre atividades dos colaboradores do projeto
- Os administradores têm controle e gestão refinado sobre quem pode fazer o quê (permissões)
- Mais fácil de administrar quando comparado com banco de dados locais em cada cliente

### Desvantagens

- Se esse servidor der problema por uma hora, durante essa hora ninguém pode colaborar ou salvar as alterações de versões
- Se o disco rígido do banco central for corrompido, perde-se absolutamente tudo
- Sistemas VCSs locais estão sujeitos as mesmas desvantagens
  
>Sempre que você tem toda a história de um mesmo projeto em um único banco, há sempre o risco de se perder tudo!

## Sistemas Distribuídos

Exemplo: Git, Mercurial, Bazzar, Darcs

- Duplicar (clonar) localmente o repositório completo
- Se qualquer servidor falhar, e esses sistemas estiverem colaborando por meio dele, qualquer um dos sistemas poderá ser copiado de volta ao servidor
- Cada clone é de fato um backup completo de todos os dados
- Clientes usam o estado mais recente do arquivo
  