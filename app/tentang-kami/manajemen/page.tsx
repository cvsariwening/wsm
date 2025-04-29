import Image from "next/image"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function ManagementPage() {
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
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Manajemen</h1>
            <p className="mt-4 max-w-3xl text-maroon-100">
              Kenali tim manajemen yang memimpin CV. Sari Wening menuju kesuksesan
            </p>
          </div>
        </section>

        {/* Management Team */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Tim Manajemen</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Suwito",
                  position: "Direktur Utama",
                  bio: "Bertanggung jawab dalam mengelola operasional perusahaan, memastikan efisiensi produksi, serta menjaga kualitas produk yang dihasilkan.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Wendy Purwanto",
                  position: "Komisaris",
                  bio: "Mengawasi serta memberikan arahan strategis untuk pengembangan perusahaan dalam jangka panjang.",
                  image: "/placeholder.svg?height=300&width=300",
                },

              ].map((person, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative mb-4 h-48 w-48 overflow-hidden rounded-full">
                    <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-maroon-900">{person.name}</h3>
                  <p className="mb-2 text-maroon-700">{person.position}</p>
                  <p className="text-gray-600">{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Advisors */}
        {/* <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Dewan Penasehat</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  name: "Prof. Dr. Bambang Suryanto",
                  position: "Penasehat Teknologi Pangan",
                  bio: "Profesor di bidang Teknologi Pangan dengan pengalaman lebih dari 30 tahun. Memberikan arahan strategis untuk pengembangan produk dan proses produksi.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Ir. Joko Widodo",
                  position: "Penasehat Industri",
                  bio: "Mantan eksekutif di industri makanan dengan jaringan luas. Membantu perusahaan dalam ekspansi pasar dan kemitraan strategis.",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((advisor, index) => (
                <div key={index} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
                  <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full">
                    <Image src={advisor.image || "/placeholder.svg"} alt={advisor.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-maroon-900">{advisor.name}</h3>
                  <p className="mb-2 text-maroon-700">{advisor.position}</p>
                  <p className="text-gray-600">{advisor.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Company Culture */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="h-[400px] rounded-lg bg-gray-100 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/2.jpg"
                    alt="Budaya Perusahaan CV. Sari Wening"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold text-maroon-900">Budaya Perusahaan</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Di CV. Sari Wening, kami membangun budaya kerja yang positif dan kolaboratif. Kami percaya bahwa
                    kesuksesan perusahaan bergantung pada kontribusi setiap anggota tim.
                  </p>
                  <p>
                    Kami mendorong inovasi, pembelajaran berkelanjutan, dan pengembangan profesional. Setiap karyawan
                    didorong untuk memberikan ide-ide baru dan berkontribusi pada perbaikan proses dan produk.
                  </p>
                  <p>
                    Keselamatan dan kesejahteraan karyawan adalah prioritas utama kami. Kami menyediakan lingkungan
                    kerja yang aman, sehat, dan mendukung, serta berbagai program kesejahteraan untuk memastikan
                    karyawan kami merasa dihargai dan termotivasi.
                  </p>
                  <p>
                    Kami juga berkomitmen untuk menjadi perusahaan yang bertanggung jawab secara sosial, dengan berbagai
                    inisiatif untuk memberikan dampak positif pada masyarakat dan lingkungan.
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
