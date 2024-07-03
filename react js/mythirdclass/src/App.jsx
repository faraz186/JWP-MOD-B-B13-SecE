import React from "react";
import './App.css'
import { Button } from "./Button/Button";
import Card from "./Card/Card";
import User1 from './assets/user1.webp';
import User2 from './assets/user2.jfif';
import User3 from './assets/user3.png';
import Student from "./Student/Student";
import ProductData from './data'

const App = ()=>{

  
  console.log(ProductData)

  
  return(
    
    <div className="container box">
      
      {/* Props */}


      <Button btnText="Login"/>


      <Button btnText="Signup"/>

      

      {/* Card Rendering */}


      

      <Card imgSrc={User1} title="Card 01" desc="This is a sample Card 1"/>

      <Card imgSrc={User2} title="Card 02" desc="This is a sample Card 2"/> 

      <Card imgSrc={User3} title="Card 03" desc="This is a sample Card 3"/>


{/*       <Card imgSrc={User1} title="Card 04" desc="This is a sample Card 4"/>

      <Card imgSrc={User2} title="Card 05" desc="This is a sample Card 5"/> 

      <Card imgSrc={User3} title="Card 06" desc="This is a sample Card 6"/> */}


        <Student name="faraz" age={23} isStudent={true}/>

        <Student name="hamza" age={21} isStudent={false}/>

        <Student name="farooq" age={24} isStudent={true}/>

        <Student name="ahmed" age={26} isStudent={false}/>


      
        {
            ProductData.map((e,i)=>{
              return(
                <Card key={e.id} title={e.title} desc={e.desc}
                imgSrc={e.imgSrc}/>
              )
            })
       }

          
    </div>
  )
}

export default App

