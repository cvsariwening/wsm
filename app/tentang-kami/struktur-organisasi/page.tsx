import Image from "next/image"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function OrganizationStructurePage() {
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
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Struktur Organisasi</h1>
            <p className="mt-4 max-w-3xl text-maroon-100">
              Struktur organisasi CV. Sari Wening yang mendukung operasional perusahaan
            </p>
          </div>
        </section>

        {/* Organization Structure */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Struktur Organisasi</h2>
            <div className="mx-auto max-w-4xl">
              <div className="relative mb-12 h-[500px] w-full overflow-hidden rounded-lg border border-gray-200">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Struktur Organisasi CV. Sari Wening"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-600">
                  Struktur organisasi CV. Sari Wening dirancang untuk memastikan operasional yang efisien dan
                  pengambilan keputusan yang efektif.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Departemen</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Produksi",
                  description:
                    "Bertanggung jawab atas seluruh proses produksi, mulai dari persiapan bahan baku hingga pengemasan produk jadi.",
                  head: "Siti Rahayu - Direktur Operasional",
                },
                {
                  name: "Jaminan Mutu",
                  description: "Memastikan semua produk memenuhi standar kualitas dan keamanan pangan yang ditetapkan.",
                  head: "Ahmad Fauzi - Manajer Jaminan Mutu",
                },
                {
                  name: "Penelitian & Pengembangan",
                  description:
                    "Mengembangkan produk baru dan meningkatkan produk yang sudah ada untuk memenuhi kebutuhan pasar.",
                  head: "Dewi Lestari - Manajer Pengembangan Produk",
                },
                {
                  name: "Pemasaran & Penjualan",
                  description: "Mengelola strategi pemasaran, penjualan, dan distribusi produk ke pasar.",
                  head: "Rina Susanti - Manajer Pemasaran",
                },
                {
                  name: "Keuangan & Administrasi",
                  description: "Mengelola keuangan, akuntansi, dan administrasi umum perusahaan.",
                  head: "Hendra Wijaya - Direktur Keuangan",
                },
                {
                  name: "Sumber Daya Manusia",
                  description: "Mengelola rekrutmen, pengembangan, dan kesejahteraan karyawan.",
                  head: "Maya Putri - Manajer SDM",
                },
              ].map((dept, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-maroon-900">{dept.name}</h3>
                  <p className="mb-4 text-gray-700">{dept.description}</p>
                  <div className="text-sm font-medium text-maroon-700">
                    <span>Kepala: </span>
                    {dept.head}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Decision Making Process */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Proses Pengambilan Keputusan</h2>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-8">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-maroon-900">Keputusan Strategis</h3>
                  <p className="text-gray-700">
                    Keputusan strategis yang memengaruhi arah perusahaan secara keseluruhan dibuat oleh Direktur Utama
                    dengan masukan dari Dewan Penasehat dan tim manajemen senior.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-maroon-900">Keputusan Operasional</h3>
                  <p className="text-gray-700">
                    Keputusan operasional sehari-hari didelegasikan ke masing-masing kepala departemen, dengan
                    pengawasan dari direktur terkait.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-maroon-900">Rapat Manajemen</h3>
                  <p className="text-gray-700">
                    Rapat manajemen diadakan secara rutin untuk membahas kinerja, tantangan, dan peluang. Rapat mingguan
                    fokus pada operasional, sementara rapat bulanan dan kuartalan membahas strategi dan kinerja
                    keuangan.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-maroon-900">Keterlibatan Karyawan</h3>
                  <p className="text-gray-700">
                    CV. Sari Wening mendorong keterlibatan karyawan dalam proses pengambilan keputusan melalui program
                    saran, pertemuan departemen, dan komunikasi terbuka.
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
