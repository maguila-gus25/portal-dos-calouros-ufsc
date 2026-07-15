from fastapi.testclient import TestClient


def test_search_finds_section_by_content(client: TestClient) -> None:
    response = client.get("/api/search", params={"q": "coordenação"})
    assert response.status_code == 200
    results = response.json()
    assert any(r["type"] == "section" for r in results)


def test_search_finds_course_by_title(client: TestClient) -> None:
    response = client.get("/api/search", params={"q": "Computação"})
    assert response.status_code == 200
    results = response.json()
    assert any(
        r["type"] == "course" and r["slug"] == "ciencias-da-computacao"
        for r in results
    )


def test_search_query_too_short_returns_422(client: TestClient) -> None:
    response = client.get("/api/search", params={"q": "a"})
    assert response.status_code == 422


def test_search_missing_query_returns_422(client: TestClient) -> None:
    response = client.get("/api/search")
    assert response.status_code == 422


def test_search_result_has_snippet(client: TestClient) -> None:
    response = client.get("/api/search", params={"q": "CTC"})
    assert response.status_code == 200
    results = response.json()
    assert len(results) > 0
    for r in results:
        assert "snippet" in r
        assert len(r["snippet"]) > 0
