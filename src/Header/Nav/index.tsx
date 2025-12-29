'use client'
import React, { useState } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [open, setOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null)

  const navItems = data?.navItems || []

  const defaultNavItems = [
    { link: { label: 'Home', url: '/' } },
    {
      label: 'Services',
      children: [
        { label: 'Lose Weight', url: '/loss' },
        { label: 'Relaxation & Stress Reduction', url: '/relaxation' },
        { label: 'Stage Fright & Exam Anxiety', url: '/fright' },
        { label: 'Smoking Cessation', url: '/smoking' },
        { label: 'Self-care', url: '/self' },
      ],
    },
    { link: { label: 'Blog', url: '/blog' } },
    { link: { label: 'News', url: '/news' } },
    { link: { label: 'About Me', url: '/about' } },
    { link: { label: 'Contact', url: '/contact' } },
  ]

  const itemsToShow = navItems.length > 0 ? navItems : defaultNavItems

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-16">
            <div className="text-[20px] font-bold text-gray-900">MyBrand</div>

            {/* ======= Desktop Menu ===== */}
            <div className="hidden md:flex gap-8 items-center">
              {itemsToShow.map((item, i) => {
                if (item.link) {
                  return (
                    <CMSLink
                      key={i}
                      {...item.link}
                      appearance="link"
                      className="text-[20px] font-extrabold text-gray-700"
                    />
                  )
                }

                if (item.children) {
                  return (
                    <div
                      key={i}
                      className="relative group cursor-pointer flex items-center gap-1  "
                    >
                      <span className="text-[20px] font-extrabold text-gray-700">
                        {item.label}
                      </span>

                      {/* Caret */}
                      <svg
                        className="w-4 h-4 text-black transition-transform duration-100 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>

                      {/* Dropdown */}
                      <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded min-w-[220px] z-50 pt-2">

                        {item.children.map((child, idx) => (
                          <CMSLink
                            key={idx}
                            label={child.label}
                            url={child.url}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                          />
                        ))}
                      </div>
                    </div>
                  )
                }

                return null
              })}
            </div>

            {/* === Mobile Hamburger ===== */}

            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>

          {/* ==== Mobile Menu ===== */}
          {open && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col mt-4">
                {itemsToShow.map((item, i) =>
                  item.link ? (
                    <CMSLink
                      key={i}
                      {...item.link}
                      className="px-4 py-2"
                    />
                  ) : (
                    <div key={i}>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === i ? null : i
                          )
                        }
                        className="w-full px-4 py-2 font-bold flex items-center justify-between"
                      >
                        {item.label}

                        {/* Mobile caret */}
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === i ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {mobileDropdown === i && (
                        <div className="flex flex-col pl-6">
                          {item.children.map((child, idx) => (
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
