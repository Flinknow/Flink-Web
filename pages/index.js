import About from "../components/About";
import AboutHero from "../components/About/AboutHero";
import AboutTeams from "../components/About/AboutTeams";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/header";
import Hero from "../components/Hero";
import Partner from "../components/Partner";
import Section from "../components/Section";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutHero />
      <AboutTeams />
      <Hero />
      <GetInTouch/>
      <About />
      <Partner />
      <Section />
      <Footer />
    </div>
  );
}
