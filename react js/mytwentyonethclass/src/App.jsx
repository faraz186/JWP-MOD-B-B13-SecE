import { Route, Routes } from "react-router-dom"   
import Home from "./Components/Home"
import Cart from "./Components/Cart"

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />  
    </Routes>
  )   
}

export default App
