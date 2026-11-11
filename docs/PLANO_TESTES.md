# Plano de testes

1. Instalar dependências usando o gerenciador do lockfile.
2. Executar `pnpm build`; não presumir sucesso sem log.
3. Verificar formato do manifesto em ambiente autorizado.
4. Exercitar falhas dos provedores externos com simulação.
5. Validar estrutura documental com `python -m unittest discover -s tests -p test_documentacao.py -v`.

O teste Python é apenas estrutural e não comprova o funcionamento do addon.
