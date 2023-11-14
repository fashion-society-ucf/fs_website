import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div>
      <header>
        <div className="text-md">FS Logo</div>
       
      </header>

      <main className="p-[1.2rem]">
      <h1 className="text-md">Hello world</h1>
    </main>
    
<div className='flex justify-center items-end h-screen'>
    <Navigation href={"/"} text="Home"/>
    <Navigation href={"/about"} text="About"/>
    <Navigation href={"/committees"} text="Committees"/>
    <Navigation href={"/events"} text="Events"/>
</div>

    </div>

  )
}
