function extract(content) {
  const ref = document.getElementById("content");
  const textContent = ref.textContent;
  const pattern = /\([A-Za-z 0-9-]+\)/g;
  let result = textContent.match(pattern);
  return result.join("; ");
}
