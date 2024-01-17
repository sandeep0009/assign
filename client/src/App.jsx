import Buttons from "./components/Buttons"
import Home from "./components/Home"
import Faq from "./components/Faq"
import Formula from "./components/Formula"
import Header from "./components/Header"
import Heading from "./components/Heading"
import List from "./components/List"
import Powered from "./components/Powered"


const App = () => {
  return (
    <div className=" px-10">
      <Header/>

      <Home/>

      <div className="container mt-12">
      <Heading />

      </div>
      <List/>

      <Formula/>
      <Buttons/>
      <Powered/>

      <Faq/>
   
    </div>
  )
}

export default App