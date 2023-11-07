import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <header>
        <div className='logo'>FS Logo</div>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
              <Link href="/committees">Committees</Link>
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-[1.2rem]">
      <h1 className="text-md">Hello world</h1>
    </main>

    </div>

  )
}
