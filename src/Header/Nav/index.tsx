'use client'
import React, { useEffect, useState } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'


export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = data?.navItems || []

  const defaultNavItems = [
    { link: { label: 'Home', url: '/' } },
    { link: { label: 'About', url: '/about' } },
    { link: { label: 'Contact', url: '/contact' } },
    { link: { label: 'Demo', url: '/demo' } },
    { link: { label: 'Blog', url: '/blog' } },
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

            <div className="  text-[20px]  text-xl font-bold text-gray-900">
              MyBrand
            </div>


            <div className="hidden md:flex gap-8 items-center">
              {itemsToShow.map(({ link }, i) => (
                <CMSLink
                  key={i}
                  {...link}
                  appearance="link"
                  className="
                      inline-block
                     text-[20px]
                    text-gray-700
                    font-extrabold
                    relative
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                   after:bg-black
                    after:transition-all
                    hover:after:w-full
                    hover:text-black
                     transition
                  "
                />

              ))}
            </div>


            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
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


          {open && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-4 mt-4">
                {itemsToShow.map(({ link }, i) => (
                  <CMSLink
                    key={i}
                    {...link}
                    appearance="link"
                    className="px-3 py-2 rounded-md text-gray-700 font-medium
                      hover:bg-gray-100 transition"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </header>


      <div className="h-16" />
    </>
  )
}
