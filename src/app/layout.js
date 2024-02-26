import { GoogleTagManager } from "@next/third-parties/google";

import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Gabriel Basaglia",
  description: "Portifólio feito com amor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} dark:bg-primary`}>{children}</body>
      <GoogleTagManager gtmId="G-7F0ZGG9EC9" />
    </html>
  );
}
