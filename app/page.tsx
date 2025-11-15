import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PreLoader from "@/components/preloader";

export default function Home() {
  return (
    <>
      <PreLoader />
      <Navbar />
      <Hero />
    </>
  );
}
