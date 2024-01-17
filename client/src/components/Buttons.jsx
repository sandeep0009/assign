import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Buttons = () => {
  return (
    <div>
      <div className=" flex justify-between m-auto" style={{width:"612px"}}>
        <div className="container">
          <img src="./images/round.png" alt="" />
        </div>
        <div className="container flex justify-between items-center gap-4">
          <button className="bg-gradient-to-b from-indigo-900 to-blue-800 text-white rounded-full w-10 h-10 flex items-center justify-center">
            <MdKeyboardArrowLeft />
          </button>

          <strong>01/10</strong>

          <button className="bg-gradient-to-b from-indigo-900 to-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center">
            <MdKeyboardArrowRight />
          </button>
        </div>

        <div className="container flex justify-end ">
          <img src="./images/brackets.png" alt=""  className="h-8"/>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
