'use client'

function trackClick(event: string) {
  if (typeof window !== 'undefined') {
    if ((window as any).fbq) (window as any).fbq('track', event)
    if ((window as any).dataLayer) (window as any).dataLayer.push({ event })
  }
}

export default function FloatingCTA() {
  return (
    <>
      {/* LINE OA — Bottom Center on Mobile */}
      <a
        href="https://lin.ee/PRIDE_BRAIN"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-pride-gold text-pride-green-dark font-bold px-5 py-3 rounded-full shadow-xl hover:brightness-105 transition-all text-sm md:hidden animate-bounce-gentle"
        aria-label="ปรึกษาหมอฟรีผ่าน LINE OA The Pride Brain Clinic"
        onClick={() => trackClick('ClickLINE_FloatingCTA')}
      >
        {/* LINE icon */}
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.02 2 11c0 2.76 1.3 5.22 3.36 6.92L4.5 21l3.24-1.71C8.99 19.74 10.47 20 12 20c5.52 0 10-4.02 10-9S17.52 2 12 2zm5.5 12.5H6.5v-1h11v1zm0-3H6.5v-1h11v1zm0-3H6.5V7.5h11V8.5z"/>
        </svg>
        ปรึกษาหมอฟรี
      </a>

      {/* Phone — Left Floating on Mobile */}
      <a
        href="tel:+66XXXXXXXXX"
        className="fixed left-4 bottom-20 z-50 flex items-center justify-center w-12 h-12 bg-pride-green rounded-full shadow-xl hover:bg-pride-green-dark transition-colors md:hidden"
        aria-label="โทรหา The Pride Brain Clinic"
        onClick={() => trackClick('ClickPhone_FloatingCTA')}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>

      {/* Desktop: Right side LINE button */}
      <a
        href="https://lin.ee/PRIDE_BRAIN"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed right-6 bottom-6 z-50 items-center gap-2 bg-pride-gold text-pride-green-dark font-bold px-5 py-3 rounded-full shadow-xl hover:brightness-105 transition-all text-sm"
        aria-label="ปรึกษาหมอฟรีผ่าน LINE OA"
        onClick={() => trackClick('ClickLINE_FloatingCTA_Desktop')}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.02 2 11c0 2.76 1.3 5.22 3.36 6.92L4.5 21l3.24-1.71C8.99 19.74 10.47 20 12 20c5.52 0 10-4.02 10-9S17.52 2 12 2z"/>
        </svg>
        ปรึกษาหมอฟรี — ทัก LINE
      </a>

      {/* Desktop: Phone button */}
      <a
        href="tel:+66XXXXXXXXX"
        className="hidden md:flex fixed right-6 bottom-20 z-50 items-center gap-2 bg-pride-green text-white font-semibold px-4 py-2 rounded-full shadow-xl hover:bg-pride-green-dark transition-colors text-sm"
        aria-label="โทรหาคลินิก"
        onClick={() => trackClick('ClickPhone_FloatingCTA_Desktop')}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        โทรหาคลินิก
      </a>
    </>
  )
}
