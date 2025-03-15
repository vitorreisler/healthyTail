import Layout from "@/components/layout";

const Contactus = () => {
  return (
    <>
      <Layout pageName={"Contact Us"}>
        <div className=" flex flex-col items-center gap-y-5">
          <a target="_blank"  href="https://api.whatsapp.com/send?phone=972542657358" className="bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded">
            WhatsApp
          </a>
          <a
            href="mailto:yon.veterinary@gmail.com?subject=Infos &body=hello moto"
            className="bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded"
          >
            Email
          </a>
        </div>
      </Layout>
    </>
  );
};

export default Contactus;
