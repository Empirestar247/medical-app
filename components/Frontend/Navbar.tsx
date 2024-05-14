"use client"

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Pathologist', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Clinical Microbiologist', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Clinical Chemist', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Cardiologist', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Pharmacist', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Orthopedic Surgeon', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Dentist', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Gynecologist', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Psychiatrist', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Radiologist', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Dermatologist', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Dermatologist', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Book an appointment', href: '#', icon: PhoneIcon  },
  { name: 'Contact sales', href: '#', icon: PlayCircleIcon},
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center border-b border-gray-50 justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>

            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8 " aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-indigo-600 hover:scale-110  duration-300 transition-all">
            Doctors
              <ChevronDownIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -right-[250px] top-full z-40 mt-6 h-[460px] w-[550px] overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-gray-900/5 ">
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-2  ">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-sm text-gray-600">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-xs font-medium text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-600 hover:bg-white"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>




            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:scale-110  duration-300 transition-all">
          Services
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:scale-110  duration-300 transition-all">
        About Us
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:scale-110  duration-300 transition-all">
            Contact
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 border border-indigo-600 text-indigo-600 py-1 px-4 rounded-full bg-white hover:scale-110  duration-300 transition-all">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  bg-indigo-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-50/80">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-100 hover:text-gray-500 duration-300 transition-all">
                       Doctors
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-100 hover:bg-gray-200 hover:text-gray-500 duration-300 transition-all"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>


                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-100 hover:text-gray-500 duration-300 transition-all"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-100 hover:text-gray-500 duration-300 transition-all"
                >
                 About Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-100 hover:text-gray-500 duration-300 transition-all"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-100 hover:text-gray-500 duration-300 transition-all"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
