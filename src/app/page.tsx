import Hero from "./ui/components/Hero";
import HowItWorks from "./ui/components/HowItWorks";
import PublicCapsules from "./ui/components/capsules/PublicCapsules";
import Footer from "./ui/components/outline/Footer";

export default function Home() {
  return (
    <>
      <Hero headline="Save a message for your future self" subHeadline="Lock it away. Open it years later. A time capsule for your thoughts, memories, and dreams."/>
      <HowItWorks />
      <PublicCapsules />
      <Footer />
    </>
  );
}
