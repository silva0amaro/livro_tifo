const shareButton = document.getElementById("shareButton");

shareButton?.addEventListener("click", async () => {
  const shareData = {
    title: "O Inverno do Tifo — Apresentação em Loriga",
    text: "Apresentação do livro O Inverno do Tifo, dia 3 de agosto de 2026, às 16h00, no Salão Paroquial de Loriga.",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
      const original = shareButton.textContent;
      shareButton.textContent = "Ligação copiada";
      setTimeout(() => (shareButton.textContent = original), 1800);
    }
  } catch (error) {
    console.log("Partilha cancelada.", error);
  }
});
