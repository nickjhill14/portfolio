function upperCaseFirstChar(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function downloadJson(fileName: string, json: string) {
  const link = document.createElement("a");

  link.download = `${fileName}.json`;
  link.href = `data:text/json;charset=utf-8,${encodeURIComponent(json)}`;

  link.click();
}

export { downloadJson, upperCaseFirstChar };
