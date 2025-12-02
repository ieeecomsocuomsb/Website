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
    <div className="w-[100%] flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-grow">
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
