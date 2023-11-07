import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <header>
        <div className="text-md">FS Logo</div>
        <nav>
          <ul className='text-md'>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/committees">Committees</Link></li>
            <li><Link href="/events">Events</Link></li>
          </ul>
        </nav>
      </header>

      <main className="p-[1.2rem]">
      <h1 className="text-md">Hello world</h1>
    </main>

    </div>

  )
}
