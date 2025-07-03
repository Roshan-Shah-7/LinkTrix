import Hero from "./components/home/Hero";
import OurWork from "./components/home/3DOurWork";
import OurServices from "./components/home/OurServices";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import { CallToAction } from "./components/home/CallToAction"
import { ProcessTimeLine } from "./components/home/ProcessTimeLine";


export default function Home() {
  return (
    <main>
      <Hero />
      <OurWork />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <ProcessTimeLine />
    </main>
  )
}
