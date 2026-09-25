import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INFO Soluções Tecnologia | Automação Comercial e Inteligência Artificial",
  description:
    "Sistemas, PDV, emissão fiscal, implantação, suporte e inteligência artificial para empresas da Baixada Santista e São Paulo.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://infohubx.com.br"),
  openGraph: {
    title: "INFO Soluções Tecnologia",
    description: "Tecnologia que impulsiona resultados.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
