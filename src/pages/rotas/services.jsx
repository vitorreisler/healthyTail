import Layout from "@/components/layout";
import ServiceCards from "@/components/serviceCard";
import { services } from "@/data/servicesData";

const Services = () => {
  
  return (
    <>
      <Layout pageName={"שירותים"}>
        <div className="flex justify-evenly flex-wrap gap-y-5">
        {
          services.map(({link, nome, descricao,foto, tag1, tag2, tag3}) => (
            <ServiceCards key={nome} link={link}  nome={nome} descricao={descricao} foto={foto} tag1={tag1} tag2={tag2} tag3={tag3} />
          ))
        }

        </div>
      </Layout>
    </>
  );
};

export default Services;
