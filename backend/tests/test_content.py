from fastapi.testclient import TestClient

from app.content.loader import SLUG_MAP


def test_list_sections_returns_all_slug_map_entries(client: TestClient) -> None:
    response = client.get("/api/sections")
    assert response.status_code == 200
    data = response.json()
    slugs = {section["slug"] for section in data}
    assert slugs == set(SLUG_MAP.keys())
    for section in data:
        assert "title" in section
        assert "description" in section
        assert "icon" in section


def test_get_existing_section_returns_content(client: TestClient) -> None:
    response = client.get("/api/sections/coordenacoes")
    assert response.status_code == 200
    data = response.json()
    assert data["slug"] == "coordenacoes"
    assert data["title"] == "Coordenações"
    # Conteúdo real de docs/coordenacoes.md — testamos por termos verificáveis.
    assert "CTC" in data["content_md"]
    assert data["content_html"].startswith("<")


def test_get_missing_section_returns_404(client: TestClient) -> None:
    response = client.get("/api/sections/curso-inexistente")
    assert response.status_code == 404


def test_dev_docs_not_served_as_sections(client: TestClient) -> None:
    """Fonte única: arquitetura.md, product-backlog.md etc. não aparecem."""
    for dev_slug in ("arquitetura", "product-backlog", "identidade-visual"):
        response = client.get(f"/api/sections/{dev_slug}")
        assert response.status_code == 404
