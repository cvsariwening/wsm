'use client'
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle, Factory, TruckIcon as TruckFast, ShieldCheck } from "lucide-react"
import { useEffect, useState } from "react"
import { initScrollReveal } from "./scroll-reveal"
// import "./animations.css"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

const images = ["/wallpaper.jpg", "/mdm.jpg", "/4.jpg"];

export default function Home() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000); // ganti setiap 8 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[650px] w-full overflow-hidden">
      {/* Background images, all ditumpuk */}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Hero Image ${index}`}
          fill
          priority
          className={`
            object-cover absolute transition-opacity duration-1000 ease-in-out
            ${index === currentImage ? "opacity-100 z-0 animate-zoomSlow" : "opacity-0"}
          `}
        />
      ))}

      {/* Overlay gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />

      {/* Konten teks */}
      <div className="absolute inset-0 z-20 container flex flex-col items-start justify-center space-y-8 text-white">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
          Sari Wening
        </h1>
        <p className="max-w-xl text-lg sm:text-xl animate-fade-up animate-delay-100">
          Produk olahan daging berkualitas tinggi, higienis dan bersertifikasi halal untuk industri makanan,
          restoran, katering, dan UMKM di seluruh Indonesia
        </p>
        <Button
          asChild
          size="lg"
          className="mt-4 bg-white text-maroon-900 hover:bg-gray-100 animate-fade-up animate-delay-200"
        >
          <Link href="/produk">Lihat Produk Kami</Link>
        </Button>
      </div>
    </section>


        {/* About Us Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-8 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight gradient-text">Tentang Kami</motion.h2>
            </div>
            <div className="grid gap-12 md:grid-cols-2 scroll-reveal">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 md:order-2">
                <div className="relative h-[300px] overflow-hidden rounded-lg shadow-md hover-scale">
                  <Image
                    src="/Kepala.jpg"
                    alt="CV. Sari Wening - Fasilitas Produksi"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="order-2">
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    CV. SARI WENING adalah perusahaan yang bergerak di bidang Industri Pengolahan dan Pengawetan Produk Daging & Daging Unggas, dengan fokus utama pada produksi Mechanically Deboned Meat (MDM) merek WSM (Wening Sari Murni) Premium. Produk kami diolah menggunakan bahan baku murni tanpa campuran, menjamin kualitas premium bagi pelanggan.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="grid gap-12 md:grid-cols-2 mt-28 scroll-reveal">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="order-2">
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    Dengan pengalaman dan dedikasi dalam industri ini, kami terus berkomitmen untuk menyediakan produk yang higienis, berkualitas tinggi, dan sesuai dengan standar keamanan pangan. Kami juga telah mengantongi berbagai sertifikasi, termasuk Sertifikat Halal, NKV, serta Hasil Uji Laboratorium KesMavet, sebagai bentuk komitmen kami dalam menghadirkan produk yang aman dan terpercaya.
                  </p>
                  <div className="pt-4 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                    <Button asChild className="w-full sm:w-auto gradient-bg border-0 hover:opacity-90">
                      <Link href="/tentang-kami/profil">Pelajari Lebih Lanjut</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="order-1 md:order-2">
                <div className="relative h-[300px] overflow-hidden rounded-lg shadow-md hover-scale">
                  <Image
                    src="/2.jpg"
                    alt="CV. Sari Wening - Fasilitas Produksi"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-center gradient-text mt-24">Layanan</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {/* Custom Processing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg shadow-md p-8 text-center transition-all hover:shadow-lg border border-gray-100"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full gradient-bg text-white mb-4">
                    <Factory className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-maroon-900 mb-3">Custom Processing</h4>
                  <p className="text-gray-700">Melayani pemrosesan daging unggas sesuai spesifikasi pelanggan</p>
                </motion.div>

                {/* Bulk Supply */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg shadow-md p-8 text-center transition-all hover:shadow-lg border border-gray-100"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full gradient-bg text-white mb-4">
                    <TruckFast className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-maroon-900 mb-3">Bulk Supply</h4>
                  <p className="text-gray-700">Penyediaan produk dalam jumlah besar untuk industri makanan</p>
                </motion.div>

                {/* Quality Assurance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg shadow-md p-8 text-center transition-all hover:shadow-lg border border-gray-100"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full gradient-bg text-white mb-4">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-maroon-900 mb-3">Quality Assurance</h4>
                  <p className="text-gray-700">
                    Produk yang telah melalui uji laboratorium untuk memastikan keamanan dan kualitas
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product & Service Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container">
            {/* Products */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Produk Unggulan</h3>
              <div className="grid gap-8 md:grid-cols-3 scroll-reveal">
                {/* MDM WSM Premium */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border border-gray-100 hover-lift"
                >
                  <div className="relative h-56">
                    <Image
                      src="/mdm.jpg"
                      alt="MDM WSM Premium"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-maroon-900 mb-4">MDM WSM Premium</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-maroon-700 mr-2 shrink-0 mt-0.5" />
                        <span>Bahan baku murni tanpa campuran</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-maroon-700 mr-2 shrink-0 mt-0.5" />
                        <span>Standar higienis terbaik</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-maroon-700 mr-2 shrink-0 mt-0.5" />
                        <span>Untuk sosis, nugget, bakso</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button asChild className="w-full gradient-bg border-0 hover:opacity-90">
                        <Link href="/produk">Lihat Detail</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
                {/* MDM WSM Premium */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border border-gray-100 hover-lift"
                >
                  <div className="relative h-56">
                    <Image
                      src="/Sayap.jpg"
                      alt="MDM WSM Premium"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-maroon-900 mb-4">Daging Ayam Sayap</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-maroon-700 mr-2 shrink-0 mt-0.5" />
                        <span>Sayap ayam berkualitas premium</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-maroon-700 mr-2 shrink-0 mt-0.5" />
                        <span>Proses deboning higienis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-maroon-700 mr-2 shrink-0 mt-0.5" />
                        <span>Ideal untuk olahan ayam crispy</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button asChild className="w-full gradient-bg border-0 hover:opacity-90">
                        <Link href="/produk">Lihat Detail</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Daging Ayam Olahan */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border border-gray-100 hover-lift"
                >
                  <div className="relative h-56">
                    <Image
                      src="/paha.jpg"
                      alt="Daging Ayam Olahan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-maroon-900 mb-4">Daging Ayam Paha Pentung</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-maroon-700 mr-2 shrink-0 mt-0.5" />
                        <span>Daging ayam segar & beku</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-maroon-700 mr-2 shrink-0 mt-0.5" />
                        <span>Standar kualitas terbaik</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-maroon-700 mr-2 shrink-0 mt-0.5" />
                        <span>Berbagai ukuran kemasan</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button asChild className="w-full gradient-bg border-0 hover:opacity-90">
                        <Link href="/produk">Lihat Detail</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Layanan</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {/* Custom Processing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg shadow-md p-8 text-center transition-all hover:shadow-lg border border-gray-100"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full gradient-bg text-white mb-4">
                    <Factory className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-maroon-900 mb-3">Custom Processing</h4>
                  <p className="text-gray-700">Melayani pemrosesan daging unggas sesuai spesifikasi pelanggan</p>
                </motion.div>

                {/* Bulk Supply */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg shadow-md p-8 text-center transition-all hover:shadow-lg border border-gray-100"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full gradient-bg text-white mb-4">
                    <TruckFast className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-maroon-900 mb-3">Bulk Supply</h4>
                  <p className="text-gray-700">Penyediaan produk dalam jumlah besar untuk industri makanan</p>
                </motion.div>

                {/* Quality Assurance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg shadow-md p-8 text-center transition-all hover:shadow-lg border border-gray-100"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full gradient-bg text-white mb-4">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-maroon-900 mb-3">Quality Assurance</h4>
                  <p className="text-gray-700">
                    Produk yang telah melalui uji laboratorium untuk memastikan keamanan dan kualitas
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16">
          <div className="container">
            <motion.div
              className="mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight gradient-text">Berita Terbaru</h2>
              <p className="mt-2 text-gray-600">
                Informasi terkini tentang CV. Sari Wening dan industri pengolahan daging
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "CV. Sari Wening Mendapatkan Sertifikasi Halal Terbaru",
                  date: "10 April 2025",
                  description:
                    "CV. Sari Wening berhasil mendapatkan sertifikasi halal terbaru untuk seluruh lini produknya.",
                  image: "https://berauterkini.co.id/wp-content/uploads/2025/01/e8x3aynuouy8l28.jpeg",
                },
                {
                  title: "Peluncuran Produk Baru: MDM Super Chicken",
                  date: "2 April 2025",
                  description:
                    "CV. Sari Wening meluncurkan produk baru berupa MDM Super Chicken dengan kadar protein tinggi dan tekstur lembut.",
                  image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
                },
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card
                    className="overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-48 w-full md:h-auto md:w-1/3">
                        <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                      </div>
                      <CardContent className="flex-1 p-6">
                        <div className="text-sm text-maroon-600 font-medium">{news.date}</div>
                        <h3 className="mb-2 text-xl font-bold text-maroon-900">{news.title}</h3>
                        <p className="text-gray-600">{news.description}</p>
                        <Link
                          href="#"
                          className="mt-4 inline-flex items-center text-sm font-medium text-maroon-800 hover:text-maroon-700"
                        >
                          Baca Selengkapnya <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients & Partners */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container">
            <div className="mb-10 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight gradient-text"
              >
                Client & Partners
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-2 text-gray-600"
              >
                Membangun kepercayaan dengan berbagai mitra strategis
              </motion.p>
            </div>
            <div className="mb-10 grid gap-8 md:grid-cols-3">
              {[{
                name: "PT. Malindo Feedmill",
                logo: "/placeholder.svg?height=100&width=200",
                description: "Perusahaan pakan ternak terkemuka di Indonesia",
              }, {
                name: "CV. FY Paritama Karkasindo Utama",
                logo: "/placeholder.svg?height=100&width=200",
                description: "Spesialis pengolahan daging unggas berkualitas",
              }, {
                name: "PT. Ciomas Adisatwa",
                logo: "/placeholder.svg?height=100&width=200",
                description: "Bagian dari Japfa Group yang fokus pada industri perunggasan",
              }].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="mb-4 h-20 w-48">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={200}
                      height={100}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mb-2 text-center text-xl font-bold text-maroon-900">{partner.name}</h3>
                  <p className="text-center text-gray-600">{partner.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-lg bg-maroon-900 p-8 shadow-md border border-gray-100"
            >
              <p className="text-center text-white">
                Sebagai perusahaan yang bergerak di industri pengolahan dan pengawetan produk daging unggas, CV. SARI
                WENING telah membangun kepercayaan dengan berbagai mitra strategis. Kerja sama dengan
                perusahaan-perusahaan tersebut membuktikan bahwa produk kami memenuhi standar industri dan menjadi
                bagian dari rantai pasok makanan berkualitas tinggi di Indonesia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certifications Preview */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="mb-10 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight gradient-text"
              >
                Sertifikasi
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-2 text-gray-600"
              >
                Komitmen kami terhadap kualitas dan keamanan pangan
              </motion.p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                {
                  name: "Halal MUI",
                  image: "https://awsimages.detik.net.id/community/media/visual/2022/03/15/kenapa-logo-halal-diganti-ada-perpindahan-wewenang-dari-mui-ke-kemenag.jpeg?w=1200",
                },
                {
                  name: "ISO 22000",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQoX5gtZycQMjd0EioynA7HBrGFLXQ-HqLg&s",
                },
                {
                  name: "HACCP",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnizTRnmUE5N2NvEA8KRO5I49rParLK8pYHg&s",
                },
                {
                  name: "BPOM",
                  image: "https://pusdatin.pom.go.id/storage/ppid/profil/f9Qxu7f8v36qUIM811ayOhhMcBR8LxNpimo7izyK.png",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border border-gray-200 bg-white p-2 shadow-md">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-2 font-medium text-gray-700">{cert.name}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <Button asChild className="gradient-bg border-0 hover:opacity-90">
                <Link href="/sertifikasi">Lihat Semua Sertifikasi</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
<a
  href="https://wa.me/6281234567890"
  target="_blank"
  class="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
  aria-label="Chat on WhatsApp"
>
  <!-- Ikon WhatsApp SVG -->
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.49 2 12c0 1.99.58 3.84 1.57 5.4L2 22l4.72-1.55A9.99 9.99 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.73 0-3.35-.51-4.71-1.39l-.34-.22-2.8.92.93-2.73-.22-.35A7.954 7.954 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.36-5.64c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.96-.35-1.84-1.12-.68-.61-1.13-1.36-1.26-1.59-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.41-.06-.12-.51-1.24-.7-1.71-.18-.43-.36-.37-.5-.38l-.42-.01c-.15 0-.4.06-.61.29s-.8.78-.8 1.9.82 2.21.94 2.37c.12.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.47.54.17 1.03.14 1.42.08.43-.06 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.15-.44-.26z"/>
  </svg>
</a>
      <Footer />
    </div>
  )
}
