import { Snippet } from "@nextui-org/react";
import highlightJs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useEffect, useState } from "react";

type CodeBlockProps = {
  snippetPath: string;
};

export const CodeBlock = ({ snippetPath }: CodeBlockProps) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(snippetPath)
      .then((response) => response.text())
      .then(setCode);
  }, []);

  return (
    <Snippet hideSymbol className="max-w-fit overflow-auto">
      <pre className="hljs text-small rounded-large p-4">
        <code
          className="overflow-scroll"
          dangerouslySetInnerHTML={{
            __html: highlightJs.highlight(code, { language: "typescript" })
              .value,
          }}
        />
      </pre>
    </Snippet>
  );
};
