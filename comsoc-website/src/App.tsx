import "./App.css";
import { AboutUs } from "./Pages/AboutUs";
import { Committee } from "./Pages/Committee";
import { Event } from "./Pages/Event";
import { HomePage } from "./Pages/HomePage";
import { Footer } from "./Pages/Footer";
import { Navbar } from "./Layouts/Navbar";
import { ContactUs } from "./Pages/ContactUs";
import ComfixPage from "./Pages/sub_pages/comfix";
import React from "react";

function App() {
  const [route, setRoute] = React.useState<string>(window.location.pathname);

  React.useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  if (route.startsWith("/comfix")) {
    return (
      <div className="w-full flex flex-col bg-[#0b1f24] text-white">
        <Navbar />
        <main className="grow">
          <ComfixPage />
        </main>
        <Footer />
      </div>
    );
  }

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
  );
}

export default App;
