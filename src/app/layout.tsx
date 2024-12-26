import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import { cookies, headers } from "next/headers";
import { FALLBACK_LANGUAGE } from "@/lib/variables";

export const metadata: Metadata = {
  title: "Starterplates nextjs-plain",
  description: "Nextjs app with dark mode and language support",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const readyCookies = await cookies();
  const lang = readyCookies.get("lang")?.value || FALLBACK_LANGUAGE || "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
