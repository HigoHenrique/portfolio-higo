'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

export default function Navbar() {

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projetos', href: '/project' },
    { name: 'Contato', href: '/contact' },
    { name: 'Sobre', href: '/about' },
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between lg:justify-around p-6 lg:px-8" aria-label="Global">
            <div className="flex">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">H</span>
                <Image
                  className='lg:w-24 lg:h-24 hover:skew-y-12'
                  src="/h-icon.png"
                  alt="H"
                  width={70}
                  height={70}
                />
              </Link>
            </div>
            <div className="flex p-2 lg:hidden">
              <button
                type="button"
                className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-7 w-7 text-slate-100" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden  lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-xl hover:underline font-semibold leading-6 hover:skew-y-2 text-slate-100">
                  {item.name}
                </Link>
              ))}
            </div>

          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-h lg:px-6 lg:py-6  sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="m-1.5 p-1.5">
                <span className="sr-only">H</span>
              </Link>
              <button
                type="button"
                className="m-6 rounded-md p-6 text-h-text"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-7 w-7 text-slate-100" aria-hidden="true" />
              </button>
            </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y p-2">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-7 text-slate-100 hover:underline"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
    );
}