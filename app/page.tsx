"use client";

import SmoothScroll from "@/components/SmoothScroll";
import { BookingProvider } from "@/components/BookingContext";

import Navbar from "@/components/ui/Navbar";
import BookingModal from "@/components/Resusable_components/Booking";
import Hero from "@/components/ui/Hero";
import ProgressBar from "@/components/ProgressBar";
import Stats from "@/components/Resusable_components/Stats";
import About from "@/components/ui/About";
import Services from "@/components/ui/Services";
import Team from "@/components/Team";
import Gallery from "@/components/ui/Gallery";
import FAQ from "@/components/ui/FAQ";
import Events from "@/components/Events";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import StickyCTA from "@/components/ui/StickyCTA";
import Pricing from "@/components/ui/Pricing";
import Map from "@/components/ui/Map";

export default function Home() {
  return (
    <BookingProvider>
      <SmoothScroll>

        <BookingModal />
        <ProgressBar />
        <StickyCTA />

        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Services />
        <Team />
        <Gallery />
        <Pricing />
        <FAQ />
        <Events />
        <Contact />
        <Map/>
        <Footer />

      </SmoothScroll>
    </BookingProvider>
  );
}