# Reflux — fork para estudos e contribuições

Fork de estudo de [Nightfruit/reflux](https://github.com/Nightfruit/reflux), addon para Stremio. A autoria do software original e de sua documentação pertence aos mantenedores do projeto de origem; este repositório reúne a cópia e referências de desenvolvimento.

## Código e tecnologias

- Node.js e TypeScript, NestJS.
- Prisma e integrações de catálogo/metadados.
- Consulte o `package.json` e `.env.example` para as configurações realmente exigidas.

## Desenvolvimento local

```bash
pnpm install
pnpm build
pnpm start:dev
```

As chamadas a provedores externos podem deixar de funcionar sem configuração ou por mudanças nos serviços de terceiros. Use somente conteúdos para os quais possua autorização.

## Documentação complementar

- [Requisitos e limites](docs/REQUISITOS.md)
- [Arquitetura](docs/ARQUITETURA.md)
- [UML](docs/UML.puml)
- [Plano de testes](docs/PLANO_TESTES.md)
- [Guia para assistentes](AGENTS.md)

## Projeto de origem e atribuição

![REFLUX](https://raw.githubusercontent.com/Nightfruit/reflux/main/public/images/banner.png)

### Informações fornecidas pelo projeto original

O Reflux é um addon para Stremio que permite aos usuários acessar um enorme catálogo de filmes e séries, oferecendo uma maneira rápida e fácil de assistir onde quer que você esteja!

## Instalação

Para instalar o addon Reflux, basta adicionar o seguinte link aos seus addons do Stremio:

`https://rx.postclub.me/manifest.json`

## Funcionalidades

* Acesso a um enorme conteúdo da **Rede Canais**, **Vizer (em breve)** e vários sites!
* Aproveite uma forma simples e prática de assistir suas séries e filmes favoritos.

## Contribuindo

Contribuições para melhorar o Reflux são muito bem-vindas! Se quiser ajudar, fique à vontade para abrir uma issue ou pull request. Você também pode ajudar reportando bugs, sugerindo novos recursos ou enviando feedback.

## Relato de Problemas

Se encontrar algum bug, problema com conteúdo ou tiver outras preocupações, sinta-se à vontade para entrar em contato. Você pode falar diretamente comigo pelo Instagram em [@mrsev7en](https://www.instagram.com/mrsev7en).

Agradeço pelo apoio e qualquer feedback para ajudar a melhorar o addon!

## Licença

Este projeto está licenciado sob a Licença MIT — veja o arquivo [LICENSE](https://github.com/Nightfruit/reflux/blob/main/LICENSE) para mais detalhes.

## Verificações deste fork — utilitários e CI

O fork mantém o código original de provedores e suas atribuições. Esta revisão corrige somente utilitários internos: `chunk()` rejeita tamanho zero, negativo ou não inteiro (que antes poderia causar loop infinito); `match()` devolve o `fallback` quando o regex não tem grupo de captura, respeitando `string | null`.

Há um workflow de GitHub Actions que usa Node.js 22, restaura dependências por `pnpm install --frozen-lockfile`, executa `pnpm test` com regressões puras e compila com `pnpm build`. São testes **offline**, sem TMDB, banco, scraping ou streams. O sucesso do pipeline não certifica funcionamento dos provedores externos.

`pnpm-lock.yaml` é versionado deliberadamente. Os serviços externos e a autenticação de provedores continuam fora dessa revisão.
