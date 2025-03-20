import { FaPaw } from "react-icons/fa";

const HrElement = () => {
  return (
    <div className="flex flex-row items-center">
      <hr className="m-6 border-1 w-full text-gray-300 shadow-sm" />{" "}
      <span className="my-4 w-16 p-3 shadow-md material-symbols-outlined  border-1 border-gray-300 rounded-full  text-gray-500">
        <FaPaw />
      </span>
      <hr className="m-6 border-1 w-full text-gray-300 shadow-sm" />
    </div>
  );
};

export default HrElement;
