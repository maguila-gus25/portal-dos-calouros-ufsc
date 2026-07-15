from fastapi import APIRouter, HTTPException

from app.content import loader
from app.models.schemas import Section, SectionSummary

router = APIRouter()


@router.get("/sections", response_model=list[SectionSummary])
def list_sections() -> list[SectionSummary]:
    return loader.list_sections()


@router.get("/sections/{slug}", response_model=Section)
def get_section(slug: str) -> Section:
    section = loader.get_section(slug)
    if not section:
        raise HTTPException(status_code=404, detail=f"Seção '{slug}' não encontrada")
    return section
