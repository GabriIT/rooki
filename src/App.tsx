import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Founders } from "./components/Founders";
import { SummerPilot } from "./components/SummerPilot";
import { Deliverables } from "./components/Deliverables";
import { Roadmap } from "./components/Roadmap";
import { FAQ } from "./components/FAQ";
import { International } from "./components/International";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Founders />
        <SummerPilot />
        <Deliverables />
        <Roadmap />
        <FAQ />
        <International />
      </main>
      <Footer />
    </>
  );
}
