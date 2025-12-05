export function HomePage(){
    return(
        <section id="home" >
            <div className="relative flex items-center justify-center min-h-[60vh] overflow-hidden shadow-2xl">
                <img
                    className="absolute inset-0 w-full h-full object-cover opacity-70 "
                    src={new URL('../components/image/AGM-4.jpeg', import.meta.url).href}
                    alt="Community gathering"
                />
                <img
                    className="relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]"
                    src="/favicon.png"
                    alt="logo"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/90 via-[#0f172a]/50 to-transparent" />
                <div className="relative z-10 max-w-2xl px-8 py-16 text-left text-white">
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Welcome to ComSoc</h1>
                    <p className="mt-4 text-lg text-slate-200">
                        Connecting innovators, hosting inspiring events, and building a community around technology and
                        collaboration.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a
                            href="#events"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-colors"
                        >
                            Explore Events
                        </a>
                        <a
                            href="#about"
                            className="inline-flex items-center px-6 py-3 rounded-full border border-white/30 hover:border-white transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}