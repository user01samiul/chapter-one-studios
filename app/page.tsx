import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StoryOverture from "./components/StoryOverture";
import IntroStatement from "./components/IntroStatement";
import StoryGallery from "./components/StoryGallery";
import MarqueeStrip from "./components/MarqueeStrip";
import About from "./components/About";
import Process from "./components/Process";
import FilmMoments from "./components/FilmMoments";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import AvailabilityCTA from "./components/AvailabilityCTA";
import FAQ from "./components/FAQ";
import QuickEnquiry from "./components/QuickEnquiry";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import EnquiryModalProvider from "./components/EnquiryModalProvider";

export default function Home() {
  return (
    <EnquiryModalProvider>
      <Navbar />
      <Hero />
      <StoryOverture />
      <IntroStatement />
      <StoryGallery />
      <MarqueeStrip />
      <About />
      <Process />
      <FilmMoments />
      <Stats />
      <Testimonials />
      <AvailabilityCTA />
      <FAQ />
      <QuickEnquiry />
      <EnquiryForm />
      <Footer />
    </EnquiryModalProvider>
  );
}
