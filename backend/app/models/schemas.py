from typing import Any, Optional

from pydantic import BaseModel, Field


class SectionSummary(BaseModel):
    slug: str
    title: str
    description: str
    icon: str


class Section(SectionSummary):
    content_md: str = Field(..., description="Conteúdo Markdown bruto")
    content_html: str = Field(..., description="Conteúdo renderizado como HTML")
    metadata: dict[str, Any] = Field(default_factory=dict)


class CourseSummary(BaseModel):
    slug: str
    title: str
    centro: Optional[str] = None
    grau: Optional[str] = None
    turno: Optional[str] = None


class Course(CourseSummary):
    metadata: dict[str, Any] = Field(default_factory=dict)
    content_md: str
    content_html: str


class SearchResult(BaseModel):
    type: str = Field(..., description="'section' ou 'course'")
    slug: str
    title: str
    snippet: str
