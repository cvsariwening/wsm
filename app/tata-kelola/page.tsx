import Image from "next/image"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function CorporateGovernancePage() {
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
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Tata Kelola Perusahaan</h1>
            <p className="mt-4 max-w-3xl text-maroon-100">
              Sistem dan struktur tata kelola yang menjamin transparansi dan akuntabilitas
            </p>
          </div>
        </section>

        {/* Corporate Governance Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-maroon-900">Tata Kelola Perusahaan</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    CV. Sari Wening berkomitmen untuk menerapkan prinsip-prinsip tata kelola perusahaan yang baik (Good
                    Corporate Governance) dalam seluruh aspek operasional. Kami percaya bahwa tata kelola yang baik
                    adalah fondasi untuk pertumbuhan yang berkelanjutan dan penciptaan nilai jangka panjang.
                  </p>
                  <p>
                    Tata kelola perusahaan kami didasarkan pada lima prinsip utama: transparansi, akuntabilitas,
                    tanggung jawab, independensi, dan kewajaran. Prinsip-prinsip ini diterapkan dalam struktur
                    organisasi, kebijakan, dan prosedur kami.
                  </p>
                  <p>
                    Kami secara teratur meninjau dan meningkatkan praktik tata kelola kami untuk memastikan kepatuhan
                    terhadap peraturan yang berlaku dan standar industri terbaik.
                  </p>
                </div>
              </div>
              <div className="relative bg-gray-100 h-[400px] overflow-hidden rounded-lg group">
                <Image
                  src="/3.jpg"
                  alt="Tata Kelola Perusahaan"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Governance Principles */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Prinsip Tata Kelola</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Transparansi",
                  description:
                    "Kami berkomitmen untuk menyediakan informasi yang jelas, akurat, dan tepat waktu kepada semua pemangku kepentingan.",
                },
                {
                  title: "Akuntabilitas",
                  description:
                    "Kami memiliki struktur yang jelas dengan tanggung jawab dan wewenang yang didefinisikan dengan baik untuk setiap posisi.",
                },
                {
                  title: "Tanggung Jawab",
                  description:
                    "Kami mematuhi peraturan yang berlaku dan bertanggung jawab terhadap masyarakat dan lingkungan.",
                },
                {
                  title: "Independensi",
                  description:
                    "Kami mengelola perusahaan secara profesional tanpa benturan kepentingan dan pengaruh dari pihak lain.",
                },
                {
                  title: "Kewajaran",
                  description: "Kami memastikan perlakuan yang adil dan setara terhadap semua pemangku kepentingan.",
                },
                {
                  title: "Keberlanjutan",
                  description:
                    "Kami mempertimbangkan dampak jangka panjang dari keputusan kami terhadap bisnis, masyarakat, dan lingkungan.",
                },
              ].map((principle, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-maroon-900">{principle.title}</h3>
                  <p className="text-gray-700">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Structure */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Struktur Tata Kelola</h2>
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-maroon-900">Dewan Direksi</h3>
                <p className="mb-4 text-gray-700">
                  Dewan Direksi bertanggung jawab atas pengelolaan perusahaan sehari-hari dan pengambilan keputusan
                  strategis. Dewan ini terdiri dari Direktur Utama, Direktur Operasional, dan Direktur Keuangan.
                </p>
                <ul className="list-inside list-disc space-y-1 text-gray-700">
                  <li>Menetapkan visi, misi, dan strategi perusahaan</li>
                  <li>Memastikan implementasi tata kelola yang baik</li>
                  <li>Mengelola risiko dan peluang bisnis</li>
                  <li>Memastikan kepatuhan terhadap peraturan yang berlaku</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-maroon-900">Dewan Penasehat</h3>
                <p className="mb-4 text-gray-700">
                  Dewan Penasehat memberikan masukan dan arahan strategis kepada Dewan Direksi. Dewan ini terdiri dari
                  profesional berpengalaman di bidang industri makanan dan teknologi pangan.
                </p>
                <ul className="list-inside list-disc space-y-1 text-gray-700">
                  <li>Memberikan masukan untuk pengembangan strategi</li>
                  <li>Membantu mengidentifikasi peluang dan risiko</li>
                  <li>Memberikan perspektif independen</li>
                  <li>Membantu memperluas jaringan bisnis</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-maroon-900">Komite Audit & Kepatuhan</h3>
                <p className="mb-4 text-gray-700">
                  Komite Audit & Kepatuhan membantu Dewan Direksi dalam memastikan integritas laporan keuangan,
                  efektivitas pengendalian internal, dan kepatuhan terhadap peraturan.
                </p>
                <ul className="list-inside list-disc space-y-1 text-gray-700">
                  <li>Mengawasi proses pelaporan keuangan</li>
                  <li>Meninjau efektivitas pengendalian internal</li>
                  <li>Memastikan kepatuhan terhadap peraturan</li>
                  <li>Mengelola whistleblowing system</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Kebijakan & Prosedur</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Kode Etik",
                  description:
                    "Panduan perilaku yang harus dipatuhi oleh seluruh karyawan dalam menjalankan tugas dan tanggung jawab mereka.",
                },
                {
                  title: "Kebijakan Anti-Korupsi",
                  description:
                    "Kebijakan yang melarang segala bentuk korupsi, suap, dan gratifikasi dalam interaksi dengan pihak internal maupun eksternal.",
                },
                {
                  title: "Kebijakan Manajemen Risiko",
                  description:
                    "Kerangka kerja untuk mengidentifikasi, menilai, dan mengelola risiko yang dihadapi perusahaan.",
                },
                {
                  title: "Kebijakan Whistleblowing",
                  description:
                    "Mekanisme untuk melaporkan pelanggaran atau potensi pelanggaran terhadap kebijakan perusahaan atau peraturan yang berlaku.",
                },
                {
                  title: "Kebijakan Keamanan Pangan",
                  description:
                    "Standar dan prosedur untuk memastikan keamanan dan kualitas produk pangan yang dihasilkan.",
                },
                {
                  title: "Kebijakan Lingkungan",
                  description:
                    "Komitmen perusahaan untuk mengurangi dampak negatif terhadap lingkungan dan mempromosikan praktik bisnis yang berkelanjutan.",
                },
              ].map((policy, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-maroon-900">{policy.title}</h3>
                  <p className="text-gray-700">{policy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
