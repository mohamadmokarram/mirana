import Nav from "../components/Nav";
import moonImg from "../assets/full-moon.png";
import Title from "../components/about-us/Title";
import Footer from "../components/Footer";

function AboutUsPage() {
  return (
    <>
      <link rel="preload" as="image" href={moonImg} />
      <Nav />
      <section className="bg-black mt-12">
        <div className="container lg:max-w-[1024px] overflow-hidden">
          <div className="flex justify-center">
            <img src={moonImg} alt="about-us" />
          </div>

          <Title title="about us" />
          <div className="max-w-[768px] mx-auto">
            <p className="text-white font-poppins-regular px-6 lg:px-0 mt-6 mb-30">
              Endorsed & invested in by Job Vision, Mirana is a recruitment and
              headhunting company, specializing in the placement of candidates
              in permanent positions with clients around the country. Whether
              you are a company looking to expand your team or a candidate
              seeking new opportunities, our extensive network, market
              expertise, massive database, and innovative recruitment strategies
              can help you achieve your goals.
            </p>
          </div>

          <Title title="Mission" />
          <div className="max-w-[768px] mx-auto">
            <p className="text-white font-poppins-regular px-6 lg:px-0 mt-6 mb-30">
              Our mission is to eliminate barriers to growth by connecting top
              companies with exceptional talent, enabling both businesses and
              individuals to thrive.
            </p>
          </div>

          <Title title="Mirana" />
          <div className="max-w-[768px] mx-auto">
            <p className="text-white font-poppins-regular px-6 lg:px-0 mt-6 mb-12">
              We are committed to be your trusted partner, whether you are
              looking for your next journey or you are looking to work with
              people who deliver, you can rely on us to find your fit.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUsPage;
