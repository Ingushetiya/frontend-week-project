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
 
  return (
    <div className="App">
      <Header />
      <Category />
      <Routes>
          <Route path="/" element={ <Main/> } />
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
