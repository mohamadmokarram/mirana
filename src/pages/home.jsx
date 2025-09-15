import HomeHeader from "../components/homeHeader";
import Nav from "../components/Nav";

function HomePage() {
  return (
    <>
      <section className="outline-2 outline-green-500 h-screen flex flex-col">
        <Nav />
        <HomeHeader />
      </section>
    </>
  );
}

export default HomePage;
