from fastapi import APIRouter, HTTPException

from app.content import loader
from app.models.schemas import Course, CourseSummary

router = APIRouter()


@router.get("/courses", response_model=list[CourseSummary])
def list_courses() -> list[CourseSummary]:
    return loader.list_courses_summary()


@router.get("/courses/{slug}", response_model=Course)
def get_course(slug: str) -> Course:
    course = loader.get_course(slug)
    if not course:
        raise HTTPException(status_code=404, detail=f"Curso '{slug}' não encontrado")
    return course
