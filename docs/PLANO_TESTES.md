# Plano de testes

1. Instalar dependências usando o gerenciador do lockfile.
2. Executar `pnpm build`; não presumir sucesso sem log.
3. Verificar formato do manifesto em ambiente autorizado.
4. Exercitar falhas dos provedores externos com simulação.
5. Validar estrutura documental com `python -m unittest discover -s tests -p test_documentacao.py -v`.

O teste Python é apenas estrutural e não comprova o funcionamento do addon.

## RFX-UTIL 1.1.0 — testes unitários e build

| Caso | Cenário | Aceitação |
| --- | --- | --- |
| RFX-U01 | Agrupamento de arrays em `chunk` | Ordem preservada, última partição parcial |
| RFX-U02 | Tamanho 0, negativo, `NaN`, infinito ou fracionário | `RangeError`, nunca loop infinito |
| RFX-U03 | Regex com ou sem grupo, sem match e entrada vazia | Captura textual ou fallback `string | null` |
| RFX-U04 | Múltiplas regras de regex | Retorna primeira chave válida ou fallback |
| RFX-C01 | `pnpm install --frozen-lockfile` | Resolve dependências sem alterar versões |
| RFX-C02 | `pnpm build` | Compilação de produção NestJS concluída |

Execução: `pnpm test` e `pnpm build`, com Node 22. O workflow `.github/workflows/quality.yml` executa esses gates sem acessar banco de dados, TMDB, fontes de streaming ou rede de terceiros (além do registry de dependências).

**Pendente**: testes NestJS de módulos, HTTP com banco isolado, contratos Stremio e provedores externos autorizados, segurança e operação em produção.

## RFX 1.2.0 — regressão de entradas dos endpoints públicos

| Caso | Entrada | Resultado |
| --- | --- | --- |
| RFX-U05 | ID `1` ou `9007199254740991` | Inteiro positivo aceito |
| RFX-U05 | ID `0`, negativo, fracionário, infinito, notação exponencial ou acima de MAX_SAFE_INTEGER | Rejeição |
| RFX-U06 | Temporada/episódio ausente | Padrão 0 preservado |
| RFX-U06 | Temporada/episódio explícito não inteiro, negativo, inválido ou infinito | Rejeição |
| RFX-U07 | Paginação ausente | Padrão 0 preservado |
| RFX-U07 | Skip negativo, fracionário, infinito ou fora do intervalo seguro | Rejeição |

`pnpm test` executa `tests/request-params.test.mjs` juntamente com a suíte de utilitários existente. `pnpm build` verifica a integração dos controladores NestJS e as anotações TypeScript. Não há E2E de Stremio ou scraping real nesta revisão.
