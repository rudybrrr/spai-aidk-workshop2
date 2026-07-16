async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // Fall back for local browsers that block the async clipboard API.
    }
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();

  const copied = document.execCommand("copy");
  textArea.remove();
  if (!copied) throw new Error("Copy command was rejected");
}

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const rawCode = button.closest(".code-window").querySelector("code").innerText;
    try {
      await copyText(rawCode);
      const original = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => (button.textContent = original), 900);
    } catch {
      button.textContent = "Failed";
      setTimeout(() => (button.textContent = "Copy"), 900);
    }
  });
});
