import Link from 'next/link'

export default function About () {
    return (
<><div>
      <header>
        <div className='logo'>FS Logo</div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link> 
              <Link href="/about">About</Link>
              <Link href="/committees">Committees</Link>
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </nav>
      </header>
 </div>
        
<div className="about-page">
     <h1>About Page</h1>
</div>
</>   
    )
}