document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const rawCode = button.closest(".code-window").querySelector("code").innerText;
    try {
      await navigator.clipboard.writeText(rawCode);
      const original = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => (button.textContent = original), 900);
    } catch {
      button.textContent = "Failed";
      setTimeout(() => (button.textContent = "Copy"), 900);
    }
  });
});
