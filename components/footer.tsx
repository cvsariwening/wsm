import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-maroon-900">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">CV. Sari Wening</h3>
            <p className="mb-4 text-gray-200">
              Industri Pengolahan dan Pengawetan Produk Daging dan Daging Unggas Berkualitas
            </p>
           <div className="flex space-x-4">
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
            </div>
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
