import QRCode from "qrcode";
import { writeFile } from "node:fs/promises";

const targets = [
  {
    path: "public/assets/images/notebook-download-qr.svg",
    url: "https://github.com/rudybrrr/spai-aidk-workshop2/raw/refs/heads/main/notebooks/AIDK_W2_Workshop.ipynb",
  },
  {
    path: "public/assets/images/workshop-2-feedback-qr.svg",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSecVnlz3VnEevhEoFqhn9Winy6Ps21FKaSebncdf3-031GnjA/viewform?usp=preview",
  },
];

for (const target of targets) {
  const svg = await QRCode.toString(target.url, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    color: { dark: "#11100d", light: "#ffffff" },
  });
  await writeFile(target.path, svg, "utf8");
  console.log(`Generated ${target.path}`);
}
