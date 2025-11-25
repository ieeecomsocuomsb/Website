export function Navbar(){
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold">IEEE ComSoc</div>
                <nav className="space-x-6 hidden md:flex text-gray-600">
                    <a href="#home" className="hover:text-gray-900">Home</a>
                    <a href="#about" className="hover:text-gray-900">About</a>
                    <a href="#events" className="hover:text-gray-900">Events</a>
                    <a href="#committee" className="hover:text-gray-900">Committee</a>
                </nav>
            </div>
        </header>
    )
}