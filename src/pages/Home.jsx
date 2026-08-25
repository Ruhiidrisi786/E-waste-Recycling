import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
// import Machine from "../components/Machine/Machine";
// import Impact from "../components/Impact/Impact";
// import Services from "../components/Services/Services";
// import Testimonials from "../components/Testimonials/Testimonials";
// import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        {/* <Machine />
        <Impact />
        <Services />
        <Testimonials /> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default Home;
