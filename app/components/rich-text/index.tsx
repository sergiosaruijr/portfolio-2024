import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { RichTextContent } from "@graphcms/rich-text-types";
import { ComponentProps } from "react";

// type RichTextProps = ComponentProps<typeof CMSRichText>]
type RichTextProps = ComponentProps<typeof CMSRichText> & {
  content: RichTextContent | null; // Garantir que o tipo correto
};

export const RichText = ({ content, ...props }: RichTextProps) => {
  if (!content || Object.keys(content).length === 0) {
    return <div>Sem conteúdo disponível.</div>; // fallback caso seja inválido
  }
  return (
    <CMSRichText
      {...props}
      content={content}
      renderers={{
        bold: ({ children }) => (
          <b className="font-medium text-gray-50">{children}</b>
        ),
        ul: ({ children }) => (
          <ul className="flex list-inside list-disc flex-col gap-1 pl-2">
            {children}
          </ul>
        ),
        a: ({ children, ...props }) => (
          <a
            {...props}
            className="underline transition-colors hover:text-emerald-500"
          >
            {children}
          </a>
        ),
      }}
    />
  );
};
