import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section id="about-me" className="p-8 bg-white dark:bg-black">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-lg">
          I am a passionate Technical Support Analyst with experience in IT support, programming, and customer service.
        </p>
      </section>
      <Footer />
    </div>
  );
}
