import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Basket from "./components/Basket";
import Category from "./components/Category";
import Header from "./components/Header";
import Main from "./components/Main/index"

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Main />
      <Routes>
          <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </div>
  );
}

export default App;
