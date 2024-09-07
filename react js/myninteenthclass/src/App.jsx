import { Route, Routes } from "react-router-dom";      
import CardSection from "./components/CardSection";   
import Login from "./Screens/Login";         

function App() {
  return (
    <>
      <Routes>     
        <Route path="/home" element={<CardSection />} />  
        <Route path="/" element={<Login />} />
      </Routes>   
    </>   
  );  
}
   
export default App;
