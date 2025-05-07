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
         .wa_btn {
           position: fixed;
        }
         .wa_btn i {
           font-size: 60px;
           padding: 0 10px;
         }  
      <body>
        <a class="wa_btn" href="https://wa.me/6281213478092?text=hi%coba%ini"><i
        class="fa-brands fa-whatsapp fa-2xl"></i>Chat Whatsapp</a>
      </body>
    </html>
  )
}


import './globals.css'
