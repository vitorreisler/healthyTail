const ServiceCards = ({ link ,nome, descricao, foto, tag1, tag2, tag3 }) => {
  

  return (
    <a href={link} className="block no-underline text-inherit">
      <article className="max-w-[300px] rounded-2xl overflow-hidden shadow-lg border-black border-2 transition duration-300 hover:scale-105 lg:grayscale-75 lg:hover:grayscale-0">
        <header>
          <img
            className="w-full"
            src={foto}
            alt={`Service Image: ${nome}`}
            loading="lazy"
          />
        </header>

        <div className="px-6 py-4 text-center text-black">
          <h2 className="font-bold text-xl mb-2">{nome}</h2>
          <p className="text-gray-700 text-base text-center">{descricao}</p>
        </div>

        <footer className="flex justify-evenly mb-3" aria-label="Tags do serviço">
          {[tag1, tag2, tag3].map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </footer>
      </article>
    </a>
  );
};

export default ServiceCards;
