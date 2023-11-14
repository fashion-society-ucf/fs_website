import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function About () {
    return (
<><div>
      <header>
        <div className='logo'>FS Logo</div>
     
      </header>
 </div>
        
<div className="about-page">
     <h1>About Page</h1>
</div>
<div className='flex justify-center items-end h-screen'>
    <Navigation href={"/"} text="Home"/>
    <Navigation href={"/about"} text="About"/>
    <Navigation href={"/committees"} text="Committees"/>
    <Navigation href={"/events"} text="Events"/>
</div>
</>   
    )
}