import { Snippet } from "@nextui-org/react";
import esTreePlugin from "prettier/plugins/estree";
import tsPlugin from "prettier/plugins/typescript";
import prettier from "prettier/standalone";
import { useEffect, useState } from "react";

type CodeBlockProps = {
  code: string;
};

export const CodeBlock = ({ code }: CodeBlockProps) => {
  const [formattedCode, setFormattedCode] = useState("");

  useEffect(() => {
    prettier
      .format(code, { parser: "typescript", plugins: [tsPlugin, esTreePlugin] })
      .then(setFormattedCode);
  }, []);

  return (
    <Snippet hideSymbol>
      <pre>{formattedCode}</pre>
    </Snippet>
  );
};
