import About from "./components/About";
import AvailabilityCTA from "./components/AvailabilityCTA";
import EnquiryModalProvider from "./components/EnquiryModalProvider";
import FAQ from "./components/FAQ";
import FilmMoments from "./components/FilmMoments";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IntroStatement from "./components/IntroStatement";
import MarqueeStrip from "./components/MarqueeStrip";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import QuickEnquiry from "./components/QuickEnquiry";
import Stats from "./components/Stats";
import StoryGallery from "./components/StoryGallery";
import StoryOverture from "./components/StoryOverture";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <EnquiryModalProvider>
      <Navbar />
      <Hero />
      <StoryOverture />
      <IntroStatement />
      <Stats />
      <StoryGallery />
      <MarqueeStrip />
      <About />
      <Process />
      <FilmMoments />
      <Testimonials />
      <AvailabilityCTA />
      <FAQ />
      <QuickEnquiry />
      <Footer />
    </EnquiryModalProvider>
  );
}
