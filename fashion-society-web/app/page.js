
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

      <main>
        <h1>Fashion Society UCF</h1>
      </main>

    </div>
    <main className="p-4">
      <h1 className="text-md">Hello world</h1>
    </main>
  )
}
