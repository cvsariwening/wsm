import type React from "react"
import "@/app/globals.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "CV. Sari Wening - Industri Pengolahan Daging",
  description: "Industri Pengolahan dan Pengawetan Produk Daging dan Daging Unggas Berkualitas",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <style>
          body {
          }
          .wa_btn {
            position: fixed;
            right: 20px;
            bottom: 50px;
      </body>
        <h1>wa floating button</h1>
        <a class="wa_btn" href="https://wa.me/6281213478092?text=Salam%20sukses🤝%20saya%20ingin%20bertanya%20terkait%20produk%20CV.SARI%20WENING">Chat whatsapp</a>
    </html>
  )
}


import './globals.css'
