import Image from 'next/image'
import Link from 'next/link'
import Navbar from './navbar/page'

export default function Home() {
  return (
   <main>
    <Navbar/>
    <h1>Hello World</h1>
   <Link href="/about">About Me</Link>
   <Link href="/work">Work</Link>
   <Link href="/skills">Skills</Link>
   <Link href="/contact">Contact</Link>
   </main>
  )
}
