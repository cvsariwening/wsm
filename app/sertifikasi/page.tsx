import Image from "next/image"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function CertificationsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Sertifikasi</h1>
            <p className="mt-4 max-w-3xl text-maroon-100">Komitmen kami terhadap kualitas dan keamanan pangan</p>
          </div>
        </section>

        {/* Certifications Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-maroon-900">Sertifikasi & Standar</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    CV. Sari Wening berkomitmen untuk menghasilkan produk daging olahan yang aman, halal, dan
                    berkualitas tinggi. Untuk memastikan hal ini, kami telah mendapatkan berbagai sertifikasi dari
                    lembaga terkemuka.
                  </p>
                  <p>
                    Sertifikasi ini menjadi bukti komitmen kami terhadap keamanan pangan, kualitas produk, dan praktik
                    bisnis yang bertanggung jawab. Kami secara teratur menjalani audit dan pembaruan sertifikasi untuk
                    memastikan kepatuhan berkelanjutan terhadap standar yang ditetapkan.
                  </p>
                  <p>
                    Selain sertifikasi wajib, kami juga secara sukarela mengadopsi standar internasional untuk
                    meningkatkan sistem manajemen dan proses produksi kami.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/sertifikat.png"
                  alt="Sertifikasi CV. Sari Wening"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications List */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Sertifikasi Kami</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  name: "Sertifikasi Halal",
                  description:
                    "Sertifikasi yang menjamin bahwa produk kami telah memenuhi persyaratan halal sesuai dengan syariat Islam. Dikeluarkan oleh Kepala Badan Penyelenggara Jaminan Produk Halal.",
                  image: "/placeholder.svg?height=200&width=200",
                  year: "Diterbitkan di Jakarta pada 3 Desember 2024",
                  number: "Nomor Sertifikat: ID35110020893340924",
                },
                {
                  name: "SK Kemenkumham RI",
                  description:
                    "Surat Keputusan dari Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia.",
                  image: "/placeholder.svg?height=200&width=200",
                  year: "Ditetapkan di Jakarta, 11 September 2024",
                  number: "Nomor: AHU-0070449-AH.01.14 Tahun 2024",
                },
                {
                  name: "Sertifikat Standar",
                  description:
                    "Sertifikat yang menjamin standar kualitas produk kami.",
                  image: "/placeholder.svg?height=200&width=200",
                  year: "Diterbitkan pada 12 September 2024",
                  number: "Nomor: 12092400541380001",
                },
                {
                  name: "Sertifikat Hasil Pengujian Laboratorium KesMavet",
                  description:
                    "Sertifikat hasil pengujian laboratorium kesehatan hewan.",
                  image: "/placeholder.svg?height=200&width=200",
                  year: "Diterbitkan di Surabaya, 6 November 2024",
                  number: "Nomor: LKMV P.001.XI.24",
                  additionalInfo: "Tanggal Pengujian: 4–6 November 2024, Tanggal Penerimaan Sampel: 1 November 2024",
                },
                {
                  name: "Nomor Induk Berusaha (NIB)",
                  description:
                    "Nomor induk berusaha yang dikeluarkan oleh pemerintah.",
                  image: "/placeholder.svg?height=200&width=200",
                  year: "Diterbitkan pada 12 September 2024",
                  number: "Nomor: 1209240054138",
                },
                {
                  name: "NPWP (Nomor Pokok Wajib Pajak)",
                  description:
                    "Nomor pokok wajib pajak perusahaan.",
                  image: "/placeholder.svg?height=200&width=200",
                  year: "Tanggal Terdaftar: 12 September 2024",
                  number: "Nomor: 26.933.639.2-657.000",
                },
                {
                  name: "Surat Keterangan Domisili",
                  description:
                    "Surat keterangan domisili perusahaan.",
                  image: "/placeholder.svg?height=200&width=200",
                  year: "Diterbitkan di Mulyorejo, 18 September 2024",
                  number: "Nomor: 158.4/165/35.07.27.2008/2024",
                },
                {
                  name: "HACCP (Hazard Analysis Critical Control Point)",
                  description:
                    "Sistem manajemen keamanan pangan yang berfokus pada identifikasi, evaluasi, dan pengendalian bahaya yang signifikan terhadap keamanan pangan. HACCP memastikan bahwa produk kami aman dari bahaya biologis, kimia, dan fisik.",
                  image: "/placeholder.svg?height=200&width=200",
                  year: "Diperoleh tahun 2015",
                },
                {
                  name: "Sertifikasi BPOM",
                  description:
                    "Sertifikasi dari Badan Pengawas Obat dan Makanan (BPOM) yang menjamin bahwa produk kami telah memenuhi persyaratan keamanan, mutu, dan gizi sesuai dengan peraturan yang berlaku di Indonesia.",
                  image: "/placeholder.svg?height=200&width=200",
                  year: "Diperoleh tahun 2005, diperbarui secara berkala",
                },
                {
                  name: "SNI (Standar Nasional Indonesia)",
                  description:
                    "Standar yang ditetapkan oleh Badan Standardisasi Nasional (BSN) untuk produk daging olahan. SNI memastikan bahwa produk kami memenuhi persyaratan kualitas dan keamanan yang ditetapkan secara nasional.",
                  image: "/placeholder.svg?height=200&width=200",
                  year: "Diperoleh tahun 2010, diperbarui tahun 2020",
                },
                {
                  name: "ISO 9001:2015",
                  description:
                    "Standar internasional untuk sistem manajemen mutu yang memastikan bahwa produk dan layanan kami secara konsisten memenuhi persyaratan pelanggan dan peraturan yang berlaku.",
                  image: "/placeholder.svg?height=200&width=200",
                  year: "Diperoleh tahun 2018",
                },
              ].map((cert, index) => (
                <div key={index} className="flex flex-col rounded-lg bg-white p-6 shadow-sm md:flex-row">
                  <div className="mb-4 flex items-center justify-center md:mb-0 md:mr-6 md:w-1/4">
                    <div className="h-32 w-32 overflow-hidden rounded-full border border-gray-200 bg-white p-2">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.name}
                        width={120}
                        height={120}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="mb-2 text-xl font-bold text-maroon-900">{cert.name}</h3>
                    <p className="mb-2 text-gray-700">{cert.description}</p>
                    <p className="text-sm font-medium text-maroon-700">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Process */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Proses Sertifikasi</h2>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-8">
                {[
                  {
                    step: "Persiapan",
                    description:
                      "Mempersiapkan sistem, dokumentasi, dan fasilitas sesuai dengan persyaratan standar yang akan diajukan.",
                  },
                  {
                    step: "Pengajuan",
                    description: "Mengajukan permohonan sertifikasi kepada lembaga sertifikasi yang terakreditasi.",
                  },
                  {
                    step: "Audit Dokumen",
                    description:
                      "Lembaga sertifikasi melakukan tinjauan terhadap dokumentasi sistem manajemen perusahaan.",
                  },
                  {
                    step: "Audit Lapangan",
                    description:
                      "Tim auditor melakukan kunjungan ke fasilitas produksi untuk memverifikasi implementasi sistem.",
                  },
                  {
                    step: "Tindakan Perbaikan",
                    description: "Mengatasi temuan atau ketidaksesuaian yang diidentifikasi selama audit.",
                  },
                  {
                    step: "Penerbitan Sertifikat",
                    description: "Setelah semua persyaratan terpenuhi, lembaga sertifikasi menerbitkan sertifikat.",
                  },
                  {
                    step: "Audit Pengawasan",
                    description: "Audit berkala untuk memastikan kepatuhan berkelanjutan terhadap standar.",
                  },
                  {
                    step: "Pembaruan Sertifikat",
                    description: "Pembaruan sertifikat setelah periode validitas berakhir, biasanya setiap 3-5 tahun.",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-maroon-900 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">{step.step}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Manfaat Sertifikasi</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Jaminan Kualitas",
                  description:
                    "Sertifikasi memberikan jaminan bahwa produk kami memenuhi standar kualitas yang ditetapkan.",
                },
                {
                  title: "Keamanan Pangan",
                  description:
                    "Memastikan bahwa produk kami aman untuk dikonsumsi dan bebas dari bahaya yang dapat membahayakan konsumen.",
                },
                {
                  title: "Kepercayaan Konsumen",
                  description:
                    "Meningkatkan kepercayaan konsumen terhadap produk kami melalui verifikasi pihak ketiga yang independen.",
                },
                {
                  title: "Akses Pasar",
                  description:
                    "Membuka akses ke pasar baru yang mensyaratkan sertifikasi tertentu untuk produk yang dijual.",
                },
                {
                  title: "Perbaikan Berkelanjutan",
                  description: "Mendorong perbaikan berkelanjutan dalam proses dan sistem manajemen perusahaan.",
                },
                {
                  title: "Kepatuhan Regulasi",
                  description: "Memastikan kepatuhan terhadap peraturan dan persyaratan hukum yang berlaku.",
                },
              ].map((benefit, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-maroon-900">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
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
