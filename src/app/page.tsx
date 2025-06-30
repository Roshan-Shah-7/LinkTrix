import Hero from "./components/home/Hero";
import OurWork from "./components/home/3DOurWork";
import ScrollMackContainer from '@/app/components/home/ScrollMackContainer'
import OurServices from "./components/home/OurServices";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurWork />
      <OurServices />
      {/* <ScrollMackContainer /> */}
    </main>
  )
}
