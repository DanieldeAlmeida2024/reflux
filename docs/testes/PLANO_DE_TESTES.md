# Plano de testes — Reflux — estudo de arquitetura de addon Stremio em fork

Versão **1.0.0**, 11/11/2026; código base `e6f04b8b8032d3d842a19482dfaf6d73e9f11a2b`; critérios não executados neste PR.

| ID | Cenário | Aceitação | Situação |
|---|---|---|---|
| RFX-01 | GET /manifest.json | Recursos e tipos compatíveis com SDK Stremio | Pendente de execução |
| RFX-02 | APP_URL configurada | logo aponta ao host correto | Pendente de execução |
| RFX-03 | APP_URL ausente | Erro controlado ao montar logo | Pendente de execução |
| RFX-04 | Registry.register(REDECANAIS) | Instância recuperável pelo enum | Pendente de execução |
| RFX-05 | Provedor não cadastrado | Resposta vazia/erro esperado sem crash | Pendente de execução |
| RFX-06 | Persistir Movie/Series | Relações de gêneros e streams válidas no PostgreSQL | Pendente de execução |
| RFX-07 | Stream expirado | Sem entregar URL fora da validade | Pendente de execução |
| RFX-08 | Cascade ao remover Movie | Remoção de MovieStream associada | Pendente de execução |
| RFX-09 | Catálogo/metadados sem rede | Erro degradado e sem segredos | Pendente de execução |
| RFX-10 | Licença e atribuição | README mantém crédito upstream | Pendente de execução |

A matriz separa observações do código de hipóteses de aceite. Execute primeiro testes isolados com fixtures sintéticas, depois integração em ambiente efêmero e, por último, E2E autorizado. Registrar SHA, versões de serviços, logs sanitizados, data e estado PASS/FAIL/BLOCKED. Não usar um teste estrutural Python como evidência de uma integração de rede.
