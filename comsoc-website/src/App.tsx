import './App.css'
import { AboutUs } from './Pages/AboutUs'
import { Committee } from './Pages/Committee'
import { Event } from './Pages/Event'
import { HomePage } from './Pages/HomePage'
import { Footer } from './Pages/Footer'
import { Navbar } from './Layouts/Navbar'
import { ContactUs } from './Pages/ContactUs'

function App() {

  return (
    <div className="w-full flex flex-col bg-[#e6f0f6] text-gray-900">
      <Navbar />
      <main className="grow">
        <HomePage />
        <AboutUs />
        <Event />
        <Committee />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
