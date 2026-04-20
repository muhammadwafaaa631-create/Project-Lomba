import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home"
import About from "./pages/About"
import Wisata from "./pages/Wisata";
import History from "./pages/History"
import MasaAwal from "./pages/history/MasaAwal";
import PendirianKota from "./pages/history/PendirianKota";
import HindiaBelanda from "./pages/history/HindiaBelanda";
import Kemerdekaan from "./pages/history/Kemerdekaan";
import MasaModern from "./pages/history/MasaModern";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import IntroScreen from "./components/IntroScreen"
import Budaya from "./pages/Budaya"
import BudayaDetail from "./pages/BudayaDetail";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <IntroScreen onComplete={() => setIntroFinished(true)} />
      
      <div className={`flex flex-col min-h-screen ${!introFinished ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />

      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/masa-awal" element={<MasaAwal />} />
          <Route path="/history/kolonial" element={<HindiaBelanda />} />
          <Route path="/history/peristiwa-penting" element={<Kemerdekaan />} />
          <Route path="/history/modern" element={<MasaModern />} />

          <Route path="/wisata" element={<Wisata />} />
          <Route path="/budaya" element={<Budaya />} />
          <Route path="/budaya/:id" element={<BudayaDetail />} />
          <Route path="*" element={
            <div className="flex items-center justify-center min-h-[50vh]">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
                404 - Page Not Found
              </h1>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
      </div>
    </>
  )
}

export default App