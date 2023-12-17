import Link from 'next/link'
import { Youtube, Twitter, Github, Linkedin } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

export default function Navbar() {
  return (
    <nav className='bg-zinc-600 p-4 sticky top-0 drop-shadow-xl z-50'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold text-zinc-100 grid place-content-center mb-2 md:mb-0'>
          <Link
            href='/'
            className='text-zinc-100/90 no-underline hover:text-zinc-100'
          >
            Prabir Singh
          </Link>
        </h1>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-zinc-100/90 hover:text-zinc-100'>
          <Link href='/' className='text-zinc-100/90 hover:text-zinc-100'>
            <Youtube />
          </Link>
          <Link href='/' className='text-zinc-100/90 hover:text-zinc-100'>
            <Twitter />
          </Link>
          <Link href='/' className='text-zinc-100/90 hover:text-zinc-100'>
            <Github />
          </Link>
          <Link href='/' className='text-zinc-100/90 hover:text-zinc-100'>
            <Linkedin />
          </Link>
        </div>
      </div>
    </nav>
  )
}
