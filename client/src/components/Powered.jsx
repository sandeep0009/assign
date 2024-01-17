import { FaPlus } from "react-icons/fa";
const Powered = () => {
  return (
    <div>
      <div className=" mt-24 mb-20 flex justify-between">
        <div className="container flex justify-between w-56 gap-4">
          <div
            className="square w-24 h-24 rounded-full shadow-lg flex items-center justify-center"
            style={{ boxShadow: "0 0 4px 4px rgba(8, 56, 153, 0.4)" }}
          >
            <img
              src="./images/logo.png"
              alt=""
              className="max-w-full max-h-full"
            />
          </div>

          <div className="heading">
            <p className="text-gray-500">Powered by</p>
            <strong className="  text-blue-900 text-3xl">HyggeX</strong>
          </div>
        </div>

        <div className="container flex justify-end items-center gap-4">
      <button className="bg-gradient-to-b from-indigo-900 to-blue-800 rounded-full w-12 h-12 text-white flex items-center justify-center">
        <FaPlus />
      </button>

      <div className="heading">
        <strong className=" text-blue-700 text-3xl">Create FlashCard</strong>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Powered;
