'use client'
import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'หน้าหลัก' },
  { href: '/stroke-rehab', label: 'ฟื้นฟู Stroke' },
  { href: '/services', label: 'บริการทั้งหมด' },
  { href: '/home-service', label: 'บริการที่บ้าน @home' },
  { href: '/team', label: 'ทีมแพทย์' },
  { href: '/blog', label: 'บทความ' },
  { href: '/contact', label: 'ติดต่อ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-pride-green-dark shadow-lg" role="navigation" aria-label="เมนูหลัก">
      <div className="container-pride flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="The Pride Brain Clinic หน้าหลัก">
          <span className="text-pride-gold font-bold text-xl font-playfair leading-tight">
            The Pride<br />
            <span className="text-white text-sm font-sarabun font-normal">Brain Clinic</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/90 hover:text-pride-gold px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/assessment"
          className="hidden lg:flex btn-gold text-sm whitespace-nowrap"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).fbq) {
              (window as any).fbq('track', 'ClickCTA_Assessment')
            }
          }}
        >
          นัดตรวจประเมิน
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-pride-green-dark border-t border-white/10 animate-fade-in">
          <ul className="container-pride py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-white/90 hover:text-pride-gold px-3 py-3 rounded-lg text-base font-medium transition-colors hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/assessment"
                className="block btn-gold text-center"
                onClick={() => setOpen(false)}
              >
                นัดตรวจประเมิน 1,990 บาท
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
