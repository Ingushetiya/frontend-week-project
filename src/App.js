import { Routes, Route } from "react-router-dom";
import Basket from "./components/Basket";
import Category from "./components/Category";
import Header from "./components/Header";
import Authorization from "./components/Authorization";

import Registration from './components/Registration'

function App() {
 
  return (
    <div className="App">
      <Header />
      <Category />
      
      <Routes>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/auth" element={<Authorization/>}/>
          <Route path="/registration" element={<Registration/>}/>
      </Routes>

    </div>
  );
}

export default App;
