/**
 * Injeta um bloco JSON-LD (schema.org) na página.
 *
 * O conteúdo vem sempre de `lib/seo.ts`, montado a partir do Markdown em
 * `docs/` — nunca de entrada de usuário. `JSON.stringify` já escapa aspas e
 * barras; o `replace` de `<` cobre o caso de um `</script>` aparecer dentro de
 * uma string do schema, que encerraria a tag mais cedo.
 */
export function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
