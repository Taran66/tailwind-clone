import Navbar from "../components/Navbar"


const LandingPage = () => {
  return (
    <div className="">
     <div className="">
      <Navbar />
    </div>
    <div className="flex gap-6 items-center flex-col">
      <h1 className=" mt-20 text-6xl w-6/12 font-black tracking-tight text-center text-white">Rapidly build modern websites without ever leaving your HTML.</h1>
      <p className="text-lg w-5/12 text-center">A utility-first CSS framework packed with classes like <span className="font-mono font-medium text-sky-400">flex, pt-4, text-center</span> and <span className="font-mono font-medium text-sky-400">rotate-90</span> that can be composed to build any design, directly in your markup.</p>
      <div>
        <button className="px-20 py-10 bg-sky-400" >Get Started</button>
      </div>
    </div>
    </div>
   
  )
}

export default LandingPage