import Image from "next/image"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function ProfilePage() {
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
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Profil Perusahaan</h1>
            <p className="mt-4 max-w-3xl text-maroon-100">
              Mengenal lebih dekat CV. Sari Wening, perusahaan pengolahan daging terkemuka di Indonesia
            </p>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold gradient-text">Sejarah Perusahaan</h2>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div className="rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-maroon-100/20">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-maroon-50 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-maroon-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-maroon-900">Awal Mula dan Pendirian <span className="text-maroon-700">(2024)</span></h3>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg text-gray-700">
                      CV. SARI WENING lahir dari ide dan gagasan seseorang yang telah lama berkecimpung dalam industri ini,
                      mengalami jatuh bangun dalam menjalani pekerjaan, hingga akhirnya membangun perusahaan sendiri di
                      tahun 2024.
                    </p>
                    <p className="text-lg text-gray-700">
                      Dengan tekad kuat untuk menghadirkan produk daging olahan berkualitas tinggi, perusahaan ini mulai
                      beroperasi dengan standar produksi yang ketat serta dukungan dari berbagai mitra strategis seperti
                      PT. Malindo Feedmill, CV. FY Paritama Karkasindo Utama, dan PT. Ciomas Adisatwa.
                    </p>
                    <p className="text-lg text-gray-700">
                      Seiring dengan berkembangnya industri pangan di Indonesia, CV. SARI WENING terus berinovasi dalam
                      produksi dan distribusi, memastikan bahwa setiap produk yang dihasilkan tidak hanya memenuhi standar
                      industri tetapi juga memenuhi kebutuhan konsumen yang semakin meningkat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/1.jpg"
                    alt="CV. Sari Wening - Sejarah Perusahaan"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products & Services */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-700">Produk & Layanan</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-maroon-900">Produk Unggulan</h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="mb-3 text-lg font-semibold text-maroon-700">MDM (Mechanically Deboned Meat) WSM Premium</h4>
                    <p className="mb-3 text-gray-700">Produk unggulan kami yang terbuat dari bahan baku murni tanpa campuran, diproses dengan standar higienis dan keamanan pangan tertinggi.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-maroon-700">•</span>
                        <div>Bahan baku premium 100% murni tanpa campuran</div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-maroon-700">•</span>
                        <div>Diproses dengan standar higienis dan keamanan pangan ketat</div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-maroon-700">•</span>
                        <div>Cocok untuk industri makanan olahan seperti sosis, nugget, bakso, dan produk berbasis daging lainnya</div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-maroon-700">Daging Ayam Olahan Lainnya</h4>
                    <p className="mb-3 text-gray-700">Rangkaian produk daging ayam segar dan beku yang diolah dengan standar terbaik untuk memenuhi berbagai kebutuhan industri pangan.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-maroon-700">•</span>
                        <div>Daging ayam segar dan beku berkualitas tinggi</div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-maroon-700">•</span>
                        <div>Diolah dengan standar keamanan pangan terbaik</div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-maroon-700">•</span>
                        <div>Cocok untuk berbagai kebutuhan industri pangan</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-maroon-900">Layanan</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-maroon-700">•</span>
                    <div>
                      <span className="font-medium">Pasokan Produk untuk Industri Makanan</span> - Menyediakan bahan
                      baku dalam skala besar untuk pabrik makanan olahan.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-maroon-700">•</span>
                    <div>
                      <span className="font-medium">Kemitraan Jangka Panjang</span> - Kolaborasi dengan pelaku bisnis
                      kuliner atau distributor dengan sistem kontrak.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-maroon-700">•</span>
                    <div>
                      <span className="font-medium">Konsultasi Kebutuhan Produk</span> - Bantu mitra menentukan varian
                      produk sesuai kebutuhan pasar mereka.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-10 text-3xl font-bold text-center gradient-text">Visi & Misi</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-maroon-100/20">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-maroon-50 flex items-center justify-center">
                      <svg className="w-8 h-8 text-maroon-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-maroon-900 text-center">Visi</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Menjadi perusahaan terkemuka dalam industri pengolahan dan pengawetan produk daging, dengan fokus pada kualitas, inovasi, dan kepuasan pelanggan, serta berkontribusi dalam penyediaan produk pangan yang sehat dan berkualitas tinggi.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-maroon-100/20">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-maroon-50 flex items-center justify-center">
                      <svg className="w-8 h-8 text-maroon-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-maroon-900 text-center">Misi</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-maroon-50 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-maroon-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold block text-maroon-900">Ensuring Premium Quality</span>
                        <span className="text-sm text-gray-700">Menghasilkan produk MDM (Mechanically Deboned Meat) WSM Premium dengan bahan baku murni tanpa campuran, menjaga kualitas dan keamanan pangan.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-maroon-50 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-maroon-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold block text-maroon-900">Customer Satisfaction</span>
                        <span className="text-sm text-gray-700">Memberikan pelayanan terbaik dan memastikan kepuasan pelanggan dengan standar produk yang high quality & safe for consumption.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-maroon-50 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-maroon-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold block text-maroon-900">Sustainable Business Growth</span>
                        <span className="text-sm text-gray-700">Membangun jaringan bisnis yang kuat dan memperluas kemitraan dengan berbagai industri terkait untuk pertumbuhan perusahaan yang berkelanjutan.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-maroon-50 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-maroon-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold block text-maroon-900">Compliance & Standardization</span>
                        <span className="text-sm text-gray-700">Memastikan semua produk yang dihasilkan telah memenuhi standar Sertifikasi Halal, NKV, serta Hasil Uji Laboratorium KesMavet.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold text-maroon-900">Nilai-Nilai Perusahaan</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Kualitas",
                  description: "Kami berkomitmen untuk menghasilkan produk berkualitas tinggi tanpa kompromi.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-maroon-800">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Integritas",
                  description: "Kami menjalankan bisnis dengan kejujuran, transparansi, dan etika yang tinggi.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-maroon-800">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Inovasi",
                  description: "Kami terus berinovasi untuk mengembangkan produk dan proses yang lebih baik.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-maroon-800">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Kepuasan Pelanggan",
                  description: "Kepuasan pelanggan adalah prioritas utama dalam setiap aspek bisnis kami.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-maroon-800">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="rounded-xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-maroon-100/20 hover:border-maroon-200/40 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-maroon-50 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-center text-maroon-900">{value.title}</h3>
                  <p className="text-gray-700 text-center">{value.description}</p>
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
