import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Aboutus from './components/Aboutus'

export default function Home() {
  return (
    <div className='bg-[#FFD700] min-h-screen'>
      <Navbar/>
      {/* <Hero/> */}
      <Aboutus />
    </div>
  )
}
