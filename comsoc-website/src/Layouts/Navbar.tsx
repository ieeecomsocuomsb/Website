export function Navbar(){
    return (
        <header className="bg-linear-to-t from-[#80c1ed] to-[#00507F] shadow-xl shadow-black/5 border-b-4 border-[#00507F] drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)] sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a
            href="#home"
            className="flex items-center space-x-3"
            aria-label="Institution Home"
            >
            <img
                src="../public/favicon.svg"
                alt="IEEE ComSoc"
                className="h-10 w-auto filter drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]"
            />
            </a>
            {/* <div className="text-2xl font-bold">IEEE ComSoc</div> */}
            <nav className=" space-x-6 hidden md:flex text-[#fefefe]">
                <a href="#home" className="hover:font-semibold hover:text-[#00507F] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]">Home</a>
                <a href="#about" className="hover:font-semibold hover:text-[#00507F] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]">About</a>
                <a href="#events" className="hover:font-semibold hover:text-[#00507F] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]">Events</a>
                <a href="#committee" className="hover:font-semibold hover:text-[#00507F] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]">Committee</a>
            </nav>
            </div>
        </header>
    )
}