from collections.abc import Iterator

import pytest
from fastapi.testclient import TestClient

from app.main import app


@pytest.fixture(scope="session")
def client() -> Iterator[TestClient]:
    """Cliente HTTP síncrono usado por todos os testes."""
    with TestClient(app) as c:
        yield c
