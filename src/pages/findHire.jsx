import Form from "../components/Form";
import Header from "../components/header";
import Nav from "../components/Nav";

function FindHirePage() {
  return (
    <>
      <Nav />
      <Header classes={`bg-findHire`}>
        <h1 className="font-poppins-bold mt-6 text-white md:mt-12 mb-2 font-semibold text-[40px] md:text-8xl text-center">
          Meet your next colleagues
        </h1>
        <Form />
      </Header>
    </>
  );
}

export default FindHirePage;
