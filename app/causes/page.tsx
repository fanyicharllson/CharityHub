import AllCause from "@/allcausespage_sections/allcauses";

const AllCauses = () => {
  return (
    <>
      <section className="relative bg-[url(/assets/images/savelife.jpg)] py-16 bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
        <div className="relative mx-auto max-w-screen-2xl px-4 py-28 sm:px-6 lg:flex lg:h-screen  lg:px-8 text-white text-4xl font-bold max-md:text-3xl capitalize">Our Causes</div>
      </section>
      <AllCause />
    </>
  );
};

export default AllCauses;
