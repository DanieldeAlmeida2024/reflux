# Reflux — fork de estudo (NestJS / TypeScript)

Este é um **fork de [Nightfruit/reflux](https://github.com/Nightfruit/reflux)**. A autoria e a licença MIT do Reflux original pertencem aos respectivos mantenedores. O código de provedores foi preservado com atribuição; as alterações deste fork se concentram em correções de utilitários, validação de parâmetros HTTP, documentação e testes reproduzíveis.

**Não sou responsável por serviços, URLs de instalação ou perfis sociais associados ao projeto original.** Este repositório não publica um serviço de streaming nem comprova disponibilidade de fontes de terceiros.

## O que este fork alterou e como comprovar

| Área | Alteração neste fork | Evidência |
| --- | --- | --- |
| Utilitário `chunk` | Rejeita tamanho zero, negativo, não inteiro ou não finito; evita loop inválido | `tests/utils.test.mjs` |
| Utilitário `match` | Aplica fallback quando expressão regular não possui grupo capturado | `tests/utils.test.mjs` |
| `/stream` e `/meta` | ID inteiro positivo e seguro; temporada/episódio opcionais não negativos | `src/utils/request-params.ts`, `tests/request-params.test.mjs` |
| Paginação `skip` | Rejeita `NaN`, `Infinity`, números negativos, frações e valores inseguros | `tests/request-params.test.mjs` |
| Engenharia | CI com `pnpm install --frozen-lockfile`, testes puros e build NestJS | [GitHub Actions](https://github.com/DanieldeAlmeida2024/reflux/actions/workflows/quality.yml) |

Os testes de contratos são **offline** e não provam que Stremio, TMDB, provedores, banco ou scraping funcionem remotamente.

## Tecnologias e requisitos

Node.js 22, pnpm 10.21.0, TypeScript, NestJS, Prisma. Consulte `.env.example` e `package.json` para parâmetros locais. Não use segredos reais em ambiente de demonstração compartilhado.

```bash
pnpm install --frozen-lockfile
pnpm test
pnpm build
pnpm start:dev
```

A inicialização completa pode requerer configuração de banco e integrações externas. O build não comprova disponibilidade dessas dependências.

## Arquitetura e decisões

- Controllers NestJS recebem solicitações do Stremio e validam parâmetros antes de delegar aos serviços.
- Serviços e repositórios tratam catálogo/metadados e dependências do projeto original.
- Validadores puros em `src/utils/` isolam contratos que podem ser testados sem rede.

Especificação [do fork](docs/projeto/ESPECIFICACAO.md), [arquitetura](docs/ARQUITETURA.md), [UML](docs/uml/README.md), [plano de testes atual](docs/PLANO_TESTES.md) e [histórico técnico](docs/controle/VERSIONAMENTO.md).

## Limites, autoria e licenciamento

O conteúdo e as integrações de terceiros dependem das condições de uso e direitos de distribuição próprios. A presença de uma integração no código não concede autorização para consumir ou redistribuir conteúdo. O software original tem licença MIT; mantenha avisos de copyright e a origem [Nightfruit/reflux](https://github.com/Nightfruit/reflux) ao redistribuir modificações.

Para sugestões sobre **as alterações deste fork**, abra uma issue neste repositório. Contatos pessoais dos autores originais não são suporte deste fork.
