import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickEnquiry from "./components/QuickEnquiry";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import AvailabilityCTA from "./components/AvailabilityCTA";
import FAQ from "./components/FAQ";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import EnquiryModalProvider from "./components/EnquiryModalProvider";

export default function Home() {
  return (
    <EnquiryModalProvider>
      <Navbar />
      <Hero />
      <QuickEnquiry />
      <Stats />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
      <AvailabilityCTA />
      <FAQ />
      <EnquiryForm />
      <Footer />
    </EnquiryModalProvider>
  );
}
