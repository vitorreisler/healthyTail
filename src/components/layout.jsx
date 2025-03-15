import Banner from "./banner";
import SimpleCarousel from "./carousel";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children, pageName }) => {
  const images = [
    '/images/vet1.jpg',
    '/images/vet2.jpg',
    '/images/vet3.jpg',
  ];
  return (
    <>
      <header>
        <Navbar />
        <Banner />
        {/*<SimpleCarousel images={images} interval={3000}/> */}
      </header>
      <main className="flex flex-col row-start-2 items-center bg-white max-w-[1200px] mx-auto my-5 rounded shadow-2xl ">
        <h1 className="text-5xl text-black py-4 w-full text-center shadow-md ">
          {pageName}
        </h1>
        <section className="w-full lg:flex lg:justify-center py-4 px-2 text-md text-black ">
          {children}
        </section>
      </main>
      <footer className="bg-gray-700 row-start-3 flex gap-6 flex-wrap items-center justify-center border border-black">
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;
