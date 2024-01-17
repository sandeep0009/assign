import { IoMdHome } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className="container flex gap-2 h-9 mt-10">
        <div className="flex items-center">
          <div className="home text-gray-500">
            <IoMdHome />
          </div>
        </div>

        <div className="flex items-center">
          <div className="arrow text-gray-500">
            <MdKeyboardArrowRight />
          </div>
        </div>

        <div className="flex items-center">
          <div className="flashcard h-2 text-gray-500 text-center flex items-center">
            FlashCard
          </div>
        </div>

        <div className="flex items-center">
          <div className="arrow text-gray-500">
            <MdKeyboardArrowRight />
          </div>
        </div>

        <div className="flex items-center">
          <div className="flashcard h-2 text-gray-500 text-center flex items-center">
            Mathematics
          </div>
        </div>

        <div className="flex items-center">
          <div className="arrow text-gray-500">
            <MdKeyboardArrowRight />
          </div>
        </div>

        <div className="flex items-center">
          <div className="flashcard h-2 text-blue-900 text-center flex items-center">
            Relation and Function
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
