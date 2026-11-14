# Arquitetura

O código usa NestJS com módulos de configuração, provedores, Stremio e Prisma.

Fluxo conceitual: requisição HTTP → controller/serviço de Stremio → registro de provedores → obtenção de dados → resposta no contrato do addon.

A separação entre módulos favorece adaptação a provedores. Falhas externas devem ser tratadas sem expor tokens nos logs.

É um fork; contribuições e alterações devem preservar atribuição e respeitar licenciamento.

## Camada utilitária testável sem serviços externos

- `src/utils/misc.ts`: divide arrays; tamanho deve ser inteiro positivo e seguro, com erro explícito antes do laço.
- `src/utils/regex.ts`: extrai grupos de captura e devolve fallback quando não encontra captura textual.
- `tests/utils.test.mjs`: regressões de funções puras usando o test runner nativo do Node, sem importar módulos que dependam de TMDB, Prisma ou provedores.
- `.github/workflows/quality.yml`: valida contrato unitário e compilação geral por pnpm. O passo de Prisma generate no postinstall não acessa banco de dados.

A separação não certifica o addon Stremio nem a operação de provedores. O projeto é um fork: referências de autoria/licenciamento originais permanecem intactas.
