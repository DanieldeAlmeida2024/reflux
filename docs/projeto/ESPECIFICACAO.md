# Reflux — estudo de arquitetura de addon Stremio em fork

Versão **1.0.0**, 11/11/2026; código base `e6f04b8b8032d3d842a19482dfaf6d73e9f11a2b`; critérios não executados neste PR.

## Inventário, contratos e operação
Este é um **fork de Nightfruit/reflux**, cujo crédito e licenciamento devem permanecer visíveis; documentação e contribuições locais não atribuem a criação original ao proprietário desta cópia. O projeto usa TypeScript/NestJS, Prisma PostgreSQL e módulos para Stremio, TMDB, NLP, gêneros, registro de provedores e catálogos.

O endpoint `GET /manifest.json`, implementado em `src/routes/manifest/manifest.controller.ts`, monta ID/versão/nome a partir de `package.json`, imagem em `APP_URL`, recursos `catalog`, `meta`, `stream`, tipos movie/series, prefixo `reflux` e catálogos dinâmicos via `ManifestService`. Outras rotas `src/routes/catalog`, `meta`, `stream` possuem controllers separados.

`ProvidersRegistryService` possui mapa estático de provedores, `register(provider)` e métodos base `fetchMovies/fetchSeries/indexMovies/indexSeries/refreshMovieUrl/refreshSeriesUrl/getSeriesEpisodes`, cujas implementações de classe-base retornam listas vazias ou strings vazias. Provedores concretos assumem esse contrato; não documentar a classe-base como conector funcional.

O schema Prisma usa PostgreSQL com modelos `Movie`, `Series`, `MovieGenre`, `SeriesGenre`, `MovieStream`, `SeriesStream`; streams possuem provider, audio, accessUrl/refreshUrl, expiresAt e, em séries, season/episode. Enums `Provider` = REDECANAIS/VIZER; `Audio` = UNKNOWN/DUBBED/SUBTITLED/ORIGINAL; `Quality` = UNKNOWN/SD/HD/FHD/UHD. Relações de stream usam Cascade para deleção da mídia.

**Riscos:** dependência de fontes externas, legalidade e permissões sobre conteúdo, segurança de URLs/segredos e expiração de streams; nunca tratar este laboratório como licença de distribuição. Um campo `stremioAddonsConfig.signature` aparece embutido no manifesto; verificar proveniência/necessidade e não tratar texto de assinatura como chave privada. Preservar licença upstream.

## Verificações locais
```bash
pnpm install --frozen-lockfile && pnpm build
```

Links cruzados: [diagramas](../uml/README.md) · [riscos e testes](../testes/PLANO_DE_TESTES.md) · [versões](../controle/VERSIONAMENTO.md).
