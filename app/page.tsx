import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DoctorSearch from "@/components/DoctorSearch";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import EmergencyFab from "@/components/EmergencyFab";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DoctorSearch />
      <Services />
      <About />
      <CTA />
      <Footer />
      <EmergencyFab />
    </main>
  );
}
