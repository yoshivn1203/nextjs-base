'use client'

import './globals.css'

import clsx from 'clsx'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { Provider } from 'react-redux'

import { Button } from '@/components/ui/button'
import { store } from '@/store/store'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    //add className='dark' to html tag to enable dark mode
    <html
      lang='en'
      className={clsx({
        dark: false
      })}
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
          <nav className='border-b mb-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex justify-between h-16 items-center'>
                <div className='flex space-x-4'>
                  <Link href='/'>
                    <Button variant='ghost'>Home</Button>
                  </Link>
                  <Link href='/about'>
                    <Button variant='ghost'>About</Button>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</main>
        </Provider>
      </body>
    </html>
  )
}
