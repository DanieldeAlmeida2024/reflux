# Versionamento técnico — fork Reflux

## RFX-UTIL 1.1.0 · 14/11/2026

- Validação de tamanho em `chunk`: rejeita zero, negativos, fracionários e valores não finitos antes de iterar.
- `match` retorna fallback quando um regex casa sem grupo capturado, preservando `string | null`.
- Testes de regressão Node 22, sem provedores externos.
- GitHub Actions instala dependências pelo `pnpm-lock.yaml`, testa utilitários e compila NestJS.
- Mantido o crédito do projeto original Nightfruit/reflux e a licença MIT.

**Limitações:** build e testes puros não garantem conexão com TMDB, banco, Stremio ou fontes externas. Nenhuma API real ou publicação foi alterada nesta revisão.

## RFX 1.2.0 — contratos HTTP numéricos (14/11/2026)

- Introduz `src/utils/request-params.ts` para validar ID, temporada, episódio e paginação sem conversões implícitas perigosas.
- Aplica validações aos controladores `StreamController`, `MetaController` e `CatalogController`, com erro 400 para parâmetros numéricos inválidos.
- Regressões RFX-U05–U07 preservam os defaults opcionais e rejeitam `NaN`, `Infinity`, valores negativos/frações e inteiros fora do intervalo seguro.
- Nenhuma migração, busca remota, credencial ou configuração de produção é modificada.

## Reconciliação documental de 14/11/2026

Especificações e UML históricas migradas para a `main` atual com aviso de escopo, sem substituir testes, arquitetura ou código posteriores. O CI vigente continua sendo a fonte de evidência funcional.

## RFX-DOC 1.3.0 · 14/11/2026 — autoria e comprovação

- README remodelado para identificar o upstream `Nightfruit/reflux`, distinguir claramente contribuições próprias e origem de código/metadados.
- Removidos do README de fork links herdados de instalação, banner promocional e contato social do autor upstream, que poderiam atribuir serviços de terceiros ao mantenedor do fork. O `package.json` e a licença originais foram preservados.
- As evidências listadas referem-se exclusivamente aos testes puros e build de CI; não há alegação de funcionamento/instalação de streams de terceiros.
