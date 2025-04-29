import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
  href="https://wa.me/6281213478092"
  target="_blank"
  class="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
  aria-label="Chat on WhatsApp"
>
  <!-- Ikon WhatsApp SVG -->
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.49 2 12c0 1.99.58 3.84 1.57 5.4L2 22l4.72-1.55A9.99 9.99 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.73 0-3.35-.51-4.71-1.39l-.34-.22-2.8.92.93-2.73-.22-.35A7.954 7.954 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.36-5.64c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.96-.35-1.84-1.12-.68-.61-1.13-1.36-1.26-1.59-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.41-.06-.12-.51-1.24-.7-1.71-.18-.43-.36-.37-.5-.38l-.42-.01c-.15 0-.4.06-.61.29s-.8.78-.8 1.9.82 2.21.94 2.37c.12.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.47.54.17 1.03.14 1.42.08.43-.06 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.15-.44-.26z"/>
  </svg>
</a>
    <footer className="border-t bg-maroon-900">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">CV. Sari Wening</h3>
            <p className="mb-4 text-gray-200">
              Industri Pengolahan dan Pengawetan Produk Daging dan Daging Unggas Berkualitas
            </p>
            {/* <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div> */}
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Tautan Cepat</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <Link href="/" className="hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami/profil" className="hover:text-white">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/produk" className="hover:text-white">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/sertifikasi" className="hover:text-white">
                  Sertifikasi
                </Link>
              </li>
              <li>
                <Link href="/dokumen-legalitas" className="hover:text-white">
                  Dokumen Legalitas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Produk</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <Link href="/produk" className="hover:text-white">
                  MDM WSM Premium
                </Link>
              </li>
              <li>
                <Link href="/produk" className="hover:text-white">
                  Chicken MDM
                </Link>
              </li>
              <li>
                <Link href="/produk" className="hover:text-white">
                  Daging Ayam Olahan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Kontak</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-white" />
                <span>Jl. Bend. Selorejo RT.30/RW.05, Dsn. Sukoanyar, Kel. Mulyorejo, Kec. Ngantang, Kab. Malang</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-white" />
                <span>0812-1347-8092</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-white" />
                <span>cvsariwening01@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-maroon-950 py-4">
        <div className="container text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} CV. Sari Wening. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  )
}
