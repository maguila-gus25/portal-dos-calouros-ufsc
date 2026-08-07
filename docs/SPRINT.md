# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Product Owner. Use `/sprint-plan` para iniciar um novo sprint.

---

## Sprint 29 — Qualidade: cluster CFM (Física, Matemática, Química, Oceanografia, Meteorologia) (v1.23)

**Objetivo:** Completar os campos `_A preencher_` alcançáveis nas 5 fichas de curso do **CFM** (Centro de Ciências Físicas e Matemáticas) e propagar os dados novos para `docs/centros/cfm.md`. Foco em dados verificáveis por nova busca: coordenador(a) de Oceanografia, atléticas e empresas júnior via CAs, Instagram do CALF, salas/atendimento das coordenações e nova tentativa de durações contraditórias. Sprint content-only: nenhum código frontend necessário.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| CFM — qualidade das 5 fichas + propagação para o centro | B-08 (CFM) | Should / M | content-editor | Not Started |

### Critérios de aceite detalhados

**B-08 (CFM) — 5 fichas + centro**

- [ ] `docs/cursos/oceanografia.md`: pesquisar **coordenador(a)** em `ocn.cfm.ufsc.br/coordenacao/`; preencher com fonte verificada ou manter `_A preencher_` com nota explícita se a página não publicar o nome; pesquisar atlética (via CA `@cao.ufsc`) e EJ.
- [ ] `docs/cursos/matematica.md`: pesquisar atlética (via CALMA `@ufsc.calma`), EJ, evento tradicional e duração do Bacharelado; atendimento em `mtm.grad.ufsc.br/horario/`.
- [ ] `docs/cursos/fisica.md`: pesquisar Instagram do CALF (fallback conhecido: Facebook `calf.ufsc`), EJ e nova tentativa de duração (Bacharelado diurno / Licenciatura noturna) em `fisica.grad.ufsc.br/o-curso/` ou CAGR se acessível.
- [ ] `docs/cursos/quimica.md`: pesquisar EJ, evento tradicional (via CALQ `@calq.ufsc`) e nova tentativa de duração em `quimica.ufsc.br/cursos/` (retornou 403 antes — tentar fonte alternativa).
- [ ] `docs/cursos/meteorologia.md`: pesquisar EJ e sala/atendimento em `meteorologia.grad.ufsc.br/`.
- [ ] Para todas as 5 fichas: pesquisar **sala/prédio** e **horário de atendimento** da coordenação, com fonte.
- [ ] `docs/centros/cfm.md`: refletir qualquer dado novo confirmado (coordenação de Oceanografia, Instagram CALF, sites CALMA/CALQ, atléticas de Matemática/Oceanografia, eventos tradicionais) — só os fatos, sem duplicar texto longo.
- [ ] Campos sem fonte verificada permanecem `_A preencher_` **com nota de onde buscar** — nunca inventar.
- [ ] **NÃO** preencher "onde estudar" nem "disciplinas/dicas do 1º semestre" (rabo bloqueado de B-10/B-13).
- [ ] `ultima_verificacao: agosto/2026` e rodapé "Última verificação" atualizados nos 6 arquivos tocados.

### Ordem de execução

```
Wave 1 — paralelo (arquivos disjuntos, exceto centros/cfm.md que o Editor B consolida):
  content-editor A — docs/cursos/{fisica, matematica, quimica}.md
  content-editor B — docs/cursos/{oceanografia, meteorologia}.md
                     docs/centros/cfm.md  (propaga achados dos dois editores)

Wave 2 — após Wave 1:
  tester           — npm run lint + npm run build (≥ 112 páginas, sem páginas novas) + Playwright 8/8
```

> Sprint content-only: sem alterações de frontend → ui-ux-review não necessária.
> Nota de coordenação: para evitar conflito no arquivo compartilhado `docs/centros/cfm.md`, o Editor B é o único a escrevê-lo, consolidando o que o Editor A reportar. Na prática, os dois editores rodam em paralelo e o Scrum Master aplica os achados do Editor A ao `cfm.md` na consolidação, se necessário.

### Fontes prioritárias

- Oceanografia: `ocn.cfm.ufsc.br/coordenacao/` · CA `@cao.ufsc`
- Matemática: `mtm.grad.ufsc.br/` · `mtm.grad.ufsc.br/horario/` · CALMA `@ufsc.calma`
- Física: `fisica.grad.ufsc.br/o-curso/` · CALF (Facebook `calf.ufsc`)
- Química: `quimica.ufsc.br/cursos/` · `quimica.ufsc.br/coordenadoria/` · CALQ `@calq.ufsc`
- Meteorologia: `meteorologia.grad.ufsc.br/`
- Empresas júnior: `empresasjuniores.paginas.ufsc.br/lista-de-empresas-juniores-da-ufsc/`
- Durações (se acessível): `cagr.sistemas.ufsc.br/`

### Definition of Done

- [ ] `npm run lint` passa
- [ ] `npm run build` passa (≥ 112 páginas SSG — sem páginas novas)
- [ ] Playwright 8/8 sem regressões
- [ ] Coordenador(a) de Oceanografia pesquisado (preenchido ou `_A preencher_` com nota)
- [ ] Atléticas de Matemática e Oceanografia e EJs das 5 fichas pesquisadas
- [ ] Instagram do CALF pesquisado; resultado documentado
- [ ] `docs/centros/cfm.md` atualizado com dados novos confirmados
- [ ] `docs/product-backlog.md` atualizado com o novo status do B-08

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| "Onde estudar" / dicas do 1º semestre (CFM) | Rabo bloqueado de B-10/B-13 — dependem de submissões reais |
| CFH coordenadores | Sistematicamente `~` — padrão estabelecido no Sprint 21, sem novo sinal |
| CCE / CCS (gaps residuais) | Menor densidade de pistas de fonte — radar para sprint futuro |
| Durações se persistir 403/contradição | Manter `_A preencher_` com nota — não travar o sprint |
| B-37/B-50/E13 (banco + auth) | Horizonte v2.0 — requer co-planejamento com o mantenedor |

---

## Sprint 28 — Qualidade: CED + CCB + CDS (v1.22)

**Objetivo:** Completar os dados restantes nas fichas dos cursos dos centros **CED**, **CCB** e **CDS** — os três centros com fichas criadas nos Sprints 22–23 que ainda têm campos `_A preencher_` atingíveis por pesquisa web. Foco: corrigir frontmatter de Pedagogia (`duracao: ~` → `"9 semestres"`), pesquisar coordenadores das 4 fichas CED, buscar coordenador(a) de Ciências Biológicas via URL disponível, e confirmar se CAEF (CA de Educação Física) tem Instagram ativo. Sprint content-only: nenhum código frontend necessário.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| CED — qualidade das 4 fichas (Pedagogia, Ed. do Campo, Arquivadora, Biblioteconomia) | B-08 (CED) | Should / M | content-editor | Done |
| CCB + CDS — qualidade (Biológicas, Educação Física) + atualizar centros | B-08 (CCB/CDS) | Should / P | content-editor | Done |

### Critérios de aceite detalhados

**CED — 4 fichas (Story A)**

- [ ] `docs/cursos/pedagogia.md`: corrigir frontmatter `duracao: ~` → `duracao: "9 semestres"` (dado já confirmado no corpo do texto via currículo vigente 2009.1; zero pesquisa necessária).
- [ ] `docs/cursos/educacao-do-campo.md`, `arquivologia.md`, `biblioteconomia.md`: pesquisar coordenadores(as) em `ced.ufsc.br`, portarias do Boletim Oficial da UFSC e sites dos departamentos; preencher onde disponível com fonte verificada.
- [ ] Para cada ficha CED: pesquisar atlética (nenhuma verificada até agosto/2026 — tentar novamente via busca web); pesquisar EJ (nenhuma no CGEJ — confirmar que ainda não existe).
- [ ] Atualizar `docs/centros/ced.md` com qualquer dado novo confirmado.
- [ ] Campos sem fonte verificada → `~` ou `_A preencher_`. Nunca inventar.
- [ ] `ultima_verificacao: agosto/2026` nos arquivos modificados.

**CCB + CDS — 2 fichas + centros (Story B)**

- [ ] `docs/cursos/ciencias-biologicas.md`: acessar `cienciasbiologicas.grad.ufsc.br/coordenacao-do-curso/` para obter nome do coordenador(a); preencher atendimento presencial via `cienciasbiologicas.grad.ufsc.br/atendimento/`; confirmar EJ via CGEJ.
- [ ] `docs/cursos/educacao-fisica.md`: buscar Instagram do CAEF (Centro Acadêmico de Educação Física — site histórico inacessível no Sprint 23); pesquisar EJ via CGEJ.
- [ ] Atualizar `docs/centros/ccb.md` com coordenador(a) de Biológicas e quaisquer dados novos.
- [ ] Atualizar `docs/centros/cds.md` com dados confirmados (Instagram CAEF se encontrado).
- [ ] `ultima_verificacao: agosto/2026` em todos os arquivos tocados.

### Ordem de execução

```
Wave 1 — paralelo (arquivos completamente disjuntos):
  content-editor A — docs/cursos/{pedagogia, educacao-do-campo, arquivologia, biblioteconomia}.md
                     docs/centros/ced.md

  content-editor B — docs/cursos/{ciencias-biologicas, educacao-fisica}.md
                     docs/centros/{ccb, cds}.md

Wave 2 — após Wave 1:
  tester           — npm run lint + npm run build (≥ 112 páginas) + Playwright 8/8
```

> Sprint content-only: sem alterações de frontend → ui-ux-review não necessária.

### Fontes prioritárias

**Story A (CED):**
- CED geral: `ced.ufsc.br/`
- Portarias de coordenadores: `boletimoficial.ufsc.br/` (buscar "CED" + "coordenador")
- Educação do Campo: `educacaodocampo.grad.ufsc.br/`
- Arquivologia / Biblioteconomia: `cin.ufsc.br/` (Departamento de Ciência da Informação)
- CGEJ EJs: `empresasjuniores.paginas.ufsc.br/lista-de-empresas-juniores-da-ufsc/`

**Story B (CCB + CDS):**
- CCB: `cienciasbiologicas.grad.ufsc.br/coordenacao-do-curso/` e `cienciasbiologicas.grad.ufsc.br/atendimento/`
- CDS/CAEF: `cds.ufsc.br/` e busca web por "CAEF UFSC" e "@caefufsc" no Instagram
- CGEJ: confirmar se há EJ de Biológicas ou Educação Física (`empresasjuniores.paginas.ufsc.br/`)

### Definition of Done

- [ ] `npm run lint` passa
- [ ] `npm run build` passa (≥ 112 páginas SSG — sem páginas novas)
- [ ] Playwright 8/8 sem regressões
- [ ] `pedagogia.md`: frontmatter `duracao:` corrigido para `"9 semestres"`
- [ ] CED: coordenadores pesquisados em todas as 4 fichas; `~` onde não verificado
- [ ] CCB: coordenador(a) de Biológicas documentado (preenchido ou `_A preencher_` com nota de onde buscar)
- [ ] CDS: CAEF Instagram pesquisado; resultado documentado

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| CFH coordenadores | Sprint 21 confirmou: não publicados em fontes verificadas — padrão estabelecido |
| CFM durações | Fontes contraditórias — investigação adicional não muda o estado `_A preencher_` sem acesso direto ao CAGR |
| Dicas de veterano / Onde estudar | Dependem de submissões reais (B-10, B-13 — bloqueados) |
| B-37/B-50/E13 (banco + auth) | Horizonte v2.0 — requer planejamento conjunto com o mantenedor |
| Marcadores CTJ/CTS no mapa | Aguarda coordenadas geográficas verificadas do mantenedor |

### Retrospectiva do Sprint 28

**Concluído em:** 2026-08-06

**Entregue:**

- **CED (Story A) — 4 fichas + centros/ced.md:**
  - `pedagogia.md`: frontmatter `duracao: ~` → `"9 semestres"` (consistência com o texto).
  - `educacao-do-campo.md`: coordenadora Profa. Dra. Marília Carla de Mello Gaia e subcoordenador Prof. Dr. Juliano Espezim Soares Faria encontrados via `educampo.grad.ufsc.br/equipe/`.
  - `arquivologia.md`: subcoordenadora Profa. Marli Dias de Souza Pinto adicionada com portarias nº 2249-2250/2024/GR.
  - `biblioteconomia.md`: subcoordenador Prof. Rodrigo de Sales adicionado com portaria nº 911-912/2026/GR (a partir de 23/04/2026).
  - `centros/ced.md`: tabela de coordenadores dos 4 cursos adicionada; turno/duração de Pedagogia e Arquivologia corrigidos.
  - Atlética e EJ dos cursos CED: nenhuma verificada — `_A preencher_` confirmado via CGEJ.

- **CCB + CDS (Story B) — 2 fichas + centros:**
  - `ciencias-biologicas.md`: coordenadora Profª. Daniela Cristina De Toni e subcoordenador Prof. Luiz Carlos de Pinho encontrados via `cienciasbiologicas.grad.ufsc.br/coordenacao-do-curso/`; atendimento (teletrabalho parcial + link para escala) documentado; **EJ Simbiosis** (`@simbiosisempjr`) — dado completamente novo, confirmada via CGEJ.
  - `educacao-fisica.md`: CAEF Instagram `@caefufsc` verificado ativo.
  - `centros/ccb.md`: coordenadora e EJ Simbiosis adicionados.
  - `centros/cds.md`: CAEF Instagram adicionado à tabela de representação estudantil.

**Verificações finais:** lint ✅ · build **112 páginas** SSG ✅ · Playwright **8/8** ✅ · ui-ux-review não necessária (sprint content-only).

**O que foi bem:**
- EJ Simbiosis (CCB) foi um achado inesperado — em sprints anteriores não havia EJ de Biológicas no CGEJ; a busca confirmou a atividade via Instagram.
- Coordenadora de Biológicas encontrada via URL documentada no `_A preencher_` — evidência do valor de registrar URLs de onde buscar.
- Inconsistência silenciosa de frontmatter (Pedagogia `duracao: ~`) encontrada e corrigida.
- Paralelismo Wave 1 sem conflito de arquivo.

**Pendências / follow-up:**
- Atlética e EJ dos cursos CED: nenhuma verificada — provável ausência real.
- CFH coordenadores: padrão `~` estabelecido no Sprint 21 — não tentar sem nova pista.
- CFM durações contraditórias: requer acesso direto ao CAGR sem 403.
- **B-08** — dicas de veterano e "onde estudar" continuam bloqueados sem submissões reais.

---

## Sprint 27 — Qualidade: fichas de centro + coordenadores CCS (v1.21)

**Objetivo:** Duas frentes paralelas de qualidade de conteúdo — (A) propagar os dados do Sprint 26
(Atlética Camaleão, CAs) para a ficha de centro do CTJ, e preencher campos faltantes nas fichas de
centro CTC e CCJ; (B) pesquisar coordenadores das 6 fichas de curso do CCS (emails exibidos como
imagens anti-spam nos sites dos departamentos) e completar atléticas/EJ ainda `_A preencher_`.
Sprint content-only: nenhum código frontend necessário.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| Fichas de centro: CTJ (propagar Sprint 26) + CTC + CCJ | B-08 (centros) | Should / M | content-editor | A fazer |
| CCS — coordenadores (anti-spam) + atléticas/EJ (6 fichas) | B-08 (CCS) | Should / M | content-editor | A fazer |

### Critérios de aceite detalhados

**Fichas de centro (Story A)**

- [ ] `docs/centros/ctj.md` — atualizar com dados já verificados no Sprint 26:
      atlética (`Atlética Camaleão / @camaleaochegou`); CAs representativos do campus
      (DALEM, CAAERO, CAAUTO, CALNAV, CALCTEC); EJs (ESATI, ETECH Jr.).
      Tentar ler e-mails da direção (exibidos como imagem em `joinville.ufsc.br/direcao/`)
      usando a técnica de download de imagem + leitura visual.
- [ ] `docs/centros/ctc.md` — pesquisar:
      e-mail geral do CTC (`ctc.ufsc.br/contato/`);
      telefone da direção; Instagram oficial (`@ctc.ufsc` ou similar).
- [ ] `docs/centros/ccj.md` — pesquisar:
      vice-diretor(a) (`ccj.ufsc.br/equipe-2/`);
      coordenador(a) de Direito com e-mail institucional (não Gmail pessoal).
- [ ] Campos sem fonte verificada → `~` ou `_A preencher_`. Nunca inventar.

**CCS — coordenadores + vida do curso (Story B)**

- [ ] Fichas a atualizar (todas com `centro: CCS`):
      `enfermagem`, `farmacia`, `fonoaudiologia`, `medicina`, `nutricao`, `odontologia`.
- [ ] Para cada ficha, pesquisar coordenador(a) de curso via leitura de imagem anti-spam:
      WebFetch na página → localizar `<img>` com e-mail → curl download → Read tool lê visualmente.
      Sites: `enfermagem.ufsc.br`, `farmacia.ufsc.br`, `fonoaudiologia.grad.ufsc.br`,
      `medicina.ufsc.br`, `nutricao.ufsc.br`, `odontologia.ufsc.br`.
- [ ] Atléticas: pesquisar via Instagram dos CAs (CALIFONO, CALINUT, CAOQA) e busca web.
- [ ] CALINUT — localizar Instagram e site oficial.
- [ ] Empresa júnior para os 6 cursos via `empresasjuniores.paginas.ufsc.br/lista-de-empresas-juniores-da-ufsc/`.
- [ ] Atualizar `docs/centros/ccs.md` com qualquer dado confirmado.

### Ordem de execução

```
Wave 1 — paralelo (arquivos completamente disjuntos):
  content-editor A — docs/centros/{ctj, ctc, ccj}.md
  content-editor B — docs/cursos/{enfermagem, farmacia, fonoaudiologia, medicina, nutricao, odontologia}.md
                     docs/centros/ccs.md

Wave 2 — após Wave 1:
  tester           — npm run lint + npm run build (≥ 112 páginas) + Playwright 8/8
```

> Sprint content-only: sem alterações de frontend → ui-ux-review não necessária.

### Fontes prioritárias

**Story A:** CTJ: `joinville.ufsc.br/direcao/` (imagem) · CTC: `ctc.ufsc.br/contato/` · CCJ: `ccj.ufsc.br/equipe-2/` e `ccj.ufsc.br/coordenacao/equipe/`

**Story B:** `enfermagem.ufsc.br/coordenacao/` · `farmacia.ufsc.br/coordenacao-de-graduacao/` · `fonoaudiologia.grad.ufsc.br/coordenacao/` · `medicina.ufsc.br/coordenacao-do-curso/` · `nutricao.ufsc.br/contato/` · `odontologia.ufsc.br/coordenacao/` · `empresasjuniores.paginas.ufsc.br/lista-de-empresas-juniores-da-ufsc/`

### Definition of Done

- [ ] `npm run lint` passa
- [ ] `npm run build` passa (≥ 112 páginas SSG)
- [ ] Playwright 8/8 sem regressões
- [ ] `docs/centros/ctj.md` com atlética/CAs/EJs do Sprint 26 propagados
- [ ] `docs/centros/ctc.md` e `docs/centros/ccj.md` com campos pesquisados
- [ ] CCS: coordenadores preenchidos onde leitura de imagem permitiu; `~` onde não

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| Dicas de veterano / Onde estudar | Dependem de submissões reais (B-10, B-13 — bloqueados) |
| CFH / CFM coordenadores | Não publicados em fontes verificadas — mantém `~` |
| B-37/B-50 (banco + histórias) | Horizonte v2 — decisão do mantenedor |

### Retrospectiva do Sprint 27

**Concluído em:** 2026-08-05

**Entregue:**

- **Centros (Story A):**
  - `docs/centros/ctj.md` — Atlética Camaleão (`@camaleaochegou`) propagada do Sprint 26; tabela de CAs
    por curso (CALCTEC, CAAERO, CAAUTO, DALEM×4, CALNAV) e EJs (ESATI, ETECH Jr.) adicionadas.
    E-mail da direção ainda `_A preencher_` (anti-spam não contornou).
  - `docs/centros/ctc.md` — e-mail `secretaria.ctc@contato.ufsc.br`, telefones
    (48) 3721-9339/9340/9343/9837 e Instagram `@ctc_ufsc` preenchidos.
  - `docs/centros/ccj.md` — Vice-Diretora Profª. Melissa Ely Melo (`melissa.melo@ufsc.br`)
    e Diretora Carolina Medeiros Bahia (`carolina.bahia@ufsc.br`) com e-mails institucionais;
    coordenador Francisco Quintanilha Véras Neto e vice-coordenadora Chiavelli Facenda Falavigno
    confirmados (Gmails pessoais omitidos por política — contato institucional é `direito@contato.ufsc.br`).

- **CCS (Story B):**
  - **Todos os 6 coordenadores de curso encontrados** pela primeira vez:
    Enfermagem (Diovane Ghignatti da Costa, mandato 2026–2028), Farmácia (Roberto Ferreira de Melo),
    Fonoaudiologia (Fernanda Zucki Mathias), Medicina (Antonio Reis de Sá Junior),
    Nutrição (Maurício Soares Leite + vice Francieli Cembranel), Odontologia (Ana Maria Hecke Alves).
  - **Correção de dado errado:** atlética de Enfermagem estava como `@atleticale.ufsc` (que é a
    atlética de Letras e Secretariado Executivo). A correta é **ATHENA** (`@atleticaathena`),
    confirmada em `enfermagem.ufsc.br/entidades-estudantis/`. Corrigido em `enfermagem.md` e `ccs.md`.
  - **Empresas Júnior:** EJEN (Enfermagem), EJIFAR (Farmácia), Qualifon Jr. (Fonoaudiologia),
    Nutri Jr. (Nutrição). Medicina e Odontologia sem EJ na lista oficial do CGEJ — mantidas como
    `_A preencher_`.
  - Tabela de EJs adicionada a `docs/centros/ccs.md` (não existia).
  - Atlética de Fonoaudiologia, Nutrição e Odontologia: não encontrada em fontes verificadas — `_A preencher_`.
  - CALINUT Instagram: não encontrado — `_A preencher_`.

**Verificações finais:** lint ✅ · build **112 páginas** SSG ✅ · Playwright **8/8** ✅ ·
ui-ux-review não necessária (sprint content-only).

**O que foi bem:**
- Todos os 6 coordenadores CCS encontrados — resultado acima do esperado (esperávamos bloqueio por anti-spam).
- Correção proativa de dado errado na atlética de Enfermagem: o agente identificou a inconsistência
  sem instrução explícita — qualidade acima do planejado.
- CTC: e-mail e Instagram encontrados via site alternativo (`portal.ctc.ufsc.br`) quando o principal retornou 403.
- CCJ: e-mails institucionais encontrados via portarias no Boletim Oficial da UFSC — fonte mais confiável
  que a página de equipe.

**Pendências / follow-up:**
- E-mail da direção do CTJ: exibido como imagem anti-spam — técnica não funcionou; candidato para
  abordagem manual pelo mantenedor.
- Atlética de Fonoaudiologia, Nutrição e Odontologia (CCS): não encontrada.
- CALINUT Instagram: não encontrado.
- EJ de Medicina e Odontologia: não listadas no CGEJ.
- **B-08** — dicas de veterano e "onde estudar" continuam bloqueados.

---

## Sprint 26 — Fichas CTJ + CTS: Vida do Curso (v1.20)

**Objetivo:** Completar a seção "Vida do curso" nas 13 fichas dos campi de Joinville (CTJ, 8
cursos) e Araranguá (CTS, 5 cursos), pesquisando CA, atlética, empresa júnior e Instagram — dados
que ficaram como `_A preencher_` quando os centros foram publicados no Sprint 24. Para o CTS,
incluir também os nomes dos coordenadores que ficaram como `~`. Sprint content-only: nenhum código
frontend necessário.

Rastreabilidade GitHub: #12 (B-08 continuação).

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| CTJ — Vida do curso: CA, atlética, EJ, Instagram (8 fichas) | B-08 (CTJ) | Should / M | content-editor | A fazer |
| CTS — Vida do curso + coordenadores: CA, atlética, EJ, Instagram (5 fichas) | B-08 (CTS) | Should / M | content-editor | A fazer |

### Critérios de aceite detalhados

**B-08 (CTJ) — 8 fichas de Joinville**

- [ ] Fichas a atualizar (todas com `centro: CTJ`):
      `ciencia-e-tecnologia-ctj`, `engenharia-aeroespacial`, `engenharia-automotiva`,
      `engenharia-civil-de-infraestrutura`, `engenharia-de-transportes-e-logistica`,
      `engenharia-ferroviaria-e-metroviaria`, `engenharia-mecatronica`, `engenharia-naval`.
- [ ] Para cada ficha: pesquisar CA (Centro Acadêmico), atlética, empresa júnior e Instagram
      via `portaljoinville.paginas.ufsc.br/representacao-estudantil/`, `joinville.ufsc.br` e busca web.
- [ ] CTJ pode ter estrutura estudantil unificada por campus: se houver CA ou atlética únicos
      do campus (não por curso), registrá-los em todas as fichas pertinentes.
- [ ] Campos confirmados com fonte → preencher; sem fonte verificada → `~` ou `_A preencher_`.
- [ ] `ultima_verificacao: agosto/2026` atualizado nas fichas modificadas.

**B-08 (CTS) — 5 fichas de Araranguá**

- [ ] Fichas a atualizar (todas com `centro: CTS`):
      `engenharia-de-computacao-ara`, `engenharia-de-energia`, `fisioterapia`, `medicina-ara`, `tic`.
- [ ] Para cada ficha: pesquisar coordenador(a) de curso (nome) **e** CA, atlética, empresa júnior e Instagram
      via `ara.ufsc.br`, sites dos cursos (`enc.ufsc.br`, `ener.ufsc.br`, `fisioterapia.ufsc.br`, etc.)
      e busca web.
- [ ] CTS pode ter estrutura estudantil unificada: se houver CA/atlética único do campus,
      registrá-lo em todas as fichas pertinentes.
- [ ] Campos confirmados → preencher; sem fonte → `~` ou `_A preencher_` com nota.
- [ ] `ultima_verificacao: agosto/2026` atualizado.

### Ordem de execução (arquivos completamente disjuntos)

```
Wave 1 — paralelo (zero dependência entre os dois campi):
  content-editor A — docs/cursos/{ciencia-e-tecnologia-ctj, engenharia-aeroespacial,
                                  engenharia-automotiva, engenharia-civil-de-infraestrutura,
                                  engenharia-de-transportes-e-logistica,
                                  engenharia-ferroviaria-e-metroviaria,
                                  engenharia-mecatronica, engenharia-naval}.md

  content-editor B — docs/cursos/{engenharia-de-computacao-ara, engenharia-de-energia,
                                  fisioterapia, medicina-ara, tic}.md

Wave 2 — após Wave 1:
  tester           — npm run lint + npm run build (espera ≥ 112 páginas) + Playwright 8/8
```

> Sprint content-only: sem alterações de frontend → ui-ux-review não necessária.

### Fontes prioritárias

**CTJ:**
- Representação estudantil Joinville: <https://portaljoinville.paginas.ufsc.br/representacao-estudantil/>
- Site do campus: <https://joinville.ufsc.br/>
- Instagram oficial: [@ufsc.joinville](https://www.instagram.com/ufsc.joinville/)
- Sites dos cursos: `automotiva.joinville.ufsc.br`, `aeroespacial.joinville.ufsc.br`, etc.

**CTS:**
- Site do campus: <https://ara.ufsc.br/>
- Secretaria Integrada de Graduação: sig.cts.ara@contato.ufsc.br
- Sites dos cursos: `enc.ufsc.br`, `ener.ufsc.br`, `fisioterapia.ufsc.br`, etc.
- Guia de Cursos UFSC: <https://guiadecursos.ufsc.br/campus-ararangua/>

### Definition of Done

- [ ] `npm run lint` passa
- [ ] `npm run build` passa (≥ 112 páginas SSG — sem páginas novas)
- [ ] Playwright 8/8 sem regressões
- [ ] Fichas CTJ: CA/atlética/EJ preenchidos onde fonte oficial confirmar, `~` onde não
- [ ] Fichas CTS: nomes dos coordenadores preenchidos + CA/atlética/EJ pesquisados
- [ ] Issue #12 (B-08) atualizada com o progresso

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| Dicas de veterano / Onde estudar | Dependem de submissões reais de veteranos (B-10, B-13 — bloqueados) |
| Coordenadores CCS/CFH | Não publicados em fontes verificadas — protocolo correto é `~` |
| B-37/B-50 (banco + histórias) | Horizonte v2 — sem caso de uso desbloqueado |
| Marcadores CTJ/CTS no mapa | Aguarda coordenadas geográficas verificadas do mantenedor |

### Retrospectiva do Sprint 26

**Concluído em:** 2026-08-05

**Entregue:**
- **B-08 (CTJ) — 8 fichas de Joinville** — Atlética, CA e EJ preenchidos para todos os 8 cursos:
  - **Atlética:** Atlética Camaleão (`@camaleaochegou`) — única para todo o campus, aplicada em todos os 8 cursos.
  - **Centros Acadêmicos:** CALCTEC (C&T), CAAERO (Aeroespacial), CAAUTO (Automotiva), CALNAV (Naval),
    DALEM — Diretório Acadêmico Livre das Engenharias da Mobilidade (Civil de Infraestrutura, Transportes e
    Logística, Ferroviária e Metroviária, Mecatrônica).
  - **Empresas Júnior:** ESATI (`@esatijr`) — cobre a maioria das engenharias; ETECH Jr. (`@etechjr`) — específica de Mecatrônica.
  - **Perfil de curso adicional:** `@engcivil_ufsc_joinville` (Civil de Infraestrutura).
  - Ciência e Tecnologia: sem EJ confirmada — mantida como `_A preencher_`.

- **B-08 (CTS) — 5 fichas de Araranguá** — Coordenadores, atlética, CA e EJ pesquisados:
  - **Coordenadores encontrados:** Eng. Computação (ARA): Antonio Carlos Sobieranski + vice Alison Roberto Panisson;
    Medicina (ARA): Tamiris Dal Bó Martinello + vice Camila Carvalho de Souza Amorim Matos.
  - **Atlética:** AAACA — Associação Atlética Acadêmica do Campus Araranguá (`@aaacaufsc`) — cobre todos
    os cursos exceto Medicina, que tem atlética própria — ATMEDUFSC (`@atmedufsc`).
  - **Centros Acadêmicos individuais:** CAEC (Computação), CAENE (Energia), CALFISIO (Fisioterapia),
    CALMED (Medicina), CALTIC (TIC).
  - **Empresas Júnior:** EJEC (`@ejec_ufsc`) para Computação; ENEjr (`@enejr.eng`) para Energia.
    Fisioterapia, Medicina e TIC: sem EJ verificada — mantidas como `_A preencher_`.
  - `@medicinaufscara` — perfil de curso da Medicina Araranguá encontrado.

**Verificações finais:** lint ✅ · build **112 páginas** SSG ✅ (sem novas páginas) · Playwright **8/8** ✅ ·
ui-ux-review não necessária (sprint content-only).

**O que foi bem:**
- Estrutura estudantil dos campi encontrada rapidamente via páginas oficiais de representação estudantil.
- CTJ: DALEM como CA centralizado para 4 cursos do departamento EMB foi um achado não óbvio —
  evitou 4 fichas com dados inconsistentes entre si.
- CTS: Medicina tem atlética própria (ATMEDUFSC), separada da AAACA — distinção correta e verificada.
- Nenhum dado inventado: campos sem fonte ficaram como `~` ou `_A preencher_`.

**Pendências / follow-up:**
- **B-08** — faltam: dicas de veterano e "onde estudar" (dependem de submissões reais de veteranos).
- Emails da direção CTJ (exibidos como imagem no site) — candidato para sprint de qualidade futuro
  com técnica de leitura de imagem anti-spam.
- Empresa júnior de C&T CTJ, Fisioterapia, Medicina e TIC do CTS: não encontradas em agosto/2026.
- **B-13 / B-10** — seguem bloqueados sem submissões reais.

---

## Sprint 25 — Qualidade 2026/2: revisão semestral + fichas CTC + acessibilidade (v1.19)

**Objetivo:** Sprint de qualidade em três frentes paralelas — fechar a revisão semestral 2026/2
(#50), preencher os campos faltantes nas fichas dos 13 cursos do CTC com fontes verificáveis, e
fazer melhorias de acessibilidade (WCAG AA) e SEO no frontend.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| Revisão semestral 2026/2 — datas, RU, links, coordenações | B-25/semestral | Should / M | content-editor | Done |
| Fichas incompletas — 13 cursos do CTC (e-mails, telefones, durações) | B-08 (parcial) | Should / M | content-editor | Done |
| Acessibilidade WCAG AA + SEO — audit e melhorias pontuais | B-49 (revisão) | Should / M | frontend-dev | Done (sem alterações — já correto) |

### Critérios de aceite detalhados

**Revisão semestral 2026/2 (fecha issue #50)**

- [ ] `docs/datas-importantes.md` — verificar e atualizar com o calendário acadêmico 2026/2 oficial; confirmar datas de matrícula, trancamento e ajuste de matrícula.
- [ ] `docs/carteira-ru.md` — verificar valor atual da refeição subsidiada (`ru.ufsc.br`) e procedimento de isenção do PRAE.
- [ ] `docs/links-importantes.md` — testar e confirmar que os links de CAGR, Moodle, idUFSC, Webmail, eduroam e MatrUFSC ainda estão ativos.
- [ ] `docs/coordenacoes.md` — revisar e-mails e telefones das coordenações do CTC; atualizar `ultima_verificacao`.
- [ ] `docs/atleticas-e-festas.md` e `docs/instagrams.md` — confirmar @s de Instagram ainda ativos.
- [ ] Issue #50 fechada ao final.

**Fichas incompletas — CTC (13 cursos)**

Foco nos 13 cursos do CTC. Campos prioritários:
- `duracao:` em semestres (Guia de Cursos UFSC tem isso para todos)
- `email:` e `telefone:` da coordenação (sites dos departamentos do CTC)
- `turno:` quando ambíguo

Os 13: Ciências da Computação, Eng. Civil, Eng. de Controle e Automação, Eng. de Materiais, Eng. de Produção, Eng. Elétrica, Eng. Eletrônica, Eng. Mecânica, Eng. Química, Eng. Sanitária e Ambiental, Sistemas de Informação, Design de Produto, Eng. de Alimentos.

- [ ] `duracao:` preenchido em todos os 13 (via `guiadecursos.ufsc.br`).
- [ ] `email:` e `telefone:` preenchidos onde o site do departamento publica claramente.
- [ ] Campos sem fonte verificada permanecem `~` — **nunca inventar**.
- [ ] `ultima_verificacao: agosto/2026` atualizado nas fichas alteradas.

**Acessibilidade WCAG AA + SEO**

- [ ] Verificar se `generateMetadata` está em `app/centros/[slug]/page.tsx` e `app/cursos/[slug]/page.tsx` — adicionar `description` e `openGraph` dinâmicos se ausentes.
- [ ] `app/sitemap.ts` — confirmar que centros e cursos dos campi Joinville/Araranguá aparecem (gerado dinamicamente ou necessita atualização).
- [ ] Audit WCAG AA nas páginas de centro e curso — corrigir findings bloqueadores (contraste, aria-labels, foco visível).
- [ ] Nenhuma regressão nos 8 testes Playwright.

### Ordem de execução

```
Wave 1 — paralelo (três histórias em arquivos disjuntos):
  content-editor A — docs/{datas-importantes,carteira-ru,links-importantes,
                          coordenacoes,atleticas-e-festas,instagrams}.md
  content-editor B — docs/cursos/{13 cursos do CTC}.md
  frontend-dev    — app/centros/[slug]/page.tsx, app/cursos/[slug]/page.tsx,
                    app/sitemap.ts, componentes relevantes

Wave 2 — após Wave 1:
  tester          — npm run lint + npm run build (≥ 112 páginas) + Playwright 8/8

Wave 3 — após Wave 2 (se frontend mudou):
  ui-ux-review    — audit nos componentes/páginas alterados
```

### Definition of Done

- [ ] `npm run lint` passa
- [ ] `npm run build` passa (≥ 112 páginas SSG)
- [ ] Playwright 8/8 sem regressões
- [ ] Issue #50 (revisão semestral) fechada
- [ ] Fichas CTC com `duracao:` preenchido em todos os 13 cursos
- [ ] `generateMetadata` dinâmico confirmado em `/centros/[slug]` e `/cursos/[slug]`
- [ ] `ui-ux-review` sem findings bloqueadores (se houve frontend)

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| Fichas de todos os centros (71 arquivos) | Escopo demais para um sprint — foco nos 13 do CTC |
| Mapa CTJ/CTS | Aguarda coordenadas do mantenedor |
| v2.0 (banco + auth) | Horizonte separado |

### Retrospectiva do Sprint 25

**Concluído em:** 2026-08-05

**Entregue:**
- **Revisão semestral 2026/2** — issue #50 fechada. 6 docs verificados:
  - `carteira-ru.md`: valor R$1,50 confirmado via `ru.ufsc.br/venda-de-passe/`.
  - `links-importantes.md`: Moodle corrigido para `presencial.moodle.ufsc.br` (endereço estável).
  - `datas-importantes.md`: calendário 2026/2 confirmado correto (Resolução 214/2025/CUn).
  - `coordenacoes.md`, `atleticas-e-festas.md`, `instagrams.md`: todos os @s confirmados ativos;
    `ultima_verificacao` atualizada para agosto/2026.

- **Fichas CTC incompletas** — 9 de 13 fichas atualizadas (4 já estavam completas):
  - `duracao:` preenchida em 7 fichas (ECA, Produção, Elétrica, Eletrônica, Mecânica, Química, Alimentos).
  - `design-de-produto.md`: citação direta do PPC 2019 (8 sem. mínimo, 3.456h).
  - `sistemas-de-informacao.md`: typo grave corrigido (`sin@contato.ufsc.br0` → `_A preencher_`).
  - 4 fichas já completas: Computação, Civil, Materiais, Sanitária e Ambiental.

- **Audit WCAG AA + SEO** — frontend já estava correto:
  - `generateMetadata` dinâmico com centro+grau nas páginas de curso: já implementado.
  - `aria-labelledby="titulo-centro"` e `id="titulo-centro"`: já presentes.
  - `app/sitemap.ts` completamente dinâmico via `listCenters()` + `listCourses()`: já implementado.
  - Nenhuma alteração de código necessária — sprint de qualidade confirma solidez do frontend.

**Verificações finais:** lint ✅ · build **112 páginas** (sem novas) ✅ · Playwright **8/8** ✅ ·
ui-ux-review não necessária (sem alterações de frontend).

**O que foi bem:**
- Revisão semestral encontrou achado real: link do Moodle desatualizado (redirecionava via 302) —
  corrigido para o endereço estável.
- Typo grave em `sistemas-de-informacao.md` (`sin@contato.ufsc.br0`) corrigido.
- Audit frontend confirmou que WCAG AA e SEO estão sólidos — zero dívida técnica nova.

**Pendências / follow-up:**
- Fichas de outros centros (62 arquivos restantes com `_A preencher_`) — sprint de qualidade futuro.
- Email de SIN: exibido como imagem no site oficial; requer acesso humano.
- Mapa CTJ/CTS: aguarda coordenadas do mantenedor.

---

## Sprint 24 — CTJ (Joinville) + ARA (Araranguá) publicados — B-60 fechado (v1.18)

**Objetivo:** Publicar os dois campi restantes do B-60 como vertical slices completos — o **CTJ**
(Centro Tecnológico de Joinville) com suas engenharias e o **ARA/CTE** (Campus Araranguá) com seus
cursos de saúde, computação e energia. Após este sprint: **B-60 ✅ fechado**, E7 concluído,
todos os campi da UFSC Florianópolis cobertos.

Sprint content-only: loader `listCourses()` e `listCenters()` detectam os novos arquivos
automaticamente — nenhum código novo necessário. Mapa **não** entra neste sprint: marcadores de
CTJ/ARA requerem coordenadas geográficas verificadas pelo mantenedor.

Rastreabilidade GitHub: #60 (CTJ), #61 (ARA), #32 (umbrella B-60).

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| CTJ — centro + fichas dos cursos de Joinville | B-60 (CTJ) | Should / M | content-editor | Done |
| ARA — centro + fichas dos cursos de Araranguá | B-60 (ARA) | Should / M | content-editor | Done |

### Critérios de aceite detalhados

**B-60 (CTJ) — vertical slice completo**

- [ ] `docs/centros/ctj.md` com frontmatter YAML: `slug: ctj`,
      `titulo: "Centro Tecnológico de Joinville (CTJ)"`, coordenações (diretor/a, vice), e-mail,
      CA(s), atlética(s), links úteis — tudo com fonte oficial (`ctj.ufsc.br`).
- [ ] Centro marcado claramente como **Campus Joinville** (fora do campus Trindade).
- [ ] Uma ficha `docs/cursos/<slug>.md` por curso de Joinville com `centro: CTJ`.
      Cursos a verificar via `guiadecursos.ufsc.br` e `ctj.ufsc.br/graduacao/`:
      Engenharia Automotiva, Engenharia Civil de Infraestrutura, Engenharia de Computação,
      Engenharia Ferroviária e Metroviária, Engenharia de Infraestrutura, Engenharia Mecatrônica,
      Engenharia Naval — confirmar lista completa e slugs únicos (evitar colisão com cursos
      homônimos de outros centros, ex.: `computacao-ctj.md` se necessário).
- [ ] Campos sem fonte verificada como `~` — **nunca inventar dados**.
- [ ] `/centros/ctj` renderiza o centro + cursos com links válidos.
- [ ] Build inclui todas as novas páginas SSG.

**B-60 (ARA) — vertical slice completo**

- [ ] Verificar o nome e slug correto do centro de Araranguá:
      `ara.ufsc.br` ou `cte.ufsc.br` — pode ser CTE (Centro de Ciências, Tecnologias e Saúde).
      Usar o slug e título que correspondem à nomenclatura oficial atual.
- [ ] `docs/centros/ara.md` (ou `cte.md`) com frontmatter YAML adequado, coordenações,
      CA(s), atlética(s), links úteis — tudo com fonte oficial.
- [ ] Centro marcado claramente como **Campus Araranguá** (fora do campus Trindade).
- [ ] Uma ficha por curso com `centro: ARA` (ou slug correto).
      Cursos a verificar: Engenharia de Computação, Engenharia de Energia, Fisioterapia,
      Medicina, Tecnologias da Informação e Comunicação (TIC) — confirmar via `guiadecursos.ufsc.br`.
      Atenção: se "Engenharia de Computação" já existe como slug (ex. de Joinville ou outro centro),
      usar sufixo distinguidor no slug.
- [ ] Campos sem fonte verificada como `~`.
- [ ] `/centros/ara` (ou `/centros/cte`) renderiza o centro + cursos com links válidos.

### Conflito de slugs — atenção especial

Alguns cursos podem ter nomes idênticos em campi diferentes (ex.: "Engenharia de Computação" em CTJ
e em ARA). Regra: primeiro a ser criado usa o slug simples; o segundo usa sufixo de campus
(ex.: `engenharia-de-computacao-ctj.md` e `engenharia-de-computacao-ara.md`). O content-editor
deve verificar `docs/cursos/` antes de nomear qualquer arquivo.

### Ordem de execução (tracer-bullet — arquivos completamente disjuntos)

```
Wave 1 — paralelo (zero dependência entre CTJ e ARA):
  content-editor A — docs/centros/ctj.md
                     docs/cursos/{eng-automotiva, eng-civil-infraestrutura, eng-computacao-ctj?,
                                  eng-ferroviaria, eng-infraestrutura, eng-mecatronica,
                                  eng-naval, ...}.md
  content-editor B — docs/centros/ara.md (ou cte.md)
                     docs/cursos/{eng-computacao-ara?, eng-energia, fisioterapia, medicina,
                                  tic, ...}.md

Wave 2 — após Wave 1:
  tester           — npm run lint + npm run build (espera ≥ 107 páginas: 97 + pelo menos 10 novas)
                     + Playwright 8/8
```

> Sprint content-only: sem alterações de frontend → ui-ux-review não necessária neste sprint.
> Mapa: marcadores de CTJ/ARA entram em sprint futuro quando o mantenedor fornecer as
> coordenadas geográficas verificadas.

### Fontes oficiais

**CTJ (Campus Joinville):**
- Site do CTJ: <https://ctj.ufsc.br/>
- Graduação: <https://ctj.ufsc.br/graduacao/>
- Guia de Cursos: <https://guiadecursos.ufsc.br/>

**ARA (Campus Araranguá):**
- Site do campus: <https://ara.ufsc.br/>
- Guia de Cursos: <https://guiadecursos.ufsc.br/>

### Definition of Done

- [ ] `npm run lint` passa
- [ ] `npm run build` passa (≥ 107 páginas SSG)
- [ ] Playwright sem regressões (8/8)
- [ ] `/centros/ctj` e `/centros/ara` (ou `/centros/cte`) exibem os cursos com links válidos
- [ ] `docs/product-backlog.md` atualizado — B-60 ✅, E7 concluído
- [ ] `README.md` atualizado (v1.18 no roadmap)
- [ ] Issues GitHub #60 e #61 fechadas; #32 (umbrella) fechada

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| Marcadores CTJ/ARA no mapa | Requer coordenadas geográficas verificadas pelo mantenedor |
| B-13 / B-08 / B-10 | Bloqueados — sem submissões reais de veteranos |
| B-37 / B-50 / E13 | Horizonte v2 |

### Retrospectiva do Sprint 24

**Concluído em:** 2026-08-05

**Entregue:**
- **B-60 (CTJ)** — vertical slice completo: `docs/centros/ctj.md` + 8 fichas de curso.
  CTJ é o 12º centro publicado. Descoberta: o campus Joinville tem **8 cursos** (não 7 esperados) —
  inclui Ciência e Tecnologia e Engenharia Aeroespacial, não presentes na lista inicial.
  Diretor (Prof. Diego Santos Greff) e vice-diretora (Profª. Elisete Zagheni) confirmados.
  Coordenadores de todos os 8 cursos encontrados em `joinville.ufsc.br`.
  Slug `ciencia-e-tecnologia-ctj.md` com sufixo para evitar ambiguidade futura.

- **B-60 (CTS/ARA)** — vertical slice completo: `docs/centros/cts.md` + 5 fichas de curso.
  CTS é o 13º centro publicado. Nome oficial: **Centro de Ciências, Tecnologias e Saúde (CTS)**
  (não "ARA" — slug correto é `cts`). Diretora Melissa Negro Dellacqua (mandato 2025–2028)
  confirmada. Dois slugs com sufixo `-ara`: `medicina-ara.md` (colisão com `medicina.md` do CCS)
  e `engenharia-de-computacao-ara.md`.

- **B-60 ✅ FECHADO** — todos os 13 agrupamentos de centros publicados.
- **E7 (Expansão de centros) ✅ CONCLUÍDO** — épico finalizado.

**Verificações finais:** lint ✅ · build **112 páginas** SSG ✅ · Playwright **8/8** ✅ ·
ui-ux-review não necessária (sprint content-only).

**O que foi bem:**
- Paralelismo Wave 1 perfeito: dois content-editors em arquivos completamente disjuntos.
- CTJ superou expectativas: 8 cursos encontrados (esperávamos ~7), incluindo Aeroespacial.
- CTS: nome oficial verificado — evitou publicar com slug errado `ara`.
- Gestão de colisão de slugs (`medicina-ara`, `engenharia-de-computacao-ara`) executada
  autonomamente pelos content-editors sem intervenção do mantenedor.

**Pendências / follow-up:**
- Marcadores de CTJ e CTS no mapa interativo — requer coordenadas do mantenedor.
- **B-08 / B-13 / B-10** — bloqueados sem submissões reais de veteranos.
- Próximo: decidir próximo épico com o mantenedor (B-37 + B-50 + E13 para v2.0, ou outro).

---

## Sprint 23 — CED + CDS publicados (v1.17)

**Objetivo:** Publicar dois centros em paralelo como vertical slices completos — o **CED** (Centro de
Educação) com 4 fichas de curso (Pedagogia, Educação do Campo, Arquivologia, Biblioteconomia) e o
**CDS** (Centro de Desportos e Saúde) com 1 ficha (Educação Física). Sprint content-only: nenhum
código frontend novo necessário; loader `listCourses()` detecta automaticamente os novos `.md`.
Após este sprint: 11 centros publicados.

Rastreabilidade GitHub: #57 (CED), #58 (CDS).

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| CED — centro + fichas (Pedagogia, Ed. do Campo, Arquivologia, Biblioteconomia) | B-60 (CED) | Should / M | content-editor | Done |
| CDS — centro + ficha (Educação Física) | B-60 (CDS) | Should / P | content-editor | Done |

### Critérios de aceite detalhados

**B-60 (CED) — vertical slice completo**

- [ ] `docs/centros/ced.md` com frontmatter YAML: `slug: ced`, `titulo: "Centro de Educação (CED)"`,
      coordenações (diretor/a, vice), e-mail, CA(s), atlética(s), links úteis — tudo com fonte oficial.
- [ ] Verificar via site oficial (`ced.ufsc.br`) se Arquivologia e Biblioteconomia estão sob o CED
      (Departamento de Ciência da Informação dentro do CED); se confirmado, criar as fichas; se
      pertencerem a centro separado, criar ficha do centro e criar apenas Pedagogia e Ed. do Campo.
- [ ] `docs/cursos/pedagogia.md` com `centro: CED`, grau/turno/duração do Guia de Cursos UFSC.
- [ ] `docs/cursos/educacao-do-campo.md` com `centro: CED`, grau/turno/duração confirmados.
- [ ] `docs/cursos/arquivologia.md` com `centro: CED` (se confirmado), grau/turno/duração.
- [ ] `docs/cursos/biblioteconomia.md` com `centro: CED` (se confirmado), grau/turno/duração.
- [ ] Campos sem fonte verificada como `~` (nunca texto inventado).
- [ ] `/centros/ced` renderiza o centro + cursos com links válidos; build gera as novas páginas SSG.

**B-60 (CDS) — vertical slice completo**

- [ ] `docs/centros/cds.md` com frontmatter YAML: `slug: cds`, `titulo: "Centro de Desportos (CDS)"`,
      coordenações, CA, atlética, links úteis — tudo com fonte oficial.
- [ ] `docs/cursos/educacao-fisica.md` com `centro: CDS`, habilitações (Licenciatura + Bacharelado),
      turno, duração, e-mail (`edfisica@contato.ufsc.br`), telefone (`(48) 3721-4773`).
- [ ] Campos sem fonte verificada como `~`.
- [ ] `/centros/cds` renderiza o centro + 1 curso com link válido; build gera as novas páginas SSG.

### Ordem de execução (tracer-bullet — arquivos completamente disjuntos)

```
Wave 1 — paralelo (zero dependência entre CED e CDS):
  content-editor A — docs/centros/ced.md
                     docs/cursos/{pedagogia,educacao-do-campo,arquivologia,biblioteconomia}.md
  content-editor B — docs/centros/cds.md
                     docs/cursos/educacao-fisica.md

Wave 2 — após Wave 1:
  tester           — npm run lint + npm run build (espera ≥ 97 páginas: 90 + 7 novas) + Playwright 8/8
```

> Sprint content-only: sem alterações de frontend → ui-ux-review não necessária neste sprint.

### Fontes oficiais

**CED:**
- Site do CED: <https://ced.ufsc.br/>
- Departamento de Ciência da Informação: <https://cin.ufsc.br/> (verificar subordinação ao CED)
- Guia de Cursos UFSC: <https://guiadecursos.ufsc.br/>
- Pedagogia: <https://pedagogia.grad.ufsc.br/>
- Educação do Campo: <https://educacaodocampo.grad.ufsc.br/>

**CDS:**
- Site do CDS: <https://cds.ufsc.br/>
- Educação Física: <https://def.ufsc.br/>
- Guia de Cursos: <https://guiadecursos.ufsc.br/educacao-fisica/>

### Definition of Done

- [ ] `npm run lint` passa
- [ ] `npm run build` passa (≥ 97 páginas SSG)
- [ ] Playwright sem regressões (8/8)
- [ ] `/centros/ced` exibe os cursos do CED com links válidos
- [ ] `/centros/cds` exibe Educação Física com link válido
- [ ] `docs/product-backlog.md` atualizado (B-60: 11 centros, CED ✅, CDS ✅)
- [ ] Issues GitHub #57 e #58 fechadas

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| Campus Joinville e Araranguá | Um agrupamento por sprint; CED/CDS primeiro por serem do campus Trindade. |
| B-08 / B-13 (veteranos) | Bloqueados — sem submissões reais. |
| B-37 / B-50 / E13 (banco + auth) | Horizonte v2. |

### Retrospectiva do Sprint 23

**Concluído em:** 2026-08-05

**Entregue:**
- **B-60 (CED)** — vertical slice completo: `docs/centros/ced.md` + 4 fichas de curso.
  CED é o 10º centro publicado. Descoberta relevante: Arquivologia e Biblioteconomia estão
  subordinadas ao Departamento de Ciência da Informação (CIN) **dentro** do CED — confirmado
  via `ced.ufsc.br`. Todas as 4 fichas criadas com `centro: CED`. Dados ricos encontrados:
  coordenadora de Pedagogia (Profa. Leila Procópia), e-mails institucionais, salas, coordenadores
  de Arquivologia (Profa. Sonali Bedin) e Biblioteconomia (Prof. Marcelo Minghelli).
- **B-60 (CDS)** — vertical slice completo: `docs/centros/cds.md` + `educacao-fisica.md`.
  CDS é o 11º centro publicado. Dados completos: Diretor (Prof. Michel Angillo Saad), Vice-Diretor
  (Prof. Luiz Guglielmo), Coordenadores de Ed. Física (Prof. Jaison Bassani + Prof. Ricardo Pimenta),
  atlética AEF (Ada Carina Maliceski / @aefufsc) encontrada e documentada. CAEF (CA) listado como
  oficial mas site histórico inacessível — registrado como `_A preencher_`.

**Verificações finais:** lint ✅ · build **97 páginas** SSG ✅ · Playwright **8/8** ✅ ·
ui-ux-review não necessária (sprint content-only, sem alterações de frontend).

**O que foi bem:**
- Paralelismo Wave 1 funcionou perfeitamente: dois content-editors em arquivos completamente disjuntos.
- CDS surpreendeu positivamente: diretor/vice-diretor e coordenadores de curso todos publicados no
  site oficial — dados muito mais completos que CFH no Sprint 21.
- Descoberta de que Arquivologia/Biblioteconomia pertencem ao CED (via dep. CIN interno) resolvida
  autonomamente pelo content-editor sem necessidade de intervenção do mantenedor.

**Pendências / follow-up:**
- **B-60** — faltam: campus Joinville (CJ) e campus Araranguá (ARA). Ritmo: 1 agrupamento por sprint.
- CAEF (CA de Ed. Física): site histórico inacessível — verificar Instagram ou junto ao CDS.
- Pedagogia: duração em semestres não publicada no site; CA e atlética `_A preencher_`.
- **B-08 / B-13** — bloqueados sem submissões reais de veteranos.

---

## Sprint 22 — CCB publicado + B-73 encerrado (v1.16)

**Objetivo:** Dois fechamentos em paralelo — abrir o **CCB** como vertical slice completo (centro +
ficha do único curso) e encerrar de vez o **B-73** adicionando UI estruturada às 3 seções que ainda
usam fallback prose (`faq`, `checklist`, `mapa`). Após este sprint: 9 centros publicados, B-73 ✅.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| CCB — centro + ficha de Ciências Biológicas | B-60 (CCB) | Should / M | content-editor | Done |
| UI estruturada: FaqSection, ChecklistSection, MapaSection | B-73 | Should / M | frontend-dev | Done |

### Critérios de aceite detalhados

**B-60 (CCB) — vertical slice completo**

- [ ] `docs/centros/ccb.md` com frontmatter YAML: `slug: ccb`, `titulo: "Centro de Ciências Biológicas (CCB)"`, coordenações, CAs, atléticas, links úteis — tudo com fonte oficial.
- [ ] `docs/cursos/ciencias-biologicas.md` com `centro: CCB`, `grau: Bacharelado e Licenciatura`, turno diurno (e noturno para Licenciatura). Um único arquivo com as habilitações descritas no corpo.
- [ ] Coordenador: `~` se não publicado em fonte verificada.
- [ ] `/centros/ccb` renderiza o centro + 1 curso com link válido para `/cursos/ciencias-biologicas`.
- [ ] Build inclui as novas páginas SSG.

**B-73 — UI estruturada (3 seções restantes)**

- [ ] `components/sections/FaqSection.tsx` — renderiza perguntas e respostas do FAQ como cards visuais (cada H2/H3 = pergunta, parágrafo seguinte = resposta). Mobile-first.
- [ ] `components/sections/ChecklistSection.tsx` — renderiza itens de checklist (`- [ ]`) como cards com ícone de check. Mantém prose para blocos não-checklist.
- [ ] `components/sections/MapaSection.tsx` — card prominente com link para `/mapa` (a página com Leaflet) + prose do restante do conteúdo.
- [ ] `app/secoes/[slug]/page.tsx` — registrar `faq`, `checklist`, `mapa` em `SECTION_COMPONENTS`.
- [ ] `npm run lint` e `npm run build` passam. Playwright 8/8 (sem regressões).
- [ ] `ui-ux-review` sem findings bloqueadores.

### Ordem de execução (tracer-bullet — arquivos completamente disjuntos)

```
Wave 1 — paralelo (zero dependência entre as duas histórias):
  content-editor   — docs/centros/ccb.md + docs/cursos/ciencias-biologicas.md
  frontend-dev     — components/sections/{FaqSection,ChecklistSection,MapaSection}.tsx
                     + app/secoes/[slug]/page.tsx (registrar os 3 slugs)

Wave 2 — após Wave 1:
  tester           — npm run lint + npm run build (espera ≥ 90 páginas) + Playwright 8/8

Wave 3 — após Wave 2 (só se lint/build/Playwright passarem):
  ui-ux-review     — auditar FaqSection, ChecklistSection e MapaSection
```

### Fontes oficiais (CCB)

- Site do CCB: <https://portal.ccb.ufsc.br/>
- Graduação: <https://cienciasbiologicas.grad.ufsc.br/>
- Guia de Cursos: <https://guiadecursos.ufsc.br/ciencias-biologicas/>

> CCB tem **1 curso de graduação presencial** — Ciências Biológicas — com habilitações Bacharelado
> (diurno, 9 semestres) e Licenciatura (diurno e noturno). Único arquivo `ciencias-biologicas.md`.

### Referências técnicas (B-73)

- Padrão existente: ver `components/sections/DatasSection.tsx` (cards) e `RuSection.tsx` (steps).
- Reutilizar `ProseBlocks.tsx` para blocos que não precisam de UI especial.
- `app/secoes/[slug]/page.tsx` l.14–20: dict `SECTION_COMPONENTS` — adicionar `faq`, `checklist`, `mapa`.
- `faq.md` tem estrutura H2/H3 + parágrafos; `checklist-primeira-semana.md` tem task-list items (`- [ ]`); `mapa.md` tem prose + links.

### Definition of Done

- [ ] `npm run lint` passa
- [ ] `npm run build` passa (≥ 90 páginas SSG — 88 atuais + 1 CCB + 1 ciencias-biologicas)
- [ ] Playwright sem regressões (8/8)
- [ ] `/centros/ccb` exibe Ciências Biológicas com link válido
- [ ] `/secoes/faq`, `/secoes/checklist` e `/secoes/mapa` renderizam componente dedicado (não fallback prose)
- [ ] `ui-ux-review` sem findings bloqueadores nos 3 novos componentes
- [ ] `docs/product-backlog.md` atualizado (B-60 🚧 + B-73 ✅)

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| CED, CDS, Joinville, Araranguá | Um centro por sprint (ritmo validado); CCB fecha antes de abrir outros. |
| B-08 / B-13 (veteranos) | Bloqueados — sem submissões reais. |
| #46 (enviar sugestões) | Bloqueado por decisão do mantenedor. |
| B-37 / B-50 / E13 (banco + auth) | Horizonte v2 — sem caso de uso desbloqueado. |

### Retrospectiva do Sprint 22

**Concluído em:** 2026-08-04

**Entregue:**
- **B-60 (CCB)** — vertical slice completo: `docs/centros/ccb.md` + `docs/cursos/ciencias-biologicas.md`.
  CCB é o 9º centro publicado. Dados ricos encontrados: diretor (Prof. Dr. Rui Daniel S. Prediger),
  vice-diretora, e-mails de coordenação, telefone, CA (CABio / @cabioufsc), atlética (ATLBIO /
  @atleticabioufsc / Associação Atlética Acadêmica Vera Lícia), Semana Acadêmica da Biologia (XXV ed.).
- **B-73 ✅ fechado** — 3 componentes novos em `components/sections/`:
  - `FaqSection.tsx`: Q&A em cards visuais por categoria (H2) e questão (H3) com ícone HelpCircle.
  - `ChecklistSection.tsx`: fases numeradas (H2) + itens `- [ ]` como cards com CheckCircle2.
  - `MapaSection.tsx`: card CTA `btn-primary` → `/mapa` + prose. Fix de contraste dark mode aplicado
    (botão `bg-primary` → `btn-primary` com `--primary-button` 6.00:1 — finding blocker do ui-ux-review).
  - `app/secoes/[slug]/page.tsx`: `faq`, `checklist`, `mapa` registrados em `SECTION_COMPONENTS`.
  - Todas as 8 seções do portal agora têm UI dedicada (nenhuma mais em fallback prose).

**Verificações finais:** lint ✅ · build **90 páginas** SSG ✅ · Playwright **8/8** ✅ ·
ui-ux-review ✅ (1 blocker encontrado e corrigido na mesma sessão — dark mode contrast em MapaSection).

**O que foi bem:**
- Paralelismo Wave 1 funcionou perfeitamente: content-editor e frontend-dev trabalharam em arquivos
  completamente disjuntos sem nenhum conflito.
- CCB surpreendeu positivamente: o content-editor encontrou dados muito mais ricos do que o CFH
  (atlética, CA, eventos, e-mails de coordenação) — resultado de dados mais bem publicados pelo centro.
- ui-ux-review capturou o re-uso incorreto de `bg-primary` no botão — exatamente o padrão que B-78
  havia corrigido em outros componentes. Evidência de que a review é necessária após qualquer sprint
  com código frontend.

**Pendências / follow-up:**
- **B-60** — faltam: CED (Centro de Educação), CDS (Centro de Desportos e Saúde), campus Joinville,
  campus Araranguá. Ritmo: 1 centro por sprint.
- **B-08 / B-13** — bloqueados sem submissões reais de veteranos.
- **#46** — bloqueado aguardando decisão do mantenedor.

---

## Sprint 21 — Fichas de curso do CFH: 9 cursos das Humanidades (v1.15)

**Objetivo:** Completar as fichas de curso do último centro publicado sem fichas: o **CFH** (Centro de
Filosofia e Ciências Humanas). Após este sprint, todos os 8 centros publicados terão fichas completas.
Princípio Matt Pocock: cada lote é um **tracer-bullet vertical slice** — arquivo `docs/cursos/*.md`
criado → loader `listCourses()` o detecta automaticamente → `/centros/cfh` o renderiza → Playwright valida.
Nenhum código novo necessário.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| Fichas CFH — Lote A (Psicologia, Filosofia, História) | B-61 (CFH-A) | Should / M | content-editor | Done |
| Fichas CFH — Lote B (Antropologia, Ciências Sociais, Museologia) | B-61 (CFH-B) | Should / M | content-editor | Done |
| Fichas CFH — Lote C (Geografia, Geologia, Licenciatura Intercultural Indígena) | B-61 (CFH-C) | Should / M | content-editor | Done |
| Atualizar CLAUDE.md para refletir estado pós-Sprint 20 | docs | Could / P | content-editor | Done |

### Critérios de aceite detalhados

**B-61 (parcial CFH) — 9 fichas de curso**

- [ ] 9 arquivos `docs/cursos/<slug>.md`, divididos em 3 lotes paralelos:
  - **Lote A:** `psicologia`, `filosofia`, `historia`.
  - **Lote B:** `antropologia`, `ciencias-sociais`, `museologia`.
  - **Lote C:** `geografia`, `geologia`, `licenciatura-intercultural-indigena`.
- [ ] Frontmatter com `centro: CFH` em todos; CAs reaproveitados de `docs/centros/cfh.md`
      (CALPsi, CAFIL, CALH, CALANT, CALCS, CAMUS, CALIGEO — Geologia e Licenciatura como `~`).
- [ ] Coordenadores de curso: todos `~` (não publicados em fontes verificadas) — **nunca inventar**.
- [ ] Atléticas CFH: `~` — nenhuma atlética verificada encontrada no Sprint 18.
- [ ] Campos sem fonte confirmada como `~` (null YAML) no frontmatter, nunca texto verboso.
- [ ] Grau/turno/duração via Guia de Cursos UFSC ou site do departamento; incertezas como `_A preencher_`.
- [ ] Licenciatura Intercultural Indígena: ficha normal, slug `licenciatura-intercultural-indigena`,
      todos os campos de coordenação e CA como `~` (dados não publicados).
- [ ] `/centros/cfh` passa a exibir os 9 cursos com destino válido; build gera as 9 páginas.

**Docs — CLAUDE.md atualizado**

- [ ] Seção "Próximos passos" atualizada para refletir o estado real pós-Sprint 20 (não mais "pós-Sprint 16").
- [ ] Lista dos centros publicados (8) e próximos passos reais (CFH fichas → CCB).

### Ordem de execução e dependências (tracer-bullet vertical slices)

```
Wave 1 — 3 content-editors em paralelo (arquivos disjuntos, sem dependências entre lotes):
  B-61 (CFH-A)  content-editor A  — docs/cursos/{psicologia,filosofia,historia}.md
  B-61 (CFH-B)  content-editor B  — docs/cursos/{antropologia,ciencias-sociais,museologia}.md
  B-61 (CFH-C)  content-editor C  — docs/cursos/{geografia,geologia,licenciatura-intercultural-indigena}.md

Wave 2 — após Wave 1 (seam pré-acordado — lint + build + Playwright):
  tester — npm run lint + npm run build (espera ≥ 88 páginas SSG) + Playwright 8/8

Wave 3 — em paralelo com Wave 2 (zero dependência de código):
  content-editor D — atualização CLAUDE.md "Próximos passos"
```

### Fontes oficiais (B-61/CFH)

Dados-base em `docs/centros/cfh.md` (CAs, eventos). Complementar com:
- Psicologia: <https://psicologia.ufsc.br/>
- Filosofia: <https://filosofia.ufsc.br/>
- História: <https://historia.paginas.ufsc.br/>
- Antropologia: <https://antropologia.paginas.ufsc.br/>
- Ciências Sociais: <https://cienciassociais.ufsc.br/>
- Museologia: <https://museologia.ufsc.br/> (e-mail: museologia@contato.ufsc.br)
- Geografia: <https://geografia.ufsc.br/>
- Geologia: <https://geologia.ufsc.br/>
- Licenciatura Intercultural: <https://cfh.ufsc.br/>
- Guia de Cursos: <https://guiadecursos.ufsc.br/>

> Fetch a `*.ufsc.br` costuma dar 403 neste ambiente — usar WebSearch cruzando fontes; nunca inventar.

### Definition of Done

- [ ] `npm run lint` passa
- [ ] `npm run build` passa (SSG com ≥ 88 páginas — 79 atuais + 9 novas fichas CFH)
- [ ] Playwright sem regressões (8/8)
- [ ] `/centros/cfh` mostra os 9 cursos; todos os 8 centros publicados com fichas completas
- [ ] CLAUDE.md "Próximos passos" atualizado para o estado real pós-Sprint 20
- [ ] ui-ux-review dispensável (conteúdo servido pelo template existente — sem mudança de UI)
- [ ] `docs/product-backlog.md` atualizado (B-61 → status final)

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| B-60 (CCB, CED, CDS, Joinville, Araranguá) | "Terminar > começar": CFH fecha todas as fichas antes de abrir centros novos. |
| B-73 (faq/checklist/mapa UI estruturada) | Baixa prioridade (páginas próprias já existem); fica para sprint de UX depois. |
| #46 (enviar sugestões) | Bloqueado por decisão do mantenedor. |
| B-08 / B-13 (veteranos) | Bloqueados — sem submissões reais. |

### Retrospectiva do Sprint 21

**Concluído em:** 2026-08-04

**Entregue:**
- **B-61 (CFH)** — 9 fichas: `psicologia`, `filosofia`, `historia`, `antropologia`, `ciencias-sociais`,
  `museologia`, `geografia`, `geologia`, `licenciatura-intercultural-indigena`.
- **Marco:** todos os 8 centros publicados (CTC, CCA, CSE, CCE, CCS, CCJ, CFM, CFH) agora têm fichas
  de curso completas — **50 fichas no total**. B-61 fechado ✅.
- **Bônus:** CA de Geologia (CAMP / @geologiaufsc / camp.ufsc.br) descoberto durante pesquisa —
  dado ausente em `cfh.md`; atualizado durante o sprint-review.
- **CLAUDE.md** atualizado: seção "Próximos passos" reflete o estado real pós-Sprint 20.
- Coordenadores CFH: todos `~` (política correta — não publicados); turno da Licenciatura Intercultural
  tratado como `~` com explicação no corpo (regime de Pedagogia da Alternância).

**Verificações finais:** lint ✅ · build **88 páginas** SSG ✅ (9 fichas novas) · Playwright 8/8 ✅.
ui-ux-review dispensado (sprint 100% de conteúdo).

**O que foi bem:**
- Aplicação da estratégia de tracer-bullet vertical slices (Matt Pocock): 3 lotes paralelos →
  cada um entregou fichas completas de ponta a ponta (docs/ → render → Playwright) sem bloquear os demais.
- Lote C foi além do esperado: encontrou o CA de Geologia (CAMP) que estava `_A preencher_` no cfh.md.
- Sprint focado ("terminar > começar"): B-61 100% encerrado antes de abrir B-60.

**Pendências / follow-up:**
- **B-60** — próximos centros: CCB (Ciências Biológicas), CED (Educação), CDS (Desportos e Saúde),
  campus Joinville e campus Araranguá.
- **B-73** — UI estruturada das seções faq/checklist/mapa (baixa prioridade; páginas próprias já existem).
- **#46** — segue bloqueado aguardando decisão de abordagem do mantenedor.

---

## Sprint 20 — Fichas de curso do CFM e do CCJ (v1.14)

**Objetivo:** Dar fichas de curso aos centros publicados no Sprint 18 que já têm dados de coordenação
verificados: **CFM** (Física, Matemática, Química, Meteorologia, Oceanografia) e **CCJ** (Direito).
Continua o "terminar > começar": `/centros/cfm` e `/centros/ccj` hoje levam a cards de curso sem
ficha. 6 fichas no total, tamanho comparável ao Sprint 18 (CCS). O CFH (9 cursos, com dados de
coordenação mais escassos) fica para um sprint próprio depois.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| Fichas do CFM + CCJ — lote A (Física, Matemática, Química) | B-61 (CFM-A) | Should / M | content-editor | Done |
| Fichas do CFM + CCJ — lote B (Meteorologia, Oceanografia, Direito) | B-61 (CFM-B/CCJ) | Should / M | content-editor | Done |

### Critérios de aceite detalhados

**B-61 (parcial CFM + CCJ) — 6 fichas de curso**
- [ ] 6 arquivos `docs/cursos/<slug>.md`, divididos em 2 lotes paralelos:
  - **Lote A (`centro: CFM`):** `fisica`, `matematica`, `quimica`.
  - **Lote B:** `meteorologia`, `oceanografia` (`centro: CFM`) + `direito` (`centro: CCJ`).
- [ ] Coordenação/CA/atlética reaproveitados de `docs/centros/cfm.md` e `docs/centros/ccj.md`
      (verificados no Sprint 18). Física/Matemática/Química têm habilitações Licenciatura+Bacharelado —
      tratar num único arquivo por curso, mencionando as modalidades no corpo (como Letras Estrangeiras).
- [ ] Campos sem fonte confirmada como `~` (null YAML) no frontmatter, nunca texto verboso (lição Sprint 14).
      Ex.: coordenador de Oceanografia e de Direito ficam `~`/`_A preencher_` (não publicados).
- [ ] Grau/turno/duração via Guia de Cursos UFSC/site do curso; incertezas/contradições ficam `_A preencher_`.
- [ ] "Dicas de veterano"/"Onde estudar" ficam `_A preencher_` (dependem de veteranos reais).
- [ ] `/centros/cfm` passa a exibir 5 cursos e `/centros/ccj` 1 curso, todos com destino válido; build gera as 6 páginas.

### Ordem de execução e dependências

```
Wave única (2 content-editors em paralelo — arquivos disjuntos):
  B-61 (CFM-A)      content-editor A  — docs/cursos/{fisica,matematica,quimica}.md
  B-61 (CFM-B/CCJ)  content-editor B  — docs/cursos/{meteorologia,oceanografia,direito}.md
Depois:
  tester — lint + build + Playwright (Chromium pré-instalado em /opt/pw-browsers)
```

### Fontes oficiais
Dados-base em `docs/centros/cfm.md` e `docs/centros/ccj.md`. Complementar com: fisica.ufsc.br,
mtm.grad.ufsc.br, quimica.ufsc.br, meteorologia.grad.ufsc.br, ocn.cfm.ufsc.br/oceano.ufsc.br,
ccj.ufsc.br, e https://guiadecursos.ufsc.br/<curso>/. Fetch a `*.ufsc.br` costuma dar 403 —
usar WebSearch cruzando fontes; nunca inventar.

### Definition of Done
- [ ] `npm run lint` passa · `npm run build` passa (SSG com 6 fichas novas)
- [ ] Playwright sem regressões
- [ ] `/centros/cfm` mostra 5 cursos e `/centros/ccj` mostra Direito
- [ ] ui-ux-review dispensável (conteúdo servido pelo template existente — sem mudança de UI)
- [ ] `docs/product-backlog.md` atualizado (B-61)

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| Fichas do CFH (9 cursos) | Dados de coordenação de curso mais escassos em `cfh.md` (maioria `_A preencher_`); merece sprint próprio para pesquisa. |
| B-60 (CCB, CED, CDS, Joinville, Araranguá) | Ritmo de conteúdo; entram depois. |
| #46 (enviar sugestões) | **Bloqueado por decisão do mantenedor.** |
| B-08 / B-13 (veteranos) | Bloqueados — sem submissões reais. |

### Retrospectiva do Sprint 20

**Concluído em:** 2026-08-03

**Entregue:**
- **B-61 (CFM)** — 5 fichas: `fisica`, `matematica`, `quimica`, `meteorologia`, `oceanografia`.
- **B-61 (CCJ)** — 1 ficha: `direito` (inclui a empresa júnior Locus Iuris, confirmada com fonte própria).
- Coordenação/CA/atlética reaproveitados de `docs/centros/cfm.md` e `ccj.md` (verificados no Sprint 18);
  grau confirmado; turno/duração de várias (Física, Química, Bacharelado de Matemática) ficaram
  `_A preencher_` por fontes divergentes/inacessíveis (403) — não estimados. `/centros/cfm` exibe 5
  cursos e `/centros/ccj` exibe Direito.

**Verificações finais:** lint ✅ · build **79 páginas** SSG ✅ (6 fichas novas) · Playwright 8/8 ✅.
ui-ux-review dispensado (sprint 100% de conteúdo).

**O que foi bem:**
- Reuso de `cfm.md`/`ccj.md` (dados de coordenação verificados no Sprint 18) acelerou as fichas — a
  decisão de priorizar CFM/CCJ sobre CFH (dados escassos) se confirmou acertada.
- Regra de ouro mantida: turno/duração contraditórios deixados `_A preencher_`; coordenadores não
  publicados (Oceanografia, Direito) marcados como `~` em vez de chutados.

**Pendências / follow-up:**
- **B-61** — falta o **CFH** (9 cursos, dados de coordenação escassos — exige pesquisa dedicada).
- **B-60** — faltam centros CCB, CED, CDS + campi Joinville/Araranguá.
- **#46** — segue bloqueado aguardando decisão de abordagem do mantenedor.

---

## Sprint 19 — Fechamento do CCE: fichas dos 9 cursos (v1.13) — concluído em 2026-08-03

**Objetivo:** Completar o **CCE** publicando as fichas dos seus 9 cursos de graduação presenciais.
O CCE está publicado desde o Sprint 14, mas `/centros/cce → curso` cai em ficha inexistente — o
mesmo débito que os Sprints 16 (CSE) e 18 (CCS) já corrigiram para os outros centros. Princípio:
**terminar o que já está publicado antes de abrir novas frentes**. Com o CCE, todos os 5 centros
de conteúdo original (CTC, CCA, CSE, CCS, CCE) passam a ter fichas de curso completas.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| Fichas dos 9 cursos do CCE (B-61 parcial) — lote A (5) | B-61 (CCE-A) | Should / M | content-editor | Done |
| Fichas dos 9 cursos do CCE (B-61 parcial) — lote B (4) | B-61 (CCE-B) | Should / M | content-editor | Done |

### Critérios de aceite detalhados

**B-61 (parcial CCE) — 9 fichas de curso**
- [ ] 9 arquivos `docs/cursos/<slug>.md` com `centro: CCE`, divididos em 2 lotes paralelos:
  - **Lote A:** `animacao`, `artes-cenicas`, `cinema`, `design`, `design-de-produto`.
  - **Lote B:** `jornalismo`, `letras-estrangeiras`, `letras-portugues`, `secretariado-executivo`.
- [ ] Coordenação/CA/atlética reaproveitados de `docs/centros/cce.md` (verificado no Sprint 14).
- [ ] Campos sem fonte confirmada como `~` (null YAML) no frontmatter, nunca texto verboso (lição Sprint 14).
- [ ] Grau/turno/duração via Guia de Cursos UFSC/site do curso; incertezas/contradições ficam `_A preencher_` (lição Sprint 16).
- [ ] "Dicas de veterano"/"Onde estudar" ficam `_A preencher_` (dependem de veteranos reais).
- [ ] `/centros/cce` passa a exibir os 9 cursos com destino válido; build gera as 9 páginas.

### Ordem de execução e dependências

```
Wave única (2 content-editors em paralelo — arquivos disjuntos):
  B-61 (CCE-A)  content-editor A  — docs/cursos/{animacao,artes-cenicas,cinema,design,design-de-produto}.md
  B-61 (CCE-B)  content-editor B  — docs/cursos/{jornalismo,letras-estrangeiras,letras-portugues,secretariado-executivo}.md
Depois:
  tester — lint + build + Playwright (Chromium pré-instalado em /opt/pw-browsers)
```

### Fontes oficiais (B-61/CCE)
Dados-base em `docs/centros/cce.md`; complementar com: design.ufsc.br, jornalismo.ufsc.br,
cinema.ufsc.br, sites do DAC (Artes Cênicas/Animação), DLLE (Letras Estrangeiras/Secretariado),
Letras-Português, e https://guiadecursos.ufsc.br/<curso>/. Fetch a `*.ufsc.br` costuma dar 403
neste ambiente — usar WebSearch cruzando fontes; nunca inventar.

### Definition of Done
- [ ] `npm run lint` passa · `npm run build` passa (SSG com 9 fichas novas)
- [ ] Playwright sem regressões
- [ ] `/centros/cce` mostra 9 cursos; todos os 5 centros originais com fichas completas
- [ ] ui-ux-review sem findings bloqueadores (conteúdo servido pelo template existente — auditoria leve)
- [ ] `docs/product-backlog.md` atualizado (B-61)

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| B-60 (CCB, CED, CDS, Joinville, Araranguá) | Mantendo o ritmo; entram em sprint de centros próprio. |
| Fichas de CCJ/CFH/CFM (publicados no Sprint 18) | Muitos cursos (CFH tem 9, CFM 5); cada um é um sprint de fichas próprio depois do CCE. |
| #46 (enviar sugestões) | **Bloqueado por decisão do mantenedor** — escolher abordagem antes de virar história. |
| B-08 / B-13 (veteranos) | Bloqueados — sem submissões reais. |

### Retrospectiva do Sprint 19

**Concluído em:** 2026-08-03

**Entregue:**
- **B-61 (CCE)** — 9 fichas de curso publicadas: `animacao`, `artes-cenicas`, `cinema`, `design`,
  `design-de-produto` (lote A) e `jornalismo`, `letras-estrangeiras`, `letras-portugues`,
  `secretariado-executivo` (lote B). Coordenação/CA/atlética reaproveitados de `docs/centros/cce.md`
  (verificado no Sprint 14); grau/turno confirmados via WebSearch cruzando anexos de vestibular/CAGR;
  durações e coordenadores contraditórios ou não publicados ficaram `_A preencher_`/`~`.
- `/centros/cce` agora exibe os 9 cursos com destino válido. **Marco:** os 5 centros originais
  (CTC, CCA, CSE, CCS, CCE) agora têm fichas de curso completas.

**Verificações finais:** lint ✅ · build **73 páginas** SSG ✅ (9 fichas novas) · Playwright 8/8 ✅.
ui-ux-review dispensado (sprint 100% de conteúdo, sem mudança de UI — usa o template de curso existente).

**O que foi bem:**
- Dividir as 9 fichas em 2 lotes paralelos (5 + 4) manteve o `/sprint-run` executável e sem conflito.
- "Terminar > começar" concluído para os 5 centros originais — nenhum centro publicado fica mais
  com cursos sem ficha.
- Regra de ouro sustentada sob 403 generalizado: turno/grau confirmados por fontes cruzadas;
  durações contraditórias (ex.: Artes Cênicas currículos 2008/2013) deixadas `_A preencher_` em vez de estimar.

**Lições aprendidas:**
- Para centros grandes (9 cursos), o padrão "reusar dados do `centros/<slug>.md` + 2 lotes paralelos"
  é o mais eficiente; a pesquisa incremental por curso rende pouco quando o site oficial retorna 403.

**Pendências / follow-up:**
- **B-61** — faltam fichas de CCJ (Direito, 1), CFH (9) e CFM (5), publicados no Sprint 18.
- **B-60** — faltam centros CCB, CED, CDS + campi Joinville/Araranguá.
- **#46** — segue bloqueado aguardando decisão de abordagem do mantenedor.

---

## Sprint 18 — Fechamento: cursos do CCS, mais centros e cauda da UI de seções (v1.12) — concluído em 2026-08-03

**Objetivo:** Sprint de fechamento (conteúdo + cauda de UI), sem abrir arquitetura nova. Completar o
**CCS** publicando as fichas dos seus 6 cursos (hoje `/centros/ccs → curso` cai em ficha inexistente —
mesmo problema que o CSE tinha antes do Sprint 16), adicionar **3 novos centros** (CCJ, CFH, CFM),
terminar a **UI estruturada das seções** (instagrams + historias, #48/B-73) e quitar a **dívida do token
de botão no dark mode**. Princípio: **terminar o que já está publicado antes de abrir mais frentes**.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| Fichas dos 6 cursos do CCS (B-61 parcial) | B-61 (CCS) | Should / M | content-editor | Done |
| Novos centros: CCJ + CFH + CFM (B-60 parcial) | B-60 (CCJ/CFH/CFM) | Should / M | content-editor | Done |
| UI estruturada: seções instagrams e historias (#48 cont.) | B-73 (cont.) | Should / M | frontend-dev | Done |
| Token `--primary-button` dedicado p/ dark mode (dívida técnica) | B-78 | Could / P | frontend-dev | Done |

### Critérios de aceite detalhados

**B-61 (parcial CCS) — 6 fichas de curso**
- [ ] 6 arquivos `docs/cursos/<slug>.md` com `centro: CCS`: `enfermagem`, `farmacia`,
      `fonoaudiologia`, `medicina`, `nutricao`, `odontologia`.
- [ ] Coordenação/CA/atlética reaproveitados de `docs/centros/ccs.md` (verificado no Sprint 14).
- [ ] Campos sem fonte confirmada como `~` (null YAML), nunca texto verboso (lição do Sprint 14).
- [ ] `/centros/ccs` passa a exibir 6 cards de curso com destino válido; build gera as 6 páginas.

**B-60 (parcial) — CCJ + CFH + CFM**
- [ ] 3 arquivos `docs/centros/<slug>.md` (`ccj`, `cfh`, `cfm`) com frontmatter YAML
      (`slug`, `titulo`, `descricao`, `ultima_verificacao`) e seções: Coordenações/Diretoria, CAs,
      Atléticas, Links úteis. Dados sem fonte oficial ficam `_A preencher_`.
- [ ] `/centros` passa a listar 8 centros; build gera `/centros/ccj`, `/centros/cfh`, `/centros/cfm`.

**B-73 (cont. #48) — UI estruturada: instagrams e historias**
- [ ] Componente dedicado para `instagrams` (grid de cards de perfil: nome, @handle, link, badge
      oficial/estudantil) e para `historias` (lista de relatos com destaque), consumindo `Section.blocks`.
- [ ] Registrados em `app/secoes/[slug]/page.tsx` ao lado de links/datas/ru; fallback `.prose-content`
      mantido para as demais. `docs/*.md` segue fonte única.
- [ ] Mobile-first; links externos com `rel="noopener noreferrer"`; tap targets ≥ 44px.

**B-78 — token de botão no dark mode**
- [ ] Novo token (ex.: `--primary-button` ou override em dark) para `.btn-primary` (e usos equivalentes,
      ex. `not-found.tsx`) com contraste ≥ 4.5:1 de branco sobre o fundo do botão **em dark mode**.
- [ ] Não altera a paleta do modo claro (B-49 já resolvido lá).
- [ ] Documentar o ratio em `docs/identidade-visual.md`.

### Ordem de execução e dependências

```
Wave única (paralelo — arquivos disjuntos, zero conflito):
  B-61 (CCS)  content-editor A  — docs/cursos/*.md (6 fichas)
  B-60        content-editor B  — docs/centros/{ccj,cfh,cfm}.md
  B-73 cont.  frontend-dev      — components/sections/* + app/secoes/[slug]/page.tsx
  B-78        frontend-dev      — globals.css / tailwind.config.ts + docs/identidade-visual.md
              (B-73 e B-78 no mesmo agente, em sequência, para evitar corrida de build)
Depois:
  tester — lint + build + Playwright (Chromium pré-instalado em /opt/pw-browsers)
```

### Fontes oficiais

**B-60 (centros):** CCJ https://ccj.ufsc.br/ · CFH https://cfh.ufsc.br/ · CFM https://cfm.ufsc.br/
**B-61 (cursos CCS):** dados-base em `docs/centros/ccs.md`; complementar com os sites de cada curso
(enf.ufsc.br, farmacia.ufsc.br, fonoaudiologia.ufsc.br, medicina.ufsc.br, nutricao.ufsc.br,
odontologia.ufsc.br) e o Guia de Cursos UFSC. Fetch a `*.ufsc.br` costuma dar 403 aqui — usar
WebSearch cruzando fontes e sinalizar incerteza; nunca inventar.

### Definition of Done
- [ ] `npm run lint` passa · `npm run build` passa (SSG com 6 fichas CCS + 3 centros novos)
- [ ] Playwright sem regressões
- [ ] `/centros/ccs` mostra 6 cursos; `/centros` lista 8 centros; seções instagrams/historias com UI dedicada
- [ ] ui-ux-review sem findings bloqueadores (e dívida do token de botão no dark fechada)
- [ ] `docs/product-backlog.md` atualizado (B-60, B-61, B-73, B-78) · README se houver mudança estrutural

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| B-61 (CCE, 9 cursos) | Maior que CCS; somado aos outros itens estouraria um único `/sprint-run`. Próximo (Sprint 19). |
| B-60 (CCB, CED, CDS, Joinville, Araranguá) | Ritmo de 2–3 centros por sprint; resto no radar. |
| #46 (enviar sugestões) | **Bloqueado por decisão do mantenedor** — escolher abordagem (Google Form vs. Route Handler + e-mail vs. link de issue) antes de virar história. |
| B-08 / B-13 (veteranos) | Bloqueados — sem submissões reais. |

### Retrospectiva do Sprint 18

**Concluído em:** 2026-08-01

**Entregue:**
- **B-61 (CCS)** — 6 fichas de curso (`enfermagem`, `farmacia`, `fonoaudiologia`, `medicina`,
  `nutricao`, `odontologia`), reaproveitando dados verificados de `docs/centros/ccs.md`; grau/turno/
  duração via WebSearch com nota de ressalva; coordenadores/atléticas sem fonte como `_A preencher_`.
  `/centros/ccs` agora exibe os 6 cursos com destino válido.
- **B-60 (CCJ + CFH + CFM)** — 3 centros novos: CCJ (Direito, CAXIF, AAD), CFH (9 cursos, direção
  2023–2027, CAs CALPsi/CALH/CALIGEO/CALCS/CAFIL/CALANT), CFM (Física/Matemática/Química/Meteorologia/
  Oceanografia, CAs e atléticas ATQ/AFIM). `/centros` passa a listar 8 centros.
- **B-73 (cont. #48)** — `InstagramSection` (grid de perfis com badge oficial/estudantil, links em
  nova aba) e `HistoriasSection` (relatos em cards destacados + empty-state), registrados no
  `SECTION_COMPONENTS`; fallback `.prose-content` mantido para faq/checklist/mapa. `docs/` fonte única.
- **B-78** — token `--primary-button` dedicado: dark `217 91% 45%` → branco **6.00:1** (AA com folga),
  modo claro inalterado (4.73:1); ratios documentados em `docs/identidade-visual.md`.

**Findings ui-ux-review:**
- Nenhum blocker/major. A **dívida recorrente do token de botão no dark mode foi fechada** pelo B-78.
  1 nit (badge `text-[10px]` na InstagramSection) — não bloqueante, sem ação.

**Verificações finais:** lint ✅ · build **64 páginas** SSG ✅ (6 fichas CCS + 3 centros novos) ·
Playwright 8/8 ✅.

**O que foi bem:**
- Wave única com 3 agentes (2 conteúdo + 1 frontend) em arquivos disjuntos — zero conflito, padrão
  consolidado desde o Sprint 14/16.
- "Terminar > começar" de novo: fechar o CCS (centro publicado sem fichas) antes de abrir o CCE maior.
- Regra de ouro mantida sob 403 generalizado: content-editors cruzaram fontes via WebSearch e
  marcaram `_A preencher_` onde não havia confirmação (coordenadores, algumas atléticas/durações).
- Uma dívida técnica de acessibilidade arrastada por 3 sprints foi finalmente quitada (B-78).

**Lições aprendidas:**
- Introduzir um token semântico dedicado (`--primary-button`) em vez de reusar `--primary` é a forma
  correta de resolver contraste de componente sem afetar texto/links — replicável para outros casos.

**Pendências / follow-up:**
- **B-61 (CCE, 9 cursos)** — próximo alvo de "terminar > começar" (Sprint 19).
- **B-60** — faltam CCB, CED, CDS + campi Joinville/Araranguá.
- **#46** — segue bloqueado aguardando decisão de abordagem do mantenedor.
- **B-73** — seções faq/checklist/mapa ainda no fallback prose (têm páginas próprias; baixa prioridade).

---

## Sprint 17 — Correções, Navegação e UI das Seções (v1.11) — concluído em 2026-08-01

**Objetivo:** Endereçar issues do mantenedor abertas no GitHub: dois fixes rápidos (mapa do CFM,
nome do site), reintroduzir acesso direto aos cursos (aba "Cursos" + listagem global), divulgar
ferramentas da comunidade (MyFUFSC/MatrUFSC) e dar um primeiro passo em transformar as páginas de
seção de "visualizador de markdown" em UI estruturada.

| História | ID | Issue | Prioridade / Tam. | Agente | Status |
|----------|----|-------|-------------------|--------|--------|
| Corrigir coordenadas do marcador do CFM no mapa | B-76 | #39 | Must (fix) / P | frontend-dev | Done |
| Renomear "UFSC — CTC" → "UFSC · Florianópolis" nos metadados | B-77 | #40 | Must (fix) / P | frontend-dev | Done |
| Ferramentas da comunidade: MyUFSC e MatrUFSC | B-74 | #47 | Should / P | content-editor | Done |
| Aba "Cursos" na topbar + listagem global de cursos em `/cursos` | B-75 | #45 | Should / M | frontend-dev | Done |
| Páginas de seção com UI estruturada (≥ 3 seções) | B-73 | #48 | Should / G | frontend-dev | Done |

> **Fora deste sprint:** #46 (enviar sugestões) — adiado por decisão do mantenedor (depende de
> escolha de abordagem/infra: Google Form vs. Route Handler + e-mail).

### Critérios de aceite detalhados

**B-76 (#39) — Coordenadas do CFM**
- [ ] Em `components/MapView.tsx` (array de marcadores, entrada "CFM — Centro de Ciências Físicas e Matemáticas"),
      trocar as coordenadas atuais (`-27.601411120065425, -48.52380552762934`) por
      **lat `-27.5994566`, lng `-48.5233276`** (fornecidas pelo mantenedor).
- [ ] `npm run lint` e `npm run build` passam; marcador aparece na nova posição.

**B-77 (#40) — Nome do site sem "CTC"**
- [ ] `app/layout.tsx`: `metadata.title`, `metadata.description`, `openGraph.title` e
      `openGraph.description` deixam de mencionar "CTC". Título → `"Portal dos Calouros UFSC"`
      (ou `"Portal dos Calouros UFSC · Florianópolis"`); descrição fala de "calouros da UFSC
      (Florianópolis)", não "do CTC".
- [ ] Nenhuma outra string de UI global menciona "UFSC — CTC" / "UFSC CTC". (A frase em
      `app/page.tsx:103` que **lista** os centros — "CTC, CCA, CSE…" — é conteúdo legítimo e permanece.)
- [ ] `npm run lint` e `npm run build` passam.

**B-74 (#47) — MyFUFSC e MatrUFSC**
- [ ] Subseção "Ferramentas da comunidade" em `docs/links-importantes.md` (não criar slug novo,
      para não reabrir mudança de home/API neste sprint).
- [ ] MyFUFSC: o que é, para que serve, como baixar (links **verificados**; se app store não
      confirmável, `_A preencher_`).
- [ ] MatrUFSC: o que é, para que serve, link de acesso **verificado**.
- [ ] Deixar explícito que são **projetos independentes da comunidade**, não oficiais da UFSC.
- [ ] Nenhuma URL inventada — o que não confirmar fica `_A preencher_`.

**B-75 (#45) — Aba "Cursos" + listagem global**
- [ ] `app/cursos/page.tsx`: substituir o `permanentRedirect("/centros")` (do B-68) por uma
      página que **lista todos os cursos de todos os centros** via `listCourses()`, agrupados por
      centro (ou com badge do centro em cada card), cada um linkando `/cursos/<slug>`.
- [ ] `components/NavLinks.tsx`: adicionar `<Link href="/cursos">Cursos</Link>` ao lado de "Centros",
      ativo (`text-primary`) quando `pathname` começa com `/cursos`.
- [ ] `app/sitemap.ts`: reincluir `/cursos` na lista de rotas.
- [ ] Mobile-first (cards empilham no celular); acessível por teclado.
- [ ] **Nota de reconciliação:** isto reverte parcialmente o B-68. Agora é coerente — a lista é
      "todos os cursos da UFSC por centro", não mais "só cursos do CTC". Registrar como ADR-10 em
      `docs/arquitetura.md` (feito junto do B-75 ou como parte da doc; opcional neste sprint).
- [ ] `npm run lint` e `npm run build` passam; Playwright ajustado se algum teste dependia do
      redirect de `/cursos`.

**B-73 (#48) — UI estruturada das seções (primeiro passo)**
- [ ] `lib/content.ts` passa a expor dados estruturados (frontmatter + blocos) além de `content_html`,
      **mantendo `docs/*.md` como fonte única** (sem duplicar conteúdo em código).
- [ ] **Pelo menos 3 seções** com componente de UI dedicado em `components/sections/` (ex.:
      Coordenações → cards com copiar e-mail + link `tel:`; Links → grid de cards; Datas → lista/timeline
      com badge). Sugestão de priorização: Coordenações, Links e Datas.
- [ ] `app/secoes/[slug]/page.tsx` seleciona o componente dedicado quando existir, com **fallback
      `.prose-content`** para as demais seções.
- [ ] Contatos têm ação direta (copiar / discador); links externos abrem em nova aba com
      `rel="noopener noreferrer"`.
- [ ] Mobile-first; `npm run lint` e `npm run build` passam; Playwright sem regressão.

### Ordem de execução e dependências

```
Wave 1 (paralelo — arquivos disjuntos):
  B-76 + B-77  frontend-dev(A)  — MapView.tsx (coords) + layout.tsx (metadados). Fixes triviais.
  B-74         content-editor   — docs/links-importantes.md.

Wave 2:
  B-75  frontend-dev(B) — app/cursos/page.tsx + NavLinks.tsx + sitemap.ts.

Wave 3 (isolada — item grande, mexe em lib/content.ts):
  B-73  frontend-dev(C) — loader + components/sections/* + app/secoes/[slug]/page.tsx.

Depois:
  tester — lint + build + Playwright (com Chromium pré-instalado em /opt/pw-browsers).
```

> Waves 2 e 3 são sequenciais (não paralelas) para evitar corrida no working tree / `npm run build`
> entre tarefas de frontend na mesma checkout. Wave 1 mistura frontend trivial + conteúdo sem conflito.

### Definition of Done
- [ ] `npm run lint` passa (frontend)
- [ ] `npm run build` passa (SSG; `/cursos` volta a gerar página)
- [ ] Playwright sem regressões (ajustar teste do `/cursos` se necessário)
- [ ] Marcador do CFM na posição correta; nenhum "UFSC — CTC" nos metadados
- [ ] `/cursos` lista todos os cursos e a aba "Cursos" aparece na topbar
- [ ] ≥ 3 seções com UI dedicada; `docs/*.md` continua fonte única
- [ ] ui-ux-review sem findings bloqueadores
- [ ] `docs/product-backlog.md` atualizado; issues #39, #40, #45, #47, #48 referenciadas

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| #46 (enviar sugestões) | Adiado por decisão do mantenedor — depende de escolher abordagem (Google Form vs. Route Handler + e-mail) e infra. |
| B-60 / B-61 (mais centros/fichas) | Não pedidos neste recorte; entram em sprint de conteúdo próprio. |
| B-08 / B-13 (veteranos) | Bloqueados — sem submissões reais. |

### Retrospectiva do Sprint 17

**Concluído em:** 2026-08-01

**Entregue:**
- **B-76 (#39)** — coordenadas do marcador do CFM em `components/MapView.tsx` corrigidas para
  `lat -27.5994566, lng -48.5233276` (fornecidas pelo mantenedor).
- **B-77 (#40)** — "CTC" removido dos metadados: `app/layout.tsx` (title/description/OG) e
  `app/manifest.ts` (description do PWA) → "Portal dos Calouros UFSC" / "calouros da UFSC (Florianópolis)".
  O `content-editor`/`frontend-dev` detectou a ocorrência extra no `manifest.ts` (fora do escopo literal),
  que foi corrigida por ser claramente parte da intenção do #40.
- **B-74 (#47)** — seção "Ferramentas da comunidade" em `docs/links-importantes.md`: **MatrUFSC**
  (`matrufsc.github.io`) e **MyUFSC** (`myufsc.vercel.app` — planeja semestres pelo histórico síntese;
  link confirmado pelo mantenedor após o `content-editor` deixar `_A preencher_` por não achar "MyFUFSC").
- **B-75 (#45)** — `/cursos` deixou de ser `permanentRedirect` e voltou como **listagem global de todos
  os cursos agrupados por centro**; aba "Cursos" adicionada em `components/NavLinks.tsx`; `/cursos`
  reincluído no `app/sitemap.ts`. Reverte parcialmente o B-68, agora coerente (multi-centro).
- **B-73 (#48)** — primeiro passo da UI estruturada: `lib/content.ts` expõe `Section.blocks`
  (via `marked.lexer`, `docs/` segue fonte única) e 3 seções ganharam componentes dedicados —
  **links** (grid de cards com chips mailto/tel/link externo), **datas** (timeline `<dt>/<dd>` sem
  overflow no mobile), **ru** (passos numerados + alertas amber). Fallback `.prose-content` mantido
  para as demais seções.

**Findings ui-ux-review:**
- Nenhum blocker. 1 minor corrigido no mesmo sprint: tap target dos chips de contato do
  `LinkCardGrid` (`min-h-[32px]` → `min-h-[44px] py-2`). 1 minor pré-existente registrado como dívida
  (contraste do token `--primary` no dark mode nos marcadores decorativos).

**Verificações finais:** lint ✅ · build 55 páginas SSG ✅ (`/cursos` agora estático) · Playwright 8/8 ✅.

**O que foi bem:**
- Ondas com dependência bem sequenciadas: fixes triviais + conteúdo em paralelo (wave 1), depois os
  dois itens grandes de frontend isolados (waves 2 e 3) — zero corrida de build no working tree.
- `content-editor` seguiu a regra de ouro sob pressão: sem conseguir confirmar "MyFUFSC", não inventou
  link — deixou `_A preencher_` e propôs alternativas verificáveis.
- `frontend-dev` do B-73 manteve `docs/` como fonte única (parse de tokens, nada hardcoded) e preservou
  o fallback, sem quebrar as seções não migradas.

**Lições aprendidas:**
- Ao mexer em identidade/nome do site, a busca precisa cobrir também `app/manifest.ts` (PWA) e não só
  `app/layout.tsx` — o texto institucional aparece em mais de um lugar.
- WebFetch continua bloqueado (403) para praticamente todos os domínios externos neste ambiente;
  verificação de links via WebSearch cruzando fontes é o caminho, sempre registrando a incerteza.

**Pendências / follow-up:**
- **#47 / MyUFSC** — resolvido: o mantenedor confirmou o app (`myufsc.vercel.app`); publicado.
- **#48 / B-73** — é o primeiro passo (3 seções). Seções restantes (instagrams, historias) podem ganhar
  UI dedicada num sprint futuro.
- **Dívida técnica** — token `--primary-button` dedicado para dark mode.

**Para o próximo sprint (candidatos):**
- **B-60** (CCJ + CFH + CFM) e **B-61** (fichas CCE/CCS) — conteúdo.
- **#46** (enviar sugestões) — quando o mantenedor escolher a abordagem.
- Continuar **#48** (mais seções com UI dedicada).

---

## Sprint 16 — Cauda da E14 + Fichas dos Cursos do CSE (v1.10) — concluído em 2026-08-01

**Objetivo:** Fechar a "cauda" da reestruturação de navegação (E14) — link de atalho para
cursos na página de centro (B-71) e documentação técnica atualizada (B-72) — e **completar o
CSE**, publicando as fichas dos seus 5 cursos de graduação para que o calouro que navega
`/centros/cse → curso` não encontre mais uma ficha inexistente. Prioridade de produto:
**terminar o que já foi anunciado como pronto antes de abrir novos centros**.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| Link "Ver os cursos deste centro" no topo de `/centros/[slug]` | B-71 | Could / P | frontend-dev | Done |
| Atualizar `CLAUDE.md` e `docs/arquitetura.md` para a nova navegação | B-72 | Could / M | content-editor | Done |
| Fichas dos 5 cursos do CSE (B-61 parcial) | B-61 (CSE) | Should / M | content-editor | Done |

### Critérios de aceite detalhados

**B-71 — Link "Ver cursos" no topo da página de centro**
- [ ] `app/centros/[slug]/page.tsx`: quando o centro tem ≥ 1 curso, renderizar um link/botão
      "Ver os cursos do [título do centro]" com `href="#cursos-do-centro"` **antes** do bloco
      `.prose-content` (o anchor `id="cursos-do-centro"` já existe, criado no B-66).
- [ ] Se o centro não tem cursos, o link **não** é renderizado.
- [ ] Estilo consistente com a identidade visual (azul primário, acessível por teclado,
      tap target ≥ 44px).
- [ ] `npm run lint` e `npm run build` passam.

**B-72 — Documentação técnica da nova navegação**
- [ ] `CLAUDE.md`: "Estrutura do repositório" inclui `app/centros/page.tsx` (índice) e
      `app/centros/[slug]/page.tsx` (centro + cursos do centro).
- [ ] `CLAUDE.md`: seção "API" lista `/api/centros` e `/api/centros/{slug}`.
- [ ] `CLAUDE.md`: "Próximos passos" reflete o estado real pós-Sprint 16 (Sprint 17 = B-60
      CCJ/CFH/CFM + demais fichas).
- [ ] `docs/arquitetura.md`: fluxo de navegação do usuário atualizado para
      `/ → /centros → /centros/[slug] → /cursos/[slug]`.
- [ ] Nenhum arquivo de documentação menciona "portal do CTC" como identidade principal —
      sempre "Portal dos Calouros UFSC".

**B-61 (parcial CSE) — Fichas dos 5 cursos do CSE**
- [ ] 5 arquivos criados seguindo `docs/_modelo-curso.md`, com `centro: CSE` no frontmatter:
      `docs/cursos/administracao.md`, `ciencias-contabeis.md`, `ciencias-economicas.md`,
      `relacoes-internacionais.md`, `servico-social.md`.
- [ ] Coordenação, CA e atlética reaproveitados de `docs/centros/cse.md` (já verificados);
      campos sem fonte oficial ficam como `_A preencher_` — **nunca inventar**.
- [ ] Frontmatter usa `~` (null YAML) para campos vazios, não texto verboso
      (lição do Sprint 14 — evita render quebrado no template).
- [ ] Turno/grau/duração confirmados no Guia de Cursos UFSC de cada curso.
- [ ] `npm run build` inclui SSG das 5 novas páginas de curso.
- [ ] `/centros/cse` mostra os 5 cards de curso (B-66) apontando para as novas fichas.

### Ordem de execução e dependências

```
Wave única (paralelo — arquivos disjuntos, zero conflito):
  B-71  frontend-dev    — app/centros/[slug]/page.tsx (código)
  B-72  content-editor  — CLAUDE.md + docs/arquitetura.md (docs técnicas)
  B-61  content-editor  — docs/cursos/*.md (5 fichas CSE, conteúdo institucional)

Depois:
  tester — lint + build + Playwright 8/8
```

### Slugs e fontes oficiais (B-61/CSE)

| Curso | Slug do arquivo | Fonte oficial |
|-------|-----------------|---------------|
| Administração | `administracao` | https://administracao.ufsc.br/ · https://guiadecursos.ufsc.br/administracao/ |
| Ciências Contábeis | `ciencias-contabeis` | https://cienciascontabeis.ufsc.br/ · https://guiadecursos.ufsc.br/ciencias-contabeis/ |
| Ciências Econômicas | `ciencias-economicas` | https://economia.ufsc.br/ · https://guiadecursos.ufsc.br/ciencias-economicas/ |
| Relações Internacionais | `relacoes-internacionais` | https://ri.ufsc.br/ · https://guiadecursos.ufsc.br/relacoes-internacionais/ |
| Serviço Social | `servico-social` | https://servicosocial.ufsc.br/ · https://guiadecursos.ufsc.br/servico-social/ |

### Definition of Done
- [ ] `npm run lint` passa (frontend)
- [ ] `npm run build` passa (SSG com 5 novas fichas de curso — total ~53 páginas)
- [ ] Playwright 8/8 sem regressões
- [ ] `/centros/cse` exibe link "Ver cursos" (B-71) + 5 cards apontando para fichas existentes
- [ ] ui-ux-review sem findings bloqueadores
- [ ] `docs/product-backlog.md` atualizado (B-71 ✅, B-72 ✅, B-61 avança)
- [ ] `CLAUDE.md`/`arquitetura.md` refletem a navegação por centro (B-72)

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| B-60 (CCJ + CFH + CFM) | Prioridade nº 1 do CLAUDE.md, mas adiada: abrir 3 centros novos sem fichas de curso replica o problema que o CSE tem hoje. Entra no Sprint 17 assim que o CSE fechar. |
| B-08 (dicas de veterano) / B-13 (histórias) | Bloqueados — dependem de veteranos reais; não inventar conteúdo. |
| B-50 / B-37 / E13 (banco + auth + moderação) | Horizonte v2.0 — bloco integrado, fora de escopo. |

### Retrospectiva do Sprint 16

**Concluído em:** 2026-08-01

**Entregue:**
- **B-71** — `app/centros/[slug]/page.tsx`: botão "Ver os cursos do {centro}" (`.btn-primary`,
  `href="#cursos-do-centro"`, ícone `ArrowRight aria-hidden`) renderizado antes do `.prose-content`
  quando o centro tem cursos; oculto quando não há. Full-width no mobile, `sm:w-auto` no desktop.
- **B-72** — `CLAUDE.md` (estrutura do repo com `app/centros` + `app/api/centros`; tabela de API
  com `/api/centros` e `/api/centros/{slug}`; próximos passos pós-Sprint 16) e `docs/arquitetura.md`
  (fluxo `/ → /centros → /centros/[slug] → /cursos/[slug]`, infraestrutura multi-centro, ADR-9).
- **B-61 (parcial CSE)** — 5 fichas de curso: `administracao`, `ciencias-contabeis`,
  `ciencias-economicas`, `relacoes-internacionais`, `servico-social` (todas `centro: CSE`).
  Coordenação, CA e atlética reaproveitados de `docs/centros/cse.md` (já verificados); campos sem
  fonte confirmada como `_A preencher_`/`~`. `docs/README.md` com seção dos cursos do CSE.

**Findings ui-ux-review:**
- Nenhum blocker/major. 1 minor **pré-existente** (fora de escopo): contraste do token `.btn-primary`
  em dark mode (~3.4:1, branco sobre `--primary` `217 91% 62%`) — herdado, também usado em
  `not-found.tsx`; candidato a issue própria (`--primary-button` dedicado no dark, como o B-49 fez no light).

**Verificações finais:** lint ✅ · build 55 páginas SSG ✅ (5 rotas de curso CSE confirmadas) ·
Playwright 8/8 ✅.

**Nota de infraestrutura (Playwright):** o `tester` inicialmente reportou Playwright bloqueado —
`npx playwright install` é rejeitado pelo proxy da organização (`cdn.playwright.dev` fora da
allowlist). O ambiente já traz Chromium pré-instalado em `/opt/pw-browsers`, mas o `@playwright/test`
do projeto espera um build de `chrome-headless-shell` mais novo (1228) que o pré-instalado (1194).
Solução: rodar apontando `launchOptions.executablePath` para `/opt/pw-browsers/chromium` (Chromium
completo, sem a checagem de versão do headless-shell) — 8/8 passaram. Esse override foi só para a
verificação local; **não** foi commitado (o CI do GitHub instala os browsers normalmente).

**O que foi bem:**
- "Terminar > começar": priorizar as fichas do CSE (centro já publicado, mas com cursos sem ficha)
  em vez de abrir novos centros eliminou uma experiência quebrada real (`/centros/cse → curso → 404`).
- Wave única com 3 agentes em paralelo (código + docs técnicas + conteúdo) sem conflito — arquivos
  totalmente disjuntos, como planejado.
- O `content-editor` foi disciplinado com a regra de ouro sob adversidade: com os domínios `*.ufsc.br`
  retornando 403 a fetch direto, usou busca indexada como fallback, detectou números contraditórios
  (duração de Contábeis/Econômicas) e deixou `_A preencher_` em vez de chutar.

**Lições aprendidas:**
- Fetch direto a `*.ufsc.br` está bloqueado neste ambiente (403). Para conteúdo que dependa desses
  sites, reaproveitar dados já verificados em arquivos existentes (`docs/centros/*.md`) é mais
  confiável que re-pesquisar; sinalizar com "Nota" quando um campo vier de busca indexada.
- Playwright neste ambiente exige `executablePath` apontando para o Chromium pré-instalado — não
  tentar `playwright install` (bloqueado por política). Vale considerar deixar isso documentado para
  o `tester` (ex.: em CLAUDE.md ou no próprio `playwright.config.ts` via env guard).

**Para o próximo sprint (Sprint 17, candidatos):**
- **B-60** — CCJ + CFH + CFM (conteúdo de centro; infra pronta).
- **B-61** — fichas de curso do CCE e CCS (centros já publicados).
- **Dívida técnica** — token `--primary-button` dedicado para dark mode (finding do ui-ux-review).

---

## Sprint 15 — Navegação por Centro: reestruturação arquitetural (v1.9) — concluído em 2026-07-30

**Objetivo:** Transformar o portal de "portal do CTC com centros extras" para "portal da UFSC
organizado por centro" (`Home → /centros → /centros/ctc → cursos`), removendo "CTC" do header.

**Entregue:** B-64 (`docs/centros/ctc.md` — CTC entra em `listCenters()`); B-67 (header/hero/nav
sem "CTC"); B-65 (página `/centros` com grid de centros + sitemap); B-66 (`/centros/[slug]` lista
os cursos do centro, filtrando por `centro`); B-68 (`/cursos` → `permanentRedirect("/centros")`);
B-69 (redirects 301 de `/secoes/coordenacoes` e `/secoes/atleticas` → `/centros/ctc`);
B-70 (home sem cards Coordenações/Atléticas via `HIDDEN_SECTIONS`, novo card "Centros e cursos").
Findings ui-ux-review corrigidos (filtro `HIDDEN_SECTIONS`, aria-labels). lint ✅ · build 50
páginas SSG ✅ · Playwright 8/8 ✅.

<details>
<summary>Detalhamento completo do Sprint 15 (histórias, critérios, retrospectiva)</summary>

### Sprint 15 — versão detalhada

**Objetivo:** Transformar o portal de "portal do CTC com centros extras" para "portal da UFSC
organizado por centro". O calouro navega: Home → /centros → /centros/ctc → cursos do CTC.
O header para de dizer "CTC". O CTC entra na infraestrutura multi-centro como os demais.

| História | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Criar `docs/centros/ctc.md` com conteúdo do CTC | B-64 | Must / M | Feito |
| Remover "CTC" do header e badge hero | B-67 | Must / P | Feito |
| Página `/centros` — índice de todos os centros | B-65 | Must / M | Feito |
| Cursos do centro em `/centros/[slug]` | B-66 | Must / M | Feito |
| Redirect `/cursos` → `/centros` | B-68 | Should / P | Feito |
| Redirects `/secoes/coordenacoes` e `/secoes/atleticas` → `/centros/ctc` | B-69 | Should / P | Feito |
| Remover "Coordenações" e "Atléticas" do grid da home | B-70 | Should / P | Feito |

### Critérios de aceite detalhados

**B-64 — `docs/centros/ctc.md`**
- [ ] Arquivo criado com frontmatter `slug: ctc`, `titulo`, `descricao`, `ultima_verificacao`.
- [ ] Seção **Coordenações** consolidada de `docs/coordenacoes.md` (ou link para ela).
- [ ] Seção **Atléticas e festas** consolidada de `docs/atleticas-e-festas.md` (ou link).
- [ ] Seção **Cursos** listando os 13 cursos do CTC com links para `/cursos/<slug>`.
- [ ] `listCenters()` retorna o CTC (slug `ctc`) junto com CCA, CSE, CCE, CCS.

**B-67 — Header e hero sem "CTC"**
- [ ] `components/Header.tsx:20` — subtítulo `"UFSC — CTC"` → `"UFSC"`.
- [ ] `app/page.tsx:59` — badge `"CTC · Campus Trindade · Florianópolis"` → `"UFSC · Florianópolis"`.
- [ ] `components/NavLinks.tsx:19` — link `/cursos` → `/centros` com label "Centros".
- [ ] `app/cursos/page.tsx` metadata title/description — remover referências a "CTC".

**B-65 — Página `/centros`**
- [ ] `app/centros/page.tsx` criado com SSG.
- [ ] Lista todos os centros retornados por `listCenters()` em grid mobile-first.
- [ ] Cada card mostra nome, descrição e link para `/centros/[slug]`.
- [ ] `generateMetadata` com título "Centros da UFSC — Portal dos Calouros".
- [ ] Entra no sitemap (`app/sitemap.ts`).

**B-66 — Cursos do centro em `/centros/[slug]`**
- [ ] `app/centros/[slug]/page.tsx` atualizado: após o HTML do centro, exibe seção "Cursos deste centro".
- [ ] Filtra `listCourses()` pelo campo `centro === slug.toUpperCase()` (ex: slug `ctc` → `centro: "CTC"`).
- [ ] Se não houver cursos, a seção não aparece (sem estado vazio forçado).
- [ ] Cards de curso usam o mesmo componente `CourseCard` de `/cursos` (ou inline equivalente).

**B-68 — Redirect `/cursos`**
- [ ] `app/cursos/page.tsx` substituída por redirect permanente para `/centros`
      via `permanentRedirect("/centros")` do Next.js, ou
- [ ] Alternativa: banner "Os cursos agora estão organizados por centro →" com link para `/centros`.

**B-69 — Redirects de legado**
- [ ] Acesso a `/secoes/coordenacoes` redireciona para `/centros/ctc`.
- [ ] Acesso a `/secoes/atleticas` redireciona para `/centros/ctc`.
- [ ] Implementação via `next.config.ts` redirects (array `redirects`) ou lógica na página de seção.
- [ ] As demais seções (`/secoes/ru`, `/secoes/links`, etc.) continuam funcionando normalmente.

**B-70 — Home sem Coordenações/Atléticas**
- [ ] `SECTION_ICONS`, `SECTION_COLORS` e `SECTION_DEDICATED_ROUTES` em `app/page.tsx` sem
      entradas `coordenacoes` e `atleticas`.
- [ ] O SLUG_MAP em `lib/content.ts` mantém `coordenacoes` e `atleticas` (API continua funcionando
      e os redirects de B-69 dependem disso); apenas a home para de exibi-los.
- [ ] Home exibe novo card "Centros e cursos" linkando para `/centros` com ícone `Building2`.
- [ ] Grid da home fica com 9 cards (eram 10: -2 CTC-específicos +1 novo Centros).

### Ordem de execução e dependências

```
Wave 1 (paralelo):
  B-64  content-editor — cria docs/centros/ctc.md
  B-67  frontend-dev   — remove "CTC" do header, badge e nav

Wave 2 (após B-64):
  B-65 + B-66 + B-68 + B-69 + B-70  frontend-dev — todas as mudanças de UI/routing
```

### Definição de Pronto (sprint inteiro)

- [ ] `/centros` lista todos os 5 centros (CTC, CCA, CSE, CCE, CCS).
- [ ] `/centros/ctc` exibe conteúdo do CTC + lista dos 13 cursos.
- [ ] `/centros/cca` exibe conteúdo do CCA + lista dos 4 cursos.
- [ ] Header diz "UFSC" (sem "CTC").
- [ ] `/cursos` redireciona para `/centros`.
- [ ] `/secoes/coordenacoes` redireciona para `/centros/ctc`.
- [ ] Home não exibe mais cards "Coordenações" e "Atléticas"; exibe card "Centros".
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG com `/centros` + 5 rotas `/centros/[slug]`).
- [ ] Playwright 8/8 sem regressões (ajustar testes se necessário).
- [ ] `docs/product-backlog.md` com B-64–B-70 marcados como Feito.

### O que NÃO entra e por que

| Item | Motivo |
|------|--------|
| B-71 (link âncora "Ver cursos") | Could — melhoria de UX; entra no próximo sprint |
| B-72 (atualizar CLAUDE.md/arquitetura.md) | Could — documentação técnica; entra no próximo sprint |
| B-60 (mais centros) | Conteúdo — não misturar com refatoração arquitetural |
| B-61 (fichas CSE) | Idem |

### Retrospectiva do Sprint 15

**Concluído em:** 2026-07-30

**Entregue:**
- **B-64** — `docs/centros/ctc.md` com tabela de referência rápida das 13 coordenações,
  atléticas com Instagram, lista dos 13 cursos com links — CTC agora em `listCenters()`.
- **B-67** — `components/Header.tsx`: subtítulo `"UFSC — CTC"` → `"UFSC"`.
  `app/page.tsx`: badge hero `"CTC · Campus Trindade · Florianópolis"` → `"UFSC · Florianópolis"`.
  `components/NavLinks.tsx`: link `/cursos` "Cursos" → `/centros` "Centros".
  `app/cursos/page.tsx`: metadata e H1 sem referências a "CTC".
- **B-65** — `app/centros/page.tsx` criado: hero + grid de centros via `listCenters()`;
  `/centros` adicionado ao sitemap (prioridade 0.9).
- **B-66** — `app/centros/[slug]/page.tsx` atualizado: seção "Cursos deste centro" filtrando
  `listCourses()` por `centro === slug` — CTC mostra 13 cursos, CCA mostra 4, etc.
  Back-link atualizado para "Todos os centros" (`/centros`).
- **B-68** — `app/cursos/page.tsx` substituída por `permanentRedirect("/centros")`.
- **B-69** — `next.config.ts` com redirects 301: `/secoes/coordenacoes` e `/secoes/atleticas`
  → `/centros/ctc`.
- **B-70** — `app/page.tsx`: `coordenacoes` e `atleticas` filtradas do grid via `HIDDEN_SECTIONS`;
  nova seção "Centros e cursos" com card linking `/centros`.

**Findings ui-ux-review corrigidos antes do merge:**
- Major: `listSections()` retornava `coordenacoes` e `atleticas` mesmo após remoção dos ícones —
  cards apareciam com ícone fallback `BookOpen`. Fix: `HIDDEN_SECTIONS` filter em `app/page.tsx`.
- Minor ×2: `aria-hidden` faltando no ícone do hero de `/centros`; `aria-labelledby` faltando
  na seção "Cursos deste centro".

**Verificações finais:** lint ✅ · build 50 páginas SSG ✅ · Playwright 8/8 ✅

**O que foi bem:**
- A separação wave 1 (conteúdo + texto) → wave 2 (UI/routing) funcionou perfeitamente;
  zero conflitos entre agentes.
- O princípio "basta criar o .md" se confirmou: CTC entrou na infra de centros sem modificar
  `lib/content.ts` — só um arquivo de conteúdo novo.
- Redirect `/cursos` → `/centros` via `permanentRedirect` foi a solução mais limpa;
  mantém backward-compat sem código morto.

**Lições aprendidas:**
- Remover entradas de um mapa de configuração (SECTION_ICONS) não basta se a fonte de dados
  (`listSections()`) ainda retorna os itens. Sempre verificar se o dado é filtrado na origem
  ou no render — neste caso o filtro precisou ser explícito no componente.

**Para o próximo sprint (candidatos):**
- **B-71** — link âncora "Ver cursos" no topo das páginas de centro (Could, P).
- **B-72** — atualizar CLAUDE.md e arquitetura.md para refletir a nova identidade (Could, M).
- **B-60** — mais centros: CCJ, CFH, CFM (só conteúdo, infra pronta).
- **B-61** — fichas dos cursos do CSE (5 cursos, centro já publicado).

</details>

---

## Sprint 14 — Mais Centros: CCE + CCS + Fichas dos Cursos do CCA (v1.8)

**Objetivo:** Ampliar a cobertura do portal com dois centros de alto impacto (CCE e CCS)
criando somente arquivos de conteúdo — zero código novo — e publicar as fichas dos 4 cursos
de graduação do CCA seguindo o modelo já estabelecido. Valida definitivamente o princípio
"basta criar o .md" da arquitetura multi-centro.

| História | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Mais centros B-60: CCE + CCS (Comunicação e Saúde) | B-60 (parcial) | Should / M | Feito |
| Fichas dos cursos do CCA (B-61 parcial: 4 cursos) | B-61 (parcial) | Should / M | Feito |

### Critérios de aceite detalhados

**B-60 — CCE + CCS**

- [ ] `docs/centros/cce.md` com frontmatter YAML (`slug: cce`, `titulo`, `descricao`,
      `ultima_verificacao`) e seções: Coordenações, CAs, Atléticas, Links Úteis.
- [ ] `docs/centros/ccs.md` com mesma estrutura.
- [ ] Dados verificados em `cce.ufsc.br` e `ccs.ufsc.br`; campos sem confirmação ficam
      como `_A preencher_`.
- [ ] `npm run build` inclui SSG das páginas `/centros/cce` e `/centros/ccs`.
- [ ] `npm run lint` passa sem erros.
- [ ] Playwright 8/8 sem regressão.

**B-61 (parcial) — Fichas dos cursos do CCA (4 cursos)**

- [ ] `docs/cursos/agronomia.md` com `centro: CCA` no frontmatter; coordenação com
      e-mail e telefone verificados em fonte oficial.
- [ ] `docs/cursos/ciencia-e-tecnologia-de-alimentos.md` — idem.
- [ ] `docs/cursos/engenharia-de-aquicultura.md` — idem.
- [ ] `docs/cursos/zootecnia.md` — idem.
- [ ] Cada ficha segue o template `_modelo-curso.md` (frontmatter YAML + seções:
      Sobre o curso / Coordenação / Vida do curso / Dicas de veterano / Onde estudar).
- [ ] `npm run build` inclui SSG das 4 novas páginas de curso.
- [ ] `npm run lint` passa sem erros.
- [ ] Playwright 8/8 sem regressão.

### Ordem de execução e dependências

1. **CCE** (content-editor pesquisa cce.ufsc.br) — pode rodar em paralelo com CCS e fichas CCA.
2. **CCS** (content-editor pesquisa ccs.ufsc.br) — pode rodar em paralelo com CCE e fichas CCA.
3. **Fichas CCA** (content-editor pesquisa cca.ufsc.br/cursos) — pode rodar em paralelo com CCE e CCS.
4. **Tester** roda lint + build + Playwright sobre todos os arquivos criados.

> Todo o Sprint 14 é puramente de conteúdo — nenhuma linha de TypeScript/React precisa ser
> tocada. A infraestrutura multi-centro já suporta tudo.

### Notas técnicas para os agentes

**Frontmatter obrigatório para centros (`docs/centros/<slug>.md`):**

```yaml
---
slug: cce
titulo: "Centro de Comunicação e Expressão (CCE)"
descricao: "..."
ultima_verificacao: "julho/2026"
---
```

**Frontmatter obrigatório para cursos do CCA (`docs/cursos/<slug>.md`):**

```yaml
---
slug: agronomia
curso: Agronomia
centro: CCA
grau: Bacharelado
turno: Diurno
coordenacao:
  nome: _A preencher_
  email: _A preencher_
  telefone: _A preencher_
  sala: _A preencher_
atletica: _A preencher_
instagram_curso: _A preencher_
---
```

**Slugs dos cursos do CCA:**

| Curso | Slug do arquivo |
|-------|----------------|
| Agronomia | `agronomia` |
| Ciência e Tecnologia de Alimentos | `ciencia-e-tecnologia-de-alimentos` |
| Engenharia de Aquicultura | `engenharia-de-aquicultura` |
| Zootecnia | `zootecnia` |

**Fontes oficiais a consultar:**

| Centro / Curso | URL |
|----------------|-----|
| CCE | https://cce.ufsc.br/ |
| CCS | https://ccs.ufsc.br/ |
| Agronomia (CCA) | https://cca.ufsc.br/agronomia/ |
| CTA (CCA) | https://cca.ufsc.br/ciencia-tecnologia-alimentos/ |
| Eng. Aquicultura (CCA) | https://cca.ufsc.br/aquicultura/ |
| Zootecnia (CCA) | https://cca.ufsc.br/zootecnia/ |

### Definição de Pronto (sprint inteiro)

- [ ] `docs/centros/cce.md` e `docs/centros/ccs.md` criados com dados verificados ou `_A preencher_`.
- [ ] 4 fichas de curso do CCA criadas (`agronomia.md`, `ciencia-e-tecnologia-de-alimentos.md`,
      `engenharia-de-aquicultura.md`, `zootecnia.md`).
- [ ] Páginas `/centros/cce`, `/centros/ccs`, `/cursos/agronomia`, `/cursos/ciencia-e-tecnologia-de-alimentos`,
      `/cursos/engenharia-de-aquicultura`, `/cursos/zootecnia` acessíveis.
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG com 6 novas páginas — total ~48).
- [ ] Playwright 8/8 sem regressões.
- [ ] `docs/product-backlog.md` atualizado (B-60 continua 🚧; B-61 passa para 🚧 Em andamento).
- [ ] `docs/SPRINT.md` com retrospectiva preenchida antes de fechar.

### O que NÃO entra e por que

| Item | Motivo |
|------|--------|
| Demais centros B-60 (CCJ, CFH, CFM, CCB, CED, CDS, Joinville, Araranguá) | Escopo futuro — validar padrão de conteúdo com CCE e CCS antes de escalar |
| B-61 (fichas dos cursos do CSE) | Sprint separado — CSE tem 5 cursos e escopo próprio |
| B-13 (histórias de veteranos) | Bloqueado: sem submissões reais via `historia-veterano.yml` |
| B-37 / B-50 / E13 | Horizonte v2.0 — banco + auth + moderação como bloco integrado |

### Retrospectiva do Sprint 14

**Concluído em:** 2026-07-30

**Entregue:**
- **B-60 (CCE)** — `docs/centros/cce.md` com 9 cursos presenciais (Animação, Artes Cênicas,
  Cinema, Design, Design de Produto, Jornalismo, Letras Estrangeiras, Letras Português,
  Secretariado Executivo) + cursos EaD; diretoria Romanelli/Acosta Pereira (2025–2029);
  CAs: CADe, CALJ, CALL, CACine, CAAC; atléticas AAGB Graus Bons e Atlética de Letras;
  eventos SACine e Semana de Letras verificados.
- **B-60 (CCS)** — `docs/centros/ccs.md` com 6 cursos (Enfermagem, Farmácia, Fonoaudiologia,
  Medicina, Nutrição, Odontologia); diretoria Neves/Moretti Pires; CAs: CALEnf, CAF,
  CALIFONO, CALIMED, CAOQA; atléticas AAA-MED, ALFA, Atlética de Letras; eventos
  SAMED, JAF, EAAO verificados; endereço Rua Delfino Conti confirmado.
- **B-61 (fichas CCA — 4 cursos)** — `docs/cursos/agronomia.md`, `ciencia-e-tecnologia-de-alimentos.md`,
  `engenharia-de-aquicultura.md`, `zootecnia.md`; coordenadores e telefones verificados;
  CAs (CAAGRO, CAEAQUI, CAZoot) e atléticas (ATAG, ATZOOT) com links confirmados;
  nota de localização Itacorubi em todas as fichas.

**Findings ui-ux-review corrigidos antes do merge:**
- Major ×3: campos `turno`, `email`, `sala`, `atendimento` com texto verboso `_A preencher_ — verificar em <URL>` no frontmatter renderizavam como texto solto no header card e como link `mailto:` quebrado → substituídos por `~` (null YAML) para supressão limpa pelo template
- Minor: meta description hardcoded `"dicas para o CTC da UFSC"` em `app/cursos/[slug]/page.tsx:21` → corrigido para `"dicas para calouros da UFSC"` (independente de centro)

**Verificações finais:** lint ✅ · build 48 páginas SSG ✅ · Playwright 8/8 ✅

**O que foi bem:**
- Sprint 100% de conteúdo confirmado: 6 novos arquivos `.md`, zero linhas de TypeScript/React
  adicionadas. A arquitetura multi-centro do Sprint 13 absorveu CCE e CCS sem nenhum atrito.
- Os 3 blocos (CCE, CCS, fichas CCA) rodaram em paralelo e todos concluíram sem conflitos.
- Content-editors foram disciplinados com `_A preencher_` — dados sem fonte oficial foram
  corretamente sinalizados em vez de inventados.

**Lições aprendidas:**
- Campos de frontmatter que ficam em branco devem usar `~` (null YAML), nunca texto verboso.
  Texto explicativo de "por que está em branco" pertence ao corpo do markdown, não ao frontmatter.
  Isso previne renderização incorreta no template (link mailto quebrado, texto de URL no header).
- Meta description de cursos hardcoded para CTC — corrigida agora, mas indica que o template
  de curso foi concebido apenas para CTC. A expansão para outros centros exigiu essa correção.

**Para o próximo sprint (candidatos):**
- **B-60 (CCJ + CFH + CFM)** — próximos centros; infraestrutura pronta, só conteúdo.
- **B-61 (fichas CSE)** — 5 cursos do CSE já têm centro publicado; modelo pronto.
- **B-08** — dicas de veterano nas fichas do CTC, quando houver submissões reais.

---

## Sprint 13 — Infraestrutura Multi-Centro + CCA e CSE (B-60 micro-sprint, v1.7)

**Objetivo:** Estabelecer a infraestrutura de conteúdo multi-centro (nova rota `/centros/[slug]`,
funções `getCenter`/`listCenters` em `lib/content.ts`, modelo `docs/centros/<slug>.md`) e
publicar CCA (Itacorubi) e CSE (Campus Trindade) como os dois primeiros centros além do CTC —
integrando com o mapa já existente.

| História | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Infraestrutura multi-centro + conteúdo do CCA e CSE (piloto B-60) | B-60 (parcial) | Should / M | A fazer |

### Critérios de aceite detalhados

**B-60 (parcial) — Infraestrutura + CCA + CSE**

- [ ] `docs/centros/cca.md` criado com frontmatter YAML (`slug: cca`, `titulo`, `descricao`,
      `ultima_verificacao`) e seções: Coordenações, Centros Acadêmicos (CA), Atléticas,
      Links Úteis. Campos sem fonte oficial ficam como `_A preencher_`.
- [ ] `docs/centros/cse.md` criado com a mesma estrutura do CCA. Campos não confirmados
      ficam como `_A preencher_`.
- [ ] `lib/content.ts` atualizado: funções `listCenters()` e `getCenter(slug)` leem
      `docs/centros/*.md` (excluindo arquivos `_modelo*`), seguindo o mesmo padrão de
      `listCourses()`/`getCourse()`.
- [ ] Rota `app/api/centros/[slug]/route.ts` retorna o conteúdo do centro como JSON
      (consistência com `/api/sections/[slug]`).
- [ ] Rota `app/api/centros/route.ts` lista todos os centros disponíveis.
- [ ] Página `app/centros/[slug]/page.tsx` renderiza o conteúdo com SSG
      (`generateStaticParams` baseado em `listCenters()`), com `generateMetadata` com
      título e descrição únicos por centro.
- [ ] Popup do marcador CCA no mapa (`components/MapView.tsx`) inclui link para
      `/centros/cca`.
- [ ] Popup do marcador CSE no mapa inclui link para `/centros/cse`.
- [ ] `app/sitemap.ts` atualizado para incluir rotas `/centros/[slug]` dinamicamente.
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG — páginas `/centros/cca` e `/centros/cse` incluídas).
- [ ] Testes E2E do Playwright passam sem regressões.

### Ordem de execução e dependências

1. **Loader** (`lib/content.ts`) — adicionar `listCenters()`/`getCenter()` e a interface
   `Center`. Pré-requisito de todas as etapas seguintes.
2. **Conteúdo** (`docs/centros/cca.md` e `docs/centros/cse.md`) — pesquisar dados
   reais a partir de fontes oficiais (`cca.ufsc.br`, `cse.ufsc.br`). Pode rodar em
   paralelo com a etapa 1.
3. **API e Frontend** (`app/api/centros/` e `app/centros/`) — criar rotas e página
   de renderização. Depende do loader (etapa 1).
4. **Integração Mapa** (`components/MapView.tsx`) — adicionar links nos popups de CCA
   e CSE. Depende das páginas existirem (etapa 3).
5. **Sitemap** (`app/sitemap.ts`) — adicionar entradas `/centros/*`. Depende do loader.

### Notas técnicas para os agentes

**Estrutura do frontmatter de `docs/centros/<slug>.md`:**

```yaml
---
slug: cca
titulo: "Centro de Ciências Agrárias (CCA)"
descricao: "Centro localizado em Itacorubi (fora do Campus Trindade), com cursos de Agronomia, Zootecnia, Medicina Veterinária e afins."
ultima_verificacao: "julho/2026"
---
```

**Interface a adicionar em `lib/content.ts`:**

```typescript
export interface CenterSummary {
  slug: string;
  title: string;
  description: string;
}

export interface Center extends CenterSummary {
  metadata: Record<string, unknown>;
  content_md: string;
  content_html: string;
}
```

**Funções a adicionar em `lib/content.ts`:**

```typescript
function iterCenterFiles(): string[] {
  const centersDir = path.join(DOCS_DIR, "centros");
  if (!fs.existsSync(centersDir)) return [];
  return fs.readdirSync(centersDir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .sort()
    .map((f) => path.join(centersDir, f));
}

export function listCenters(): CenterSummary[] { ... }
export function getCenter(slug: string): Center | null { ... }
```

**Slugs de centro para o mapa (`components/MapView.tsx`):**

| Centro | Slug para link |
|--------|---------------|
| CCA | `cca` |
| CSE | `cse` |

### Definição de Pronto (sprint inteiro)

- [ ] `docs/centros/cca.md` e `docs/centros/cse.md` criados com dados verificados ou `_A preencher_`.
- [ ] Páginas `/centros/cca` e `/centros/cse` acessíveis no servidor local.
- [ ] Popups CCA e CSE no mapa têm link para as respectivas páginas.
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG completo, novas páginas incluídas).
- [ ] Testes E2E Playwright passam sem regressões.
- [ ] `docs/product-backlog.md` atualizado (B-60 marcado como 🚧 Em andamento).
- [ ] `docs/SPRINT.md` com retrospectiva preenchida antes de fechar.

### O que NÃO entra e por que

| Item | Motivo da exclusão |
|------|--------------------|
| Demais centros (CCE, CCS, CCJ, CFH, CFM, CCB, CED, CDS) | Escopo futuro — validar arquitetura com 2 centros antes de escalar |
| B-61 (fichas de cursos do CCA e CSE) | Sprint separado; cursos do CCA (~7) e CSE (~5) são escopo próprio após validar a infra |
| B-50 + B-37 + E13 | Horizonte v2.0; banco + auth + moderação como bloco integrado |
| B-13 (histórias de veteranos) | Bloqueado: sem submissões reais confirmadas via `historia-veterano.yml` |

### Retrospectiva do Sprint 13

**Concluído em:** 2026-07-29

**Entregue:**
- **Infraestrutura multi-centro** — `lib/content.ts` ganhou `CenterSummary`, `Center`, `iterCenterFiles()`,
  `listCenters()` e `getCenter()`, seguindo o padrão exato de cursos. `app/api/centros/route.ts` e
  `app/api/centros/[slug]/route.ts` criadas. `app/sitemap.ts` atualizado para incluir `/centros/*`
  dinamicamente. Arquitetura pronta para receber mais centros sem tocar no código — basta criar
  `docs/centros/<slug>.md`.
- **B-60 (CCA)** — `docs/centros/cca.md` com 4 cursos verificados (Agronomia, CTA, Eng. Aquicultura,
  Zootecnia), coordenações com telefones e e-mails, CAs (CAAGRO, CACTA, CALEA, CAZoot), atléticas
  (ATAG, ATZoot), eventos (SEAGRO, SEMAZOOT, SACTA), RU próprio em Itacorubi, guia de transporte
  (linha 165). Nota: lista de cursos corrigida para 4 (backlog mencionava 7 — Medicina Veterinária
  e Recursos Naturais não têm graduação ativa no CCA; confirmado via cca.ufsc.br).
- **B-60 (CSE)** — `docs/centros/cse.md` com 5 cursos, todas coordenações com e-mails e telefones
  verificados, CAs (CAAD, CACIC, CALE, CARI, CALISS), atléticas (Atlética ADM, ATACC, ATECO),
  festas (Apocalipse, Internação, SAAD). Dados da direção (Profª. Casagrande) verificados em
  cse.ufsc.br/equipe/.
- **Integração mapa** — campo `link?: string` adicionado à interface `MapMarker`; popups de CCA e
  CSE incluem link "Ver página do centro →" para `/centros/cca` e `/centros/cse`.

**Findings ui-ux-review corrigidos antes do merge:**
- Major: tap target do link no popup (`display:inline-block`) abaixo de 44px → `display:block;padding:10px 0`
- Minor: legenda com `text-gray-900` → token `text-ink-primary` (linhas 330 e 333)

**Verificações finais:** lint ✅ · build 42 páginas SSG ✅ · Playwright 8/8 ✅

**O que foi bem:**
- Arquitetura "basta criar o .md" validada: adicionar CSE após CCA foi só conteúdo, zero código extra.
- Content-editors pesquisaram fontes oficiais com disciplina — muitos campos `_A preencher_` honestos
  em vez de dados inventados.
- Coordenações do CCA e CSE com telefones e WhatsApp verificados — alta utilidade imediata para calouros.

**Lições aprendidas:**
- CCA tem 4 cursos de graduação, não 7 como o backlog indicava — o B-61 precisará ser revisado
  para refletir a lista real antes do próximo sprint de fichas.
- Popup Leaflet com `inline-block` não satisfaz tap target — usar `display:block` com padding
  vertical é o padrão correto em HTML injetado no Leaflet.

**Para o próximo sprint (candidatos):**
- **B-60 (demais centros)** — CCE, CCS, CCJ, CFH, CFM, CCB, CED, CDS em micro-sprints de 2–3
  centros por vez (infraestrutura já pronta — é só conteúdo).
- **B-61 (fichas de cursos do CCA)** — 4 cursos confirmados; modelo `docs/cursos/<slug>.md` já existe.
- **B-13 (histórias de veteranos)** — desbloqueado assim que houver submissões reais via
  `historia-veterano.yml`.

---

## Sprint 12 — Mapa Completo: Todos os Centros da UFSC + Filtro por Categoria (v1.6)

**Objetivo:** Expandir o mapa interativo do campus para cobrir todos os centros da UFSC
Florianópolis — incluindo o CCA em Itacorubi, geograficamente separado do Campus Trindade —
e adicionar um sistema de filtro por categoria para que o calouro encontre rapidamente
o que precisa quando o mapa tem muitos marcadores.

| Historia | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Mapa com pontos de todos os centros da UFSC (incl. CCA Itacorubi) | B-62 | Should / M | Feito |
| Filtro por categoria no mapa (chips: Centros, Alimentação, Saúde…) | B-63 | Should / M | Feito |

### Criterios de aceite detalhados

**B-62 — Mapa com todos os centros da UFSC**

- [ ] Marcadores adicionados para os centros do Campus Trindade: CCE, CCS, CCJ, CFH,
      CFM, CCB, CSE, CED, CDS — com coordenadas fornecidas pelo mantenedor em 2026-07-28.
- [ ] Marcador do CCA em Itacorubi (coords: -27.5697, -48.4863) com popup destacando
      "⚠️ Localizado em Itacorubi — ~4 km do Campus Trindade · Rua Admar Gonzaga, 1346".
- [ ] Label da categoria "teaching" atualizado de "Ensino / CTC" para "Centros Academicos"
      em `CATEGORY_LABELS` em `components/MapView.tsx`.
- [ ] Mapa usa `map.fitBounds()` para ajustar o zoom e mostrar tanto o Campus Trindade
      quanto o CCA em Itacorubi simultaneamente ao carregar.
- [ ] `aria-label` do container do mapa atualizado: "Mapa interativo dos campi da UFSC
      Florianopolis com marcadores de pontos de interesse".
- [ ] `npm run lint` e `npm run build` passam.

**B-63 — Filtro por categoria no mapa**

- [ ] Chips/botoes de filtro renderizados acima do mapa, dentro de `MapView.tsx`,
      com as categorias: Todos, Centros Academicos, Alimentacao, Saude, Transporte,
      Estudo / Biblioteca, Administracao.
- [ ] "Todos" ativo por padrao; clicar numa categoria filtra os marcadores; clicar
      de novo (ou "Todos") desfaz o filtro.
- [ ] Marcadores mostrados/ocultos em tempo real com `addTo(map)` / `removeFrom(map)`
      do Leaflet — sem re-montar o mapa.
- [ ] Refs dos marcadores Leaflet guardados em `markerLayersRef` para manipulacao
      imperativa eficiente.
- [ ] Chips acessiveis por teclado (`<button>` nativo), com `aria-pressed` indicando
      estado ativo.
- [ ] Layout dos chips: scroll horizontal em mobile (overflow-x: auto), wrap em desktop.
- [ ] `npm run lint` e `npm run build` passam.

### Ordem de execucao e dependencias

1. **B-62 primeiro** — adiciona marcadores e ajusta labels de categoria.
   Pré-requisito de B-63: o filtro precisa dos marcadores reais para fazer sentido.
2. **B-63 segundo** — implementa estado de filtro e UI sobre os marcadores expandidos.
   Sem dependencias externas alem de B-62.

### Notas tecnicas para os agentes

**B-62 — Coordenadas dos centros (verificar antes de usar):**

| Centro | Coordenadas verificadas (lat, lng) | Referencia |
|--------|-----------------------------------|------------|
| CCE | -27.6009829301275, -48.52141492932045 | Campus Trindade |
| CCS | -27.59919258520732, -48.51762121161074 | Campus Trindade |
| CCJ | -27.598497640726105, -48.522066575101306 | Campus Trindade |
| CFH | -27.60213042929666, -48.52322292193917 | Campus Trindade |
| CFM | -27.601411120065425, -48.52380552762934 | Campus Trindade |
| CCB | -27.59832906280479, -48.51465289648096 | Campus Trindade |
| CSE | -27.599022119647845, -48.52152701695787 | Campus Trindade |
| CED | -27.60214617175289, -48.523073290850284 | Campus Trindade |
| CDS | -27.6038314630442, -48.51962283349618 | Campus Trindade (Centro de Desportos e Saude) |
| CCA | -27.582124154997455, -48.5043389382004 | Itacorubi — fora do Campus Trindade |

> Coordenadas fornecidas pelo mantenedor do projeto em 2026-07-28. Usar exatamente esses valores.

**B-63 — Arquitetura do filtro:**

```tsx
// Estado: null = "Todos", string = categoria ativa
const [activeCategory, setActiveCategory] = useState<MapMarker["category"] | null>(null);

// Ref para pares {marker: L.Marker, category}
const markerLayersRef = useRef<{ lMarker: L.Marker; category: MapMarker["category"] }[]>([]);

// useEffect que reage ao filtro (separado do useEffect de init do mapa)
useEffect(() => {
  if (!mapRef.current) return;
  markerLayersRef.current.forEach(({ lMarker, category }) => {
    if (activeCategory === null || category === activeCategory) {
      lMarker.addTo(mapRef.current!);
    } else {
      lMarker.removeFrom(mapRef.current!);
    }
  });
}, [activeCategory]);
```

### Definicao de Pronto (sprint inteiro)

- [ ] Todos os marcadores de centros com coordenadas verificadas presentes no mapa.
- [ ] CCA aparece no mapa com localizacao em Itacorubi e popup de aviso.
- [ ] Filtro por categoria funciona e e acessivel por teclado.
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG completo).
- [ ] Testes E2E do Playwright passam (`npx playwright test`).
- [ ] `docs/product-backlog.md` com B-62 e B-63 marcados como Feito.
- [ ] `docs/SPRINT.md` com retrospectiva preenchida antes de fechar.

### O que NAO entra e por que

| Item | Motivo da exclusao |
|------|--------------------|
| B-60 (conteudo de todos os centros) | G — requer levantamento de dados de 11+ centros; muito conteudo para um sprint |
| B-61 (fichas de todos os cursos) | G — dezenas de cursos; mesmo motivo de B-60 |
| B-50 + B-37 + E13 | Horizonte v2.0; banco + auth + moderacao como bloco integrado |
| B-13 (historias de veteranos) | Bloqueado: sem submissoes reais confirmadas |

### Retrospectiva do Sprint 12

**Concluído em:** 2026-07-28

**Entregue:**
- **B-62** — 10 novos marcadores em `components/MapView.tsx`: CCE, CCS, CCJ, CFH, CFM,
  CCB, CSE, CED, CDS no Campus Trindade + CCA em Itacorubi (-27.582124, -48.504339)
  com aviso de localização no popup. Label renomeado de "Ensino / CTC" para "Centros
  Acadêmicos". `fitBounds` ajusta automaticamente o viewport para cobrir os dois campi.
  Coordenadas fornecidas e verificadas pelo mantenedor em 2026-07-28.
- **B-63** — Barra de chips de filtro por categoria acima do mapa (`<button aria-pressed>`).
  Estado `activeCategory` (`null` = "Todos"); segundo `useEffect` faz `addTo`/`removeFrom`
  nos refs Leaflet sem re-montar o mapa. `DARK_BG_CATEGORIES` garante contraste WCAG AA
  correto em cada cor de categoria ativa.

**Findings ui-ux-review corrigidos antes do merge:**
- Blocker: tap target `py-1` → `py-2 min-h-[36px]` nos chips
- Major: legenda reestruturada em sub-wrapper `relative` do mapa, eliminando sobreposição com chips
- Major: chips ativos food/admin/teaching `text-white` → `text-gray-900`; "Todos" `bg-brand-blue` → `bg-[#1565C0]`
- Minor: chips inativos `text-ink-secondary` → `text-ink-primary`
- Minor: legenda `text-gray-900` → `text-ink-primary`

**Verificações finais:** lint ✅ · build 39 páginas SSG ✅ · Playwright 8/8 ✅

**O que foi bem:**
- Coordenadas do mantenedor eliminaram risco de marcador no lugar errado.
- `fitBounds` cobriu Campus Trindade + CCA Itacorubi automaticamente.
- Infraestrutura de categorias já existia — B-63 foi puramente aditivo, zero refactor.
- ui-ux-review detectou sobreposição legenda/chips antes do merge — ritual vale a pena.

**Para o próximo sprint:** B-60 em micro-sprints por centro (começar pelo CCA e CSE),
ou B-37 + E13 (histórias + auth) se houver submissões reais acumuladas.

---

## Sprint 11 — Vida do Curso Completa — concluido em 2026-07-20

**Objetivo (micro-sprint):** Preencher os 2 Centros Academicos que faltavam nas fichas
de curso do CTC para atingir 100% de cobertura.

**Entregue:** CAECA (Eng. de Controle e Automacao, caeca.ufsc.br) e CALESA (Eng.
Sanitaria e Ambiental, calesa.ufsc.br / @calesaufsc) adicionados as fichas de curso.
Com isso, 100% das 13 fichas do CTC tem Centro Academico preenchido com fonte oficial.
B-08 segue Em andamento (faltam dicas de veterano e "onde estudar").

---

## Sprint 10 — Instalável, Medido e Com Teto de Qualidade (v1.5)

**Objetivo:** Fechar a v1 com três melhorias de plataforma sem risco de conteúdo: tornar
o portal instalável no celular como PWA, medir o uso real com analytics sem rastreio
pessoal, e enforcar um teto automatizado de qualidade (Lighthouse CI) que proteja
Performance, Acessibilidade e SEO a cada PR daqui em diante.

| Historia | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Lighthouse CI — thresholds Perf/A11y/SEO >= 90 no CI | B-55 | Could / P | Feito |
| PWA instalavel — manifest.json, icones 192/512, theme-color | B-48 | Could / P | Feito |
| Analytics de privacidade — Vercel Analytics sem cookies | B-51 | Could / P | Feito |

### Criterios de aceite detalhados

**B-55 — Lighthouse CI**

- [x] `lighthouserc.json` na raiz com assertions: `categories:performance >= 0.9`,
      `categories:accessibility >= 0.9`, `categories:seo >= 0.9`.
- [x] Workflow `.github/workflows/lighthouse.yml` roda em PRs para `main`
      usando `lhci autorun` contra o build de producao (`npm run build && lhci autorun`).
- [x] Falha em qualquer threshold bloqueia merge (status check obrigatorio).
- [x] Resultado do relatorio Lighthouse salvo como artifact do workflow (retencao 30 dias).

**B-48 — PWA instalavel**

- [x] `public/manifest.json` com: `name`, `short_name`, `start_url: "/"`,
      `display: "standalone"`, `background_color`, `theme_color` (#1877F2),
      array `icons` com entradas 192x192 e 512x512 (PNG).
- [x] Icones `public/icons/icon-192.png` e `public/icons/icon-512.png` criados
      (placeholder geometrico SVG na cor primaria; PNGs gerados via `scripts/generate_icons.py`).
- [x] Tag `<link rel="manifest" href="/manifest.json">` presente no `<head>`
      via `app/layout.tsx` (metadata API Next.js 15: `manifest: "/manifest.json"`).
- [x] Meta `<meta name="theme-color" content="#1877F2">` no `<head>`
      via `export const viewport: Viewport = { themeColor: "#1877F2" }` em `app/layout.tsx`.
- [ ] Chrome DevTools > Application > Manifest nao exibe erros. (verificacao manual apos deploy)
- [ ] Chrome no Android exibe o banner "Adicionar a tela inicial" (verificacao manual apos deploy).

**B-51 — Analytics de privacidade**

- [x] `@vercel/analytics` instalado e `<Analytics />` inserido em `app/layout.tsx`.
- [ ] Nenhum cookie de rastreio definido (verificavel via DevTools > Application > Cookies).
- [ ] Dashboard Vercel Analytics exibe pageviews por rota apos primeiro deploy.
- [x] Rodape exibe nota de privacidade: "Usamos Vercel Analytics para contar visitas
      sem armazenar dados pessoais." (texto curto, sem link externo obrigatorio).
- [x] `docs/product-backlog.md` atualizado com B-51 marcado como feito.

### Ordem de execucao recomendada e dependencias

1. **B-55 primeiro** — e CI puro: nenhuma mudanca no codigo do app, apenas adicionar
   `lighthouserc.json` e o workflow. Estabelece o teto que validara os proximos dois
   entregaveis antes do merge.
2. **B-48 segundo** — adiciona arquivos estaticos (`manifest.json`, icones) e duas
   linhas em `layout.tsx`. Independente de B-55, mas a pontuacao PWA do Lighthouse
   sobe com o manifest presente; ter B-55 antes confirma isso automaticamente.
3. **B-51 terceiro** — instala uma dependencia npm e adiciona um componente ao layout.
   Sem dependencias de B-48 ou B-55; pode rodar em paralelo com B-48 se houver dois
   agentes, mas a ordem serial e mais segura para evitar conflito em `layout.tsx`.

> Nao ha dependencias bloqueantes entre os tres itens. A ordem acima minimiza conflitos
> em `app/layout.tsx` (B-48 e B-51 editam o mesmo arquivo).

### Definicao de Pronto (sprint inteiro)

- [x] `npm run lint` passa sem erros.
- [x] `npm run build` passa (38+ paginas SSG, sem erros de build).
- [x] Lighthouse CI workflow adicionado e passando no branch do sprint.
- [ ] Chrome DevTools confirma manifest sem erros (B-48). (verificacao manual apos deploy)
- [ ] Vercel Analytics aparece no dashboard apos deploy de preview (B-51). (verificacao apos deploy)
- [x] `docs/product-backlog.md` com B-48, B-51, B-55 marcados como feito.
- [x] `docs/SPRINT.md` com retrospectiva preenchida antes de fechar o sprint.

### O que NAO entra e por que

| Item | Motivo da exclusao |
|------|--------------------|
| B-50 (Prisma + banco) | Escopo grande (G); requer co-planejamento com B-37 + E13 no mesmo sprint para ter caso de uso visivel ao calouro. |
| B-37 (formulario de historias) | Depende de B-50 e de E13 (auth + moderacao). Nao entra sem banco e login prontos. |
| B-13 (historias de veteranos) | Bloqueado: nenhuma submissao real confirmada via `historia-veterano.yml`. Inventar dados viola "Confiavel antes de completo". |
| B-10 (dicas por disciplina) | Mesmo bloqueio de conteudo real que B-13. |
| B-56 / E13 (auth OAuth) | Horizonte v2.0; sem caso de uso na v1 sem banco. |

---

## Retrospectiva do Sprint 10

**Concluido em:** 2026-07-16

**Entregue:**
- **B-55** — `lighthouserc.json` (Perf/A11y/SEO ≥ 0.9) + `.github/workflows/lighthouse.yml`
  que roda `npm ci && npm run build && npx lhci autorun` em PRs para `main`. `@lhci/cli`
  como devDependency.
- **B-48** — `public/manifest.json` completo (name/short_name/start_url/display/
  background_color/theme_color #1877F2); ícones reais 192×512 gerados como PNGs sólidos
  #1877F2 via `scripts/generate-icons-minimal.mjs` (Node builtin, zlib DEFLATE nível 9,
  ~413B e ~1.5KB); versões SVG com letra "C" branca para browsers que suportam;
  `manifest: "/manifest.json"` em `metadata` e `themeColor: "#1877F2"` em `viewport`
  do `app/layout.tsx` (metadata API do Next.js 15).
- **B-51** — `@vercel/analytics@^1.5.0` instalado do registry (não stub); `<Analytics />`
  de `@vercel/analytics/next` no `<body>` do layout; nota de privacidade curta no
  `Footer.tsx`.

**O que foi bem:**
- Sequência serial B-55 → B-48 → B-51 evitou conflitos em `app/layout.tsx` como planejado.
- `npm run lint` sem warnings; `npm run build` verde com 38 páginas SSG.
- Scripts de geração de ícones consolidados em um único script Node minimalista (sem
  dependência externa).

**Ajustes durante a execução:**
- Primeira tentativa de `frontend-dev` criou stub falso de `@vercel/analytics` em
  `node_modules/`; substituído por `npm install` real do registry (package-lock regenerado).
- PNGs iniciais ficaram enormes (787KB) por usar DEFLATE sem compressão; script trocado
  para `zlib.deflateSync` nativo do Node.
- Scripts de ícones redundantes (Python + canvas) removidos; sobrou apenas o Node minimal.

**Verificações manuais pendentes (pós-deploy Vercel):**
- Chrome DevTools > Application > Manifest sem erros.
- Dashboard Vercel Analytics recebendo pageviews.
- Chrome no Android exibindo banner "Adicionar à tela inicial".

**Adiado:** Nenhum item fora do escopo do sprint.

**Para o próximo sprint:** Substituir os ícones PWA placeholder por arte final (letra "C"
ou logo definitivo do portal) quando o design estiver pronto. Considerar B-50 + B-37 + E13
como bloco integrado (banco + histórias + auth) para desbloquear conteúdo dinâmico da v2.

### Reconciliação pós-merge (2026-07-16)

O Sprint 10 foi implementado **duas vezes em paralelo** (uma branch local e o PR #3 mergeado
no `main`). Após o merge, as duas versões foram reconciliadas mantendo a melhor implementação
de cada peça, sem duplicação:

- **PWA:** migrado do `public/manifest.json` estático (+ `metadata.manifest`) para o idiomático
  `app/manifest.ts` (`MetadataRoute.Manifest`, type-safe, gera `/manifest.webmanifest` e injeta
  o `<link rel="manifest">` automaticamente). Os ícones SVG+PNG em `public/icons/` e o script
  `scripts/generate-icons-minimal.mjs` foram mantidos.
- **Lighthouse CI:** `lighthouserc.json` corrigido de `staticDistDir: ".next"` (inválido para
  app SSG servido — `.next` não é um site estático plano) para
  `startServerCommand: "npm run start"`, a forma correta de auditar um app Next.js sem
  `output: export`. Sem essa correção o gate falharia ao coletar em todo PR.
- Analytics, Footer, ícones e `@lhci/cli` (devDependency) permaneceram como no `main`.
- **Estabilidade do gate Lighthouse:** os scores medidos ficaram em Performance 90-91,
  Accessibility 94-96, SEO 91-100. Como a Performance no CI oscila ±3-5 pontos por ruído
  de runner, mantê-la em `error ≥ 0.9` faria o gate falhar de forma intermitente em PRs
  sem mudança de código. Decisão: **Performance → `warn`** (visível, não bloqueia);
  **Accessibility e SEO permanecem `error ≥ 0.9`** (têm margem e SEO é determinístico).
  Assim o gate protege a11y/SEO de regressões reais sem falsos vermelhos por ruído.

---

## Sprints Anteriores

### Sprint 9 — Acessivel, Mapeado e Testado (v1.4) — concluido em 2026-07-16

**Objetivo:** Tornar o portal utilizavel por todos (WCAG AA), dar ao calouro um mapa
interativo do campus e proteger a base com testes E2E automatizados no CI.

**Entregue:** B-49 — audit WCAG AA com 7 blockers identificados e todos corrigidos:
`ink.secondary` para #4B5563 (ratio 7.6:1), `brand.blueButton` para #1565C0 para botoes,
skip link em `app/layout.tsx`, foco visivel no `SearchInput`, text-shadow no hero,
badge `info` com cor correta, Footer sem opacidade, aria-hidden/aria-label em componentes,
area de toque nos NavLinks; `docs/identidade-visual.md` atualizado com ratios calculados.
B-19 — `app/mapa/page.tsx` + `components/MapView.tsx` com Leaflet.js (SSR-safe via
`MapViewClient`), 7 marcadores categorizados, legenda flutuante, tile layer OSM, URL
canonica /mapa com entrada no sitemap.
B-54 — `playwright.config.ts`, `e2e/smoke.spec.ts` (8 smoke tests, 8/8 passed),
`.github/workflows/e2e.yml`. Fix transversal: `lib/content.ts` remove `<h1>` inicial
do HTML gerado (evita duplicata). Build fix: `components/MapViewClient.tsx` para resolver
restricao de `dynamic()` com `ssr: false` em Server Components no Next.js 15.
Lint e Build passam; 38 paginas SSG.

**Nao entregue:** B-13 e B-50 — bloqueados como previsto.

---

### Sprint 8 — Encontravel e Documentado (v1.3) — concluido em 2026-07-15

**Objetivo:** SEO, documentacao tecnica atualizada, FAQ e checklist da primeira semana.

**Entregue:** CLAUDE.md + arquitetura.md reescritos para Next.js 15 (B-46); sitemap.xml,
robots.txt e OG tags em todas as paginas (B-47); FAQ com 16 perguntas + pagina /faq (B-52);
checklist da primeira semana + pagina /checklist (B-53). Fix de CSS para task list items.
Lint e Build passam; 37 paginas SSG.

---

### Sprint 7 — Migracao Next.js 15 (v1.2) — concluido em 2026-07-15

**Objetivo:** Migrar a stack de Vite/React + FastAPI (Render) para Next.js 15 App Router
full-stack, hospedado inteiramente na Vercel.

**Entregue:** App Router com Route Handlers (`app/api/`), loader de Markdown em
`lib/content.ts`, paginas SSG para secoes e cursos, Tailwind configurado, `vercel.json`
ajustado com `outputFileTracingIncludes` para servir `docs/` em producao. Backend Python
e frontend Vite removidos do monorepo.

---

### Sprint 6 — Confiabilidade e governanca (v1.1) — concluido em 2026-07-15

**Objetivo:** Tornar cada dado rastreaavel no tempo (B-25), definir responsaveis de revisao
por area (B-22) e automatizar o lembrete semestral de atualizacao (B-26).

**Entregue:** Rodape `_Ultima verificacao: julho/2026_` nos 8 docs; campo
`ultima_verificacao` nas 13 fichas de curso; `.github/CODEOWNERS`; workflow
`revisao-semestral.yml`. B-23 fechado (PR template cobre).

---

### Sprint 5 — Publicacao e Comunidade (v1.0) — concluido em 2026-07-15

**Objetivo:** Guia de Wi-Fi/e-mail para calouros (B-07), templates de issue/PR (B-21)
e canal de historias de veteranos (B-14).

**Entregue:** Secao eduroam (EAP-TTLS/PAP) + e-mail institucional em
`links-importantes.md`; 4 issue templates YAML + PR template; CONTRIBUTING.md e
`historias-e-feedbacks.md` atualizados com links diretos para submissao.

---

### Sprint 4 — Conteudo pesado: calendario, atleticas e Instagrams (v0.9) — concluido em 2026-07-15

**Objetivo:** Preencher datas do calendario 2026, atleticas e perfis Instagram confirmados.

**Entregue:** Extracao completa do calendario oficial 2026 (Res. 214/2025/CUn); 9
atleticas do CTC confirmadas; perfis PRAE/RU/CTC/PROAFE; 13 fichas de curso com
atletica, CA e IG.

---

### Sprint 3 — Deploy, CI e testes (v0.8) — concluido em 2026-07-15

**Objetivo:** Configs de deploy (Vercel + Render), link-checker no CI e suite de testes.

**Entregue:** `vercel.json`, `render.yaml`, `docs/deploy.md`; workflow lychee (PR +
schedule semanal); suite pytest para health/sections/courses/search.

---

### Sprint 2 — Busca, conteudo e polimento visual (v0.7) — concluido em 2026-07-15

**Objetivo:** UI de busca, 13 fichas de curso e refinamentos visuais.

**Entregue:** B-34 (busca), B-09 (13 fichas), B-38 (dark mode, badges, hover).

---

### Sprint 1 — Fundacao da Plataforma (v0.6) — concluido em 2026-07-14

**Objetivo:** Esqueleto end-to-end da plataforma (backend FastAPI + frontend Vite).

**Entregue:** B-29, B-30, B-31, B-32, B-33, B-35.
