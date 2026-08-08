import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DoctorSearch from "@/components/DoctorSearch";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import EmergencyFab from "@/components/EmergencyFab";
import { fetchSchedule } from "@/lib/fetchSchedule";

// Refresh this page's data at most once per hour
export const revalidate = 3600;

export default async function Home() {
  const { entries, isLive } = await fetchSchedule();

  return (
    <main>
      <Header />
      <Hero />
      <DoctorSearch schedule={entries} isLive={isLive} />
      <Services />
      <About />
      <CTA />
      <Footer />
      <EmergencyFab />
    </main>
  );
}
