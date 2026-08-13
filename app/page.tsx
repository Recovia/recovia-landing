import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import Downloads from "@/components/Downloads";
import Cta from "@/components/Cta";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Integrations />
      <Downloads />
      <Cta />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
