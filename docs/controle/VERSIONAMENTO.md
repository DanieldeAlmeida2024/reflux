# Versionamento técnico — fork Reflux

## RFX-UTIL 1.1.0 · 14/11/2026

- Validação de tamanho em `chunk`: rejeita zero, negativos, fracionários e valores não finitos antes de iterar.
- `match` retorna fallback quando um regex casa sem grupo capturado, preservando `string | null`.
- Testes de regressão Node 22, sem provedores externos.
- GitHub Actions instala dependências pelo `pnpm-lock.yaml`, testa utilitários e compila NestJS.
- Mantido o crédito do projeto original Nightfruit/reflux e a licença MIT.

**Limitações:** build e testes puros não garantem conexão com TMDB, banco, Stremio ou fontes externas. Nenhuma API real ou publicação foi alterada nesta revisão.
