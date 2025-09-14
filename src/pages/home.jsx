import HomeHeader from "../components/homeHeader";
import Nav from "../components/Nav";

function HomePage() {
  return (
    <>
      <section className="h-screen flex flex-col">
        <Nav />
        <HomeHeader />
      </section>
    </>
  );
}

export default HomePage;
