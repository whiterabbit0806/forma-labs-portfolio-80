import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import TechStack from "@/components/TechStack";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <TechStack />
      <Industries />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
