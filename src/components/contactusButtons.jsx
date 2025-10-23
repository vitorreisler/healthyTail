const ContactusButtons = ({name, age,gender,breet,currentWeight, petType,bcsScore,neutered}) => {
  return (
    <div className=" flex flex-col items-center gap-y-5">
      <a
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=972542657358&text=שלום רציתי יותר מידע לגבי ה${petType} שלי%0A
            שם: ${name || ""}%0A
            גיל: ${age || ""}%0A
            מין: ${gender || ""}%0A
            גזע: ${breet || ""}%0A
            משקל נוכחי: ${currentWeight || ""} ק"ג%0A
            BCS: ${bcsScore || ""}%0A,
            מסורס: ${neutered || ""}%0A,
            `}
        className="bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded"
      >
        WhatsApp
      </a>

    </div>
  );
};

export default ContactusButtons;
