import { Routes, Route } from "react-router-dom";
import Basket from "./components/Basket";
import Category from "./components/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Authorization from "./components/Authorization";
import Registration from './components/Registration'
import Main from "./components/Main/index"
import Contact from "./components/Contact"



function App() {

  const [isActive, setIsActive] = useState(0);
  const list = [
    "Все",
    "Напитки",
    "Салаты",
    "Бургеры",
    "Супы",
  ];
console.log(isActive);
  return (
    <div className="App">
      <Header />
      <Category isActive={isActive} setIsActive={setIsActive} list={list}/>
      <Routes>
          {/* <Route path="/cart" element={<Cart/>} */}
          <Route path="/" element={ <Main index={isActive} /> } />
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/auth"  element={<Authorization/>}/>
          <Route path="/registration" element={<Registration/>}/>
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
