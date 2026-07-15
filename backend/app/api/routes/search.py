from fastapi import APIRouter, Query

from app.content import loader
from app.models.schemas import SearchResult

router = APIRouter()


@router.get("/search", response_model=list[SearchResult])
def search(
    q: str = Query(
        ...,
        min_length=2,
        description="Termo de busca (mínimo 2 caracteres)",
    ),
) -> list[SearchResult]:
    return loader.search(q)
