const Features = () => {
  return (
    <div className=" mx-80 mt-36">
        <div className="flex flex-col items-start gap-8 w-8/12">

            <div>
            <img src="../src/assets/Constraints.png" alt="#" />
            </div>
            <p className="text-lg font-semibold text-indigo-400">Constraint-based</p>
            <h2 className="text-4xl font-sans text-white font-bold">An API for your design system.</h2>
            <p className="text-left">Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.</p>
            <button className="px-5 py-2 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-full">Learn more</button>
        </div>

    </div>
  )
}

export default Features