from fastapi.testclient import TestClient


def test_list_courses_includes_all_13_ctc(client: TestClient) -> None:
    response = client.get("/api/courses")
    assert response.status_code == 200
    courses = response.json()
    slugs = {c["slug"] for c in courses}
    expected = {
        "ciencias-da-computacao",
        "sistemas-de-informacao",
        "engenharia-de-controle-e-automacao",
        "engenharia-civil",
        "engenharia-eletrica",
        "engenharia-eletronica",
        "engenharia-mecanica",
        "engenharia-de-producao",
        "engenharia-de-materiais",
        "engenharia-quimica",
        "engenharia-de-alimentos",
        "engenharia-sanitaria-e-ambiental",
        "arquitetura-e-urbanismo",
    }
    assert expected.issubset(slugs)


def test_get_course_returns_frontmatter_and_content(client: TestClient) -> None:
    response = client.get("/api/courses/ciencias-da-computacao")
    assert response.status_code == 200
    course = response.json()
    assert course["slug"] == "ciencias-da-computacao"
    assert course["title"] == "Ciências da Computação"
    assert course["centro"] == "CTC"
    assert course["metadata"]["coordenacao"]["email"] == "cco@contato.ufsc.br"
    assert course["content_html"].startswith("<")


def test_get_missing_course_returns_404(client: TestClient) -> None:
    response = client.get("/api/courses/curso-que-nao-existe")
    assert response.status_code == 404
