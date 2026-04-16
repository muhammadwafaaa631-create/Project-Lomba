export default function Storytelling() {
  return (
    <section className="py-16 bg-[#FDFBF7] dark:bg-[#0B1120] px-6 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[500px]">
          
          {/* Left Large Image */}
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/5">
            <img 
              // Placeholders matching the exact layout semantics
              src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1000" 
              alt="Cityscape" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 h-full hidden md:flex">
            {/* Top Row (2 images) */}
            <div className="flex gap-4 h-1/2">
               <div className="flex-1 rounded-3xl overflow-hidden shadow-lg border border-white/5">
                 <img 
                   src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800" 
                   alt="Tech Person" 
                   className="w-full h-full object-cover"
                 />
               </div>
               <div className="flex-1 rounded-3xl overflow-hidden shadow-lg border border-white/5">
                 <img 
                   src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800" 
                   alt="City Night" 
                   className="w-full h-full object-cover"
                 />
               </div>
            </div>
            
            {/* Bottom Row (1 wide image) */}
            <div className="w-full h-1/2 rounded-3xl overflow-hidden shadow-lg border border-white/5">
               <img 
                 src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1200" 
                 alt="Logistics" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          {/* Mobile version for the right column */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
             <div className="rounded-3xl overflow-hidden border border-white/5 aspect-square">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800" alt="Tech Person" className="w-full h-full object-cover"/>
             </div>
             <div className="rounded-3xl overflow-hidden border border-white/5 aspect-square">
                <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800" alt="City Night" className="w-full h-full object-cover"/>
             </div>
             <div className="col-span-2 rounded-3xl overflow-hidden border border-white/5 aspect-video">
                <img src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1200" alt="Logistics" className="w-full h-full object-cover"/>
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
