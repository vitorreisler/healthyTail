import Layout from "@/components/layout";

const About = () => {
  return (
    <>
      <Layout pageName={"About"}>
        <picture className="max-w-[350px] my-auto mx-auto">
          <img
            className="rounded-2xl shadow-xl"
            src="/images/vet2.jpg"
            alt="Imagem Yon"
          />
        </picture>
        <p className="text-black max-w-[500px] mx-auto my-auto px-3 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ad, nesciunt quod quas perspiciatis, numquam optio expedita placeat
          cum nam, sunt magnam? Facilis illum aut, corporis beatae earum saepe
          assumenda. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis quisquam, ipsum amet ipsam repudiandae quas eaque quo? Modi
          illo quibusdam nobis debitis nulla perspiciatis fugit, similique
          blanditiis corrupti voluptas omnis? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Aperiam vero fugit, rerum id temporibus
          dicta. Neque impedit unde quam tempore officia vero amet, aut
          obcaecati cumque modi non exercitationem rerum? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Architecto id amet eveniet iste
          omnis accusamus reprehenderit natus optio? Ullam sit aperiam aliquid
          corrupti harum ex neque laborum quas nam recusandae.
        </p>
      </Layout>
    </>
  );
};

export default About;
