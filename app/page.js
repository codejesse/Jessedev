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
            className='w-[120px] md:w-[200px] lg:w-[500px] mt-[100px] md:mt-[100px] lg:mt-[-20px] flex md:flex lg:flex'
          />
            <span className="hidden border-[8px] md:border-[8px] lg:border-[1px] border-white rounded-full lg:m-auto bg-[#030303] w-fit h-fit lg:p-1">
              <svg id="rotatingText" viewBox="0 0 200 200" className="w-[88.579px] h-[88.74px] lg:w-[123.675px] lg:h-[123.675px]">
                <defs>
                  <path id="circle" d="M 100, 100 m -75, 0 a 75, 75 0 1, 0 150, 0 a 75, 75 0 1, 0 -150, 0">
                  </path>
                </defs>
                <text width="400">
                  <textPath alignmentBaseline="top" xlinkHref="#circle" className="text font-display font-light text-white">
                    Jesse Beke 👨🏿‍💻 - Front End Developer -
                  </textPath>
                </text>
              </svg>
            </span>
          <div className='flex flex-col gap-4 m-6 md:m-8 lg:m-14 pt-[30px] mt-[-20px] md:mt-[-20px] md:pt-[60px] lg:pt-[70px]'>
            <h1 className='text-[55px] md:text-[80px] lg:text-[90px] leading-[70px] lg:leading-[90px]'><span className=''>Creative ✨</span> Front End Developer</h1>
            <p className='text-[16px] md:text-[20px] font-regular lg:text-[20px] w-[300px] md:w-[450px] lg:w-[500px] mb-4'>Hi i'm Jesse Beke a Front End developer passionate about building simple to complex web experiences for clients globally.</p>
            <div className='flex flex-row gap-5 h-[60px] border border-slate-700 w-full md:w-96 lg:w-96 rounded-full'>
              <div className='w-fit p-3 rounded-full mx-auto my-auto'><Image height={35} width={35} src="./Spotify_icon.svg" /></div>
              <div className='w-fit p-3 rounded-full mx-auto my-auto'><Image height={35} width={35} src="./github.svg" /></div>
              <div className='w-fit p-3 rounded-full mx-auto my-auto'>🧭</div>
              <div className='w-fit p-3 rounded-full mx-auto my-auto'>🦍</div>  
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-end mr-[60px] md:mr-[80px] lg:mr-[120px]'>
          <div className='flex flex-col'>
            <p className='font-medium text-[20px] text-right lg:mt-[-60px]'>heyo@jesse.com</p>
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
            <h1 className='font-medium md:text-[20px] lg:text-[30px]'>I strive to bring <span className='bg-[#2d2d2d] text-white p-3 px-4'>innovation ✨</span> and creativity 💡 to every project i work on. I work closely with clients to understand their needs and deliver outstanding solutions. I am dedicated to creating amazing products <span className='bg-[#2d2d2d] text-white p-3 px-4'>let's talk.</span></h1>
          </div>
        </div>
        {/* <Prefooter /> */}
        <div className='m-4 lg:m-10'>
          <Footer />
        </div>
      </div>
    </main>
  )
}
