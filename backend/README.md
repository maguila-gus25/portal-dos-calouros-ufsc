# Backend — Portal dos Calouros UFSC

API FastAPI que serve o conteúdo institucional em `docs/*.md` como JSON.

## Rodar localmente

```bash
python -m venv .venv
# Windows PowerShell:
.venv\Scripts\Activate.ps1
# macOS/Linux:
# source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

Docs interativas: <http://localhost:8000/docs>

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/health` | Healthcheck |
| GET | `/api/sections` | Lista seções disponíveis |
| GET | `/api/sections/{slug}` | Conteúdo de uma seção (Markdown + HTML) |
| GET | `/api/courses` | Lista cursos do CTC |
| GET | `/api/courses/{slug}` | Ficha de um curso |
| GET | `/api/search?q=` | Busca no conteúdo |

## Fonte única

O conteúdo institucional vive em `../docs/*.md` (fonte única).
O backend só serve os slugs mapeados em `app/content/loader.py::SLUG_MAP`.
Arquivos de dev (`arquitetura.md`, `product-backlog.md`,
`identidade-visual.md`, `README.md`, `_modelo-curso.md`) **não** aparecem
na API por design.
