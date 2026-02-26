import { 
  Header, 
  Hero, 
  Features,
  MoreInformation,
  Testimonials,
<<<<<<< HEAD
  Form,
  Footer,
=======
>>>>>>> ceba5e39f5300bec004004b665389d4503f98128
} from './components'

function App() {

  return (
<<<<<<< HEAD
    <main className='m-auto'>
      
      <section className='bg-Navy-850 p-6 h-[420px] relative md:h-[640px]'>
=======
    <main className='w-[375px] m-auto'>
      
      <section className='bg-Navy-850 p-6 h-[420px] relative'>
>>>>>>> ceba5e39f5300bec004004b665389d4503f98128
        <Header />
        
        <img
          src="/images/illustration-intro.png"
          alt="intro illustration"
<<<<<<< HEAD
          className='relative z-10 mt-12 w-[320px] md:w-[450px] mx-auto'
        />
        
        <img
          className='absolute bottom-0 left-0 w-full xl:hidden'
          src="/images/bg-curvy-mobile.svg"
          alt="bg curvy mobile"
        />
        <img
          className='absolute bottom-0 left-0 w-full hidden xl:block'
          src="/images/bg-curvy-desktop.svg"
          alt="bg curvy desktop"
        />
      </section>

      <section className='bg-Navy-900 p-6 pb-[300px]'>
=======
          className='relative z-10 mt-12'
        />
        
        <img
          className='absolute bottom-0 left-0'
          src="/images/bg-curvy-mobile.svg"
          alt="bg curvy mobile"
        />
      </section>

      <section className='bg-Navy-900 p-6'>
>>>>>>> ceba5e39f5300bec004004b665389d4503f98128
        <Hero />
        <Features />
        <MoreInformation />
        <Testimonials />
      </section>
<<<<<<< HEAD

      <section className='bg-Navy-950 p-6 relative'>
        <Form />
        <Footer />
      </section>
=======
>>>>>>> ceba5e39f5300bec004004b665389d4503f98128
    
    </main>
  )
}

export default App