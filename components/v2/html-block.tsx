/** Renders a ported V2 HTML fragment with design-system class names. */
export function HtmlBlock({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
