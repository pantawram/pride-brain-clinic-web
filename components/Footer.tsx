import Link from 'next/link'

const services = [
  { href: '/stroke-rehab', label: 'ฟื้นฟู Stroke' },
  { href: '/services', label: 'กายภาพบำบัด' },
  { href: '/home-service', label: 'บริการที่บ้าน @home' },
  { href: '/team', label: 'ทีมแพทย์' },
  { href: '/assessment', label: 'นัดตรวจประเมิน' },
  { href: '/blog', label: 'บทความสุขภาพ' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-pride-green-dark text-white" aria-label="ข้อมูลติดต่อและลิงก์เพิ่มเติม">
      <div className="container-pride py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <p className="text-pride-gold font-bold text-xl font-playfair mb-2">The Pride Brain Clinic</p>
          <p className="text-white/80 text-sm mb-4">Rehap to Rehappy<br />สมองฟื้นฟูได้เสมอ</p>
          <p className="text-white/70 text-sm leading-relaxed">
            คลินิกเฉพาะทางด้านสมองและระบบประสาท<br />
            ชลบุรี ภาคตะวันออก<br />
            ดูแลด้วยหัวใจ ทีมสหสาขาวิชาชีพ
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-pride-gold font-semibold mb-4">บริการของเรา</p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-white/70 hover:text-pride-gold text-sm transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-pride-gold font-semibold mb-4">ติดต่อเรา</p>
          <div className="space-y-3 text-sm text-white/80">
            <p>
              <span className="block text-white font-medium">เวลาทำการ</span>
              จันทร์–ศุกร์ 08:00–17:00 น.<br />
              เสาร์ 08:00–12:00 น.
            </p>
            <p>
              <span className="block text-white font-medium">ที่ตั้ง</span>
              ชลบุรี ภาคตะวันออก
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://lin.ee/PRIDE_BRAIN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-4 py-2"
                aria-label="ติดต่อ LINE OA The Pride Brain Clinic"
                onClick={() => { if (typeof window !== 'undefined' && (window as any).fbq) { (window as any).fbq('track', 'ClickLINE_Footer') } }}
              >
                LINE OA
              </a>
              <a
                href="tel:+66XXXXXXXXX"
                className="btn-outline border-white text-white hover:bg-white hover:text-pride-green-dark text-xs px-4 py-2"
                aria-label="โทรหา The Pride Brain Clinic"
                onClick={() => { if (typeof window !== 'undefined' && (window as any).fbq) { (window as any).fbq('track', 'ClickPhone_Footer') } }}
              >
                โทรหาเรา
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-white/50 text-xs">
        <p>© {currentYear} The Pride Brain Clinic. All rights reserved. | ชลบุรี ภาคตะวันออก</p>
        <p className="mt-1">
          <Link href="/contact" className="hover:text-pride-gold transition-colors">ติดต่อ</Link>
          {' · '}
          <Link href="/assessment" className="hover:text-pride-gold transition-colors">นัดหมาย</Link>
          {' · '}
          <Link href="/blog" className="hover:text-pride-gold transition-colors">บทความ</Link>
        </p>
      </div>
    </footer>
  )
}
