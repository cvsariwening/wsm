'use client'
import { Download, FileText } from "lucide-react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LegalDocumentsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Dokumen Legalitas</h1>
            <p className="mt-4 max-w-3xl text-maroon-100">Dokumen legalitas dan perizinan CV. Sari Wening</p>
          </div>
        </section>

        {/* Legal Documents Overview */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-maroon-900">Dokumen Legalitas Perusahaan</h2>
              <p className="mb-10 text-gray-700">
                CV. Sari Wening berkomitmen untuk mematuhi semua peraturan dan persyaratan hukum yang berlaku. Berikut
                adalah dokumen legalitas dan perizinan yang dimiliki oleh perusahaan kami.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Akta Pendirian Perusahaan",
                  description: "Akta pendirian CV. Sari Wening yang disahkan oleh notaris.",
                  date: "15 Januari 2005",
                  number: "No. 123/NOT/2005",
                },
                {
                  title: "Profil Perusahaan",
                  description: "Profil perusahaan yang menjelaskan visi, misi, dan tujuan.",
                  date: "20 Februari 2005",
                  number: "No. 456/SIUP/2005",
                },

        
              ].map((document, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-maroon-900">{document.title}</CardTitle>
                    <CardDescription>{document.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-4 space-y-2">
                      <div className="flex items-start">
                        <span className="mr-2 font-medium text-gray-700">Nomor:</span>
                        <span className="text-gray-600">{document.number}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 font-medium text-gray-700">Tanggal:</span>
                        <span className="text-gray-600">{document.date}</span>
                      </div>
                    </div>
                    {document.title === "Akta Pendirian Perusahaan" ? (
                    <Button
                      variant="outline"
                      className="w-full border-blue-800 text-maroon-800 hover:bg-maroon-50"
                      onClick={() => window.open("/AKTA PENDIRIAN CV. SARI WENING.pdf", "_blank")}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Lihat Dokumen
                    </Button>
                  ) : document.title === "Profil Perusahaan" ? (
                    <Button
                      variant="outline"
                      className="w-full border-blue-800 text-maroon-800 hover:bg-maroon-50"
                      onClick={() => window.open("/COMPRO CV Sari Wening.pdf", "_blank")}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Lihat Dokumen
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full border-blue-800 text-maroon-800 hover:bg-maroon-50">
                      <FileText className="mr-2 h-4 w-4" />
                      Lihat Dokumen
                    </Button>
                  )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        {/* <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-lg bg-maroon-900 p-8 text-center text-white shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">Unduh Dokumen Legalitas</h2>
              <p className="mb-6">Anda dapat mengunduh semua dokumen legalitas CV. Sari Wening dalam satu file ZIP.</p>
              <Button size="lg" className="bg-white text-maroon-900 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Unduh Semua Dokumen
              </Button>
            </div>
          </div>
        </section> */}

        {/* Legal Compliance */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Kepatuhan Hukum</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-maroon-900">Komitmen Kepatuhan</h3>
                <p className="text-gray-700">
                  CV. Sari Wening berkomitmen untuk mematuhi semua peraturan dan persyaratan hukum yang berlaku dalam
                  industri pengolahan daging. Kami secara teratur memperbarui izin dan sertifikasi kami untuk memastikan
                  kepatuhan berkelanjutan.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-maroon-900">Pembaruan Dokumen</h3>
                <p className="text-gray-700">
                  Kami memiliki tim khusus yang bertanggung jawab untuk memantau perubahan peraturan dan memastikan
                  bahwa semua dokumen legalitas kami selalu diperbarui sesuai dengan persyaratan terbaru.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Pertanyaan Umum</h2>
            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  question: "Apakah semua produk CV. Sari Wening telah mendapatkan sertifikasi halal?",
                  answer:
                    "Ya, semua produk CV. Sari Wening telah mendapatkan sertifikasi halal dari Majelis Ulama Indonesia (MUI).",
                },
                {
                  question: "Bagaimana cara memverifikasi keaslian sertifikasi produk CV. Sari Wening?",
                  answer:
                    "Anda dapat memverifikasi keaslian sertifikasi produk kami melalui website resmi lembaga sertifikasi terkait, seperti website MUI untuk sertifikasi halal atau website BPOM untuk izin edar.",
                },
                {
                  question: "Apakah CV. Sari Wening memiliki izin ekspor?",
                  answer:
                    "Saat ini, CV. Sari Wening sedang dalam proses mendapatkan izin ekspor untuk memperluas pasar ke negara-negara tetangga di Asia Tenggara.",
                },
                {
                  question: "Berapa lama masa berlaku sertifikasi halal?",
                  answer:
                    "Sertifikasi halal MUI memiliki masa berlaku selama 2 tahun dan harus diperbarui sebelum masa berlakunya berakhir.",
                },
                {
                  question: "Apakah dokumen legalitas CV. Sari Wening dapat diakses oleh publik?",
                  answer:
                    "Sebagian dokumen legalitas kami dapat diakses oleh publik melalui website ini. Untuk dokumen tertentu, Anda dapat menghubungi kami untuk informasi lebih lanjut.",
                },
              ].map((faq, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold text-maroon-900">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact for Legal Inquiries */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-maroon-900">Pertanyaan Lainnya?</h2>
              <p className="mb-6 text-gray-700">
                Jika Anda memiliki pertanyaan lebih lanjut tentang dokumen legalitas atau perizinan CV. Sari Wening,
                silakan hubungi kami.
              </p>
              <Button className="bg-maroon-800 hover:bg-maroon-700">Hubungi Kami</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
