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
    <pre className="hljs text-small rounded-large p-4 overflow-auto">
      <code
        className="overflow-scroll"
        dangerouslySetInnerHTML={{
          __html: highlightJs.highlight("typescript", code).value,
        }}
      />
    </pre>
  );
};
