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
import {
  absoluteUrl,
  contactEmail,
  contactPhone,
  openGraphImage,
  siteDescription,
  siteName,
  siteUrl,
} from "./seo";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: siteName,
    url: siteUrl,
    image: absoluteUrl(openGraphImage),
    logo: absoluteUrl("/Landing%20Page/Logo_s/2.png"),
    description: siteDescription,
    email: contactEmail,
    telephone: contactPhone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop 5/101 Clapham Rd",
      addressLocality: "Sefton",
      addressRegion: "NSW",
      postalCode: "2162",
      addressCountry: "AU",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Sydney",
      },
      {
        "@type": "Country",
        name: "Australia",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding photography",
          areaServed: "Sydney, Australia",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding videography",
          areaServed: "Sydney, Australia",
        },
      },
    ],
    knowsAbout: [
      "Wedding photography",
      "Wedding videography",
      "Cinematic wedding films",
      "Engagement sessions",
      "Wedding day coverage",
    ],
    mainEntityOfPage: siteUrl,
    slogan: "Premium wedding photography and cinematic videography.",
  };

  return (
    <EnquiryModalProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
