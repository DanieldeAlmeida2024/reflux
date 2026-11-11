"""Verificacoes basicas de documentacao, nao testes do addon."""
import unittest
from pathlib import Path

RAIZ=Path(__file__).resolve().parents[1]

class TesteDocumentacao(unittest.TestCase):
    def test_contexto_e_uml(self):
        self.assertTrue((RAIZ / "AGENTS.md").is_file())
        self.assertTrue((RAIZ / "docs/ARQUITETURA.md").is_file())
        uml=(RAIZ / "docs/UML.puml").read_text(encoding="utf-8")
        self.assertIn("@startuml",uml)
        self.assertIn("@enduml",uml)
