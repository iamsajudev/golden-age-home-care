// components/Blog/ArticleBody.tsx
export function ArticleBody({ content }: { content: string }) {
  return (
    <div
      className={[
        // Paragraphs
        "[&_p]:text-pretty [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-sand-700 [&_p]:mb-5 [&_p]:md:text-lg",
        // Headings
        "[&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-sand-900 [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:md:text-3xl",
        "[&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-sand-900 [&_h3]:mt-8 [&_h3]:mb-3",
        // Unordered lists — red dots
        "[&_ul]:my-6 [&_ul]:space-y-3 [&_ul]:pl-0 [&_ul]:list-none",
        "[&_ul_li]:flex [&_ul_li]:items-start [&_ul_li]:gap-3 [&_ul_li]:text-base [&_ul_li]:leading-relaxed [&_ul_li]:text-sand-700",
        "[&_ul_li]:before:content-[''] [&_ul_li]:before:mt-2.5 [&_ul_li]:before:h-1.5 [&_ul_li]:before:w-1.5 [&_ul_li]:before:shrink-0 [&_ul_li]:before:rounded-full [&_ul_li]:before:bg-red-500",
        // Ordered lists — numbered
        "[&_ol]:my-6 [&_ol]:space-y-3 [&_ol]:pl-6 [&_ol]:list-decimal",
        "[&_ol_li]:text-base [&_ol_li]:leading-relaxed [&_ol_li]:text-sand-700 [&_ol_li]:pl-1",
        "[&_ol_li]:marker:text-red-600 [&_ol_li]:marker:font-bold",
        // Inline emphasis
        "[&_strong]:font-semibold [&_strong]:text-sand-900",
        "[&_em]:italic [&_em]:text-sand-700",
        // Links
        "[&_a]:font-medium [&_a]:text-red-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-red-300 hover:[&_a]:text-red-700 hover:[&_a]:decoration-red-600",
      ].join(" ")}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}