import Image from "next/image";
"use client"
import {MacbookScrollDemo} from "../components/macbook";
import { GlobeDemo } from "@/components/globe";
//import Chatbot from "../components/dchatbot";



export default function Home() {



    
  return (
    //flex min-h-screen flex-col items-center justify-between p-24
    <main className="bg-primary mt-0" >
      <MacbookScrollDemo />
      
      <GlobeDemo />
      
      <p className="text-center font-bold text-2xl mt-4">
        We are all in this together
      </p>
     

     
    </main>
  );
}






















{/* <div className="mt-16 text-white">Home</div>
<div className="theme-selection flex  ">
  {themes.map((t) => (
    <div key={t.id} onClick={()=>handleTheme(t)} className="text-tBase mx-16 border-2 border-borderclr px-8 py-2  rounded-md cursor-pointer">
      {t}
    </div>
  ))}
</div>
<ChatBot/> */}
