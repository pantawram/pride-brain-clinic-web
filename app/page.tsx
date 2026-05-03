import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata: Metadata = {
  title: 'The Pride Brain Clinic | ฟื้นฟู Stroke ชลบุรี — Rehap to Rehappy',
  description: 'คลินิกฟื้นฟูสมองและระบบประสาท ชลบุรี ภาคตะวันออก เชี่ยวชาญฟื้นฟู Stroke อัมพฤกษ์ อัมพาต กายภาพบำบัด โดยทีมแพทย์เฉพาะทาง — Rehap to Rehappy',
  alternates: { canonical: 'https://pridebrainclinic.com' },
}

const services = [
  { icon: '🧠', title: 'ฟื้นฟู Stroke', desc: 'โปรแกรมฟื้นฟูหลังสมองขาดเลือด ครบวงจร', href: '/stroke-rehab' },
  { icon: '💪', title: 'กายภาพบำบัด', desc: 'อัมพฤกษ์ อัมพาต โรคระบบประสาท', href: '/services' },
  { icon: '🏠', title: 'บริการที่บ้าน @home', desc: 'กายภาพบำบัดถึงบ้าน ชลบุรี-ระยอง-พัทยา', href: '/home-service' },
  { icon: '⚡', title: 'TMS Therapy', desc: 'กระตุ้นสมองด้วยคลื่นแม่เหล็ก เทคโนโลยีล่าสุด', href: '/stroke-rehab' },
  { icon: '🩺', title: 'ปวดศีรษะ-ไมเกรน', desc: 'วินิจฉัยและรักษาโดยแพทย์เฉพาะทางระบบประสาท', href: '/services' },
  { icon: '🤝', title: 'One Stop Service', desc: 'แพทย์ นักกายภาพ นักจิตวิทยา ทีมเดียวกัน', href: '/assessment' },
]

const whyUs = [
  { title: 'เข้าใจทุกความกังวล', desc: 'ทีมแพทย์และนักกายภาพพร้อมรับฟัง ไม่ตัดสิน ดูแลเหมือนคนในครอบครัว' },
  { title: 'เชี่ยวชาญสมองจริงๆ', desc: 'แพทย์เฉพาะทางระบบประสาท ประสบการณ์ฟื้นฟู Stroke มากกว่า 1,000 เคส' },
  { title: 'ทีมสหสาขาวิชาชีพ', desc: 'แพทย์ นักกายภาพ นักอรรถบำบัด นักจิตวิทยา ร่วมวางแผนการรักษาด้วยกัน' },
  { title: 'Feel like home', desc: 'พนักงานจำชื่อผู้ป่วยได้ บรรยากาศอบอุ่น ไม่เย็นชาเหมือนโรงพยาบาลทั่วไป' },
]

const stats = [
  { value: '1,000+', label: 'ผู้ป่วย Stroke ที่ฟื้นฟูสำเร็จ' },
  { value: '95%', label: 'ความพึงพอใจจากผู้รับบริการ' },
  { value: '5+', label: 'ปีประสบการณ์ด้านฟื้นฟูสมอง' },
  { value: '4', label: 'จังหวัด ชลบุรี-ระยอง-พัทยา-ศรีราชา' },
]

const reviews = [
  { name: 'คุณสมศรี', relation: 'ครอบครัวผู้ป่วย Stroke', text: 'แพทย์และทีมใจดีมาก อธิบายทุกขั้นตอนชัดเจน คุณแม่เดินได้ดีขึ้นมากหลัง 3 เดือน' },
  { name: 'คุณวิชัย', relation: 'ผู้ป่วย', text: 'บริการที่บ้านสะดวกมาก ไม่ต้องเดินทาง นักกายภาพมาตรงเวลาทุกครั้ง ดูแลดีเหมือนลูกหลาน' },
  { name: 'คุณนภา', relation: 'ผู้ดูแล', text: 'Pride Brain Clinic ทำให้เรารู้สึกว่าไม่ได้สู้คนเดียว ทีมงานคอยให้กำลังใจเสมอ' },
]

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalClinic'],
  name: 'The Pride Brain Clinic',
  description: 'คลินิกฟื้นฟูสมองและระบบประสาท ชลบุรี ภาคตะวันออก',
  url: 'https://pridebrainclinic.com',
  telephone: '+66XXXXXXXXX',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'ชลบุรี',
    addressRegion: 'ชลบุรี',
    addressCountry: 'TH',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '13.3611', longitude: '100.9847' },
  openingHours: ['Mo-Fr 08:00-17:00', 'Sa 08:00-12:00'],
  priceRange: '฿฿',
  medicalSpecialty: ['Neurology', 'Physical Therapy', 'Rehabilitation'],
  slogan: 'Rehap to Rehappy',
  areaServed: ['ชลบุรี', 'พัทยา', 'ศรีราชา', 'ระยอง'],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navbar />

      {/* HERO */}
      <section className="section-green py-20 md:py-28 relative overflow-hidden" aria-label="Hero Section">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,#F0B429,transparent_60%)]" aria-hidden="true" />
        <div className="container-pride relative z-10">
          <div className="max-w-3xl">
            <p className="text-pride-gold text-sm font-semibold tracking-widest uppercase mb-3 animate-fade-in">
              The Pride Brain Clinic · ชลบุรี
            </p>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4 font-playfair">
              เข้าใจทุกความกังวล<br />
              <span className="text-pride-gold">ของคนเป็น Stroke</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-3 leading-relaxed">
              ฟื้นฟูสมองโดยทีมแพทย์เฉพาะทาง ผสานกับการดูแลด้วยหัวใจ
            </p>
            <p className="text-pride-gold/90 text-base mb-8 font-medium">
              &ldquo;Rehap to Rehappy — สมองฟื้นฟูได้เสมอ&rdquo; · ชลบุรี ภาคตะวันออก
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/assessment" className="btn-gold text-base px-8 py-4 text-center">
                นัดตรวจประเมิน 1,990 บาท
              </Link>
              <a
                href="https://lin.ee/PRIDE_BRAIN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-pride-green-dark text-base px-8 py-4 text-center"
              >
                ปรึกษาหมอฟรี — ทัก LINE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-cream py-16" aria-label="บริการของเรา">
        <div className="container-pride">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-pride-green-dark mb-2">บริการของเรา</h2>
            <p className="text-pride-text/70 text-lg">ดูแลครบทุกด้านในที่เดียว — One Stop Service</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="card-soft p-6 group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-3" aria-hidden="true">{s.icon}</div>
                <h3 className="text-xl font-bold text-pride-green-dark mb-2 group-hover:text-pride-green transition-colors">{s.title}</h3>
                <p className="text-pride-text/70 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-white py-16" aria-label="ทำไมต้องเลือกเรา">
        <div className="container-pride">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-pride-green-dark mb-2">ทำไมต้องเลือก The Pride Brain Clinic</h2>
            <p className="text-pride-text/70 text-lg">ฟื้นฟูไม่ใช่เพื่ออยู่รอด แต่เพื่อกลับมาใช้ชีวิต</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((w, i) => (
              <div key={w.title} className="flex gap-4 p-5 rounded-2xl bg-pride-cream">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pride-green-dark text-pride-gold flex items-center justify-center font-bold text-lg" aria-hidden="true">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-pride-green-dark text-lg mb-1">{w.title}</h3>
                  <p className="text-pride-text/70 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-green py-14" aria-label="สถิติผลลัพธ์">
        <div className="container-pride">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-pride-gold text-4xl md:text-5xl font-bold font-playfair mb-1">{s.value}</p>
                <p className="text-white/80 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-cream py-16" aria-label="รีวิวจากผู้ป่วยและครอบครัว">
        <div className="container-pride">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-pride-green-dark mb-2">เสียงจากผู้ที่ไว้วางใจเรา</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.name} className="card-soft p-6">
                <div className="flex mb-3" aria-label="5 ดาว">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-pride-gold fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-pride-text/80 text-sm leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="font-semibold text-pride-green-dark text-sm">
                  {r.name} <span className="font-normal text-pride-text/50">· {r.relation}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="section-white py-16" aria-label="ทีมแพทย์ของเรา">
        <div className="container-pride text-center">
          <h2 className="text-3xl font-bold text-pride-green-dark mb-3">ทีมแพทย์และผู้เชี่ยวชาญ</h2>
          <p className="text-pride-text/70 mb-8 max-w-xl mx-auto">
            ทีมสหสาขาวิชาชีพ แพทย์เฉพาะทางระบบประสาท นักกายภาพบำบัด และผู้เชี่ยวชาญด้านการฟื้นฟู
          </p>
          <Link href="/team" className="btn-primary inline-flex">
            ดูทีมแพทย์ทั้งหมด →
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-green py-14" aria-label="Call to Action">
        <div className="container-pride text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pride-gold font-playfair mb-3">
            เริ่มต้นการฟื้นฟูวันนี้
          </h2>
          <p className="text-white/80 text-lg mb-6">
            ยิ่งเริ่มเร็ว ยิ่งฟื้นฟูได้ดี — นัดประเมินกับทีมแพทย์เฉพาะทาง
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/assessment" className="btn-gold text-base px-8 py-4">
              นัดตรวจประเมิน 1,990 บาท
            </Link>
            <a
              href="https://lin.ee/PRIDE_BRAIN"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-pride-gold text-pride-gold hover:bg-pride-gold hover:text-pride-green-dark text-base px-8 py-4 text-center"
            >
              ปรึกษาหมอฟรี
            </a>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="section-cream py-16" aria-label="บทความสุขภาพล่าสุด">
        <div className="container-pride">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-pride-green-dark">บทความสุขภาพสมอง</h2>
            <Link href="/blog" className="text-pride-green hover:text-pride-green-dark text-sm font-medium">
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Golden Period ของ Stroke คืออะไร ทำไมถึงสำคัญ', cat: 'Stroke', href: '/blog' },
              { title: '5 สัญญาณเตือน Stroke ที่ไม่ควรมองข้าม', cat: 'ป้องกัน', href: '/blog' },
              { title: 'กายภาพบำบัดที่บ้าน vs ที่คลินิก อะไรเหมาะกว่า', cat: 'กายภาพบำบัด', href: '/blog' },
            ].map((b) => (
              <Link key={b.title} href={b.href} className="card-soft p-5 group">
                <span className="inline-block bg-pride-green/10 text-pride-green text-xs font-semibold px-2 py-1 rounded mb-3">{b.cat}</span>
                <h3 className="font-bold text-pride-green-dark text-base leading-snug group-hover:text-pride-green transition-colors line-clamp-3">{b.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </>
  )
}
