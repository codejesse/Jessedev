import Image from 'next/image'
import Nav from './components/Nav'
import Card from './components/Card'
import Prefooter from './components/Prefooter'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:p-8">
      <div>
        <Nav />
        <div className='flex flex-col md:flex-col lg:flex-row-reverse'>
          <Image
            src="/jesse2.svg"
            width={200}
            height={200}
            alt='Memoji of Jesse'
            className='w-[200px] md:w-[200px] lg:w-[500px] hidden md:flex lg:flex'
          />
          <div className='flex flex-col m-6 md:m-8 lg:m-14 pt-[30px] md:pt-[60px] lg:pt-[70px]'>
            <p className='text-[16px] md:text-[20px] lg:text-[24px] w-[300px] md:w-[450px] lg:w-[500px] mb-4'>We specialize in crafting exceptional digital experiences to help our clients achieve their business goals.</p>
            <h1 className='text-[70px] md:text-[80px] lg:text-[96px] leading-[70px] lg:leading-[90px]'>Product Design Experience</h1>
          </div>
        </div>
            <div className='flex flex-row justify-end mr-[60px] md:mr-[80px] lg:mr-[120px]'>
              <div className='flex flex-col'>
                <p className='font-medium text-[20px] text-right'>heyo@jesse.com</p>
                <p className='font-light text-right text-[#505050]'>Scroll to explore</p>
              </div>
            </div>
        <div className='m-6 lg:m-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 pt-8'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className='m-4 md:m-8 lg:m-14'>
          <div className='flex pt-[40px]'>
            <h1 className='font-medium md:text-[20px] lg:text-[30px]'>We strive to bring innovation and creativity to every project we undertake. Our team of experts works closely with our clients to understand their needs and deliver outstanding solutions. We are dedicated to creating products exceed our client's expectations.</h1>
          </div>
        </div>
        <Prefooter />
        <Footer />
      </div>
    </main>
  )
}
