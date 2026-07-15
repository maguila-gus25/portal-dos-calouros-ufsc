from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import content, courses, search
from app.core.config import settings

app = FastAPI(
    title="Portal dos Calouros UFSC — API",
    description=(
        "API que serve o conteúdo institucional do Portal dos Calouros UFSC. "
        "Projeto independente feito por estudantes. Não é um site oficial da UFSC."
    ),
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


@app.get("/api/health", tags=["health"])
def health() -> dict:
    return {"status": "ok", "version": app.version, "env": settings.env}


app.include_router(content.router, prefix="/api", tags=["content"])
app.include_router(courses.router, prefix="/api", tags=["courses"])
app.include_router(search.router, prefix="/api", tags=["search"])
