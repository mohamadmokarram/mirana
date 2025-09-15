import HomeHeader from "../components/homeHeader";
import Nav from "../components/Nav";
import NextCurve from "../components/nextCurve";

function HomePage() {
  return (
    <>
      <section className="outline-2 outline-green-500 lg:h-screen flex flex-col">
        <Nav />
        <HomeHeader />
      </section>
      <NextCurve />
    </>
  );
}

export default HomePage;
