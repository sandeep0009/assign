const Header = () => {
  return (
    <div>
      <div className="flex justify-end  w-full mx-px h-12 mt-8">
        <div className="container flex items-center">
          <img className="h-10" src="./images/logo.png" alt="" />
          <strong className="h-10 mt-2 px-2 mr-2 text-blue-900">HyggeX</strong>
        </div>

        <div className="container flex justify-end">
            <div className="list-elements flex items-center">
                <ul className="flex justify-end items-center">
                    <li className="px-2 ">Home</li>
                    <li className="px-2 ">FlashCard</li>
                    <li className="px-2 ">Contact</li>
                    <li className="px-2 ">FAQ</li>
                </ul>

            </div>
            <div className="button gap-3">
            <button className="bg-gradient-to-b from-indigo-900 to-blue-800 text-white px-4 h-12 w-32 rounded-full text-2xl">Login</button>



            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
