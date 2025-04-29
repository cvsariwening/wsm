import Image from "next/image"
import Link from "next/link"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-maroon-900 py-12 text-white">
          <div className="container">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Produk Kami</h1>
            <p className="mt-4 max-w-3xl text-maroon-100">
              Produk olahan daging berkualitas tinggi dengan standar keamanan pangan terbaik
            </p>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Daftar Produk</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "MDM",
                  description: "Mechanically Deboned Meat, daging ayam berkualitas tinggi yang diproses secara mekanis untuk menghasilkan tekstur halus dan konsisten.",
                  image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?q=80&w=800&auto=format&fit=crop",
                },
                {
                  name: "Daging Ayam",
                  description: "Daging ayam segar berkualitas premium dengan tekstur kenyal dan rasa yang kaya, ideal untuk berbagai olahan masakan.",
                  image: "/BLD.jpg",
                },
                {
                  name: "Kepala Ayam",
                  description: "Bagian kepala ayam pilihan yang diolah dengan higienis, cocok untuk sup dan hidangan tradisional.",
                  image: "/Kepala.jpg",
                },
                {
                  name: "Ayam Karkas",
                  description: "Ayam utuh yang telah dibersihkan dan siap olah, sempurna untuk restoran dan industri katering.",
                  image: "/Karkas.jpg",
                },
                {
                  name: "Kerongkongan Ayam",
                  description: "Bagian kerongkongan ayam yang diolah khusus, ideal untuk hidangan spesial dan makanan olahan.",
                  image: "/Kerongkong.jpg",
                },
                {
                  name: "Kulit Ayam",
                  description: "Kulit ayam segar berkualitas tinggi, sempurna untuk kerupuk kulit dan topping makanan.",
                  image: "/Kulit.jpg",
                },
                {
                  name: "Paha Ayam",
                  description: "Bagian paha ayam yang tebal dan berisi, kaya akan protein dan sempurna untuk berbagai masakan.",
                  image: "/paha.jpg",
                },
                {
                  name: "Sayap Ayam",
                  description: "Sayap ayam premium dengan kualitas terbaik, ideal untuk digoreng, dipanggang, atau diolah menjadi menu spesial.",
                  image: "/Sayap.jpg",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-maroon-900">{category.name}</h3>
                    <p className="mb-4 text-gray-700">{category.description}</p>
                    <Link
                      href={`#${category.name.toLowerCase()}`}
                      className="inline-flex items-center text-sm font-medium text-maroon-800 hover:text-maroon-700"
                    >
                      {/* Lihat Produk */}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Quality Commitment */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="relative h-[400px] overflow-hidden rounded-lg bg-black">
                <Image
                  src="/4.jpg"
                  alt="Komitmen Kualitas"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold text-maroon-900">Komitmen Kualitas</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    CV. Sari Wening berkomitmen untuk menghasilkan produk olahan daging berkualitas tinggi yang telah
                    melalui proses pengolahan higienis dan bersertifikasi halal. Produk kami digunakan secara luas oleh
                    pelaku industri makanan, restoran, katering, serta UMKM di seluruh Indonesia.
                  </p>
                  <p>
                    Semua produk kami telah mendapatkan sertifikasi dari lembaga terkait, termasuk sertifikasi Halal
                    MUI, BPOM, dan ISO 22000. Kami juga secara teratur melakukan pengujian laboratorium untuk memastikan
                    produk kami memenuhi standar kualitas dan keamanan yang ditetapkan.
                  </p>
                  <p>
                    Kami terus berinovasi untuk mengembangkan produk baru dan meningkatkan produk yang sudah ada untuk
                    memenuhi kebutuhan dan preferensi konsumen yang terus berubah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
