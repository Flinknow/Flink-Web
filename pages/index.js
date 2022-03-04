import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <GetInTouch/>
      <Footer />
    </div>
  );
}
