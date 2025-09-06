import { CodeBlock as CodeBlockWrapper } from "@/components/ui/code-block";
import highlightJs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useEffect, useState } from "react";

interface CodeBlockProps {
  snippetPath: string;
}

export const CodeBlock = ({ snippetPath }: CodeBlockProps) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(snippetPath)
      .then((response) => response.text())
      .then(setCode);
  }, []);

  return (
    <CodeBlockWrapper className="max-w-fit overflow-auto">
      <code
        dangerouslySetInnerHTML={{
          __html: highlightJs.highlight(code, { language: "typescript" }).value,
        }}
      />
    </CodeBlockWrapper>
  );
};
