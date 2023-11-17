import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Nav } from "@/components/Nav";


export default function Home() {
  return (
    <div className="bg-hero-pattern">
      <Nav />
      <Hero />
      <Services />
    </div>
  )
}
