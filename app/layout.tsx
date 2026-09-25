import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "INFO Soluções Tecnologia | Automação Comercial e Inteligência Artificial",
  description: "Sistemas, PDV, emissão fiscal, implantação, suporte e inteligência artificial para mercados, padarias, restaurantes e outros negócios.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}