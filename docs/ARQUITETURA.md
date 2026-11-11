# Arquitetura

O código usa NestJS com módulos de configuração, provedores, Stremio e Prisma.

Fluxo conceitual: requisição HTTP → controller/serviço de Stremio → registro de provedores → obtenção de dados → resposta no contrato do addon.

A separação entre módulos favorece adaptação a provedores. Falhas externas devem ser tratadas sem expor tokens nos logs.

É um fork; contribuições e alterações devem preservar atribuição e respeitar licenciamento.
