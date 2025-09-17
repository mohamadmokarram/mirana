import FindNext from "../components/FindNext";
import Footer from "../components/Footer";
import HomeHeader from "../components/homeHeader";
import Nav from "../components/Nav";
import NextCurve from "../components/nextCurve";
import Partners from "../components/Partners";

function HomePage() {
  return (
    <>
      <section className="overflow-hidden lg:h-screen flex flex-col">
        <Nav />
        <HomeHeader />
      </section>
      <NextCurve />
      <Partners />
      <FindNext />
      <Footer />
    </>
  );
}

export default HomePage;
