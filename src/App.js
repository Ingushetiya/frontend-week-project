import { Routes, Route } from "react-router-dom";
import Basket from "./components/Basket";
import Category from "./components/Category";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Main />
      <Routes>
          <Route path="/basket" element={<Basket/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
