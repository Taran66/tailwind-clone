import Navbar from "../components/Navbar"

const LandingPage = () => {
  return (
    <div>
     <Navbar />
    <div className="flex gap-6 items-center flex-col">
      <h1 className=" mt-20 text-6xl w-6/12 font-black tracking-tight text-center text-white">Rapidly build modern websites without ever leaving your HTML.</h1>
      <p className="text-lg w-5/12 text-center">A utility-first CSS framework packed with classes like <span className="font-mono font-medium text-sky-400">flex, pt-4, text-center</span> and <span className="font-mono font-medium text-sky-400">rotate-90</span> that can be composed to build any design, directly in your markup.</p>
      <div className="flex flex-row items-center gap-5">
        <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400" >Get Started</button>
        <button className="flex flex-row  sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg>
        <span>Quick Search ...</span>
        <kbd class="font-sans font-semibold dark:text-slate-500"><abbr title="Control" class="no-underline text-slate-300 dark:text-slate-500">Ctrl </abbr> K</kbd>
        </button>
      </div>
      <div className="mt-20">
          <div className="flex flex-row items-center">
            <div className="z-10 -mr-[20px]">
            <img src="../src/assets/landing-img1.png" alt="#" />
            </div>
            <div>
            <img src="../src/assets/landing-img2.png" alt="#" />
            </div>
          </div>
      </div>
    </div>
    </div>
   
  )
}

export default LandingPage