'use client'
import React, { useEffect, useState } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null)

  const navItems = data?.navItems || []

  const defaultNavItems = [
    { link: { label: 'Home', url: '/' } },
    {
      label: 'Services',
      children: [
        { label: 'Lose Weight', url: '/loss' },
        { label: 'Relaxation & Stress Reduction', url: '/relaxation' },
        { label: 'Stage Fright & Exam', url: '/fright' },
        { label: 'Smoking Cessation', url: '/blog' },
        { label: 'Self-care', url: '/self' },
      ],
    },
    { link: { label: 'Blog', url: '/blog' } },
    { link: { label: 'News', url: '/news' } },
    { link: { label: 'About Me', url: '/about' } },
    { link: { label: 'Contact', url: '/contact' } },
  ]

  const itemsToShow = navItems.length > 0 ? navItems : defaultNavItems

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-16">
            <div className="text-[20px] font-bold text-gray-900">MyBrand</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {itemsToShow.map((item, i) => {
                if (item.link) {
                  return (
                    <CMSLink
                      key={i}
                      {...item.link}
                      appearance="link"
                      className="inline-block text-[20px] text-gray-700 font-extrabold relative
                        after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                        after:bg-black after:transition-all
                        hover:after:w-full hover:text-black transition"
                    />
                  )
                }

                if (item.children) {
                  return (
                    <div key={i} className="relative group cursor-pointer">
                      <span className="text-[20px] font-extrabold text-gray-700">
                        {item.label}
                      </span>

                      {/* Dropdown */}
                      <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded min-w-[200px] z-50">
                        {item.children.map((child, idx) => (
                          <CMSLink
                            key={idx}
                            label={child.label}
                            url={child.url}
                            className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100 text-gray-700"
                          />
                        ))}
                      </div>
                    </div>
                  )
                }

                return null
              })}
            </div>

            {/* Mobile Hamburger */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-2 mt-4">
                {itemsToShow.map((item, i) =>
                  item.link ? (
                    <CMSLink key={i} {...item.link} className="px-4 py-2" />
                  ) : (
                    <div key={i}>
                      {/* Mobile dropdown toggle */}
                      <button
                        onClick={() =>
                          setMobileDropdown(mobileDropdown === i ? null : i)
                        }
                        className="w-full text-left px-4 py-2 font-bold"
                      >
                        {item.label}
                      </button>
                      {mobileDropdown === i && (
                        <div className="flex flex-col pl-6">
                          {item.children?.map((child, idx) => (
                            <CMSLink
                              key={idx}
                              label={child.label}
                              url={child.url}
                              className="py-1"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}
