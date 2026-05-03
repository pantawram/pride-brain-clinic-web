import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata: Metadata = {
  title: 'ฟื้นฟู Stroke ชลบุรี | The Pride Brain Clinic — สมองฟื้นฟูได้เสมอ',
  description: 'บริการฟื้นฟู Stroke ชลบุรี ภาคตะวันออก ครบวงจร โดยทีมแพทย์เฉพาะทางระบบประสาท TMS Therapy กายภาพบำบัด อัมพฤกษ์ อัมพาต นัดประเมิน 1,990 บาท',
  alternates: { canonical: 'https://pridebrainclinic.com/stroke-rehab' },
  openGraph: {
    title: 'ฟื้นฟู Stroke ชลบุรี | The Pride Brain Clinic',
    description: 'ฟื้นฟูสมองครบวงจร โดยทีมแพทย์เฉพาะทาง ชลบุรี ภาคตะวันออก',
    url: 'https://pridebrainclinic.com/stroke-rehab',
  },
}

const faqItems = [
  { q: 'Stroke คืออะไร?', a: 'Stroke หรือโรคหลอดเลือดสมอง เกิดเมื่อเลือดไปเลี้ยงสมองไม่เพียงพอ ทำให้เซลล์สมองตาย อาจทำให้เกิดอัมพฤกษ์ อัมพาต พูดไม่ได้ หรือมีปัญหาด้านการทรงตัว' },
  { q: 'Golden Period ของ Stroke คืออะไร?', a: 'ช่วง 3-6 เดือนแรกหลัง Stroke เป็นช่วงที่สมองมีความยืดหยุ่นสูงสุด (Neuroplasticity) การเริ่มฟื้นฟูในช่วงนี้ให้ผลดีที่สุด แต่แม้ผ่านมาแล้ว สมองก็ยังฟื้นฟูได้' },
  { q: 'ใครควรมารับการฟื้นฟู?', a: 'ผู้ที่เคยเป็น Stroke ทุกระยะ ทั้ง Stroke ใหม่ (Golden Period) และผู้ที่เป็นมานานแล้ว รวมถึงผู้ที่มีอาการอัมพฤกษ์ ปากเบี้ยว แขนขาอ่อนแรง หรือมีปัญหาการพูด' },
  { q: 'TMS Therapy คืออะไร?', a: 'Transcranial Magnetic Stimulation (TMS) เป็นการใช้คลื่นแม่เหล็กกระตุ้นเซลล์สมองโดยไม่ต้องผ่าตัด ช่วยเพิ่มประสิทธิภาพการฟื้นฟูและลดอาการ Spasticity ได้อย่างมีประสิทธิผล' },
  { q: 'ใช้เวลานานแค่ไหนในการฟื้นฟู?', a: 'ขึ้นอยู่กับความรุนแรงและระยะเวลาที่เป็น โดยทั่วไปเห็นผลชัดเจนใน 1-3 เดือนของการฟื้นฟูอย่างต่อเนื่อง ทีมแพทย์จะประเมินและวางแผนเฉพาะบุคคล' },
  { q: 'บริการที่บ้านมีไหม?', a: 'มีครับ/ค่ะ เรามีบริการกายภาพบำบัดที่บ้านสำหรับพื้นที่ชลบุรี พัทยา ศรีราชา และระยอง เหมาะสำหรับผู้ที่เดินทางลำบาก หรือต้องการความสะดวกสบาย' },
]

const strokeServices = [
  { icon: '🧠', title: 'ประเมินและวางแผนการฟื้นฟู', desc: 'แพทย์เฉพาะทางประเมินครบถ้วน วางแผนเฉพาะบุคคล' },
  { icon: '⚡', title: 'TMS Therapy', desc: 'กระตุ้นสมองด้วยคลื่นแม่เหล็ก เพิ่ม Neuroplasticity' },
  { icon: '💪', title: 'กายภาพบำบัดเข้มข้น', desc: 'โปรแกรมฝึกเดิน ฝึกแขนขา ทรงตัว 5 วัน/สัปดาห์' },
  { icon: '🗣️', title: 'อรรถบำบัด', desc: 'ฝึกพูด กลืน สื่อสาร โดยนักอรรถบำบัดเฉพาะทาง' },
  { icon: '🧩', title: 'กิจกรรมบำบัด', desc: 'ฝึกทักษะชีวิตประจำวัน ให้กลับมาใช้ชีวิตได้' },
  { icon: '🤝', title: 'ดูแลจิตใจและครอบครัว', desc: 'Support group สอนผู้ดูแล เสริมกำลังใจตลอดเส้นทาง' },
]

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'หน้าหลัก', item: 'https://pridebrainclinic.com' },
    { '@type': 'ListItem', position: 2, name: 'ฟื้นฟู Stroke', item: 'https://pridebrainclinic.com/stroke-rehab' },
  ],
}

export default function StrokeRehabPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <Navbar />

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-pride-cream" aria-label="Breadcrumb">
        <div className="container-pride py-2 text-sm text-pride-text/60">
          <Link href="/" className="hover:text-pride-green">หน้าหลัก</Link>
          <span className="mx-2" aria-hidden="true">›</span>
          <span className="text-pride-green font-medium" aria-current="page">ฟื้นฟู Stroke</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="section-green py-20 md:py-28" aria-label="Hero ฟื้นฟู Stroke">
        <div className="container-pride">
          <div className="max-w-3xl">
            <p className="text-pride-gold text-sm font-semibold tracking-widest uppercase mb-3">
              ศูนย์ฟื้นฟูสมอง · ชลบุรี ภาคตะวันออก
            </p>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4 font-playfair">
              สมองฟื้นฟูได้เสมอ<br />
              <span className="text-pride-gold">แม้ผ่านมาแล้ว</span>
            </h1>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              ไม่ว่าจะเพิ่งเป็น Stroke หรือผ่านมาหลายปีแล้ว เราพร้อมวางแผนฟื้นฟูเฉพาะคุณ<br />
              โดยทีมแพทย์เฉพาะทางระบบประสาทและนักกายภาพบำบัด ที่ชลบุรี ภาคตะวันออก
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/assessment" className="btn-gold text-base px-8 py-4 text-center">
                นัดตรวจประเมิน 1,990 บาท
              </Link>
              <a href="https://lin.ee/PRIDE_BRAIN" target="_blank" rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-pride-green-dark text-base px-8 py-4 text-center">
                ปรึกษาหมอฟรี
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GOLDEN PERIOD */}
      <section className="section-cream py-14" aria-label="Golden Period">
        <div className="container-pride">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-pride-gold/20 text-pride-orange font-bold px-4 py-1 rounded-full text-sm mb-4">
              ⏰ Golden Period 3-6 เดือนแรก
            </div>
            <h2 className="text-3xl font-bold text-pride-green-dark mb-4">
              ยิ่งเริ่มเร็ว ยิ่งฟื้นฟูได้มากกว่า
            </h2>
            <p className="text-pride-text/70 text-lg leading-relaxed mb-6">
              ใน 3-6 เดือนแรกหลัง Stroke สมองมีความยืดหยุ่นสูงสุด (Neuroplasticity)
              เซลล์สมองส่วนที่เหลือสามารถเรียนรู้และทดแทนส่วนที่เสียหายได้ดีที่สุดในช่วงนี้
            </p>
            <p className="text-pride-text/70 leading-relaxed">
              <strong className="text-pride-green-dark">แต่ถ้าพลาดช่วงนี้ไปแล้ว ก็ยังไม่สาย</strong> — สมองสามารถฟื้นฟูได้ตลอดชีวิต
              ด้วยโปรแกรมที่เหมาะสมและทีมผู้เชี่ยวชาญที่เข้าใจ
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-white py-16" aria-label="บริการฟื้นฟู Stroke ครบวงจร">
        <div className="container-pride">
          <h2 className="text-3xl font-bold text-pride-green-dark text-center mb-10">
            บริการฟื้นฟู Stroke ครบวงจร
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strokeServices.map((s) => (
              <div key={s.title} className="card-soft p-6">
                <div className="text-4xl mb-3" aria-hidden="true">{s.icon}</div>
                <h3 className="font-bold text-pride-green-dark text-lg mb-2">{s.title}</h3>
                <p className="text-pride-text/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-green py-14 text-center" aria-label="นัดตรวจประเมิน">
        <div className="container-pride">
          <h2 className="text-3xl font-bold text-pride-gold font-playfair mb-3">
            นัดตรวจประเมินวันนี้
          </h2>
          <p className="text-white/80 mb-2 text-lg">ค่าตรวจประเมินเพียง 1,990 บาท</p>
          <p className="text-white/60 text-sm mb-6">รับแผนการฟื้นฟูเฉพาะบุคคล โดยทีมแพทย์เฉพาะทาง</p>
          <Link href="/assessment" className="btn-gold text-lg px-10 py-4 inline-block">
            นัดตรวจประเมิน 1,990 บาท
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-cream py-16" aria-label="คำถามที่พบบ่อย">
        <div className="container-pride">
          <h2 className="text-3xl font-bold text-pride-green-dark text-center mb-10">
            คำถามที่พบบ่อย
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((f, i) => (
              <details key={i} className="card-soft p-5 group" itemScope itemType="https://schema.org/Question">
                <summary className="font-semibold text-pride-green-dark cursor-pointer list-none flex items-center justify-between" itemProp="name">
                  {f.q}
                  <svg className="w-5 h-5 text-pride-green flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-3 text-pride-text/70 leading-relaxed text-sm" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/home-service" className="text-pride-green hover:text-pride-green-dark font-medium">
              ดูบริการที่บ้าน @home →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </>
  )
}
