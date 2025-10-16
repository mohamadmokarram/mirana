import FeaturedJobs from "../components/Featured-jobs";
import FindNext from "../components/FindNext";
import Footer from "../components/Footer";
import HomeHeader from "../components/homeHeader";
import Nav from "../components/Nav";
import NextCurve from "../components/nextCurve";
import Partners from "../components/Partners";
import headerImg from "../assets/smile.png";

function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href={headerImg} />
      <section className="overflow-hidden lg:h-screen flex flex-col">
        <Nav />
        <HomeHeader />
      </section>
      <NextCurve />
      <Partners />
      <FeaturedJobs />
      <FindNext />
      <Footer />
    </>
  );
}

export default HomePage;
