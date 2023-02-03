import { Hero } from "@/components/landing/Hero";
import { Servicios } from "@/components/landing/Servicios";
import { Nav } from "@/components/Nav";


export default function Home() {
  return (
    <div className="bg-hero-pattern">
      <Nav/>
      <Hero/>
      <Servicios/>
    </div>
  )
}
