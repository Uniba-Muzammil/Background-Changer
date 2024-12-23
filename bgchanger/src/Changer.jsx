import React from "react";
import { useState } from 'react'
function Changer(){
    const [colour, setColour] = useState("olive")
    const addRed=()=>{
        setColour("red")
    } 
    return(  
        <div className="h-screen w-full duration-200"
            style={{backgroundColor:colour}}>
                <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
                    <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl">
                        <button onClick={addRed} className="rounded-full px-4 py-1 bg-red-500 text-white shadow-lg">Red</button>
                        <button onClick={()=>setColour("green")} className="rounded-full px-4 py-1 bg-green-500 text-white shadow-lg">Green</button>
                        <button onClick={()=>setColour("blue")}  className="rounded-full px-4 py-1 bg-blue-500 text-white shadow-lg">Blue</button>
                        <button onClick={()=>setColour("yellow")}  className="rounded-full px-4 py-1 bg-yellow-400 text-black shadow-lg">Yellow</button>
                        <button onClick={()=>setColour("gray")} className="rounded-full px-4 py-1 bg-gray-400 text-white shadow-lg">Gray</button>
                        <button onClick={()=>setColour("purple")} className="rounded-full px-4 py-1 bg-purple-600 text-white shadow-lg">Purple</button>
                        <button onClick={()=>setColour("indigo")}  className="rounded-full px-4 py-1 bg-indigo-600 text-white shadow-lg">Indigo</button>
                        <button onClick={()=>setColour("pink")}  className="rounded-full px-4 py-1 bg-pink-200 text-black shadow-lg">Pink</button>
                        <button onClick={()=>setColour("white")}  className="rounded-full px-4 py-1 bg-white text-black shadow-lg">White</button>
                        <button onClick={()=>setColour("orange")} className="rounded-full px-4 py-1 bg-orange-500 text-white shadow-lg">Orange</button>
                        <button onClick={()=>setColour("black")} className="rounded-full px-4 py-1 bg-black text-white shadow-lg">Black</button>
               </div>
            </div>    
        </div>       
    )
}
export default Changer;