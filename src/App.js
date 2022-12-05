import { Routes, Route } from "react-router-dom";
import Basket from "./components/Basket";
import Category from "./components/Category";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Routes>
          <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </div>
  );
}

export default App;
