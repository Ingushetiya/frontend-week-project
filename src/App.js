import { Routes, Route } from "react-router-dom";
import Basket from "./components/Basket";
import Category from "./components/Category";
import Header from "./components/Header";
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Card />
      <Routes>
          <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </div>
  );
}

export default App;
