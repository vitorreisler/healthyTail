import Layout from "@/components/layout";
import ServiceCards from "@/components/serviceCard";

const Services = () => {
  const services = [
    {
      nome: "Banho",
      descricao: "Banho com produtos de qualidade",
      foto : "/images/vet1.jpg",
      tag1: "Banho",
      tag2: "Qualidade",
      tag3: "Frescor",
    },
    {
      nome: "Tosa",
      descricao: "Tosa com amor e carinho",
      foto: "/images/vet3.jpg",
      tag1: "Tosa",
      tag2: "Amor",
      tag3: "Carinho",
    },
    {
      nome: "Medicacao",
      descricao: "Medicando com cuidado",
      foto: "/images/vet3.jpg",
      tag1: "Medicacao",
      tag2: "Amor",
      tag3: "Cuidado",
    },
    {
      nome: "Teste1",
      descricao: "Medicando com cuidado",
      foto: "/images/vet3.jpg",
      tag1: "Medicacao",
      tag2: "Amor",
      tag3: "Cuidado",
    },
    {
      nome: "Teste2",
      descricao: "Medicando com cuidado",
      foto: "/images/vet3.jpg",
      tag1: "Medicacao",
      tag2: "Amor",
      tag3: "Cuidado",
    },
  
    
  ];
  return (
    <>
      <Layout pageName={"שירותים"}>
        <div className="flex justify-evenly flex-wrap gap-y-5">
        {
          services.map(({nome, descricao,foto, tag1, tag2, tag3}) => (
            <ServiceCards key={nome} nome={nome} descricao={descricao} foto={foto} tag1={tag1} tag2={tag2} tag3={tag3} />
          ))
        }

        </div>
      </Layout>
    </>
  );
};

export default Services;
