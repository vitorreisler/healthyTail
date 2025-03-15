const ServiceCards = ({ nome, descricao, foto, tag1, tag2, tag3 }) => {
  return (
    <div className="max-w-[300px] rounded-2xl overflow-hidden shadow-lg border-black border-2 lg:grayscale-75 lg:hover:grayscale-0 lg:hover:duration-500">
      <img
        className="w-full"
        src={foto}
        alt="Sunset in the mountains"
      />

      <div className="px-6 py-4 text-center text-black">
        <div className="font-bold text-xl mb-2">{nome}</div>
        <p className="text-gray-700 text-base text-center">{descricao}</p>
      </div>

      <div className="flex justify-evenly  mb-3">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          # {tag1}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          # {tag2}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          # {tag3}
        </span>
      </div>

    </div>
  );
};

export default ServiceCards;
