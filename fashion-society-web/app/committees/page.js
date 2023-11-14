import Link from "next/link"
import Navigation from '@/components/Navigation'

export default function About () {
    return (
        <div className="committees-page">
             <header>
        <div className='logo'>FS Logo</div>
       
      </header>
            <h1>Committees</h1>
    <div className='flex justify-center items-end h-screen'>
      <Navigation href={"/"} text="Home"/>
      <Navigation href={"/about"} text="About"/>
      <Navigation href={"/committees"} text="Committees"/>
      <Navigation href={"/events"} text="Events"/>
    </div>
        </div>
    )
}