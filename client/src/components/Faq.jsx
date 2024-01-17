import { IoIosArrowDown } from "react-icons/io";


const Faq = () => {
  return (
    <div className="container">
      <strong className="h-10 mt-2 px-2 mr-2 text-blue-900">FAQ</strong>

      <div className="w-56 container" style={{width:"700px"}}>
        <div className="border border-blue-900 rounded-md flex justify-between my-2 p-2">
          <div className="text">
            Can education flashcards be used for all age groups?
          </div>
          <div className="icon text-gray-500" >
            <IoIosArrowDown />
          </div>
        </div>

        <div className="border border-blue-900 rounded-md flex justify-between my-2 p-2">
          <div className="text">
            How do education flashcards work?
          </div>
          <div className="icon text-gray-500" >
            <IoIosArrowDown />
          </div>
        </div>

        <div className=" border border-blue-900 rounded-md flex justify-between my-2 p-2">
          <div className="text">
            Can education flashcards be used for test preparation?
          </div>
          <div className="icon  text-gray-500">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
